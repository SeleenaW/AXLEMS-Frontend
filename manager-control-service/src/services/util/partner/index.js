import { axiosInstance } from '../../api';
const BASE_PATH = '/partner_non_API_details';


export let addNewPartnerDetailsNonApi = async (hotelDetails) => {
    try {
        let value = await axiosInstance.post(BASE_PATH + '/create_partner_non_API_details', {
            hotelName: hotelDetails.hotelName,
            businessRegistrationNumber: hotelDetails.businessRegistrationNumber,
            taxIDOrVatNumber: hotelDetails.taxIDOrVatNumber,
            brandOrChainName: hotelDetails.brandOrChainName,
            owningCompanyName: hotelDetails.owningCompanyName,
            contactPerson: hotelDetails.contactPerson,
            emailAddress: hotelDetails.emailAddress,
            phoneNumber: hotelDetails.phoneNumber,
            businessAddress: hotelDetails.businessAddress,
            region: hotelDetails.region,
            country: hotelDetails.country,
            accreditationAndAwards: hotelDetails.accreditationAndAwards,
            media: hotelDetails.media,
            hotelDetails: hotelDetails.hotelDetails,
            servicePreferences: hotelDetails.servicePreferences,
            paymentDetails: hotelDetails.paymentDetails,
            cancellationPolicy: hotelDetails.cancellationPolicy,
            termsAndConditions: hotelDetails.termsAndConditions,
            privacyPolicy: hotelDetails.privacyPolicy,
            additionalInformation: hotelDetails.additionalInformation,
        })
        return value;
    } catch (error) {
        return error
    }
}