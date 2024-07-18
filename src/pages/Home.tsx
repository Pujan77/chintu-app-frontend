import React, { useEffect, useState } from 'react';
import { getAllRecords, deleteRecord } from '../services/api';
import { BowelRecord } from '../types/bowelRecord';
import { Link } from 'react-router-dom';
import { FaPen, FaTrashAlt } from "react-icons/fa";

const Home: React.FC = () => {
    const [records, setRecords] = useState<BowelRecord[]>([]);

    useEffect(() => {
        fetchRecords();
    }, []);

    const fetchRecords = async () => {
        const response = await getAllRecords();
        setRecords(response.data);
    };

    const handleDelete = async (id: string) => {
        await deleteRecord(id);
        fetchRecords();
    };

    return (
        <div className="table-container">
            <h1>Bowel Record</h1>
        <table>
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Time</th>
                    <th>Location</th>
                    <th>Spot</th>
                    <th>Consistency</th>
                    <th>Quantity</th>
                    <th>Color</th>
                    <th>Observed By</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {records.map(record => (
                    <tr key={record._id}>
                        <td data-label="Date">{record.date}</td>
                        <td data-label="Time">{record.time}</td>
                        <td data-label="Location">{record.location}</td>
                        <td data-label="Spot">{record.spot}</td>
                        <td data-label="Consistency">{record.bowelConsistency}</td>
                        <td data-label="Quantity">{record.bowelQuantity}</td>
                        <td data-label="Color">
                            <div
                                style={{
                                    width: '20px',
                                    height: '20px',
                                    backgroundColor: record.bowelColor,
                                    border: '1px solid #000'
                                }}
                            />
                        </td>
                        <td data-label="Observed By">{record.observedByWho}</td>
                        <td data-label="Actions">
                            <Link className='action-button' to={`/edit/${record._id}`}><FaPen/></Link>
                            <button className='action-button' onClick={() => handleDelete(record._id!)}><FaTrashAlt/></button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
    );
};

export default Home;
