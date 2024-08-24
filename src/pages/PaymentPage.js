// import React from 'react';

// const PaymentPage = () => {
//     return (
//         <div>
//             <h1>Payment Page</h1>
//             <p>Processing payment...</p>
//         </div>
//     );
// };

// export default PaymentPage;



import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './style.css';

const PaymentPage = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { bookingData } = location.state || {};

    if (!bookingData) {
        return <div>No booking data found.</div>;
    }

    const handlePaymentConfirmation = () => {
       
        alert('Payment successful!');
    };

    return (
        <div className="payment-page-container">
            <h2>Payment Confirmation</h2>
            <p><strong>Mentor ID:</strong> {bookingData.mentor_id}</p>
            <p><strong>Duration:</strong> {bookingData.duration} minutes</p>
            <p><strong>Total Cost:</strong> ${bookingData.cost.toFixed(2)}</p>
            <button onClick={handlePaymentConfirmation}>Confirm Payment</button>
        </div>
    );
};

export default PaymentPage;
