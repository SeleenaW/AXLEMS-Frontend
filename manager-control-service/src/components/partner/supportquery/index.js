import React, { useState } from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
import { toast } from 'react-toastify';
import Select from 'react-select';
import { createSupportQuery } from '../../../services/api/supportQueryService';
import 'react-toastify/dist/ReactToastify.css';

const SupportQuery = () => {
  const [isBtnLoading, setIsBtnLoading] = useState(false);

  // Dropdown options
  const urgencyLevels = [
    { value: 'Low', label: 'Low' },
    { value: 'Medium', label: 'Medium' },
    { value: 'High', label: 'High' },
  ];

  const inquiryTypes = [
    { value: 'Technical Issue', label: 'Technical Issue' },
    { value: 'Account Management', label: 'Account Management' },
    { value: 'API Integration Help', label: 'API Integration Help' },
    {
      value: 'Booking and Inventory Support',
      label: 'Booking and Inventory Support',
    },
    { value: 'General Inquiry', label: 'General Inquiry' },
  ];

  // Form validation schema
  const schema = yup.object().shape({
    vendorName: yup.string().optional().max(100, 'Max 100 characters allowed'),
    // vendorId: yup.string().required("Vendor ID is required"),
    contactPerson: yup.string().required('Contact Person is required'),
    email: yup.string().email('Invalid email').required('Email is required'),
    phoneNumber: yup
      .string()
      .required('Phone Number is required')
      .matches(/^\d+$/, 'Phone number must contain only numbers'),
    subject: yup.string().required('Subject is required'),
    inquiryType: yup.string().required('Inquiry Type is required'),
    message: yup
      .string()
      .required('Message is required')
      .max(10, 'Message only can include up to 200 words'),
    urgencyLevel: yup.string().required('Urgency Level is required'),
    attachments: yup.string().required('File path is required'),
  });

  // Form submission handler
  const onSubmit = async (values, {resetForm}) => {
    setIsBtnLoading(true);

    try {
      console.log('Submitting form values:', values);

      const response = await createSupportQuery(values); // Assuming the backend accepts a JSON payload
      console.log('Response:', response.data);

      toast.success('Your query has been submitted successfully!', {
        position: 'top-right',
        autoClose: 2500,
      });


      resetForm();


    } catch (error) {
      console.error('Error submitting the query:', error);
      toast.error(
        'There was an error sending your message. Please try again.',
        {
          position: 'top-right',
          autoClose: 2500,
        },
      );
    } finally {
      setIsBtnLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white shadow-md rounded px-8 pt-6 pb-8">
        <h1 className="text-2xl font-semibold text-gray-700 mb-10">
          Submit a Support Query
        </h1>
        <Formik
          initialValues={{
            vendorName: '',
            // vendorId: "",
            contactPerson: '',
            email: '',
            phoneNumber: '',
            subject: '',
            inquiryType: '',
            message: '',
            urgencyLevel: '',
            attachments: '',
          }}
          validationSchema={schema}
          onSubmit={onSubmit}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            setFieldValue,
          }) => (
            <form onSubmit={handleSubmit}>
              {/* Vendor Name */}
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Vendor Name (Optional)
                </label>
                <input
                  className="shadow border rounded w-full py-2 px-3 text-gray-700"
                  type="text"
                  name="vendorName"
                  value={values.vendorName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.vendorName && touched.vendorName && (
                  <div className="text-red-500 text-xs italic">
                    {errors.vendorName}
                  </div>
                )}
              </div>

              {/* Vendor ID
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Vendor ID</label>
                <input
                  className="shadow border rounded w-full py-2 px-3 text-gray-700"
                  type="text"
                  name="vendorId"
                  value={values.vendorId}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.vendorId && touched.vendorId && (
                  <div className="text-red-500 text-xs italic">{errors.vendorId}</div>
                )}
              </div> */}

              {/* Contact Person */}
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Contact Person
                </label>
                <input
                  className="shadow border rounded w-full py-2 px-3 text-gray-700"
                  type="text"
                  name="contactPerson"
                  value={values.contactPerson}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.contactPerson && touched.contactPerson && (
                  <div className="text-red-500 text-xs italic">
                    {errors.contactPerson}
                  </div>
                )}
              </div>

              {/* Email */}
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Email
                </label>
                <input
                  className="shadow border rounded w-full py-2 px-3 text-gray-700"
                  type="email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.email && touched.email && (
                  <div className="text-red-500 text-xs italic">
                    {errors.email}
                  </div>
                )}
              </div>

              {/* Phone Number */}
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Phone Number
                </label>
                <input
                  className="shadow border rounded w-full py-2 px-3 text-gray-700"
                  type="text"
                  name="phoneNumber"
                  value={values.phoneNumber}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.phoneNumber && touched.phoneNumber && (
                  <div className="text-red-500 text-xs italic">
                    {errors.phoneNumber}
                  </div>
                )}
              </div>

              {/* Subject */}
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Subject
                </label>
                <input
                  className="shadow border rounded w-full py-2 px-3 text-gray-700"
                  type="text"
                  name="subject"
                  value={values.subject}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.subject && touched.subject && (
                  <div className="text-red-500 text-xs italic">
                    {errors.subject}
                  </div>
                )}
              </div>

              {/* Inquiry Type */}
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Inquiry Type
                </label>
                <Select
                  options={inquiryTypes}
                  onChange={(option) =>
                    setFieldValue('inquiryType', option.value)
                  }
                  onBlur={handleBlur}
                  value={inquiryTypes.find(
                    (type) => type.value === values.inquiryType,
                  )}
                />
                {errors.inquiryType && touched.inquiryType && (
                  <div className="text-red-500 text-xs italic">
                    {errors.inquiryType}
                  </div>
                )}
              </div>

              {/* Message */}
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Message
                </label>
                <textarea
                  className="shadow border rounded w-full py-2 px-3 text-gray-700"
                  name="message"
                  rows="4"
                  value={values.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.message && touched.message && (
                  <div className="text-red-500 text-xs italic">
                    {errors.message}
                  </div>
                )}
              </div>

              {/* Urgency Level */}
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Urgency Level
                </label>
                <Select
                  options={urgencyLevels}
                  onChange={(option) =>
                    setFieldValue('urgencyLevel', option.value)
                  }
                  onBlur={handleBlur}
                  value={urgencyLevels.find(
                    (level) => level.value === values.urgencyLevel,
                  )}
                />
                {errors.urgencyLevel && touched.urgencyLevel && (
                  <div className="text-red-500 text-xs italic">
                    {errors.urgencyLevel}
                  </div>
                )}
              </div>

              {/* Attachments */}
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Attachment (File Path)
                </label>
                <input
                  className="shadow border rounded w-full py-2 px-3 text-gray-700"
                  type="text"
                  name="attachments"
                  value={values.attachments}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.attachments && touched.attachments && (
                  <div className="text-red-500 text-xs italic">
                    {errors.attachments}
                  </div>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className={`w-full bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded ${
                  isBtnLoading ? 'opacity-50 cursor-not-allowed' : ''
                }`}
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
