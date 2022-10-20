import React from 'react'

const SocialLink = ({icon}) => {
  return (
    <>
      <img 
        src={icon} 
        alt="icon/social" 
        className='w-8 h-8 flex items-center cursor-pointer z-10
        md:w-6 md:h-6 sm:w-5 sm:h-5 transition-all duration-200
        hover:scale-150' 
      />
    </>
  )
}

export default SocialLink