import React from 'react';

interface inputProps {
    label: string
    type: string
}

function DefaultInput({label, type}:inputProps) {
    return (
        <div className="relative z-0 w-full mb-6 group">
            <input type={type} name="floating_name" id={label}
                   className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-white appearance-none dark:text-white dark:border-white dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                   placeholder=" " required/>
            <label htmlFor={label}
                   className="peer-focus:font-medium absolute text-sm text-white dark:text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">{label}
            </label>
        </div>
    );
}

export default DefaultInput;