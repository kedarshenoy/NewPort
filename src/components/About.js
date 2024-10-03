import React from 'react'

export default function About() {
  return (
    <div className='text-3xl font-bold' style={{color:'silver'}}>About
        <>
       
       <section className="firstabout " >
     
       <div className="leftmainabout">
       <img className="profabout" src= { require("../Assets/profile.jpg")} alt="" />
       <h1 style={{marginTop:'10px'}}>A Kedar Shenoy</h1>
       <h3>Developer</h3>
       <h5>Bengaluru</h5>
       <div class="icons">
        <a href="https://github.com/kedarshenoy" target='blank'>
           <div class="layer">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span class="fab fa-github"aria-hidden="true"></span>
           </div>
           <div class="text">
              GitHub
           </div>
        </a>
        <a href="https://twitter.com/shenoykedara" target='blank'>
           <div class="layer">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span class="fab fa-twitter"></span>
           </div>
           <div class="text">
              Twitter/X
           </div>
        </a>
        <a href="mailto:akedarshenoy@gmail.com">
           <div class="layer">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span class="fa fa-envelope"></span>
           </div>
           <div class="text">
              Email
           </div>
        </a>
        <a href="https://linkedin.com/in/argodu-kedar-shenoy" target='blank'>
           <div class="layer">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span class="fab fa-linkedin-in"></span>
           </div>
           <div class="text">
              Linkedin
           </div>
        </a>
        
     </div>
     </div> 
     <div className="rightmainabout container">
     <Typed strings={[`<span > Hi I am</span><b > A Kedar Shenoy </b><div > I'm  a passionate <b className='highlate'>Web Developer</b> with a Bachelor's degree in <b className='highlate'>Computer Science Engineering</b>. As a graduate with a keen interest in technology, I strive to <b className='highlate'>adapt and innovate </b> in the ever-evolving world of web development.I consider myself a <b className='highlate'>flexible and responsible</b> individual, dedicated to delivering high-quality solutions to meet the needs of clients and users alike. With a commitment to continuous learning, I am always enthusiastic about <b className='highlate'>acquiring new skills and expanding my knowledge</b> base.
My journey as a web developer has been marked by<b className='highlate'> curiosity, creativity, and a drive for excellence.</b> I'm eager to collaborate on exciting projects, tackle new challenges, and contribute meaningfully to the dynamic realm of technology.
                    </div>`]} typeSpeed={1} backSpeed={50} showCursor={false} >
                   {/* <b className='skilpoint'></b> */}
                   <div></div>
               </Typed>
                   



       <div className="sidehead"><b> Skils:</b></div>
       <div className= 'sidepoints'><span className='sidemainpoints'> Client Side Technologies: </span>
                   <b className='skilpoint'>HTML, CSS, JavaScript, React, TypeScript</b>
       </div>

       <div className= 'sidepoints'><span className='sidemainpoints'>Server Side Technologies:  </span>
                   <b className='skilpoint'> Nodejs, Express, PHP</b>
       </div>

       <div className= 'sidepoints'><span className='sidemainpoints'>Database & ORM: </span>
                   <b className='skilpoint'> SQL, MongoDB, Prisma, PostgreSQL</b>
       </div>

       <div className= 'sidepoints'><span className='sidemainpoints'> Version Control:  </span>
                   <b className='skilpoint'>GitHub </b>
       </div>

       <div className= 'sidepoints'><span className='sidemainpoints'> Additional Tools:  </span>
                   <b className='skilpoint' >JWT, Zod </b>
       </div>

       <div className= 'sidepoints'><span className='sidemainpoints'> Data Formats:  </span>
                   <b className='skilpoint' > JSON</b>
       </div>

       <div className= 'sidepoints'><span className='sidemainpoints'> Other Technologies: </span>
                   <b className='skilpoint' >Postman, Pivotal Tracker, Cloudflare, Docker </b>
       </div>

       <div className="sidehead"><b>Experince:</b></div>

       
       <div className="sidemainpoints sidepoints companybox">
        <span><img className='compimg' src={require('../Assets/Comp/Connectia.png')} alt=''></img></span> 
        <div className='companyhead' ><b> Full-Stack Web Developer Intern: </b><br/> <span className="compname"> Connectia Technologies</span></div> 
       </div>
         
       
                   <div className="points">● Collaborated with team to build projects like <b>Kateel temple App, Chitfund Association App</b> <br/>
               ●Built websites using <b>HTML, CSS, and Bootstrap.</b><br/>
               ●Included interactive features using <b>PHP </b>for enhanced user experience.<br/>
               ●Implemented <b>SQL queries to manage and manipulate databases,</b><br/>
               ●Conducted data flow analysis through <b>Data Flow Diagrams</b> (DFD) </div>
{/* first one ends here */}
       <div className="sidemainpoints sidepoints companybox">
      <span> <img className='compimg' src={require('../Assets/Comp/edureka.jpg')} alt=''></img></span>
       <span className='companyhead' > <b>  Full-Stack Web Developer Internship Program </b><br/> <span className="compname"> Edureka</span>
       </span> 
       </div>
       
                   <div className="points">●learned to build web-application using <b>MERN</b> stack <br/>
               ●Built front-end by deviding it into <b>React-Components</b> and maintained the structure of code using <b>MVC</b> architecture<br/>
               ●Backend was purely devloped using <b>Nodejs</b> and <b>ExpressJS </b>also followed <b>MVC</b> architecture<br/>
               ●Used <b>Mongoose</b> to connect to the <b>MongoDB</b><br/>
               ●Included <b>Payment Gateway</b> and custom <b>API</b>s <br/>
               ●Hosted on Internet using <b>render</b><br/>
               ●learned to use Technologies like <b>Pivotal tracker, Postman</b> </div>

               {/* second one ends here */}

       {/* <div className="points">~learned to build web-application using <b>MERN</b> stack.</div>
       <div className="points">~Built front-end by deviding it into <b>React-Components</b> and maintained the structure of code using <b>MVC</b> architecture</div>
       <div className="points">~Backend was purely devloped using <b>Nodejs</b> and <b>ExpressJS </b>also followed <b>MVC</b> architecture</div>
       <div className="points">~Used <b>Mongoose</b> to connect to the <b>MongoDB</b></div>
       <div className="points">~Included <b>Payment Gateway</b> and custom <b>API</b>s</div>
       <div className="points">~Hosted on Internet using </div>
       <div className="points">~learned to use Technologies like <b>Pivotal tracker, Postman</b></div> */}

     <div className="sidemainpoints sidepoints companybox">
        <span><img className='compimg' src={require('../Assets/Comp/torsecure.png')} alt=''></img></span> 
        <div className='companyhead' > <b> Full-Stack Web Developer Intern: </b><br/> <span className="compname">Torsecure</span></div> 
       </div>
       
                   <div className="points">● Collaborating with the team to develop projects such as the <b>Branch Selector</b><b>Torsecure</b>.
               <br/>
               ● Utilizing the <b>MERN</b> stack to construct dynamic and responsive websites.<br/>
               ● Enhancing user experience by refining design elements and integrating various <b>APIs</b><br/>
               ●Optimizing applications for improved <b> Search Engine Optimization (SEO) </b>performance.<br/>
               ●Leveraging <b>Cloudflare Workers for serverless functionality</b> to handle edge computing tasks<br/>
               ●Conducting code reviews and implementing best practices to ensure high-quality development standards </div>

       <div className="langdiv">
        <div className="sidehead"><b>Projects:</b></div>
        
                   <div className="sidemainpoints sidepoints">Leetcode <br/> Zomato<br/>Paytm<br/>Coin Collection<br/> Portfolio<br/> </div>
       </div>


       <div className="langdiv "><div className="sidehead"><b>Languages:</b></div>
       
                   <div className="sidemainpoints sidepoints">Konkani <br/> Kannada<br/> Hindi<br/>English </div>

       </div>
        
        {/* <div className="langdiv"><div className="sidehead"><b>Hobies:</b></div>
        <Typed
               strings={[`Watching Documentaries <br/> Driving<br/> Agriculture<br/>Fitness`
                 ]}
                   typeSpeed={30}
                   backSpeed={50}
                   showCursor={false}

                   // attr="placeholder"
                   >
                   <div className="sidemainpoints sidepoints"> </div>
               </Typed>

       </div> */}

       


       {/* <div className="sidehead"> <b>Carrer Objective</b></div> */}

                   <div className="carrer">Looking Forword to work with organization where my skils will grow.Thank you for visiting, and I invite you to explore my porject and certifications to learn more about my work and experiences. </div>

     {/* <div className="carrer">Looking Forword to work with organization where my skils will grow.<span id="element"> </span></div> */}


     

     </div>

     
   </section>
      
      
      </>
    </div>
  )
}
