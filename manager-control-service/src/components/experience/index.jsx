import { getAllExperiences } from '../../services/util/experience';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ViewExperience = () => {
    const [experiences, setExperiences] = useState([]);

    useEffect(() => {
        fetchExperiences();
    }, []);

    const fetchExperiences = async () => {
        let response = await getAllExperiences();
        if (response.data && response.data.success == true) {
            setExperiences(response.data.experiences);
        } else {

        }
    }



    return (
        <>
            <div className="flex items-center justify-center mt-20">
                <div className="w-full max-w-md bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <h1 className="text-2xl font-semibold text-gray-700 mb-10">View Experience</h1>
                </div>
            </div>
        </>
    );
};

export default ViewExperience;