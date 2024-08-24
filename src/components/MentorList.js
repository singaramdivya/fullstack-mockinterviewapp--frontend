import React, { useState, useEffect } from 'react';
import api from '../services/api';

const MentorList = () => {
    const [mentors, setMentors] = useState([]);

    useEffect(() => {
        api.get('/mentors').then(response => {
            setMentors(response.data);
        });
    }, []);

    return (
        <div>
            <h2>Available Mentors</h2>
            <ul>
                {mentors.map(mentor => (
                    <li key={mentor.id}>{mentor.name} - {mentor.area_of_expertise}</li>
                ))}
            </ul>
        </div>
    );
};

export default MentorList;
