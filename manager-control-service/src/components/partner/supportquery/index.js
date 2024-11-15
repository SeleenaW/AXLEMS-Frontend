import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as yup from 'yup';
import { Formik } from 'formik';
import Select from 'react-select';
import { createSupportQuery } from '../../../services/api/supportQueryService'; 

const SupportQuery = () => {
  const [isBtnLoading, setIsBtnLoading] = useState(false);

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

  const schema = yup.object().shape({
    vendorName: yup.string().required('Vendor Name is required'),
    vendorId: yup.string().required('Vendor ID is required'),
    contactPerson: yup.string().required('Contact Person is required'),
    email: yup.string().email('Invalid email').required('Email is required'),
    phoneNumber: yup.string().required('Phone Number is required'),
    subject: yup.string().required('Subject is required'),
    inquiryType: yup.string().required('Inquiry Type is required'),
    message: yup.string().required('Message is required'),
    urgencyLevel: yup.string().required('Urgency Level is required'),
    attachments: yup
      .array() // An array type to handle file attachments
      .of(
        yup.object().shape({
          name: yup.string().required(),
          size: yup.number().required(),
          type: yup.string().required(),
        }),
      )
      .nullable(),
  });

  const onSubmit = async (values, { setFieldValue }) => {
    setIsBtnLoading(true);

    try {
      // Create a FormData object to hold the form data
      const formData = new FormData();
      formData.append('vendorName', values.vendorName);
      formData.append('vendorId', values.vendorId);
      formData.append('contactPerson', values.contactPerson);
      formData.append('email', values.email);
      formData.append('phoneNumber', values.phoneNumber);
      formData.append('subject', values.subject);
      formData.append('inquiryType', values.inquiryType);
      formData.append('message', values.message);
      formData.append('urgencyLevel', values.urgencyLevel);

      // Append the attachments if they exist
      if (values.attachments) {
        for (const file of values.attachments) {
          formData.append('attachments', file); // Each file will be sent as an attachment
        }
      }

      // Call the API to submit the support query
      const response = await createSupportQuery(formData);
      console.log('Response:', response.data); // Handle the successful response

      toast.success('Your message has been sent!', {
        position: 'top-right',
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } catch (error) {
      console.error('Error submitting the query:', error);
      toast.error(
        'There was an error sending your message. Please try again.',
        {
          position: 'top-right',
          autoClose: 2500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        },
      );
    } finally {
      setIsBtnLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center mt-20">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h1 className="text-2xl font-semibold text-gray-700 mb-10">
          Contact Channel Manager
        </h1>
        <Formik
          initialValues={{
            vendorName: '',
            vendorId: '',
            contactPerson: '',
            email: '',
            phoneNumber: '',
            subject: '',
            inquiryType: '',
            message: '',
            urgencyLevel: '',
            attachments: [], // Initial empty array for file attachments
          }}
          validationSchema={schema}
          onSubmit={onSubmit}
          enableReinitialize={true}
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
              {/* Vendor Information */}
              <div className="mb-4">
                <label htmlFor="vendorName">Vendor Name:</label>
                <input
                  type="text"
                  name="vendorName"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.vendorName}
                  className={`border ${
                    errors.vendorName && touched.vendorName
                      ? 'border-red-500'
                      : 'border-gray-300'
                  } rounded w-full py-2 px-3`}
                />
                {errors.vendorName && touched.vendorName && (
                  <div className="text-red-500 text-xs italic">
                    {errors.vendorName}
                  </div>
                )}
              </div>
              <div className="mb-4">
                <label htmlFor="vendorId">Vendor ID:</label>
                <input
                  type="text"
                  name="vendorId"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.vendorId}
                  className={`border ${
                    errors.vendorId && touched.vendorId
                      ? 'border-red-500'
                      : 'border-gray-300'
                  } rounded w-full py-2 px-3`}
                />
                {errors.vendorId && touched.vendorId && (
                  <div className="text-red-500 text-xs italic">
                    {errors.vendorId}
                  </div>
                )}
              </div>

              {/* Contact Details */}
              <div className="mb-4">
                <label htmlFor="contactPerson">Contact Person:</label>
                <input
                  type="text"
                  name="contactPerson"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.contactPerson}
                  className={`border ${
                    errors.contactPerson && touched.contactPerson
                      ? 'border-red-500'
                      : 'border-gray-300'
                  } rounded w-full py-2 px-3`}
                />
                {errors.contactPerson && touched.contactPerson && (
                  <div className="text-red-500 text-xs italic">
                    {errors.contactPerson}
                  </div>
                )}
              </div>
              <div className="mb-4">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  className={`border ${
                    errors.email && touched.email
                      ? 'border-red-500'
                      : 'border-gray-300'
                  } rounded w-full py-2 px-3`}
                />
                {errors.email && touched.email && (
                  <div className="text-red-500 text-xs italic">
                    {errors.email}
                  </div>
                )}
              </div>
              <div className="mb-4">
                <label htmlFor="phoneNumber">Phone Number:</label>
                <input
                  type="tel"
                  name="phoneNumber"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.phoneNumber}
                  className={`border ${
                    errors.phoneNumber && touched.phoneNumber
                      ? 'border-red-500'
                      : 'border-gray-300'
                  } rounded w-full py-2 px-3`}
                />
                {errors.phoneNumber && touched.phoneNumber && (
                  <div className="text-red-500 text-xs italic">
                    {errors.phoneNumber}
                  </div>
                )}
              </div>

              {/* Subject, Inquiry Type, and Message */}
              <div className="mb-4">
                <label htmlFor="subject">Subject:</label>
                <input
                  type="text"
                  name="subject"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.subject}
                  className={`border ${
                    errors.subject && touched.subject
                      ? 'border-red-500'
                      : 'border-gray-300'
                  } rounded w-full py-2 px-3`}
                />
                {errors.subject && touched.subject && (
                  <div className="text-red-500 text-xs italic">
                    {errors.subject}
                  </div>
                )}
              </div>
              <div className="mb-4">
                <label htmlFor="inquiryType">Inquiry Type:</label>
                <Select
                  options={inquiryTypes}
                  onChange={(selectedOption) =>
                    setFieldValue('inquiryType', selectedOption.value)
                  }
                  onBlur={handleBlur}
                  value={
                    inquiryTypes.find((c) => c.value === values.inquiryType) ||
                    null
                  }
                />
                {errors.inquiryType && touched.inquiryType && (
                  <div className="text-red-500 text-xs italic">
                    {errors.inquiryType}
                  </div>
                )}
              </div>

              <div className="mb-4">
                <label htmlFor="message">Message:</label>
                <textarea
                  name="message"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.message}
                  className={`border ${
                    errors.message && touched.message
                      ? 'border-red-500'
                      : 'border-gray-300'
                  } rounded w-full py-2 px-3`}
                />
                {errors.message && touched.message && (
                  <div className="text-red-500 text-xs italic">
                    {errors.message}
                  </div>
                )}
              </div>
              <div className="mb-4">
                <label htmlFor="urgencyLevel">Urgency Level:</label>
                <Select
                  options={urgencyLevels}
                  onChange={(selectedOption) =>
                    setFieldValue('urgencyLevel', selectedOption.value)
                  }
                  onBlur={handleBlur}
                  value={
                    urgencyLevels.find(
                      (c) => c.value === values.urgencyLevel,
                    ) || null
                  }
                />
                {errors.urgencyLevel && touched.urgencyLevel && (
                  <div className="text-red-500 text-xs italic">
                    {errors.urgencyLevel}
                  </div>
                )}
              </div>

              {/* File Attachment Input */}
              <div className="mb-4">
                <label htmlFor="attachments">Attachment(s):</label>
                <input
                  type="file"
                  name="attachments"
                  multiple
                  onChange={(event) => {
                    const files = Array.from(event.currentTarget.files);
                    setFieldValue('attachments', files); // Update form value with the selected files
                  }}
                  className="border border-gray-300 rounded w-full py-2 px-3"
                />
                <small className="text-gray-500">
                  You can attach multiple files.
                </small>
                {errors.attachments && touched.attachments && (
                  <div className="text-red-500 text-xs italic">
                    {errors.attachments}
                  </div>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className={`w-full bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
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
