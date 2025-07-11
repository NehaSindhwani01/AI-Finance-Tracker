import React from 'react';

const AuthLayout = ({ children }) => {
    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex items-center justify-center px-4  pb-16">
            <div className="w-full max-w-md bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6 sm:p-8 backdrop-blur-md bg-opacity-80 dark:bg-opacity-60">
                {children}
            </div>
        </div>
    );
};

export default AuthLayout;
