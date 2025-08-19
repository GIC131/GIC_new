'use client'
import React from 'react';

const ProfilePicture = () => {
  return (
    <div className="flex justify-center my-8">
      <img
        src="/images/female.jpg"
        alt="Profile"
        className="w-40 h-40 rounded-full object-cover shadow-lg border-4 border-gray-300"
        loading="lazy"
      />
    </div>
  );
};

export default ProfilePicture;
