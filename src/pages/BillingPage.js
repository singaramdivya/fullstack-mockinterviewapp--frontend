import React, { useState } from 'react';
import { useLocation,useNavigate } from 'react-router-dom';
import './style.css'; // Create a separate CSS file for styling

const BillingPage = () => {
    const location = useLocation();
    const { bookingData } = location.state || {}; 
    const navigate = useNavigate();

    // State to manage form values
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        country: '',
        state: '',
    });

    // Handle form input changes
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    // Handle checkout
    const handleCheckout = () => {
        // Add your payment processing logic here

        navigate('/payment', { state: { bookingData: bookingData } }); // Redirect to the billing page

        


        // Reset the form after checkout
        setFormData({
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            country: '',
            state: '',
        });
    };

    return (
        <div className="billing-page-container">
            <div>
                <h1>Let's make your checkout smooth!</h1>
            </div>
            <div className='billing-container'>
                <div className="billing-details">
                    <h3>Billing Details</h3>
                    <form>
                        <label>First Name:</label>
                        <input 
                            type="text" 
                            name="firstName" 
                            value={formData.firstName}
                            onChange={handleChange}
                            required 
                        />
                        <label>Last Name:</label>
                        <input 
                            type="text" 
                            name="lastName" 
                            value={formData.lastName}
                            onChange={handleChange}
                            required 
                        />
                        <label>Email address:</label>
                        <input 
                            type="email" 
                            name="email" 
                            value={formData.email}
                            onChange={handleChange}
                            required 
                        />
                        <div className='details'>
                            <div>
                                <label>Phone number:</label>
                                <input 
                                    type="tel" 
                                    name="phone" 
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required 
                                />
                            </div>
                            <div>
                                <label>Country:</label>
                                <input 
                                    type="text" 
                                    name="country" 
                                    value={formData.country}
                                    onChange={handleChange}
                                    required 
                                />
                            </div>
                        </div>
                        <label>State:</label>
                        <input 
                            type="text" 
                            name="state" 
                            value={formData.state}
                            onChange={handleChange}
                            required 
                        />
                    </form>
                </div>
                <div className="shopping-bag">
                    <h3>Your Shopping Bag</h3>
                    <p>Mentor Session: {bookingData.mentor_id}</p>
                    <p>Duration: {bookingData.duration} minutes</p>
                    <p>Total Cost: ${bookingData.cost.toFixed(2)}</p>
                    <button type="submit" onClick={handleCheckout}>Check Out</button>
                </div>
            </div>
        </div>
    );
};

export default BillingPage;
