import React from 'react'
import TeamMemberCard from './TeamMemberCard'
import { TeamMembers } from '../utils/constants/TeamMembersDetails'
const TeamSection = () => {
  
  return (
    <div className='w-[65%] bg-white m-6'>
        <section className='p-4 text-gray-500 font-semibold'>
        <h3 className='font-bold my-4 text-2xl text-black'>Team</h3>
        <p> Mollit tempor nulla excepteur ut consequat reprehenderit culpa amet deserunt id. Non duis veniam veniam consequat deserunt et ut voluptate commodo. Qui ullamco duis sint occaecat voluptate culpa Lorem laboris cillum. Velit dolor adipisicing id amet duis elit sunt labore fugiat occaecat. </p>
        </section>
        {TeamMembers.map(({name,image,designation,text},index)=>{
          return <TeamMemberCard key={index} name={name} image={image} designation={designation} text={text}/>
        })}
        
        
    </div>
  )
}

export default TeamSection