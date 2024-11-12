import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as yup from 'yup';
import { Formik } from 'formik';
import { addNewVendorDetailsNonApi } from '../../../services/util/vendor'; 
import Select from 'react-select';

const VendorNonAPIDetailsFormCreate = () => {
    const [isBtnLoading, setIsBtnLoading] = useState(false);

    const countries = [
        { value: 'Sri Lanka', label: 'Sri Lanka' },
        { value: 'India', label: 'India' },
        { value: 'USA', label: 'United States' },
        // Add all other countries similarly
    ];

    const roomTypes = [
        { value: 'Standard', label: 'Standard' },
        { value: 'Deluxe', label: 'Deluxe' },
        { value: 'Suite', label: 'Suite' },
        { value: 'Penthouse', label: 'Penthouse' },
    ];

    const facilities = [
        'Wi-Fi',
        'Pool',
        'Spa',
        'Gym',
        'Restaurant',
        'Bar',
        'Laundry Service',
        'Room Service',
        'Airport Shuttle',
        'Parking',
        'Business Center',
        'Pet-Friendly',
        'Air Conditioning',
        '24-Hour Reception',
    ];

    const communicationMethods = [
        { value: 'Email', label: 'Email' },
        { value: 'Phone', label: 'Phone' },
    ];

    const schema = yup.object().shape({
        hotelName: yup.string().required('Hotel Name is required').max(100, 'Hotel Name must be at most 100 characters'),
        contactPerson: yup.string().required('Contact Person is required').max(100, 'Contact Person must be at most 100 characters'),
        emailAddress: yup.string().email('Invalid email').required('Email Address is required').max(100, 'Email must be at most 100 characters'),
        phoneNumber: yup.string().required('Phone Number is required').max(15, 'Phone number must be at most 15 characters'),
        businessAddress: yup.string().required('Business Address is required').max(200, 'Address must be at most 200 characters'),
        country: yup.string().required('Country is required'),
        hotelDetails: yup.object().shape({
            numberOfRooms: yup.number().required('Number of Rooms is required').min(1, 'Must have at least one room'),
            typesOfRooms: yup.array().of(yup.string()).min(1, 'At least one room type is required').required('Room types are required'),
            facilitiesAvailable: yup.array().of(yup.string()).min(1, 'At least one facility is required').required('Facilities are required'),
        }),
        servicePreferences: yup.object().shape({
            preferredCommunicationMethod: yup.string().required('Preferred Communication Method is required'),
            specialRequirements: yup.string().max(200, 'Special Requirements must be at most 200 characters'),
        }),
    });

    const onSubmit = async (values) => {
        setIsBtnLoading(true);
        let response = await addNewVendorDetailsNonApi(values);
        console.log(response.data.success);

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
            setIsBtnLoading(false);
        } else {
            console.error(response.data.message);
            setIsBtnLoading(false);
        }
        setIsBtnLoading(false);
    };

    return (
        <div className="flex items-center justify-center mt-20">
            <div className="w-full max-w-md bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <h1 className="text-2xl font-semibold text-gray-700 mb-10">Add Vendor Non API Details</h1>
                <Formik
                    initialValues={{
                        hotelName: '',
                        contactPerson: '',
                        emailAddress: '',
                        phoneNumber: '',
                        businessAddress: '',
                        country: '',
                        hotelDetails: {
                            numberOfRooms: 1,
                            typesOfRooms: [],
                            facilitiesAvailable: [],
                        },
                        servicePreferences: {
                            preferredCommunicationMethod: '',
                            specialRequirements: '',
                        },
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
                    }) => (
                        <form onSubmit={handleSubmit}>
                            {/* Hotel Name */}
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="hotelName">
                                    Hotel Name
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    type="text"
                                    name="hotelName"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.hotelName}
                                />
                                {errors.hotelName && touched.hotelName && <div className="text-red-500 text-xs italic">{errors.hotelName}</div>}
                            </div>

                            {/* Contact Person */}
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="contactPerson">
                                    Contact Person
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    type="text"
                                    name="contactPerson"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.contactPerson}
                                />
                                {errors.contactPerson && touched.contactPerson && <div className="text-red-500 text-xs italic">{errors.contactPerson}</div>}
                            </div>

                            {/* Email Address */}
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="emailAddress">
                                    Email Address
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    type="email"
                                    name="emailAddress"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.emailAddress}
                                />
                                {errors.emailAddress && touched.emailAddress && <div className="text-red-500 text-xs italic">{errors.emailAddress}</div>}
                            </div>

                            {/* Phone Number */}
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phoneNumber">
                                    Phone Number
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    type="mobile"
                                    name="phoneNumber"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.phoneNumber}
                                />
                                {errors.phoneNumber && touched.phoneNumber && <div className="text-red-500 text-xs italic">{errors.phoneNumber}</div>}
                            </div>

                            {/* Business Address */}
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="businessAddress">
                                    Business Address
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    type="text"
                                    name="businessAddress"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.businessAddress}
                                />
                                {errors.businessAddress && touched.businessAddress && <div className="text-red-500 text-xs italic">{errors.businessAddress}</div>}
                            </div>

                            {/* Country */}
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="country">
                                    Country
                                </label>
                                <Select
                                    options={countries}
                                    onChange={(selectedOption) => handleChange({ target: { name: 'country', value: selectedOption.value } })}
                                    onBlur={handleBlur}
                                    value={countries.find(c => c.value === values.country)}
                                />
                                {errors.country && touched.country && <div className="text-red-500 text-xs italic">{errors.country}</div>}
                            </div>

                            {/* Hotel Details */}
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="hotelDetails.numberOfRooms">
                                    Number of Rooms
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    type="number"
                                    name="hotelDetails.numberOfRooms"
                                    min="1"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.hotelDetails.numberOfRooms}
                                />
                                {errors.hotelDetails?.numberOfRooms && touched.hotelDetails?.numberOfRooms && <div className="text-red-500 text-xs italic">{errors.hotelDetails?.numberOfRooms}</div>}
                            </div>

                            {/* Room Types */}
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="hotelDetails.typesOfRooms">
                                    Room Types
                                </label>
                                <Select
                                    isMulti
                                    options={roomTypes}
                                    onChange={(selectedOptions) => handleChange({ target: { name: 'hotelDetails.typesOfRooms', value: selectedOptions.map(option => option.value) } })}
                                    onBlur={handleBlur}
                                    value={roomTypes.filter(option => values.hotelDetails.typesOfRooms.includes(option.value))}
                                />
                                {errors.hotelDetails?.typesOfRooms && touched.hotelDetails?.typesOfRooms && <div className="text-red-500 text-xs italic">{errors.hotelDetails?.typesOfRooms}</div>}
                            </div>

                            {/* Facilities */}
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="hotelDetails.facilitiesAvailable">
                                    Facilities Available
                                </label>
                                <Select
                                    isMulti
                                    options={facilities.map(facility => ({ value: facility, label: facility }))}
                                    onChange={(selectedOptions) => handleChange({ target: { name: 'hotelDetails.facilitiesAvailable', value: selectedOptions.map(option => option.value) } })}
                                    onBlur={handleBlur}
                                    value={facilities.filter(facility => values.hotelDetails.facilitiesAvailable.includes(facility))}
                                />
                                {errors.hotelDetails?.facilitiesAvailable && touched.hotelDetails?.facilitiesAvailable && <div className="text-red-500 text-xs italic">{errors.hotelDetails?.facilitiesAvailable}</div>}
                            </div>

                            {/* Preferred Communication */}
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="servicePreferences.preferredCommunicationMethod">
                                    Preferred Communication Method
                                </label>
                                <Select
                                    options={communicationMethods}
                                    onChange={(selectedOption) => handleChange({ target: { name: 'servicePreferences.preferredCommunicationMethod', value: selectedOption.value } })}
                                    onBlur={handleBlur}
                                    value={communicationMethods.find(c => c.value === values.servicePreferences.preferredCommunicationMethod)}
                                />
                                {errors.servicePreferences?.preferredCommunicationMethod && touched.servicePreferences?.preferredCommunicationMethod && <div className="text-red-500 text-xs italic">{errors.servicePreferences?.preferredCommunicationMethod}</div>}
                            </div>

                            {/* Special Requirements */}
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="servicePreferences.specialRequirements">
                                    Special Requirements
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    type="text"
                                    name="servicePreferences.specialRequirements"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.servicePreferences.specialRequirements}
                                />
                                {errors.servicePreferences?.specialRequirements && touched.servicePreferences?.specialRequirements && <div className="text-red-500 text-xs italic">{errors.servicePreferences?.specialRequirements}</div>}
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

export default VendorNonAPIDetailsFormCreate;
