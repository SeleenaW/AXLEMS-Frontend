import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as yup from 'yup';
import { Formik } from 'formik';
import { addNewPartnerDetailsNonApi } from '../../../services/util/partner';
import Select from 'react-select';


const PartnerNonAPIDetailsFormCreate = () => {
    const [isBtnLoading, setIsBtnLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);


    const countries = [         //195 countries
        { value: 'Afghanistan', label: 'Afghanistan' },
        { value: 'Albania', label: 'Albania' },
        { value: 'Algeria', label: 'Algeria' },
        { value: 'Andorra', label: 'Andorra' },
        { value: 'Angola', label: 'Angola' },
        { value: 'Antigua and Barbuda', label: 'Antigua and Barbuda' },
        { value: 'Argentina', label: 'Argentina' },
        { value: 'Armenia', label: 'Armenia' },
        { value: 'Australia', label: 'Australia' },
        { value: 'Austria', label: 'Austria' },
        { value: 'Azerbaijan', label: 'Azerbaijan' },
        { value: 'Bahamas', label: 'Bahamas' },
        { value: 'Bahrain', label: 'Bahrain' },
        { value: 'Bangladesh', label: 'Bangladesh' },
        { value: 'Barbados', label: 'Barbados' },
        { value: 'Belarus', label: 'Belarus' },
        { value: 'Belgium', label: 'Belgium' },
        { value: 'Belize', label: 'Belize' },
        { value: 'Benin', label: 'Benin' },
        { value: 'Bhutan', label: 'Bhutan' },
        { value: 'Bolivia', label: 'Bolivia' },
        { value: 'Bosnia and Herzegovina', label: 'Bosnia and Herzegovina' },
        { value: 'Botswana', label: 'Botswana' },
        { value: 'Brazil', label: 'Brazil' },
        { value: 'Brunei', label: 'Brunei' },
        { value: 'Bulgaria', label: 'Bulgaria' },
        { value: 'Burkina Faso', label: 'Burkina Faso' },
        { value: 'Burundi', label: 'Burundi' },
        { value: 'Cabo Verde', label: 'Cabo Verde' },
        { value: 'Cambodia', label: 'Cambodia' },
        { value: 'Cameroon', label: 'Cameroon' },
        { value: 'Canada', label: 'Canada' },
        { value: 'Central African Republic', label: 'Central African Republic' },
        { value: 'Chad', label: 'Chad' },
        { value: 'Chile', label: 'Chile' },
        { value: 'China', label: 'China' },
        { value: 'Colombia', label: 'Colombia' },
        { value: 'Comoros', label: 'Comoros' },
        { value: 'Congo, Democratic Republic of the', label: 'Congo, Democratic Republic of the' },
        { value: 'Congo, Republic of the', label: 'Congo, Republic of the' },
        { value: 'Costa Rica', label: 'Costa Rica' },
        { value: 'Croatia', label: 'Croatia' },
        { value: 'Cuba', label: 'Cuba' },
        { value: 'Cyprus', label: 'Cyprus' },
        { value: 'Czech Republic', label: 'Czech Republic' },
        { value: 'Denmark', label: 'Denmark' },
        { value: 'Djibouti', label: 'Djibouti' },
        { value: 'Dominica', label: 'Dominica' },
        { value: 'Dominican Republic', label: 'Dominican Republic' },
        { value: 'Ecuador', label: 'Ecuador' },
        { value: 'Egypt', label: 'Egypt' },
        { value: 'El Salvador', label: 'El Salvador' },
        { value: 'Equatorial Guinea', label: 'Equatorial Guinea' },
        { value: 'Eritrea', label: 'Eritrea' },
        { value: 'Estonia', label: 'Estonia' },
        { value: 'Eswatini', label: 'Eswatini' },
        { value: 'Ethiopia', label: 'Ethiopia' },
        { value: 'Fiji', label: 'Fiji' },
        { value: 'Finland', label: 'Finland' },
        { value: 'France', label: 'France' },
        { value: 'Gabon', label: 'Gabon' },
        { value: 'Gambia', label: 'Gambia' },
        { value: 'Georgia', label: 'Georgia' },
        { value: 'Germany', label: 'Germany' },
        { value: 'Ghana', label: 'Ghana' },
        { value: 'Greece', label: 'Greece' },
        { value: 'Grenada', label: 'Grenada' },
        { value: 'Guatemala', label: 'Guatemala' },
        { value: 'Guinea', label: 'Guinea' },
        { value: 'Guinea-Bissau', label: 'Guinea-Bissau' },
        { value: 'Guyana', label: 'Guyana' },
        { value: 'Haiti', label: 'Haiti' },
        { value: 'Honduras', label: 'Honduras' },
        { value: 'Hungary', label: 'Hungary' },
        { value: 'Iceland', label: 'Iceland' },
        { value: 'India', label: 'India' },
        { value: 'Indonesia', label: 'Indonesia' },
        { value: 'Iran', label: 'Iran' },
        { value: 'Iraq', label: 'Iraq' },
        { value: 'Ireland', label: 'Ireland' },
        { value: 'Israel', label: 'Israel' },
        { value: 'Italy', label: 'Italy' },
        { value: 'Jamaica', label: 'Jamaica' },
        { value: 'Japan', label: 'Japan' },
        { value: 'Jordan', label: 'Jordan' },
        { value: 'Kazakhstan', label: 'Kazakhstan' },
        { value: 'Kenya', label: 'Kenya' },
        { value: 'Kiribati', label: 'Kiribati' },
        { value: 'Korea, North', label: 'Korea, North' },
        { value: 'Korea, South', label: 'Korea, South' },
        { value: 'Kuwait', label: 'Kuwait' },
        { value: 'Kyrgyzstan', label: 'Kyrgyzstan' },
        { value: 'Laos', label: 'Laos' },
        { value: 'Latvia', label: 'Latvia' },
        { value: 'Lebanon', label: 'Lebanon' },
        { value: 'Lesotho', label: 'Lesotho' },
        { value: 'Liberia', label: 'Liberia' },
        { value: 'Libya', label: 'Libya' },
        { value: 'Liechtenstein', label: 'Liechtenstein' },
        { value: 'Lithuania', label: 'Lithuania' },
        { value: 'Luxembourg', label: 'Luxembourg' },
        { value: 'Madagascar', label: 'Madagascar' },
        { value: 'Malawi', label: 'Malawi' },
        { value: 'Malaysia', label: 'Malaysia' },
        { value: 'Maldives', label: 'Maldives' },
        { value: 'Mali', label: 'Mali' },
        { value: 'Malta', label: 'Malta' },
        { value: 'Marshall Islands', label: 'Marshall Islands' },
        { value: 'Mauritania', label: 'Mauritania' },
        { value: 'Mauritius', label: 'Mauritius' },
        { value: 'Mexico', label: 'Mexico' },
        { value: 'Micronesia', label: 'Micronesia' },
        { value: 'Moldova', label: 'Moldova' },
        { value: 'Monaco', label: 'Monaco' },
        { value: 'Mongolia', label: 'Mongolia' },
        { value: 'Montenegro', label: 'Montenegro' },
        { value: 'Morocco', label: 'Morocco' },
        { value: 'Mozambique', label: 'Mozambique' },
        { value: 'Myanmar', label: 'Myanmar' },
        { value: 'Namibia', label: 'Namibia' },
        { value: 'Nauru', label: 'Nauru' },
        { value: 'Nepal', label: 'Nepal' },
        { value: 'Netherlands', label: 'Netherlands' },
        { value: 'New Zealand', label: 'New Zealand' },
        { value: 'Nicaragua', label: 'Nicaragua' },
        { value: 'Niger', label: 'Niger' },
        { value: 'Nigeria', label: 'Nigeria' },
        { value: 'North Macedonia', label: 'North Macedonia' },
        { value: 'Norway', label: 'Norway' },
        { value: 'Oman', label: 'Oman' },
        { value: 'Pakistan', label: 'Pakistan' },
        { value: 'Palau', label: 'Palau' },
        { value: 'Panama', label: 'Panama' },
        { value: 'Papua New Guinea', label: 'Papua New Guinea' },
        { value: 'Paraguay', label: 'Paraguay' },
        { value: 'Peru', label: 'Peru' },
        { value: 'Philippines', label: 'Philippines' },
        { value: 'Poland', label: 'Poland' },
        { value: 'Portugal', label: 'Portugal' },
        { value: 'Qatar', label: 'Qatar' },
        { value: 'Romania', label: 'Romania' },
        { value: 'Russia', label: 'Russia' },
        { value: 'Rwanda', label: 'Rwanda' },
        { value: 'Saint Kitts and Nevis', label: 'Saint Kitts and Nevis' },
        { value: 'Saint Lucia', label: 'Saint Lucia' },
        { value: 'Saint Vincent and the Grenadines', label: 'Saint Vincent and the Grenadines' },
        { value: 'Samoa', label: 'Samoa' },
        { value: 'San Marino', label: 'San Marino' },
        { value: 'Sao Tome and Principe', label: 'Sao Tome and Principe' },
        { value: 'Saudi Arabia', label: 'Saudi Arabia' },
        { value: 'Senegal', label: 'Senegal' },
        { value: 'Serbia', label: 'Serbia' },
        { value: 'Seychelles', label: 'Seychelles' },
        { value: 'Sierra Leone', label: 'Sierra Leone' },
        { value: 'Singapore', label: 'Singapore' },
        { value: 'Slovakia', label: 'Slovakia' },
        { value: 'Slovenia', label: 'Slovenia' },
        { value: 'Solomon Islands', label: 'Solomon Islands' },
        { value: 'Somalia', label: 'Somalia' },
        { value: 'South Africa', label: 'South Africa' },
        { value: 'South Sudan', label: 'South Sudan' },
        { value: 'Spain', label: 'Spain' },
        { value: 'Sri Lanka', label: 'Sri Lanka' },
        { value: 'Sudan', label: 'Sudan' },
        { value: 'Suriname', label: 'Suriname' },
        { value: 'Sweden', label: 'Sweden' },
        { value: 'Switzerland', label: 'Switzerland' },
        { value: 'Syria', label: 'Syria' },
        { value: 'Taiwan', label: 'Taiwan' },
        { value: 'Tajikistan', label: 'Tajikistan' },
        { value: 'Tanzania', label: 'Tanzania' },
        { value: 'Thailand', label: 'Thailand' },
        { value: 'Timor-Leste', label: 'Timor-Leste' },
        { value: 'Togo', label: 'Togo' },
        { value: 'Tonga', label: 'Tonga' },
        { value: 'Trinidad and Tobago', label: 'Trinidad and Tobago' },
        { value: 'Tunisia', label: 'Tunisia' },
        { value: 'Turkey', label: 'Turkey' },
        { value: 'Turkmenistan', label: 'Turkmenistan' },
        { value: 'Tuvalu', label: 'Tuvalu' },
        { value: 'Uganda', label: 'Uganda' },
        { value: 'Ukraine', label: 'Ukraine' },
        { value: 'United Arab Emirates', label: 'United Arab Emirates' },
        { value: 'United Kingdom', label: 'United Kingdom' },
        { value: 'United States', label: 'United States' },
        { value: 'Uruguay', label: 'Uruguay' },
        { value: 'Uzbekistan', label: 'Uzbekistan' },
        { value: 'Vanuatu', label: 'Vanuatu' },
        { value: 'Vatican City', label: 'Vatican City' },
        { value: 'Venezuela', label: 'Venezuela' },
        { value: 'Vietnam', label: 'Vietnam' },
        { value: 'Yemen', label: 'Yemen' },
        { value: 'Zambia', label: 'Zambia' },
        { value: 'Zimbabwe', label: 'Zimbabwe' }
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
        businessRegistrationNumber: yup.string().required('Business Registration Number is required').max(100, 'Business Registration Number must be at most 100 characters'),
        taxIDOrVatNumber: yup.string().required('Tax ID or VAT Number is required').max(100, 'Tax ID or VAT Number must be at most 100 characters'),
        brandOrChainName: yup.string().max(100, 'Brand or Chain Name must be at most 100 characters'),
        owningCompanyName: yup.string().max(100, 'Owning Company Name must be at most 100 characters'),
        region: yup.string().max(100, 'Region must be at most 100 characters'),

        media: yup.object().shape({
            images: yup.string(),
            video: yup.string().url("Invalid URL").trim().nullable(),
        }),

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
        paymentDetails: yup.object().shape({
            currencyAccepted: yup.string().required('Currency Accepted is required').trim(),
            paymentMethodsAccepted: yup.array()
                .of(yup.string().oneOf(["Cash", "Credit Card", "Debit Card", "Mobile Payment"]))
                .default([]),
        }),
        cancellationPolicy: yup.string().trim().nullable(),
        termsAndConditions: yup.string().trim().nullable(),
        privacyPolicy: yup.string().trim().nullable(),
        additionalInformation: yup.string().trim().nullable(),
    });

    const onSubmit = async (values) => {

        let hotelDetails = {
            hotelName: values.hotelName,
            businessRegistrationNumber: values.businessRegistrationNumber,
            taxIDOrVatNumber: values.taxIDOrVatNumber,
            brandOrChainName: values.brandOrChainName,
            owningCompanyName: values.owningCompanyName,
            contactPerson: values.contactPerson,
            emailAddress: values.emailAddress,
            phoneNumber: values.phoneNumber,
            businessAddress: values.businessAddress,
            region: values.region,
            country: values.country,
            accreditationAndAwards: {
                accreditations: values.accreditations.map(accreditation => accreditation.value),
                otherAccreditations: values.otherAccreditations,
                esgScore: values.esgScore,
                ecoConsciousCertifications: values.ecoConsciousCertifications.map(certification => certification.value),
                sustainabilityInitiatives: values.sustainabilityInitiatives,
            },
            media: {
                video: values.media.video,
                images: values.media.images,
            },
            hotelDetails: {
                numberOfRooms: values.hotelDetails.numberOfRooms,
                typesOfRooms: values.hotelDetails.typesOfRooms,
                facilitiesAvailable: values.hotelDetails.facilitiesAvailable,
            },
            servicePreferences: {
                preferredCommunicationMethod: values.servicePreferences.preferredCommunicationMethod,
                specialRequirements: values.servicePreferences.specialRequirements,
            },
            paymentDetails: {
                currencyAccepted: values.paymentDetails.currencyAccepted,
                paymentMethodsAccepted: values.paymentDetails.paymentMethodsAccepted,
            },
            cancellationPolicy: values.cancellationPolicy,
            termsAndConditions: values.termsAndConditions,
            privacyPolicy: values.privacyPolicy,
            additionalInformation: values.additionalInformation,
        };




        console.log(hotelDetails, 'hotelDetails');
        setIsBtnLoading(true);
        let response = await addNewPartnerDetailsNonApi(hotelDetails);
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
                <h1 className="text-2xl font-semibold text-gray-700 mb-10">Add Partner Non API Details</h1>
                <Formik
                    initialValues={{
                        hotelName: '',
                        contactPerson: '',
                        emailAddress: '',
                        brandOrChainName: '',
                        owningCompanyName: '',
                        region: '',
                        businessRegistrationNumber: '',
                        taxIDOrVatNumber: '',
                        accreditations: [],
                        otherAccreditations: '',
                        esgScore: '',
                        ecoConsciousCertifications: [],
                        sustainabilityInitiatives: '',

                        media: {
                            video: '',

                        },
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
                        paymentDetails: {
                            currencyAccepted: '',
                            paymentMethodsAccepted: [],
                        },
                        cancellationPolicy: '',
                        termsAndConditions: '',
                        privacyPolicy: '',
                        additionalInformation: '',



                    }}
                    validationSchema={schema}
                    onSubmit={onSubmit}
                >
                    {({
                        values,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        setFieldValue,
                        touched,
                        errors,
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

                            {/* Business Registration Number */}
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="businessRegistrationNumber">
                                    Business Registration Number
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    type="text"
                                    name="businessRegistrationNumber"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.businessRegistrationNumber}
                                />
                                {errors.businessRegistrationNumber && touched.businessRegistrationNumber && <div className="text-red-500 text-xs italic">{errors.businessRegistrationNumber}</div>}
                            </div>

                            {/* Tax ID or VAT Number */}
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="taxIDOrVatNumber">
                                    Tax ID or VAT Number
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    type="text"
                                    name="taxIDOrVatNumber"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.taxIDOrVatNumber}
                                />
                                {errors.taxIDOrVatNumber && touched.taxIDOrVatNumber && <div className="text-red-500 text-xs italic">{errors.taxIDOrVatNumber}</div>}
                            </div>

                            {/* Brand or Chain Name */}
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="brandOrChainName">
                                    Brand or Chain Name
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    type="text"
                                    name="brandOrChainName"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.brandOrChainName}
                                />
                                {errors.brandOrChainName && touched.brandOrChainName && <div className="text-red-500 text-xs italic">{errors.brandOrChainName}</div>}
                            </div>

                            {/* Owning Company Name */}
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="owningCompanyName">
                                    Owning Company Name
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    type="text"
                                    name="owningCompanyName"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.owningCompanyName}
                                />
                                {errors.owningCompanyName && touched.owningCompanyName && <div className="text-red-500 text-xs italic">{errors.owningCompanyName}</div>}
                            </div>

                            {/* Region */}
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="region">
                                    Region
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    type="text"
                                    name="region"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.region}
                                />
                                {errors.region && touched.region && <div className="text-red-500 text-xs italic">{errors.region}</div>}
                            </div>

                            {/* Accreditations */}
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="accreditations">
                                    Accreditations
                                </label>
                                <Select
                                    isMulti
                                    options={[
                                        { value: 'Michelin Star Restaurant', label: 'Michelin Star Restaurant' },
                                        { value: 'Forbes 5-Star Rating', label: 'Forbes 5-Star Rating' },
                                        { value: 'AAA Diamond Rating', label: 'AAA Diamond Rating' },
                                        { value: 'Local Tourism Board Accreditation', label: 'Local Tourism Board Accreditation' },
                                    ]}
                                    onChange={(selectedOptions) =>
                                        handleChange({
                                            target: {
                                                name: 'accreditations',
                                                value: selectedOptions,
                                            },
                                        })
                                    }
                                    onBlur={handleBlur}
                                    value={values.accreditations}
                                />
                                {errors.accreditations && touched.accreditations && (
                                    <div className="text-red-500 text-xs italic">{errors.accreditations}</div>
                                )}
                            </div>


                            {/* Other Accreditations */}
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="otherAccreditations">
                                    Other Accreditations
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    type="text"
                                    name="otherAccreditations"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.otherAccreditations}
                                />
                                {errors.otherAccreditations && touched.otherAccreditations && <div className="text-red-500 text-xs italic">{errors.otherAccreditations}</div>}
                            </div>

                            {/* ESG Score */}
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="esgScore">
                                    ESG Score
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    type="number"
                                    name="esgScore"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.esgScore}
                                />
                                {errors.esgScore && touched.esgScore && <div className="text-red-500 text-xs italic">{errors.esgScore}</div>}
                            </div>

                            {/* Eco-Conscious Certifications */}
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="ecoConsciousCertifications">
                                    Eco-Conscious Certifications
                                </label>
                                <Select
                                    isMulti
                                    options={[
                                        { value: 'Green Globe Certified', label: 'Green Globe Certified' },
                                        { value: 'LEED Certified', label: 'LEED Certified' },
                                        { value: 'Earth Check Certified', label: 'Earth Check Certified' },
                                    ]}
                                    onChange={(selectedOptions) =>
                                        handleChange({
                                            target: {
                                                name: 'ecoConsciousCertifications',
                                                value: selectedOptions,
                                            },
                                        })
                                    }
                                    onBlur={handleBlur}
                                    value={values.ecoConsciousCertifications}
                                />
                                {errors.ecoConsciousCertifications && touched.ecoConsciousCertifications && (
                                    <div className="text-red-500 text-xs italic">
                                        {errors.ecoConsciousCertifications}
                                    </div>
                                )}
                            </div>


                            {/* Sustainability Initiatives */}
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="sustainabilityInitiatives">
                                    Sustainability Initiatives
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    type="text"
                                    name="sustainabilityInitiatives"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.sustainabilityInitiatives}
                                />
                                {errors.sustainabilityInitiatives && touched.sustainabilityInitiatives && <div className="text-red-500 text-xs italic">{errors.sustainabilityInitiatives}</div>}
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
                                    type="tel"
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
                                    onChange={(selectedOptions) =>
                                        handleChange({
                                            target: {
                                                name: 'hotelDetails.facilitiesAvailable',
                                                value: selectedOptions.map(option => option.value),
                                            },
                                        })
                                    }
                                    onBlur={handleBlur}
                                    value={values.hotelDetails.facilitiesAvailable.map(facility =>
                                        ({ value: facility, label: facility })
                                    )}
                                />
                                {errors.hotelDetails?.facilitiesAvailable && touched.hotelDetails?.facilitiesAvailable && (
                                    <div className="text-red-500 text-xs italic">
                                        {errors.hotelDetails?.facilitiesAvailable}
                                    </div>
                                )}
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

                            <div className="mb-4">

                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="media.video">
                                    images
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    type="text"
                                    name="media.images"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.media.images}
                                />
                                {errors.media?.images && touched.media?.images && <div className="text-red-500 text-xs italic">{errors.media?.images}</div>}
                            </div>


                            {/* Video */}
                            <div className="mb-4">

                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="media.video">
                                    Video
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    type="text"
                                    name="media.video"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.media.video}
                                />
                                {errors.media?.video && touched.media?.video && <div className="text-red-500 text-xs italic">{errors.media?.video}</div>}
                            </div>

                            {/* Payment Details */}
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="paymentDetails.currencyAccepted">
                                    Currency Accepted
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    type="text"
                                    name="paymentDetails.currencyAccepted"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.paymentDetails.currencyAccepted}
                                />
                                {errors.paymentDetails?.currencyAccepted && touched.paymentDetails?.currencyAccepted && <div className="text-red-500 text-xs italic">{errors.paymentDetails?.currencyAccepted}</div>}
                            </div>

                            {/* Payment Methods */}
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="paymentDetails.paymentMethodsAccepted">
                                    Payment Methods Accepted
                                </label>
                                <Select
                                    isMulti
                                    options={[
                                        { value: 'Cash', label: 'Cash' },
                                        { value: 'Credit Card', label: 'Credit Card' },
                                        { value: 'Debit Card', label: 'Debit Card' },
                                        { value: 'Mobile Payment', label: 'Mobile Payment' },
                                    ]}
                                    onChange={(selectedOptions) => handleChange({ target: { name: 'paymentDetails.paymentMethodsAccepted', value: selectedOptions.map(option => option.value) } })}
                                    onBlur={handleBlur}
                                    value={values.paymentDetails.paymentMethodsAccepted.map(method => ({ value: method, label: method }))}
                                />
                                {errors.paymentDetails?.paymentMethodsAccepted && touched.paymentDetails?.paymentMethodsAccepted && <div className="text-red-500 text-xs italic">{errors.paymentDetails?.paymentMethodsAccepted}</div>}
                            </div>

                            {/* Cancellation Policy */}
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="cancellationPolicy">
                                    Cancellation Policy
                                </label>
                                <textarea
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    name="cancellationPolicy"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.cancellationPolicy}
                                />
                                {errors.cancellationPolicy && touched.cancellationPolicy && <div className="text-red-500 text-xs italic">{errors.cancellationPolicy}</div>}
                            </div>

                            {/* Terms and Conditions */}
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="termsAndConditions">
                                    Terms and Conditions
                                </label>
                                <textarea
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    name="termsAndConditions"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.termsAndConditions}
                                />
                                {errors.termsAndConditions && touched.termsAndConditions && <div className="text-red-500 text-xs italic">{errors.termsAndConditions}</div>}
                            </div>

                            {/* Privacy Policy */}
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="privacyPolicy">
                                    Privacy Policy
                                </label>
                                <textarea
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    name="privacyPolicy"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.privacyPolicy}
                                />
                                {errors.privacyPolicy && touched.privacyPolicy && <div className="text-red-500 text-xs italic">{errors.privacyPolicy}</div>}
                            </div>

                            {/* Additional Information */}
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="additionalInformation">
                                    Additional Information
                                </label>
                                <textarea
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    name="additionalInformation"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.additionalInformation}
                                />
                                {errors.additionalInformation && touched.additionalInformation && <div className="text-red-500 text-xs italic">{errors.additionalInformation}</div>}
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
                                className={`w-full bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${isBtnLoading ? 'cursor-not-allowed' : ''}`}
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

export default PartnerNonAPIDetailsFormCreate;
