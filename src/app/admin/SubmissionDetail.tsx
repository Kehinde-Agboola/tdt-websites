const SubmissionDetail = ({ item, onClose }: { item: any, onClose: () => void }) => {
    return (
        <div className="p-4 bg-gray-100 rounded-lg">
            <button onClick={onClose} className="mb-4 px-4 py-2 bg-gray-500 text-white rounded">Back to list</button>
            <h2 className="text-xl font-bold mb-4">Submission Details</h2>
            <pre className="bg-white p-4 rounded">{JSON.stringify(item, null, 2)}</pre>
        </div>
    );
};

export default SubmissionDetail;
