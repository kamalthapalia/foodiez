import React from 'react';

const Footer = () => {
    return (
        <div className={`py-16 bg-gray-100 mt-8 shadow-inner`}>
            <div
                className={`container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-gray-800`}>
                <div>
                    <p className="font-bold text-gray-900">WE'RE FOODMANDU</p>
                    <p>About Us</p>
                    <p>Available Areas</p>
                    <p>Delivery Charges</p>
                    <p>Blog</p>
                </div>
                <div>
                    <p className="font-bold text-gray-900">Get Help</p>
                    <p>How to Order?</p>
                    <p>FAQs</p>
                    <p>Contact Us</p>
                </div>
                <div>
                    <p className={`font-bold text-gray-900`}>Contact us:</p>
                    <p>9817070845</p>
                    <p>9804943759</p>
                    <p>kamathapaliya7@gmail.com</p>
                </div>
            </div>
            <div className="container mx-auto text-center mt-4">
                <p>&copy; All Rights Reserved</p>
            </div>
        </div>
    );
};

export default Footer;
