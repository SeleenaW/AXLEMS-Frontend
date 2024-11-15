import React, { useState } from "react";

const FAQPage = () => {
    const faqs = [
        {
            question: "How do I create a booking?",
            answer: "You can create a booking by visiting the 'Bookings' section of our website.",
        },
        {
            question: "What is the cancellation policy?",
            answer: "Cancellations made 24 hours before the booking date are fully refundable.",
        },
        {
            question: "How can I contact support?",
            answer: "You can contact support via the 'Contact Us' page or email us at support@example.com.",
        },
        {
            question: "Do you offer group discounts?",
            answer: "Yes, we offer discounts for groups of 10 or more. Contact us for more details.",
        },
    ];

    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="flex flex-col items-center mt-10 px-6">
            <h1 className="text-3xl font-bold text-gray-700 mb-8">
                Frequently Asked Questions
            </h1>
            <div className="w-full max-w-3xl space-y-4">
                {faqs.map((faq, index) => (
                    <div
                        key={index}
                        className="bg-white shadow-md rounded-lg overflow-hidden transition-all"
                    >
                        <div
                            className="flex justify-between items-center px-6 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white cursor-pointer"
                            onClick={() => toggleFAQ(index)}
                        >
                            <h2 className="text-lg font-semibold">{faq.question}</h2>
                            <svg
                                className={`w-6 h-6 transform transition-transform ${
                                    activeIndex === index ? "rotate-180" : ""
                                }`}
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M19 9l-7 7-7-7"
                                />
                            </svg>
                        </div>
                        <div
                            className={`px-6 py-4 bg-gray-100 text-gray-700 transition-all duration-300 ease-in-out ${
                                activeIndex === index ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
                            }`}
                            style={{
                                overflow: "hidden",
                            }}
                        >
                            {faq.answer}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FAQPage;