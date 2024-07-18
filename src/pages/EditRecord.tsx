import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { updateRecord, getAllRecords } from '../services/api';
import { BowelRecord } from '../types/bowelRecord';

const EditRecord: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [formData, setFormData] = useState<BowelRecord>({
        date: '',
        time: '',
        location: '',
        spot:'',
        bowelConsistency: '',
        bowelQuantity: '',
        bowelColor: '#4e3a22',
        observedByWho:''
    });
    const navigate = useNavigate();

    useEffect(() => {
        const fetchRecord = async () => {
            const response = await getAllRecords();
            const record = response.data.find((r: BowelRecord) => r._id === id);
            setFormData(record);
        };
        fetchRecord();
    }, [id]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        await updateRecord(id!, formData);
        navigate('/');
    };

    return (
        <div className='form-wrapper'>
            <h1>Edit Record</h1>
            <form onSubmit={handleSubmit}>
                <div className='input-wrapper'>
                    <input className='custom-input' type="date" name="date" value={formData.date} onChange={handleChange} required />
                </div>
                <div className='input-wrapper'>
                    <input className='custom-input' type="time" name="time" value={formData.time} onChange={handleChange} required />
                </div>
                <div className='input-wrapper'>
                    <select className='custom-input select-c'  name="location" value={formData.location} onChange={handleChange} required>
                        <option value="">Select Location</option>
                        <option value="Home">Home</option>
                        <option value="Garden">Garden</option>
                        <option value="On Walk">On Walk</option>
                        <option value="Guest's Home">Guest's Home</option>
                        <option value="Vet">Vet</option>
                        <option value="Other places">Other places</option>
                    </select>
                    
                </div>
                <div className='input-wrapper'>
                    <input className='custom-input' placeholder='Spot eg: Laundry' type="text" name="spot" value={formData.spot} onChange={handleChange} required />
                </div>
                <div className='input-wrapper'>
                    <select className='custom-input select-c'  name="bowelConsistency" value={formData.bowelConsistency} onChange={handleChange} required>
                        <option value="">Select Consistency</option>
                        <option value="1">1 - Hard Lumps Separate</option>
                        <option value="2">2 - Sasusage shaped Lumpy</option>
                        <option value="3">3 - Cracked Sausage shaped</option>
                        <option value="4">4 - Smooth Sausage</option>
                        <option value="5">5 - Soft Ball smooth</option>
                        <option value="6">6 - Fluffy pieces</option>
                        <option value="7">7 - Unformed</option>
                    </select>
                    
                </div>
                <div className='input-wrapper'>
                    <select className='custom-input select-c'  name="bowelQuantity" value={formData.bowelQuantity} onChange={handleChange} required>
                        <option value="">Select Quantity</option>
                        <option value="Small">Small</option>
                        <option value="Medium">Medium</option>
                        <option value="Large">Large</option>
                    </select>
                    
                </div>
                <div className='input-wrapper'>
                    <input className='custom-input color-c'  type="color" name="bowelColor" value={formData.bowelColor} onChange={handleChange} />
                </div>
                <div className='input-wrapper'>
                    <select className='custom-input select-c'  name="observedByWho" value={formData.observedByWho} onChange={handleChange} required>
                        <option value="">Select Observer</option>
                        <option value="Pallawi">Pallu</option>
                        <option value="Prajwal">Prajwal</option>
                        <option value="Pujan">Pujan</option>
                        <option value="Guest">Guest</option>
                    </select>
                    
                </div>
                <button type="submit">Update</button>
            </form>
        </div>
    );
};

export default EditRecord;
