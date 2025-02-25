import React, { useState, useEffect } from 'react'
import "odometer/themes/odometer-theme-default.css"
import "./Facts.css"
import Odometer from "react-odometerjs"

const Facts = () => {
    const [experience,setExperience] = useState(0);
    const [Projects,setProjects] = useState(0);
    const [Clients,setClients] = useState(0);
    useEffect(()=>{
        const timeoutId =setTimeout(()=> {
            setExperience(10);
            setProjects(150);
            setClients(2.5);
        },3000);

        return ()=> clearTimeout(timeoutId);
    },[])
  return (
    <div className='flex__center fact__container'>
        <div className="fact__item">
            <div className="flex__center">
                <Odometer value={experience} className="title"/>
                <h3 className="title">+</h3>
            </div>
            <p className="lable">years of Experience</p>
        </div>

        <div className="fact__item">
            <div className="flex__center">
                <Odometer value={Projects} className="title"/>
                <h3 className="title">+</h3>
            </div>
            <p className="lable">Completed Projects</p>
        </div>

        <div className="fact__item">
            <div className="flex__center">
                <Odometer value={Clients} className="title"/>
                <h3 className="title">K</h3>
            </div>
            <p className="lable">Satisfied Clients</p>
        </div>



    </div>
  )
}

export default Facts