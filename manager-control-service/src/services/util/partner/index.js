import { axiosInstance } from '../../api';
const BASE_PATH = '/partner_non_API_details';
const BASE_PATH_API = '/partner_API_details';

//add new non api partner details
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

//add new api partner details
export let addNewPartnerDetailsApi = async (details) => {
    try {
        let value = await axiosInstance.post(BASE_PATH_API + '/create_partner_API_details',{
            hotelName: details.hotelName,
            brandName: details.brandName,
            owningCompanyName: details.owningCompanyName,
            businessIdentificationNumber: details.businessIdentificationNumber,
            taxIdentificationNumber: details.taxIdentificationNumber,
            contactPerson: details.contactPerson,
            emailAddress: details.emailAddress,
            phoneNumber: details.phoneNumber,
            businessAddress: details.businessAddress,
            region: details.region,
            country: details.country,
            socialMediaLinks: details.socialMediaLinks,
            apiIntegration: details.apiIntegration,

        })
        return value;
    } catch (error) {
        return error
    }
}