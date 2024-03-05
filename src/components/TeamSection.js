import React from 'react'
import TeamMemberCard from './TeamMemberCard'
const TeamSection = () => {
  const TeamMembers=[{
    name:"John Smith",
    image:"https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?cs=srgb&dl=pexels-linkedin-sales-navigator-2182970.jpg&fm=jpg",
    designation:"Frontend Lead",
    text:"Est magna velit minim esse sint magna et ut. Tempor commodo ut eiusmod excepteur ipsum dolor laborum nostrud laboris magna. Et commodo officia fugiat deserunt velit. Incididunt irure aliqua ut eu non sunt enim anim et velit. Deserunt est ex nulla in quis labore dolor magna id ad pariatur incididunt ad.Ullamco consequat nostrud nulla enim dolor non cupidatat est. Proident fugiat ullamco elit sint deserunt do. Culpa fugiat tempor nisi velit ex incididunt consequat aute consequat est minim."
  },{
    name:"Ellina Williams",
    image:"https://photographypro.com/wp-content/uploads/2017/08/portrait-photography-focal-length-50mm-1.jpg",
    designation:"Backend Lead",
    text:"Minim officia pariatur exercitation ea ipsum enim aliquip nisi. Proident ipsum consectetur amet occaecat aliqua do consectetur nisi commodo quis. Duis eiusmod elit laborum elit. Cupidatat incididunt mollit culpa duis duis laboris deserunt.Ullamco consequat nostrud nulla enim dolor non cupidatat est. Proident fugiat ullamco elit sint deserunt do. Culpa fugiat tempor nisi velit ex incididunt consequat aute consequat est minim."
  
  },{name:"Manish Kalyan",
  image:"https://cc-prod.scene7.com/is/image/CCProdAuthor/portrait-photography_P6b_379x392?$pjpeg$&jpegSize=100&wid=378",
  designation:"Frontend Developer",
  text:"Irure ipsum enim aute ullamco quis quis cupidatat sit ex eiusmod veniam. Voluptate pariatur commodo eiusmod eu exercitation cillum consequat amet duis laboris. Anim eu occaecat reprehenderit reprehenderit ut adipisicing in ipsum dolore enim fugiat sunt excepteur nulla. Cupidatat consectetur dolore Lorem qui irure ipsum incididunt.Ullamco consequat nostrud nulla enim dolor non cupidatat est. Proident fugiat ullamco elit sint deserunt do. Culpa fugiat tempor nisi velit ex incididunt consequat aute consequat est minim."
}]
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