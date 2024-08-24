// import React from 'react';
// import HomePage from './pages/HomePage';
// // import PaymentPage from './pages/PaymentPage';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// const App = () => {
//     return (
//         <Router>
//             <Routes>
//                 <Route path="/" element={<HomePage />} />
//                 {/* <Route path="/payment" element={<PaymentPage />} /> */}
//             </Routes>
//         </Router>
//     );
// };

// export default App;


import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage'
import PaymentPage from './pages/PaymentPage';
import BookingForm from './components/BookingForm';
import BillingPage from './pages/BillingPage';

const App = () => {
  return (
    <div>
      <Router>
             <Routes>
                 <Route path="/" element={<HomePage />} />
                 <Route path="/book" element={<BookingForm />} />
                 <Route path="/payment" element={<PaymentPage />} />
                 <Route path="/billing" element={<BillingPage />} />
             </Routes>
         </Router>
    </div>
  )
}

export default App