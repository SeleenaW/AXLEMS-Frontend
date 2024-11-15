import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as yup from 'yup';
import { Formik } from 'formik';
import Select from 'react-select';

const SupportQuery = () => {
    const [isBtnLoading, setIsBtnLoading] = useState(false);

    const urgencyLevels = [
        { value: 'low', label: 'Low' },
        { value: 'medium', label: 'Medium' },
        { value: 'high', label: 'High' },
    ];

    const inquiryTypes = [
        { value: 'technicalIssue', label: 'Technical Issue' },
        { value: 'accountManagement', label: 'Account Management' },
        { value: 'apiIntegrationHelp', label: 'API Integration Help' },
        { value: 'bookingInventorySupport', label: 'Booking and Inventory Support' },
        { value: 'generalInquiry', label: 'General Inquiry' },
    ];

    const schema = yup.object().shape({
        vendorName: yup.string().required('Vendor Name is required'),
        vendorID: yup.string().nullable(), // Allow null if auto-filled
        contactPerson: yup.string().required('Contact Person is required'),
        emailAddress: yup.string().email('Invalid email').required('Email Address is required'),
        phoneNumber: yup.string().required('Phone Number is required'),
        subject: yup.string().required('Subject is required'),
        inquiryType: yup.string().required('Inquiry Type is required'),
        message: yup.string().required('Message is required'),
        urgencyLevel: yup.string().required('Urgency Level is required'),
    });

    const onSubmit = async (values) => {
        setIsBtnLoading(true);
        // Replace this with your actual API call
        console.log('Submitting:', values);
        // Simulate a successful submission
        setTimeout(() => {
            toast.success('Your message has been sent!', {
                position: "top-right",
                autoClose: 2500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            setIsBtnLoading(false);
        }, 1000);
    };

    return (
        <div className="flex items-center justify-center mt-20">
            <div className="w-full max-w-md bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <h1 className="text-2xl font-semibold text-gray-700 mb-10">Contact Channel Manager</h1>
                <Formik
                    initialValues={{
                        vendorName: '',
                        vendorID: null,
                        contactPerson: '',
                        emailAddress: '',
                        phoneNumber: '',
                        subject: '',
                        inquiryType: '',
                        message: '',
                        urgencyLevel: '',
                        attachment: null, // For file upload handling
                    }}
                    validationSchema={schema}
                    onSubmit={onSubmit}
                    enableReinitialize={true}
                >
                    {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
                        <form onSubmit={handleSubmit}>
                            {/* Vendor Information */}
                            <div className="mb-4">
                                <label htmlFor="vendorName">Vendor Name:</label>
                                <input type="text" name="vendorName" onChange={handleChange} onBlur={handleBlur} value={values.vendorName} />
                                {errors.vendorName && touched.vendorName && <div className="text-red-500 text-xs italic">{errors.vendorName}</div>}
                            </div>
                            <div className="mb-4">
                                <label htmlFor="vendorID">Vendor ID:</label> {/*Potentially auto-filled*/}
                                <input type="text" name="vendorID" onChange={handleChange} onBlur={handleBlur} value={values.vendorID} />
                            </div>

                            {/* Contact Details */}
                            <div className="mb-4">
                                <label htmlFor="contactPerson">Contact Person:</label>
                                <input type="text" name="contactPerson" onChange={handleChange} onBlur={handleBlur} value={values.contactPerson} />
                                {errors.contactPerson && touched.contactPerson && <div className="text-red-500 text-xs italic">{errors.contactPerson}</div>}
                            </div>
                            <div className="mb-4">
                                <label htmlFor="emailAddress">Email Address:</label>
                                <input type="email" name="emailAddress" onChange={handleChange} onBlur={handleBlur} value={values.emailAddress} />
                                {errors.emailAddress && touched.emailAddress && <div className="text-red-500 text-xs italic">{errors.emailAddress}</div>}
                            </div>
                            <div className="mb-4">
                                <label htmlFor="phoneNumber">Phone Number:</label>
                                <input type="tel" name="phoneNumber" onChange={handleChange} onBlur={handleBlur} value={values.phoneNumber} />
                                {errors.phoneNumber && touched.phoneNumber && <div className="text-red-500 text-xs italic">{errors.phoneNumber}</div>}
                            </div>

                            {/* Subject & Inquiry Type */}
                            <div className="mb-4">
                                <label htmlFor="subject">Subject:</label>
                                <input type="text" name="subject" onChange={handleChange} onBlur={handleBlur} value={values.subject} />
                                {errors.subject && touched.subject && <div className="text-red-500 text-xs italic">{errors.subject}</div>}
                            </div>
                            <div className="mb-4">
                                <label htmlFor="inquiryType">Inquiry Type:</label>
                                <Select
                                    options={inquiryTypes}
                                    onChange={(selectedOption) => handleChange({ target: { name: 'inquiryType', value: selectedOption.value } })}
                                    onBlur={handleBlur}
                                    value={inquiryTypes.find(c => c.value === values.inquiryType)}
                                />
                                {errors.inquiryType && touched.inquiryType && <div className="text-red-500 text-xs italic">{errors.inquiryType}</div>}
                            </div>

                            {/* Message & Urgency */}
                            <div className="mb-4">
                                <label htmlFor="message">Message:</label>
                                <textarea name="message" onChange={handleChange} onBlur={handleBlur} value={values.message} />
                                {errors.message && touched.message && <div className="text-red-500 text-xs italic">{errors.message}</div>}
                            </div>
                            <div className="mb-4">
                                <label htmlFor="urgencyLevel">Urgency Level:</label>
                                <Select
                                    options={urgencyLevels}
                                    onChange={(selectedOption) => handleChange({ target: { name: 'urgencyLevel', value: selectedOption.value } })}
                                    onBlur={handleBlur}
                                    value={urgencyLevels.find(c => c.value === values.urgencyLevel)}
                                />
                                {errors.urgencyLevel && touched.urgencyLevel && <div className="text-red-500 text-xs italic">{errors.urgencyLevel}</div>}
                            </div>


                            {/*Attachment - requires additional file upload handling logic*/}
                            <div className="mb-4">
                                <label htmlFor="attachment">Attachment (Optional):</label>
                                <input type="file" name="attachment" onChange={handleChange} />
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className={`w-full bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${isBtnLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
                                disabled={isBtnLoading}
                            >
                                {isBtnLoading ? 'Submitting...' : 'Submit'}
                            </button>
                        </form>
                    )}
                </Formik>
            </div>
        </div>
    );
};

export default SupportQuery;