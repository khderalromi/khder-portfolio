import mad from '../../assests/images/mad.jpg';
import three from '../../assests/images/three.gif';
import two from '../../assests/images/two.gif';
import python from '../../assests/images/python-2.gif';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect } from 'react';
import { Navigate } from 'react-router';
import AOS from "aos";
import "aos/dist/aos.css";
import { faBootstrap, faCss3, faFacebook, faGithub, faGoogle, faHtml5, faJs, faLinkedin, faReact } from '@fortawesome/free-brands-svg-icons';
import { faBolt, faGift, faLaptop } from '@fortawesome/free-solid-svg-icons';



const Main=(props)=>{
    
    useEffect(() => {
        AOS.init({
          once: false,
          duration: 650,
          
        });
      }, []);

    return(
        <div>
            <div className='w-full bg-gradient-to-r from-cyan-500 to-white flex gap-5 md:gap-7 justify-between'>
                <div className=" w-1/2 flex flex-col gap-5 md:gap-10 ">
                    <div className='mt-6 md:mt-12'>
                        <strong className="ml-4 md:ml-14 lg:ml-24 font-Sassy text-white text-lg md:text-2xl lg:text-5xl">Khder Al_Romi</strong>
                    </div>
                    <div className="magrin  text-white "  data-aos='fade-right'>
                        <strong className=' text-sm md:text-lg lg:text-3xl'>Hi, I'm Khder Alromi</strong>
                    </div>

                    <div  data-aos='fade-right'>
                        <p className="magrin text-white text-small sm:text-sm md:text-lg lg:text-xl ">I am a Front End web developer with experience<br></br>
                            in web applications using Reactjs and different<br></br>
                            programming languages
                        </p>

                    </div>
                        
                    <div className="magrin mb-6 md:mb-12 flex gap-2 md:gap-5">
                        <div className='rounded-full border-2  bg-red-500'>
                            <FontAwesomeIcon bounce  className='rounded-full p-1.5 sm:p-3text-lg sm:text-3xl ' icon={faFacebook}/>
                        </div>
                        
                        <div className='rounded-full border-2  bg-red-500'>
                            <FontAwesomeIcon bounce  className=' p-1.5 sm:p-3text-lg sm:text-3xl '  icon={faLinkedin}/>
                        </div>
                        
                        <div className='rounded-full border-2  bg-red-500'>
                            <FontAwesomeIcon  bounce className='rounded-full p-1.5 sm:p-3text-lg sm:text-3xl '  icon={faGoogle}/>
                        </div>
                    </div>
                </div>
                <div className=' w-1/2 '>
                    <img className='size-10/12' src={three}></img>
                </div>
            </div>

            {/*****what I can do *****/}
            <div className='text-center mt-2 mb-12 '>
                <strong className='font-Roboto md:text-2xl'>What I do</strong>
                <p className='text-small sm:text-sm md:text-lg lg:text-xl text-slate-600' >CRAZY FRONT END DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK</p>
            </div>
            <div className="w-10/12 flex ml-5 mr-5 md:ml-10">

                <div className='w-1/2' data-aos='fade-right'>
                    <img src={two}></img>
                </div>


                <div className='w-1/2 flex flex-col gap-1 md:gap-4'  data-aos='fade-left'>
                    <div className='text-center'>
                        <p className='text-small sm:text-sm md:text-base font-Righteous'>Front End Development</p>
                    </div>

                    <div className='grid grid-cols-4 grid-rows-2 gap-1'>
                            <FontAwesomeIcon  beat className='rounded-full border-2 bg-white p-1 sm:p-2 text-sm sm:text-2xl '
                                icon={faHtml5} 
                                style={{color: "#cb1531",}} 
                            />

                            <FontAwesomeIcon  beat className='rounded-full border-2 bg-white p-1 sm:p-2 text-sm sm:text-2xl  '
                                icon={faCss3} 
                                style={{color: "#4712d9",}} 
                            />


                            <FontAwesomeIcon  beat className='rounded-full border-2 bg-white p-1 sm:p-2 text-sm sm:text-2xl '
                                icon={faJs} 
                                style={{color: "#FFD43B",}}
                            />

                            <FontAwesomeIcon  beat className='rounded-full border-2 bg-white p-1 sm:p-2 text-sm sm:text-2xl '  
                                icon={faReact}
                                style={{color: "#74C0FC",}} 
                            />

                            <FontAwesomeIcon  beat className='rounded-full border-2 bg-white p-1 sm:p-2 text-sm sm:text-2xl  '  
                                icon={faBootstrap} 
                                style={{color: "#B197FC",}}
                            />

                            <FontAwesomeIcon  beat className='rounded-full border-2 bg-white p-1 sm:p-2 text-sm sm:text-2xl  '  
                                icon={faGithub} 
                            />
                    </div>

                    <div className='text-slate-500 flex flex-col gap-2 '>
                        <div className=''>
                            <p className='text-xSmall sm:text-small  md:text-xs lg:text-sm '>
                                <FontAwesomeIcon icon={faBolt} style={{color: "#FFD43B",}}  />
                                Building responsive SPA in React.js 
                            </p>
                        </div>

                        <div>
                            <p className='text-xSmall sm:text-small  md:text-xs lg:text-sm ml-2'>
                                <FontAwesomeIcon icon={faBolt} style={{color: "#FFD43B",}}  />
                                Building Dashboards using React.js 
                            </p>
                        </div>

                        <div>
                            <p className='text-xSmall sm:text-small  md:text-xs lg:text-sm ml-5' >
                                <FontAwesomeIcon icon={faBolt} style={{color: "#FFD43B",}}  />
                                Dealing with API requests 
                            </p>
                        </div>

                    </div>

                </div>
                   
            </div>


            {/*******Experience ******/}
            <div className="magrin  md:mt-10 mb-12 ">
                <div className="flex items-center gap-2">
                    <FontAwesomeIcon className='rounded-full border-2 bg-white p-1 sm:p-2 text-sm sm:text-2xl '
                        icon={faGift} 
                        style={{color: "#74C0FC",}} 
                    />
                    <strong className='font-Righteous text-cyan-500'>Experience</strong>
                </div>
                <div className='shadow-lg flex flex-col gap-2 p-3 md:p-7 w-4/5 md:w-3/5 ml-10 md:ml-28'>
                    <div className=' text-center text-slate-600'>
                        <img className='rounded-full size-20 md:size-28 ml-20 md:ml-32 lg:ml-36' src={mad}></img>
                        <strong>Mad_Solution</strong>
                        <p>Front End Developer</p>
                        <p>Mar.2024 _ May.2024/</p>
                    </div>

                    <p className='text-slate-500 text-xSmall sm:text-small md:text-xs lg:text-sm ml-2'>Internship front end developer with many projects and<br></br> 
                        big team. displayed a high level of skill dedication
                    </p>

                    <ul className='text-slate-500 text-xSmall sm:text-small  md:text-xs lg:text-sm ml-2'>
                        <li>React</li>
                        <li>JavaScript</li>
                        <li>Tailwind Css</li>
                        <li>Bootstrap</li>
                        <li>Css</li>
                        <li>git/ GitHub</li>
                    </ul>
                </div>
            </div>



            
            {/*******Projects******/}
            <div className="magrin  md:mt-10 mb-12 ">
                <div className="flex items-center gap-2">
                    <FontAwesomeIcon className='rounded-full border-2 bg-white p-1 sm:p-2 text-sm sm:text-2xl '
                        icon={faLaptop} 
                        style={{color: "#74C0FC",}} 
                    />
                    <strong className='font-Righteous text-cyan-500'>Projects</strong>
                </div>

                <div className='grid grid-cols-2 grid-rows-2 gap-4 '>
                    
                    <div className='shadow-lg flex flex-col gap-2 p-3 md:p-7ml-10 md:ml-28' data-aos='zoom-in'>
                        <div className=' text-center text-slate-600'>
                            <img></img>
                            <a href='https://e-commerce-h5xz.onrender.com' target='blank' >
                                <strong className='text-cyan-400'>E-Commerce</strong>
                            </a> 
                        </div>

                        <p className='text-slate-500 text-xSmall sm:text-small md:text-xs lg:text-sm ml-2'>
                            E-commerce website with register form and notification<br></br>
                            with data stored in firebace and API to fetck products
                        </p>

                        <ul className='text-slate-500 text-xSmall sm:text-small  md:text-xs lg:text-sm ml-2'>
                            <li>React</li>
                            <li>Redux Toolkit</li>
                            <li>React Hook Form</li>
                            <li>React Toastify</li>
                            <li>Tailwind Css</li>
                        </ul>
                    </div>

                            
                    {/******cars ****/}
                    
                    <div className='shadow-lg flex flex-col gap-2 p-3 md:p-7 ml-10 md:ml-28' data-aos='zoom-in'>
                        <div className=' text-center text-slate-600'>
                            <img></img>
                            <a href='https://car-3kh.onrender.com' target='blank' >
                                <strong className='text-cyan-400'>Cars Gallery</strong>
                            </a>
                            
                        </div>

                        <p className='text-slate-500 text-xSmall sm:text-small md:text-xs lg:text-sm ml-2'>
                            Cars Gallery is a website show some cars<br></br>
                            and allow to buy car ,show details ....<br></br>
                            with Api to fetch cars
                        </p>

                        <ul className='text-slate-500 text-xSmall sm:text-small  md:text-xs lg:text-sm ml-2'>
                            <li>React</li>
                            <li>Context Api</li>
                            <li>Css Classes</li>
                        </ul>
                    </div>

                    {/******burger builder ****/}
                    
                    <div className='shadow-lg flex flex-col gap-2 p-3 md:p-7ml-10 md:ml-28' data-aos='zoom-in'>
                        <div className=' text-center text-slate-600'>
                            <img></img>
                            <a href='https://burgerbuilder-6.onrender.com' target='blank'>
                               <strong className='text-cyan-400'>Burger Builder</strong> 
                            </a>
                            
                        </div>

                        <p className='text-slate-500 text-xSmall sm:text-small md:text-xs lg:text-sm ml-2'>
                            small web app allow to you to make your burger<br></br>
                            and order your burger
                        </p>

                        <ul className='text-slate-500 text-xSmall sm:text-small  md:text-xs lg:text-sm ml-2'>
                            <li>React</li>
                            <li>Redux Toolkit</li>
                            <li>React Hook Form</li>
                            <li>Css Classes</li>
                        </ul>
                    </div>

                    {/*****image ****/}
                    <img className='size-10/12' src={python}></img>

        
                </div>
            </div>


        </div>
       
    )

}

export default Main;