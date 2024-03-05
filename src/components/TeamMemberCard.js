import React from 'react';

const TeamMemberCard = ({ image, name, designation, text }) => (
  <div className="bg-blue-100 rounded-lg p-6 flex m-2 justify-between items-center">
    <div>
      <img src={image} alt={name} className="w-[6rem] h-[7rem] rounded-md mb-4" />
      <h3 className="text-l font-bold">{name}</h3>
      <p className="text-gray-500">{designation}</p>
    </div>
    <div className="flex-1 ml-8  text-gray-800">
      <p className='items-center'>{text}</p>
    </div>
  </div>
);

export default TeamMemberCard;
