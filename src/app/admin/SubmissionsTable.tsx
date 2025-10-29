"use client";
import { useState } from "react";
import { getAuth } from "firebase/auth";
import { app } from "../../../lib/firebase";

const SubmissionsTable = ({ data, onViewDetails }: { data: any[], onViewDetails: (item: any) => void }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

    const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

    const handleProcessed = async (collection: string, id: string) => {
        try {
            const auth = getAuth(app);
            const user = auth.currentUser;
            if (user) {
                const token = await user.getIdToken();
                await fetch(`/api/admin/submissions/${collection}/${id}/processed`, {
                    method: 'POST',
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                // I will add a proper state management solution later to refresh the data
                alert("Marked as processed");
            }
        } catch (error) {
            console.error("Error marking as processed:", error);
        }
    };

    const handleDelete = async (collection: string, id: string) => {
        try {
            const auth = getAuth(app);
            const user = auth.currentUser;
            if (user) {
                const token = await user.getIdToken();
                await fetch(`/api/admin/submissions/${collection}/${id}`, {
                    method: 'DELETE',
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                // I will add a proper state management solution later to refresh the data
                alert("Deleted successfully");
            }
        } catch (error) {
            console.error("Error deleting submission:", error);
        }
    };

    const handleExport = async (collection: string) => {
        try {
            const auth = getAuth(app);
            const user = auth.currentUser;
            if (user) {
                const token = await user.getIdToken();
                const response = await fetch(`/api/admin/submissions/${collection}/export`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                const blob = await response.blob();
                const url = window.URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = `${collection}.csv`;
                document.body.appendChild(a);
                a.click();
                a.remove();
            }
        } catch (error) {
            console.error("Error exporting to CSV:", error);
        }
    };

    return (
        <div>
            <button onClick={() => handleExport(data[0]?.collection || '')} className="mb-4 px-4 py-2 bg-green-500 text-white rounded">Export to CSV</button>
            <table className="min-w-full bg-white">
                <thead>
                    <tr>
                        <th className="py-2">Submitted At</th>
                        <th className="py-2">Email</th>
                        <th className="py-2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {currentItems.map((item) => (
                        <tr key={item.id}>
                            <td className="border px-4 py-2">{new Date(item.submittedAt.seconds * 1000).toLocaleString()}</td>
                            <td className="border px-4 py-2">{item.email}</td>
                            <td className="border px-4 py-2">
                                <button onClick={() => onViewDetails(item)} className="mr-2 px-2 py-1 bg-blue-500 text-white rounded">View</button>
                                <button onClick={() => handleProcessed(item.collection, item.id)} className="mr-2 px-2 py-1 bg-yellow-500 text-white rounded">Process</button>
                                <button onClick={() => handleDelete(item.collection, item.id)} className="px-2 py-1 bg-red-500 text-white rounded">Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="mt-4">
                {Array.from({ length: Math.ceil(data.length / itemsPerPage) }, (_, i) => (
                    <button key={i + 1} onClick={() => paginate(i + 1)} className="mr-2 px-3 py-1 border rounded">
                        {i + 1}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default SubmissionsTable;
