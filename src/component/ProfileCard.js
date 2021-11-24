import React from 'react'
import './ProfileCard.css'
import image from './image/foto.jpg'


function ProfileCard() {
    const data = {
        name: "Hairunisa",
        email: "Hairunisa2909@gmail.com",
        company: "Prosigmaka",
        role: 'Front end developer',
        address: "Central Jakarta",
        phonenum: "082283977951",
        github: "https://github.com/hairunisa29"
    }


    return (
        <div className="container d-flex justify-content-center mt-5">
            <div className="card">
                <div className="top-container"> <img src={image} className="img-fluid profile-image" alt='foto' width="70"/>
                    <div className="ml-3">
                        <h5 className="name">{data.name}</h5>
                        <p className="mail">{data.email}</p>
                    </div>
                </div>
                <div className="middle-container d-flex justify-content-between align-items-center mt-3 p-2">
                    <div className="icon">
                        <div className="round-div"><i className="fa fa-building"></i></div>
                    </div>
                    <div className="d-flex flex-column"> 
                        <span className="company">{data.company}</span> 
                        <span className="role">{data.role}</span> 
                    </div>
                </div>
                <div className="address">
                  <i className="nav-icon fa fa-map-pin"></i>
                  <span className='addressdetail'>{data.address}</span>
                </div>
                <div className="phonenum">
                  <i className="nav-icon fa fa-phone-square"></i>
                  <span className="phonenumdetail">{data.phonenum}</span>
                </div>
                <div className="pt-2">
                    <a href={data.github} className='github'><i className="nav-icon fa fa-github-square"></i></a>
                </div>
            </div>
        </div>
    )


    
}

export default ProfileCard;