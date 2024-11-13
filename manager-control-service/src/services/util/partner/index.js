import { axiosInstance } from '../../api';
const BASE_PATH = '/partner_non_API_details';


export let addNewPartnerDetailsNonApi = async (values) => {
    try {
        let value = await axiosInstance.post(BASE_PATH + '/createPartnerNonAPIDetails', {
            hotelName: values.hotelName,
            contactPerson: values.contactPerson,
            emailAddress: values.emailAddress,
            phoneNumber: values.phoneNumber,
            businessAddress: values.businessAddress,
            country: values.country,
            hotelDetails: values.hotelDetails,
            servicePreferences: values.servicePreferences
        })
        return value;
    } catch (error) {
        return error
    }
}