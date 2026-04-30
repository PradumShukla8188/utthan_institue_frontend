import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaHeart, FaCreditCard, FaMobileAlt, FaUniversity, FaCheckCircle, FaSpinner } from "react-icons/fa";
import './pageCss/donate.css';
import scannerImg from "../../../assets/images/slider/scanner-utthan.jpeg";

const DonateNow: React.FC = () => {
    const [step, setStep] = useState(1);
    const [paymentMethod, setPaymentMethod] = useState("upi");
    const [amount, setAmount] = useState("");
    const [isProcessing, setIsProcessing] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const amounts = ["100", "500", "1000", "2000", "5000"];

    const handleAmountSelect = (val: string) => {
        setAmount(val);
    };

    const handleDonate = (e: React.FormEvent) => {
        e.preventDefault();
        setIsProcessing(true);
        // Simulate payment processing
        setTimeout(() => {
            setIsProcessing(false);
            setIsSuccess(true);
        }, 2500);
    };

    return (
        <div className="donate-page">
            {/* Hero Section */}
            <section className="donate-hero">
                <div className="hero-overlay"></div>
                <div className="container">
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="hero-content"
                    >
                        <span className="badge">Make a Difference</span>
                        <h1>Your Gift, Their Future</h1>
                        <p>Every contribution, no matter the size, helps us continue our mission of serving suffering humanity.</p>
                    </motion.div>
                </div>
            </section>

            <section className="donate-container py-24">
                <div className="container">
                    <div className="max-w-4xl mx-auto">
                        <AnimatePresence mode="wait">
                            {!isSuccess ? (
                                <motion.div 
                                    key="donate-form"
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    className="donation-glass-card"
                                >
                                    {/* Amount Selection */}
                                    <div className="donation-step mb-12">
                                        <h3>1. Choose Amount (₹)</h3>
                                        <div className="amount-grid">
                                            {amounts.map((val) => (
                                                <button 
                                                    key={val}
                                                    className={`amount-btn ${amount === val ? 'active' : ''}`}
                                                    onClick={() => handleAmountSelect(val)}
                                                >
                                                    ₹{val}
                                                </button>
                                            ))}
                                            <div className="custom-amount">
                                                <input 
                                                    type="number" 
                                                    placeholder="Custom Amount" 
                                                    value={amount}
                                                    onChange={(e) => setAmount(e.target.value)}
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Payment Method */}
                                    <div className="donation-step mb-12">
                                        <h3>2. Payment Method</h3>
                                        <div className="method-grid">
                                            <button 
                                                className={`method-btn ${paymentMethod === 'card' ? 'active' : ''}`}
                                                onClick={() => setPaymentMethod('card')}
                                            >
                                                <FaCreditCard />
                                                <span>Card</span>
                                            </button>
                                            <button 
                                                className={`method-btn ${paymentMethod === 'upi' ? 'active' : ''}`}
                                                onClick={() => setPaymentMethod('upi')}
                                            >
                                                <FaMobileAlt />
                                                <span>UPI / QR</span>
                                            </button>
                                            <button 
                                                className={`method-btn ${paymentMethod === 'netbanking' ? 'active' : ''}`}
                                                onClick={() => setPaymentMethod('netbanking')}
                                            >
                                                <FaUniversity />
                                                <span>Net Banking</span>
                                            </button>
                                        </div>
                                    </div>

                                    {/* Dynamic Payment Content */}
                                    <div className="payment-details mb-10">
                                        {paymentMethod === 'card' && (
                                            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="card-form">
                                                <div className="form-group">
                                                    <label>Card Number</label>
                                                    <input type="text" placeholder="XXXX XXXX XXXX XXXX" />
                                                </div>
                                                <div className="form-row">
                                                    <div className="form-group">
                                                        <label>Expiry</label>
                                                        <input type="text" placeholder="MM/YY" />
                                                    </div>
                                                    <div className="form-group">
                                                        <label>CVV</label>
                                                        <input type="password" placeholder="***" />
                                                    </div>
                                                </div>
                                            </motion.div>
                                        )}

                                        {paymentMethod === 'upi' && (
                                            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="upi-content">
                                                <div className="upi-id-box">
                                                    <span>UPI ID: uthhaninstitue@upi</span>
                                                </div>
                                                <div className="qr-wrapper">
                                                    <img src={scannerImg} alt="UPI QR" />
                                                    <p>Scan to Pay using any UPI App</p>
                                                </div>
                                            </motion.div>
                                        )}

                                        {paymentMethod === 'netbanking' && (
                                            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="net-banking">
                                                <select className="bank-select">
                                                    <option>Select Your Bank</option>
                                                    <option>State Bank of India</option>
                                                    <option>HDFC Bank</option>
                                                    <option>ICICI Bank</option>
                                                    <option>Axis Bank</option>
                                                </select>
                                            </motion.div>
                                        )}
                                    </div>

                                    <button 
                                        className={`donate-submit-btn ${isProcessing ? 'processing' : ''}`}
                                        onClick={handleDonate}
                                        disabled={isProcessing || !amount}
                                    >
                                        {isProcessing ? (
                                            <><FaSpinner className="spin" /> Processing...</>
                                        ) : (
                                            <><FaHeart /> Secure Donation</>
                                        )}
                                    </button>
                                </motion.div>
                            ) : (
                                <motion.div 
                                    key="success-message"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="success-card"
                                >
                                    <div className="success-icon">
                                        <FaCheckCircle />
                                    </div>
                                    <h2>Thank You for Your Generosity!</h2>
                                    <p>Your donation of ₹{amount} has been successfully processed. We've sent a receipt to your email.</p>
                                    <div className="success-actions">
                                        <button onClick={() => setIsSuccess(false)} className="btn-again">New Donation</button>
                                        <button onClick={() => window.location.href='/'} className="btn-home">Back to Home</button>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default DonateNow;
