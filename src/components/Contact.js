import React from 'react'
export default function Contact() {
  return (
    <div className='text-silver'>
      <div>
        <img className='h-8 sm:h-24' src={require('../Assets/Browser.png')} alt='Web' />
        <a href="http://discordapp.com/users/mr_aks"
                ><img className='h-8 sm:h-24' src={require('../Assets/Discord.png')} alt='Web' /></a>
        <img className='h-8 sm:h-24' src={require('../Assets/Linkdin.png')} alt='Web' />
        <a href="mailto:akedarshenoy@gmail.com" 
                ><img className='h-8 sm:h-24' src={require('../Assets/Mail.png')} alt='Web' /></a>
        <img className='h-8 sm:h-24' src={require('../Assets/Telegram.png')} alt='Web' />
        <a href="https://linkedin.com/in/argodu-kedar-shenoy" ><img className='h-8 sm:h-24' src={require('../Assets/Twiter.png')} alt='Web' /></a>
      </div>
    </div>
  )
}
