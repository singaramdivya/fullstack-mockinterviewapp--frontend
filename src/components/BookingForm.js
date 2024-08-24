import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Assuming you're using React Router
import './style.css';

const api = axios.create({
    baseURL: 'http://localhost:5000/api', // Replace with your actual API base URL
});

const BookingForm = () => {
    const [mentors, setMentors] = useState([]);
    const [selectedMentor, setSelectedMentor] = useState('');
    const [areaOfInterest, setAreaOfInterest] = useState('');
    const [duration, setDuration] = useState(30);
    const [cost, setCost] = useState(0); // State to store the calculated cost
    const navigate = useNavigate(); // React Router's hook to navigate programmatically

    const DURATION_COSTS = {
        30: 2000,
        45: 3000,
        60: 4000,
    };

    const PREMIUM_MENTOR_MULTIPLIER = 1.5; // Example multiplier for premium mentors

    // Fetch mentors based on selected area of interest
    useEffect(() => {
        if (areaOfInterest) {
            api.get('/mentors', { params: { area_of_expertise: areaOfInterest } })
                .then(response => {
                    if (Array.isArray(response.data)) {
                        const filteredMentors = response.data.filter(mentor =>
                            mentor.areas_of_expertise.includes(areaOfInterest)
                        );
                        setMentors(filteredMentors);
                    } else {
                        console.error('Invalid mentors data format');
                        setMentors([]);
                    }
                })
                .catch(error => {
                    console.error('Error fetching mentors:', error);
                    setMentors([]);
                });
        } else {
            setMentors([]);
        }
    }, [areaOfInterest]);

    // Calculate the cost when a mentor or duration is selected
    useEffect(() => {
        if (selectedMentor) {
            const mentor = mentors.find(m => m.id === parseInt(selectedMentor));
            if (mentor) {
                // Convert is_premium to a boolean if it's not already
                const isPremium = mentor.is_premium === 'true' || mentor.is_premium === true;
                const baseCost = DURATION_COSTS[duration] || 0;
                const finalCost = isPremium ? baseCost * PREMIUM_MENTOR_MULTIPLIER : baseCost;
                setCost(finalCost);
            }
        }
    }, [selectedMentor, duration, mentors]);
    
    const handleBooking = async () => {
        if (!selectedMentor) {
            alert('Please select a mentor');
            return;
        }

        const bookingData = {
            student_id: 1, // Example student ID
            mentor_id: selectedMentor,
            start_time: new Date().toISOString(), // Example start time
            end_time: new Date(Date.now() + duration * 60000).toISOString(), // Calculate end time based on duration
            duration: duration,
            cost: cost, // Include the calculated cost
        };

        try {
            const response = await api.post('/bookings', bookingData);
            console.log('Booking confirmed:', response.data);

            // Redirect to payment page with booking details
            navigate('/billing', { state: { bookingData: bookingData } });

        } catch (error) {
            console.error('Error creating booking:', error);
        }
    };

    return (
        <div className="booking-form-container">
            <h2>Book a 1x1 Session</h2>
            <label>Choose an Area of Interest:</label>
            <input 
                type="text" 
                value={areaOfInterest}
                onChange={e => setAreaOfInterest(e.target.value)}
                placeholder="e.g., Finance"
            />
            <label>Choose a Mentor:</label>
            <select onChange={e => setSelectedMentor(e.target.value)} value={selectedMentor}>
                <option value="">Select a mentor</option>
                {mentors.map(mentor => {
    // Convert to boolean if mentor.is_premium is a string
    const isPremium = mentor.is_premium === 'true' || mentor.is_premium === true;

    return (
        <option key={mentor.id} value={mentor.id}>
            {mentor.name} - {mentor.areas_of_expertise} {isPremium ? '(Premium)' : '(Non-Premium)'}
        </option>
    );
})}

            </select>
            <label>Choose Duration:</label>
            <select value={duration} onChange={e => setDuration(Number(e.target.value))}>
                <option value="">Select time range</option>
                <option value={30}>30 minutes</option>
                <option value={45}>45 minutes</option>
                <option value={60}>60 minutes</option>
            </select>
            <p>Total Cost: ${cost.toFixed(2)}</p>
            <button onClick={handleBooking}>Book Now</button>
        </div>
    );
};

export default BookingForm;
