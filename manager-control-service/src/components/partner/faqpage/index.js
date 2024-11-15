import React, { useState } from "react";

const FAQPage = () => {
    const faqs = [
        {
            category: "Partner Registration FAQs",
            items: [
                {
                    question: "How do I register as a partner on the Axonall platform?",
                    answer: "Click on the registration link provided by Axonall.",
                },
                {
                    question: "What information is required during the registration process?",
                    answer: "You need to provide business details, contact information, social media links (optional), and compliance acknowledgments. If you are integrating your system, API details will also be required.",
                },
                {
                    question: "How long does it take for my registration to be approved?",
                    answer: "The review process typically takes 1-3 business days. You will be notified by email once your registration is approved or if additional information is needed.",
                },
                {
                    question: "What should I do if my registration form is declined?",
                    answer: "If your form is declined, you will receive an email with the reasons for rejection and suggestions for correction. You can resubmit the corrected form for further review.",
                },
            ],
        },
        {
            category: "API Integration FAQs",
            items: [
                {
                    question: "What is required for API integration?",
                    answer: "You will need to provide an API Key, Endpoint URL, and select your preferred authentication method (e.g., OAuth, Bearer Token). You can also specify data sync preferences.",
                },
                {
                    question: "How can I test the API integration?",
                    answer: "Use the 'API Test' button in the Integration Settings section to verify your connection. If errors occur, check the error logs or refer to the troubleshooting guide provided.",
                },
                {
                    question: "What types of data can be synced via the API?",
                    answer: "You can sync room availability, pricing details, booking information, and customer data. The data sync preferences can be customized during setup.",
                },
                {
                    question: "Why is my API integration failing?",
                    answer: "Common reasons include incorrect API credentials, outdated API versions, or connection issues. Check the error logs for specific error codes and refer to our troubleshooting guide for fixes.",
                },
            ],
        },
    ];

    const [expandedIndex, setExpandedIndex] = useState({});

    const toggleAnswer = (categoryIndex, questionIndex) => {
        setExpandedIndex((prev) => ({
            ...prev,
            [categoryIndex]: {
                ...prev[categoryIndex],
                [questionIndex]: !prev[categoryIndex]?.[questionIndex],
            },
        }));
    };

    const getFirstSentence = (text) => {
        const match = text.match(/[^.!?]*[.!?]/);
        return match ? match[0] : text;
    };

    return (
        <div className="flex flex-col items-center mt-10 px-6">
            <h1 className="text-3xl font-bold text-gray-700 mb-8">Frequently Asked Questions</h1>
            <div className="w-full max-w-5xl">
                {faqs.map((category, categoryIndex) => (
                    <div key={categoryIndex} className="mb-6">
                        <h2 className="text-2xl font-semibold text-blue-600 mb-4">{category.category}</h2>
                        <div className="space-y-4">
                            {category.items.map((faq, questionIndex) => (
                                <div
                                    key={questionIndex}
                                    className="bg-white shadow-md rounded-lg overflow-hidden transition-all"
                                >
                                    <div
                                        className="flex justify-between items-center px-6 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white cursor-pointer"
                                        onClick={() => toggleAnswer(categoryIndex, questionIndex)}
                                    >
                                        <h3 className="text-lg font-semibold">{faq.question}</h3>
                                        <svg
                                            className={`w-6 h-6 transform transition-transform ${
                                                expandedIndex[categoryIndex]?.[questionIndex]
                                                    ? "rotate-180"
                                                    : ""
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
                                    {!expandedIndex[categoryIndex]?.[questionIndex] && (
                                        <div className="px-6 py-3 text-gray-600 bg-gray-50">
                                            <p className="text-sm">{getFirstSentence(faq.answer)}</p>
                                        </div>
                                    )}
                                    {expandedIndex[categoryIndex]?.[questionIndex] && (
                                        <div
                                            className="px-6 py-4 bg-gray-100 text-gray-700 transition-all duration-300 ease-in-out"
                                            style={{ overflow: "hidden" }}
                                        >
                                            {faq.answer}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FAQPage;
