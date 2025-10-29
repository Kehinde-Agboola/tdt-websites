"use client";
import { useEffect, useState } from "react";
import { getAuth } from "firebase/auth";
import { app } from "../../../lib/firebase";
import SubmissionsTable from "./SubmissionsTable";
import SubmissionDetail from "./SubmissionDetail";

const AdminPage = () => {
    const [submissions, setSubmissions] = useState<any>({
        research: [],
        sponsorships: [],
        adoptions: [],
        newsletters: [],
    });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [activeTab, setActiveTab] = useState("research");
    const [selectedItem, setSelectedItem] = useState<any | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const auth = getAuth(app);
                const user = auth.currentUser;
                if (user) {
                    const token = await user.getIdToken();
                    const response = await fetch("/api/admin/submissions", {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    });
                    if (!response.ok) {
                        throw new Error("Failed to fetch data");
                    }
                    const data = await response.json();
                    setSubmissions(data);
                }
            } catch (err) {
                setError("Failed to load submissions.");
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const handleViewDetails = (item: any) => {
        setSelectedItem(item);
    };

    const handleCloseDetails = () => {
        setSelectedItem(null);
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    const tabs = [
        { id: "research", label: "Research", data: submissions.research },
        { id: "sponsorships", label: "Sponsorships", data: submissions.sponsorships },
        { id: "adoptions", label: "Adoptions", data: submissions.adoptions },
        { id: "newsletters", label: "Newsletters", data: submissions.newsletters },
    ];

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
            <div className="flex border-b">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        className={`py-2 px-4 ${
                            activeTab === tab.id
                                ? "border-b-2 border-blue-500 font-semibold"
                                : "text-gray-500"
                        }`}
                        onClick={() => setActiveTab(tab.id)}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>
            <div className="mt-4">
                {selectedItem ? (
                    <SubmissionDetail item={selectedItem} onClose={handleCloseDetails} />
                ) : (
                    <SubmissionsTable data={tabs.find(tab => tab.id === activeTab)?.data || []} onViewDetails={handleViewDetails} />
                )}
            </div>
        </div>
    );
};

export default AdminPage;
