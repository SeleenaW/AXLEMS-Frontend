import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import * as yup from 'yup';
import { Formik } from 'formik';
import EmojiPicker from 'emoji-picker-react';
import { addNewExperience } from '../../../services/util/experience';

const AddExperience = () => {
    const [showPicker, setShowPicker] = useState(false);
    const [selectedIcon, setSelectedIcon] = useState('');
    const [isBtnLoading, setIsBtnLoading] = useState(false);

    const schema = yup.object().shape({
        name: yup.string().required('Name is required').max(50, 'Name must be at most 50 characters'),
        description: yup.string().required('Description is required').max(100, 'Description must be at most 100 characters'),
    });

    const onSubmit = async (values) => {
        setIsBtnLoading(true);
        let response = await addNewExperience(values.name, values.description, selectedIcon);

        if (response.data.success == true) {
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
        }
        else {
            console.error(response.data.message);
            setIsBtnLoading(false);
        }
    };

    const handleEmojiClick = (emojiData) => {
        if (emojiData && emojiData.emoji) {
            setSelectedIcon(emojiData.emoji);
        } else {
            console.error("No emoji selected!");
        }
        setShowPicker(false);
    };

    return (
        <>

            <div className="flex items-center justify-center mt-20">
                <div className="w-full max-w-md bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <h1 className="text-2xl font-semibold text-gray-700 mb-10">Add Experience</h1>
                    <Formik
                        initialValues={{ name: '', description: '', icon: selectedIcon }}
                        validationSchema={schema}
                        onSubmit={(values) => {
                            // Pass the selected icon into the form values
                            onSubmit({ ...values, icon: selectedIcon });
                        }}
                    >
                        {({
                            values,
                            errors,
                            touched,
                            handleChange,
                            handleBlur,
                            handleSubmit,
                            isSubmitting,
                        }) => (
                            <form onSubmit={handleSubmit}>
                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                                        Name
                                    </label>
                                    <input
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        type="text"
                                        name="name"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.name}
                                    />
                                    {errors.name && touched.name && <div className="text-red-500 text-xs italic">{errors.name}</div>}
                                </div>

                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                                        Description
                                    </label>
                                    <input
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        type="text"
                                        name="description"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.description}
                                    />
                                    {errors.description && touched.description && <div className="text-red-500 text-xs italic">{errors.description}</div>}
                                </div>

                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="icon">
                                        Icon
                                    </label>
                                    <div className="flex items-center">
                                        {selectedIcon && <span className="text-2xl">{selectedIcon}</span>}
                                        <button
                                            type="button"
                                            className="ml-2 bg-gray-300 rounded p-2"
                                            onClick={() => setShowPicker(!showPicker)}
                                        >
                                            ℹ️
                                        </button>
                                    </div>
                                    {showPicker && (
                                        <div className="absolute z-10">
                                            <EmojiPicker onEmojiClick={handleEmojiClick} />
                                        </div>
                                    )}
                                </div>

                                <div className="flex items-center justify-center">
                                    <button
                                        className="bg-blue-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline flex items-center justify-center"
                                        type="submit"
                                        disabled={isBtnLoading}
                                    >
                                        {isBtnLoading ? (
                                            <svg
                                                className="animate-spin h-5 w-5 mr-3"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                            >
                                                <circle
                                                    className="opacity-25"
                                                    cx="12"
                                                    cy="12"
                                                    r="10"
                                                    stroke="currentColor"
                                                    strokeWidth="4"
                                                ></circle>
                                                <path
                                                    className="opacity-75"
                                                    fill="currentColor"
                                                    d="M4 12a8 8 0 018-8V0c4.418 0 8 3.582 8 8s-3.582 8-8 8v-4a4 4 0 00-4-4H4z"
                                                ></path>
                                                Submit
                                            </svg>
                                        ) : (
                                            "Submit"
                                        )}
                                    </button>

                                </div>
                            </form>
                        )}
                    </Formik>
                </div>
            </div>
        </>
    );
};

export default AddExperience;
