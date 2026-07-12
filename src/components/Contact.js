// import React from 'react'
// export default function Contact() {
//   return (
//     <div  className='flex items-center justify-center h-screen px-2 sm:px-0' >
//       <div style={{display:'flex',justifyContent:'space-around',width:'80%'}}>
//          <div><a href='#' style={{display:'flex',flexDirection:'column',alignItems:'center'}}><img className='h-8 sm:h-24' src={require('../Assets/Browser.png')} alt='Web' /><p style={{color:'silver', fontFamily:'monospace',fontSize:'1rem'}}>Website</p> </a></div>
//        <div> <a href="http://discordapp.com/users/mr_aks"
//         ><img className='h-8 sm:h-24' src={require('../Assets/Discord.png')} alt='Web' /><p style={{color:'silver', fontFamily:'monospace',fontSize:'1rem'}}>Discord</p></a></div>
//        <div> <a href='#'><img className='h-8 sm:h-24' src={require('../Assets/Linkdin.png')} alt='Web' /><p style={{color:'silver', fontFamily:'monospace',fontSize:'1rem'}}>Linkdin</p></a></div>
//         <div><a href="mailto:akedarshenoy@gmail.com"
//         ><img className='h-8 sm:h-24' src={require('../Assets/Mail.png')} alt='Web' /><p style={{color:'silver', fontFamily:'monospace',fontSize:'1rem'}}>Email</p></a></div>
//        <div> <a href='#'><img className='h-8 sm:h-24' src={require('../Assets/Telegram.png')} alt='Web' /><p style={{color:'silver', fontFamily:'monospace',fontSize:'1rem'}}>Telegram</p></a></div>
//        <div> <a href="https://linkedin.com/in/argodu-kedar-shenoy" ><img className='h-8 sm:h-24' src={require('../Assets/Twiter.png')} alt='Web' /><p style={{color:'silver', fontFamily:'monospace',fontSize:'1rem'}}>Twiter</p></a></div>
//       </div>
//     </div>
//   )
// }


import React from 'react'

export default function Contact() {
  const contactItems = [
    { href: 'https://kedarshenoy.pages.dev', img: 'Browser.png', alt: 'Web', label: 'Website' },
    { href: 'http://discordapp.com/users/mr_aks', img: 'Discord.png', alt: 'Web', label: 'Discord' },
    { href: 'https://linkedin.com/in/argodu-kedar-shenoy', img: 'Linkdin.png', alt: 'Web', label: 'Linkdin' },
    { href: 'mailto:akedarshenoy@gmail.com', img: 'Mail.png', alt: 'Web', label: 'Email' },
    { href: 'https://t.me/AKS7899', img: 'Telegram.png', alt: 'Web', label: 'Telegram' },
    { href: 'https://x.com/shenoykedara', img: 'Twiter.png', alt: 'Web', label: 'Twiter' }
  ]

  return (
    <div className='flex items-center justify-center h-screen px-2 sm:px-0'>
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .contact-item {
          animation: fadeInUp 0.8s ease-out forwards;
          opacity: 0;
        }
        
        .contact-item:nth-child(1) { animation-delay: 0.1s; }
        .contact-item:nth-child(2) { animation-delay: 0.2s; }
        .contact-item:nth-child(3) { animation-delay: 0.3s; }
        .contact-item:nth-child(4) { animation-delay: 0.4s; }
        .contact-item:nth-child(5) { animation-delay: 0.5s; }
        .contact-item:nth-child(6) { animation-delay: 0.6s; }
        
        .contact-item a {
          transition: transform 0.3s ease;
        }
        
        .contact-item a:hover {
          transform: translateY(-5px);
        }
      `}</style>
      
      <div className="grid grid-cols-2 gap-y-16 gap-4 sm:flex sm:justify-around w-full sm:w-4/5 ">
        {contactItems.map((item, index) => (
          <div key={index} className="contact-item flex justify-center">
            <a href={item.href} style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
              <img className='h-8 sm:h-24' src={require(`../Assets/${item.img}`)} alt={item.alt} />
              <p style={{color:'silver', fontFamily:'monospace', fontSize:'1rem'}}>{item.label}</p>
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}