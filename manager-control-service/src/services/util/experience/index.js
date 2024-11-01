import { axiosInstance } from '../../api';
const BASE_PATH = '/experiences';

//signUp New Experience API Call
export let addNewExperience = async (name, description, selectedIcon ) => {
    try {
        let value = await axiosInstance.post(BASE_PATH + '/add_new_experience', {
            name: name,
            description: description,
            icon: selectedIcon,
            status: 'Active'
        })
        return value;
    } catch (error) {
        return error
    }
}