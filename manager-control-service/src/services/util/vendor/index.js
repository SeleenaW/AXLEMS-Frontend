import { axiosInstance } from '../../api';
const BASE_PATH = '/vendor_non_API_details';


export let addNewVendorDetailsNonApi = async (values) => {
    try {
        let value = await axiosInstance.post(BASE_PATH + '/createVendorNonAPIDetails', {
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