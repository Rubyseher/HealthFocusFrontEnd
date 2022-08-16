import React from "react";
import './App.css'
import { ParallaxContainer, Services } from "./components.js"
import ChildCareIcon from '@mui/icons-material/ChildCare';
import FaceRetouchingNaturalIcon from '@mui/icons-material/FaceRetouchingNatural';
import PregnantWomanIcon from '@mui/icons-material/PregnantWoman';
import FavoriteIcon from '@mui/icons-material/Favorite';
import SickIcon from '@mui/icons-material/Sick';
// import healthcare from './img/healthcare.svg'
function MainPg() {
    const servicesList = [
        {
            specialization: "Pediatrician",
            icon: "ChildCareIcon"
        }
        , {
            specialization: "Dermatologist",
            icon: "FaceRetouchingNaturalIcon"
        },
        {
            specialization: "Gynocologist",
            icon: "PregnantWomanIcon"
        }
        , {
            specialization: "Cardiologist",
            icon: "FavoriteIcon"
        },
        {
            specialization: "General",
            icon: "SickIcon"
        }
        , {
            specialization: "Dentist",
            icon: "FaceRetouchingNaturalIcon"
        },
        {
            specialization: "Gynocologist",
            icon: "PregnantWomanIcon"
        }
        , {
            specialization: "Cardiologist",
            icon: "FavoriteIcon"
        }
    ]
    return (
        <div style={{ background: 'var(--babyBlue)' }}>
            <ParallaxContainer />
            {/* this gloating pmg will have our motive topic beside it  */}
            {/* ur services comes next  */}
            <h1 className="title-main">Our Services</h1>
            <div style={{ display: 'inline-flex', width: '900', flexFlow: 'wrap', margin: '0px 230px 60px 230px' }}>
                <Services />
                <Services />
                <Services />
                <Services />
                <Services />
                <Services />
                <Services />
                <Services />
                <Services />
                <Services />
                <Services />
                <Services />
            </div>

            <div style={{ background: 'white' }}>
                <h1 className="title-main" style={{ padding: '60px 0 -40px 0' }} >Our Mission</h1>
                <div style={{ display: 'flex' }}>
                    <img src="/img/front2.png" width={500} style={{ margin: '-70px 90px', display: 'inline-flex' }} className='floating-img' />

                    <p className='mission'>
                        <h4 className="hover-underline-animation">About Us</h4><br />
                        Our mission is to work for the Creation, Protection And Nurturing of poverty free,
                        educated, skilled, women empowered, prosperous and healthy society through
                        philanthropic thinking, high governance and best practices across the globe.
                        <h4 id='whoAreWe' className="hover-underline-animation">Who are We</h4><br />
                        Taru is a group of social experts and individuals having a similar mission for the Indian sustainable growth of the society.
                        Our philanthropic approach is for sustainable economy, society and environment development and uplifting.
                        We are dedicated for empowerment of underprivileged section of the society. We have started our journey from Chhattisgarh being a deprived, marginalized and tribal area of the country.
                    </p>
                </div>
            </div>
        </div>

    )
}

export default MainPg;