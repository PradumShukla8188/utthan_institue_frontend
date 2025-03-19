// import React, { useState } from "react";
// import './pageCss/donate.css';
// const DonateNow: React.FC = () => {
//     const [formData, setFormData] = useState({
//         name: "",
//         cardNumber: "",
//         expiry: "",
//         cvv: "",
//         amount: "",
//     });
//     const [errors, setErrors] = useState<{ [key: string]: string }>({});

//     const validateForm = () => {
//         let valid = true;
//         let newErrors: { [key: string]: string } = {};

//         if (!formData.name) {
//             newErrors.name = "Name is required";
//             valid = false;
//         }
//         if (!formData.cardNumber.match(/^\d{16}$/)) {
//             newErrors.cardNumber = "Invalid card number (16 digits required)";
//             valid = false;
//         }
//         if (!formData.expiry.match(/^(0[1-9]|1[0-2])\/(\d{2})$/)) {
//             newErrors.expiry = "Invalid expiry date (MM/YY format)";
//             valid = false;
//         }
//         if (!formData.cvv.match(/^\d{3,4}$/)) {
//             newErrors.cvv = "Invalid CVV (3 or 4 digits)";
//             valid = false;
//         }
//         if (!formData.amount.match(/^\d+(\.\d{1,2})?$/)) {
//             newErrors.amount = "Enter a valid donation amount";
//             valid = false;
//         }

//         setErrors(newErrors);
//         return valid;
//     };

//     const handleSubmit = (e: React.FormEvent) => {
//         e.preventDefault();
//         if (validateForm()) {
//             alert("Donation Successful! Thank you for your support.");
//         }
//     };

//     const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         setFormData({ ...formData, [e.target.name]: e.target.value });
//     };

//     return (
//         <div style={{ marginTop: "180px" }} className="container mx-auto p-6">
//             <h2 className="text-3xl font-bold text-center mb-6">Donate Now</h2>
//             <div className="grid md:grid-cols-2 gap-6">
//                 {/* Google Pay QR and Number */}
//                 <div className="card">
//                     <div className="card-content p-6 text-center">
//                         <h3 className="text-xl font-semibold mb-4">Google Pay (UPI)</h3>
//                         <p className="text-lg font-bold">UPI ID: uthhaninstitue@upi</p>
//                         <img
//                             src="/assets/qr-code.png"
//                             alt="Google Pay QR Code"
//                             className="mx-auto my-4 w-40 h-40"
//                         />
//                         <p>Scan the QR code or use the UPI ID to donate</p>
//                     </div>
//                 </div>

//                 {/* Credit/Debit Card Payment Form */}
//                 <div className="card">
//                     <div className="card-content p-6">
//                         <h3 className="text-xl font-semibold mb-4">Credit/Debit Card Payment</h3>
//                         <form onSubmit={handleSubmit}>
//                             <div className="mb-3">
//                                 <label>Name on Card</label>
//                                 <input
//                                     type="text"
//                                     name="name"
//                                     value={formData.name}
//                                     onChange={handleChange}
//                                     className="input"
//                                 />
//                                 {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
//                             </div>
//                             <div className="mb-3">
//                                 <label>Card Number</label>
//                                 <input
//                                     type="text"
//                                     name="cardNumber"
//                                     maxLength={16}
//                                     value={formData.cardNumber}
//                                     onChange={handleChange}
//                                     className="input"
//                                 />
//                                 {errors.cardNumber && <p className="text-red-500 text-sm">{errors.cardNumber}</p>}
//                             </div>
//                             <div className="grid grid-cols-2 gap-3 mb-3">
//                                 <div>
//                                     <label>Expiry (MM/YY)</label>
//                                     <input
//                                         type="text"
//                                         name="expiry"
//                                         maxLength={5}
//                                         value={formData.expiry}
//                                         onChange={handleChange}
//                                         className="input"
//                                     />
//                                     {errors.expiry && <p className="text-red-500 text-sm">{errors.expiry}</p>}
//                                 </div>
//                                 <div>
//                                     <label>CVV</label>
//                                     <input
//                                         type="text"
//                                         name="cvv"
//                                         maxLength={4}
//                                         value={formData.cvv}
//                                         onChange={handleChange}
//                                         className="input"
//                                     />
//                                     {errors.cvv && <p className="text-red-500 text-sm">{errors.cvv}</p>}
//                                 </div>
//                             </div>
//                             <div className="mb-3">
//                                 <label>Donation Amount ($)</label>
//                                 <input
//                                     type="text"
//                                     name="amount"
//                                     value={formData.amount}
//                                     onChange={handleChange}
//                                     className="input"
//                                 />
//                                 {errors.amount && <p className="text-red-500 text-sm">{errors.amount}</p>}
//                             </div>
//                             <button type="submit" className="btn w-full mt-4">Donate Now</button>
//                         </form>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default DonateNow;
import React, { useState } from "react";
import './pageCss/donate.css';

const DonateNow: React.FC = () => {
    const [formData, setFormData] = useState({
        name: "",
        cardNumber: "",
        expiry: "",
        cvv: "",
        amount: "",
    });

    const [errors, setErrors] = useState<{ [key: string]: string }>({});
    const [touched, setTouched] = useState<{ [key: string]: boolean }>({});

    const validateForm = () => {
        let valid = true;
        let newErrors: { [key: string]: string } = {};

        if (!formData.name) {
            newErrors.name = "Name is required";
            valid = false;
        }
        if (!formData.cardNumber.match(/^\d{16}$/)) {
            newErrors.cardNumber = "Invalid card number (16 digits required)";
            valid = false;
        }
        if (!formData.expiry.match(/^(0[1-9]|1[0-2])\/(\d{2})$/)) {
            newErrors.expiry = "Invalid expiry date (MM/YY format)";
            valid = false;
        }
        if (!formData.cvv.match(/^\d{3,4}$/)) {
            newErrors.cvv = "Invalid CVV (3 or 4 digits)";
            valid = false;
        }
        if (!formData.amount.match(/^\d+(\.\d{1,2})?$/)) {
            newErrors.amount = "Enter a valid donation amount";
            valid = false;
        }

        setErrors(newErrors);
        return valid;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (validateForm()) {
            alert("Donation Successful! Thank you for your support.");
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
        setTouched({ ...touched, [e.target.name]: true });
    };

    return (
        <div style={{ marginTop: "180px" }} className="container mx-auto p-6">
            <h2 className="text-3xl font-bold text-center mb-6">Donate Now</h2>
            <div className="grid md:grid-cols-2 gap-6">
                {/* Google Pay QR and Number */}
                <div className="card">
                    <div className="card-content p-6 text-center">
                        <h3 className="text-xl font-semibold mb-4">Google Pay (UPI)</h3>
                        <p className="text-lg font-bold">UPI ID: uthhaninstitue@upi</p>
                        <img
                            src="/assets/qr-code.png"
                            alt="Google Pay QR Code"
                            className="mx-auto my-4 w-40 h-40"
                        />
                        <p>Scan the QR code or use the UPI ID to donate</p>
                    </div>
                </div>

                {/* Credit/Debit Card Payment Form */}
                <div className="card">
                    <div className="card-content p-6">
                        <h3 className="text-xl font-semibold mb-4">Credit/Debit Card Payment</h3>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label>Name on Card</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className={`input ${touched.name && errors.name ? 'error' : ''}`}
                                />
                                {touched.name && errors.name && <p className="error-message">{errors.name}</p>}
                            </div>
                            <div className="mb-3">
                                <label>Card Number</label>
                                <input
                                    type="text"
                                    name="cardNumber"
                                    maxLength={16}
                                    value={formData.cardNumber}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className={`input ${touched.cardNumber && errors.cardNumber ? 'error' : ''}`}
                                />
                                {touched.cardNumber && errors.cardNumber && <p className="error-message">{errors.cardNumber}</p>}
                            </div>
                            <div className="grid grid-cols-2 gap-3 mb-3">
                                <div>
                                    <label>Expiry (MM/YY)</label>
                                    <input
                                        type="text"
                                        name="expiry"
                                        maxLength={5}
                                        value={formData.expiry}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        className={`input ${touched.expiry && errors.expiry ? 'error' : ''}`}
                                    />
                                    {touched.expiry && errors.expiry && <p className="error-message">{errors.expiry}</p>}
                                </div>
                                <div>
                                    <label>CVV</label>
                                    <input
                                        type="text"
                                        name="cvv"
                                        maxLength={4}
                                        value={formData.cvv}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        className={`input ${touched.cvv && errors.cvv ? 'error' : ''}`}
                                    />
                                    {touched.cvv && errors.cvv && <p className="error-message">{errors.cvv}</p>}
                                </div>
                            </div>
                            <div className="mb-3">
                                <label>Donation Amount ($)</label>
                                <input
                                    type="text"
                                    name="amount"
                                    value={formData.amount}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className={`input ${touched.amount && errors.amount ? 'error' : ''}`}
                                />
                                {touched.amount && errors.amount && <p className="error-message">{errors.amount}</p>}
                            </div>
                            <button type="submit" className="btn w-full mt-4">Donate Now</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DonateNow;
