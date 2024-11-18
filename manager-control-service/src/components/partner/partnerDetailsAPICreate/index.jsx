import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as yup from 'yup';
import { Formik, Field, Form } from 'formik';
import { addNewPartnerDetailsApi } from '../../../services/util/partner';

const PartnerAPIDetailsFormCreate = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const validationSchema = yup.object().shape({
        hotelName: yup.string().required('Hotel Name is required'),
        brandName: yup.string(),
        owningCompanyName: yup.string().required('Owning Company Name is required'),
        businessIdentificationNumber: yup.string().required('Business ID is required'),
        taxIdentificationNumber: yup.string().required('Tax ID is required'),
        contactPerson: yup.string().required('Contact Person is required'),
        emailAddress: yup.string().email('Invalid Email Address').required('Email is required'),
        phoneNumber: yup.string().required('Phone Number is required'),
        businessAddress: yup.string().required('Business Address is required'),
        region: yup.string().required('Region is required'),
        country: yup.string().required('Country is required'),
        facebook: yup.string().url('Invalid Facebook URL').notRequired(), // Optional, validate if URL is provided
        instagram: yup.string().url('Invalid Instagram URL').notRequired(), // Optional, validate if URL is provided
        linkedIn: yup.string().url('Invalid LinkedIn URL').notRequired(), // Optional, validate if URL is provided
        apiKey: yup.string().required('API Key is required'),
        apiEndpointURL: yup.string().url('Invalid API Endpoint URL').required('API Endpoint URL is required'),
        apiDocumentationLink: yup.string().url('Invalid API Documentation Link').notRequired(),
        authenticationMethod: yup.string().required('Authentication Method is required'),
    });


    const handleSubmit = async (values) => {

        let details = {
            hotelName: values.hotelName,
            brandName: values.brandName,
            owningCompanyName: values.owningCompanyName,
            businessIdentificationNumber: values.businessIdentificationNumber,
            taxIdentificationNumber: values.taxIdentificationNumber,
            contactPerson: values.contactPerson,
            emailAddress: values.emailAddress,
            phoneNumber: values.phoneNumber,
            businessAddress: values.businessAddress,
            region: values.region,
            country: values.country,
            socialMediaLinks: {
                facebook: values.facebook,
                instagram: values.instagram,
                linkedIn: values.linkedIn,
            },
            apiIntegration: {
                apiKey: values.apiKey,
                apiEndpointURL: values.apiEndpointURL,
                apiDocumentationLink: values.apiDocumentationLink,
                authenticationMethod: values.authenticationMethod,
            },
        };


        setIsSubmitting(true);
        setIsSubmitting(true);
        let response = await addNewPartnerDetailsApi(details);

        if (response.data.success) {
            toast.success(<div>{response.data.message}</div>, {
                position: "top-right",
                autoClose: 2500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            setIsSubmitting(false);
        } else {
            console.error(response.data.message);
            setIsSubmitting(false);
        }
        setIsSubmitting(false);
    };

    return (
        <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
            <h1 className="text-2xl font-bold mb-6">Create Partner API Details</h1>
            <Formik
                initialValues={{
                    hotelName: '',
                    brandName: '',
                    owningCompanyName: '',
                    businessIdentificationNumber: '',
                    taxIdentificationNumber: '',
                    contactPerson: '',
                    emailAddress: '',
                    phoneNumber: '',
                    businessAddress: '',
                    region: '',
                    country: '',
                    facebook: '',
                    instagram: '',
                    linkedIn: '',
                    apiKey: '',
                    apiEndpointURL: '',
                    apiDocumentationLink: '',
                    authenticationMethod: '',


                }}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {({ errors, touched }) => (
                    <Form className="grid grid-cols-1 gap-4">
                        <div>
                            <label className="block font-medium text-gray-700">Hotel Name</label>
                            <Field
                                name="hotelName"
                                className="w-full border border-gray-300 rounded p-2 focus:ring-2 focus:ring-green-500"
                                placeholder="Enter Hotel Name"
                            />
                            {touched.hotelName && errors.hotelName && (
                                <span className="text-red-500 text-sm">{errors.hotelName}</span>
                            )}
                        </div>
                        <div>
                            <label className="block font-medium text-gray-700">Brand Name</label>
                            <Field
                                name="brandName"
                                className="w-full border border-gray-300 rounded p-2 focus:ring-2 focus:ring-green-500"
                                placeholder="Enter Brand Name"
                            />
                            {touched.brandName && errors.brandName && (
                                <span className="text-red-500 text-sm">{errors.brandName}</span>
                            )}
                        </div>
                        <div>
                            <label className="block font-medium text-gray-700">Owning Company Name</label>
                            <Field
                                name="owningCompanyName"
                                className="w-full border border-gray-300 rounded p-2 focus:ring-2 focus:ring-green-500"
                                placeholder="Enter Owning Company Name"
                            />
                            {touched.owningCompanyName && errors.owningCompanyName && (
                                <span className="text-red-500 text-sm">{errors.owningCompanyName}</span>
                            )}
                        </div>
                        <div>
                            <label className="block font-medium text-gray-700">Business Identification Number</label>
                            <Field
                                name="businessIdentificationNumber"
                                className="w-full border border-gray-300 rounded p-2 focus:ring-2 focus:ring-green-500"
                                placeholder="Enter Business ID"
                            />
                            {touched.businessIdentificationNumber && errors.businessIdentificationNumber && (
                                <span className="text-red-500 text-sm">{errors.businessIdentificationNumber}</span>
                            )}
                        </div>
                        <div>
                            <label className="block font-medium text-gray-700">Tax Identification Number</label>
                            <Field
                                name="taxIdentificationNumber"
                                className="w-full border border-gray-300 rounded p-2 focus:ring-2 focus:ring-green-500"
                                placeholder="Enter Tax ID"
                            />
                            {touched.taxIdentificationNumber && errors.taxIdentificationNumber && (
                                <span className="text-red-500 text-sm">{errors.taxIdentificationNumber}</span>
                            )}
                        </div>

                        <div>
                            <label className="block font-medium text-gray-700">Contact Person</label>
                            <Field
                                name="contactPerson"
                                className="w-full border border-gray-300 rounded p-2 focus:ring-2 focus:ring-green-500"
                                placeholder="Enter Contact Person"
                            />
                            {touched.contactPerson && errors.contactPerson && (
                                <span className="text-red-500 text-sm">{errors.contactPerson}</span>
                            )}
                        </div>
                        <div>
                            <label className="block font-medium text-gray-700">Email Address</label>
                            <Field
                                name="emailAddress"
                                type="email"
                                className="w-full border border-gray-300 rounded p-2 focus:ring-2 focus:ring-green-500"
                                placeholder="Enter Email Address"
                            />
                            {touched.emailAddress && errors.emailAddress && (
                                <span className="text-red-500 text-sm">{errors.emailAddress}</span>
                            )}
                        </div>
                        <div>
                            <label className="block font-medium text-gray-700">Phone Number</label>
                            <Field
                                name="phoneNumber"
                                className="w-full border border-gray-300 rounded p-2 focus:ring-2 focus:ring-green-500"
                                placeholder="Enter Phone Number"
                            />
                            {touched.phoneNumber && errors.phoneNumber && (
                                <span className="text-red-500 text-sm">{errors.phoneNumber}</span>
                            )}
                        </div>
                        <div>
                            <label className="block font-medium text-gray-700">Business Address</label>
                            <Field
                                name="businessAddress"
                                className="w-full border border-gray-300 rounded p-2 focus:ring-2 focus:ring-green-500"
                                placeholder="Enter Business Address"
                            />
                            {touched.businessAddress && errors.businessAddress && (
                                <span className="text-red-500 text-sm">{errors.businessAddress}</span>
                            )}
                        </div>
                        <div>
                            <label className="block font-medium text-gray-700">Region</label>
                            <Field
                                name="region"
                                className="w-full border border-gray-300 rounded p-2 focus:ring-2 focus:ring-green-500"
                                placeholder="Enter Region"
                            />
                            {touched.region && errors.region && (
                                <span className="text-red-500 text-sm">{errors.region}</span>
                            )}
                        </div>
                        <div>
                            <label className="block font-medium text-gray-700">Country</label>
                            <Field
                                name="country"
                                className="w-full border border-gray-300 rounded p-2 focus:ring-2 focus:ring-green-500"
                                placeholder="Enter Country"
                            />
                            {touched.country && errors.country && (
                                <span className="text-red-500 text-sm">{errors.country}</span>
                            )}
                        </div>

                        <div>
                            <label className="block font-medium text-gray-700">Facebook</label>
                            <Field
                                name="facebook"
                                className="w-full border border-gray-300 rounded p-2 focus:ring-2 focus:ring-green-500"
                                placeholder="Enter Facebook URL"
                            />
                            {touched.facebook && errors.facebook ? (
                                <span className="text-red-500 text-sm">{errors.facebook}</span>
                            ) : null}
                        </div>

                        <div>
                            <label className="block font-medium text-gray-700">Instagram</label>
                            <Field
                                name="instagram"
                                className="w-full border border-gray-300 rounded p-2 focus:ring-2 focus:ring-green-500"
                                placeholder="Enter Instagram URL"
                            />
                            {touched.instagram && errors.instagram && (
                                <span className="text-red-500 text-sm">{errors.instagram}</span>
                            )}
                        </div>
                        <div>
                            <label className="block font-medium text-gray-700">LinkedIn</label>
                            <Field
                                name="linkedIn"
                                className="w-full border border-gray-300 rounded p-2 focus:ring-2 focus:ring-green-500"
                                placeholder="Enter LinkedIn URL"
                            />
                            {touched.linkedIn && errors.linkedIn && (
                                <span className="text-red-500 text-sm">{errors.linkedIn}</span>
                            )}
                        </div>


                        <div>
                            <label className="block font-medium text-gray-700">API Key</label>
                            <Field
                                name="apiKey"
                                className="w-full border border-gray-300 rounded p-2 focus:ring-2 focus:ring-green-500"
                                placeholder="Enter API Key"
                            />
                            {touched.apiKey && errors
                                .apiKey && (
                                    <span className="text-red-500 text-sm">{errors.apiKey}</span>
                                )}
                        </div>
                        <div>
                            <label className="block font-medium text-gray-700">API Endpoint URL</label>
                            <Field
                                name="apiEndpointURL"
                                className="w-full border border-gray-300 rounded p-2 focus:ring-2 focus:ring-green-500"
                                placeholder="Enter API Endpoint URL"
                            />
                            {touched.apiEndpointURL && errors.apiEndpointURL && (
                                <span className="text-red-500 text-sm">{errors.apiEndpointURL}</span>
                            )}
                        </div>
                        <div>
                            <label className="block font-medium text-gray-700">API Documentation Link</label>
                            <Field
                                name="apiDocumentationLink"
                                className="w-full border border-gray-300 rounded p-2 focus:ring-2 focus:ring-green-500"
                                placeholder="Enter API Documentation Link"
                            />
                            {touched.apiDocumentationLink && errors.apiDocumentationLink && (
                                <span className="text-red-500 text-sm">{errors.apiDocumentationLink}</span>
                            )}
                        </div>
                        <div>
                            <label className="block font-medium text-gray-700">Authentication Method</label>
                            <Field
                                name="authenticationMethod"
                                className="w-full border border-gray-300 rounded p-2 focus:ring-2 focus:ring-green-500"
                                placeholder="Enter Authentication Method"
                            />
                            {touched.authenticationMethod && errors.authenticationMethod && (
                                <span className="text-red-500 text-sm">{errors.authenticationMethod}</span>
                            )}
                        </div>
                        <button
                            type="submit"
                            className={`w-full bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 
                                }`}
       
                        >
                            {isSubmitting ? 'Submitting...' : 'Submit'}
                        </button>

                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default PartnerAPIDetailsFormCreate;
