import React, { Fragment, useEffect, setState } from "react";
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import App from "./App";
import "./App.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faCarrot,faBacterium,faCommentMedical,faLungs,faBrain,faBone,faTooth,faHeadSideCough ,faHandDots,faBaby,faPersonPregnant,faHeartPulse} from '@fortawesome/free-solid-svg-icons'
import IconButton from '@mui/material/IconButton';
import CancelRoundedIcon from '@mui/icons-material/CancelRounded';
import MoreTimeIcon from '@mui/icons-material/MoreTime';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import { Parallax, Background } from 'react-parallax';

export const NavbarMain = () => {
    return (
        <Navbar bg="light" variant="light" >
            <Container>
                <Navbar.Brand href="#home" style={{ display: 'flex', alignItems: 'center' }}>
                    <img
                        alt=""
                        src="/img/logo.png"
                        width="50"
                        height="50"
                        className="d-inline-block align-top"
                    />{' '}
                    &nbsp; &nbsp; Taru Foundations
                </Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export const Services = () => {
    const servicesList = [
            {
                specialization: "Pediatrician",
                icon: faBaby
            }
            , {
                specialization: "Dermatologist",
                icon: faHandDots
            },
            {
                specialization: "Gynocologist",
                icon: faPersonPregnant
            }
            , {
                specialization: "Cardiologist",
                icon: faHeartPulse
            },
            {
                specialization: "General",
                icon: faHeadSideCough
            }
            , {
                specialization: "Dentist",
                icon: faTooth
            }
            , {
                specialization: "Orthopaedic ",
                icon: faBone
            },
            {
                specialization: "Psychiatrists",
                icon: faCommentMedical
            }
            , {
                specialization: "Pulmonologist",
                icon: faLungs
            },
            {
                specialization: "Neurologist",
                icon: faBrain
            },
            {
                specialization: "Oncologist",
                icon: faBacterium
            },
            {
                specialization: "Gastroenterologist",
                icon: faCarrot
            }
        ];

    return (
        servicesList.map(i=>
            <div className="services-container">
                <span style={{ margin: '12px 0 0 25px' }}><b>{i.specialization}</b></span>
                <div className='circle-services' style={{ backgroundColor: 'var(--babyBlue)' }}>
                    {/* <MoreTimeIcon sx={{ color:'var(--royalBlue)', fontSize: 25 }} /> */}
                    <FontAwesomeIcon icon={i.icon} size='xl' color="var(--darkBlue)"/>

                </div>

            </div>
        )
    )
}
export const ParallaxContainer = () => {
    return (
        <Parallax bgImage='./img/parallaxDoc2.webp' strength={500}
            bgImageStyle={{ width: '100%' }} style={{ height: '670px' }}>
            <div style={{ height: 500 }}>
                <div className='parallax' style={{ background: 'transparent' }}>
                    <img src="/img/healthcare.png" width={800} style={{ marginTop: '90px' }} />
                    {/* <img src="/img/forAll.png" /> */}
                </div>
            </div>
        </Parallax>
    )
}

export const RmpNotification = (props) => {
    return (
        <div className="rmpNotiBox shadow">
            <span className="timeSlotBox shadow">{props.time}</span>
            {props.name}<br />
            <span style={{ fontWeight: 400, fontSize: 14 }}>{props.spec}</span>
        </div>
    )
}

export const PatientsToday = () => {
    return (
        <div className="patientTodayBox shadow" >
            <IconButton color="primary" aria-label="add to shopping cart" className='close_button'>
                <CancelRoundedIcon sx={{ color: 'red', fontSize: 30, backgroundColor: 'white', borderRadius: '30px' }} />
            </IconButton>
            <span className="timeSlotBox shadow">10:00 pm - 11:00 pm</span>
            <IconButton color="primary" className='meetLogo'>
                <img src='/img/meet.png' width={50} />
            </IconButton>

            Mr.Singh singh<br />
            <span style={{ fontWeight: 400, fontSize: 14 }}>44 yrs</span>
        </div>

    )
}

export const PatientsTodayBack = () => {
    return (
        <div className="patientTodayBack">
            Cancel the appointment?<br />
            <Button variant="outlined" startIcon={<DeleteIcon />} color="error"
                sx={{ fontWeight: 'bold', borderRadius: '10px', width: '150px', marginTop: '4px', backgroundColor: 'white' }}>
                Yes
            </Button>
        </div>

    )
}
// function EasingComponent() {
//     const { background, rotateX } = useSpring({
//       from: {
//         background: '#46e891',
//         rotateX: 0,
//       },
//       to: {
//         background: '#277ef4',
//         rotateX: 190,
//       },
//       config: {
//         duration: 2000,
//         easing: easings.easeInOutQuart,
//       },
//       loop: { reverse: false },
//     })

//     return (
//       <animated.div
//         style={{ background, width: 120, height: 120, borderRadius: 16, rotateX}}
//       />
//     )
//   }
export const Footer = () => {
    <a href="https://storyset.com/health">Health illustrations by Storyset</a>
}
export const MultipurposeButton = ({ color, text, bg }) => {
    return (
        <div className="multiBox shadow" style={{ backgroundColor: `${color}` }}>
            <div className='circle-multi' style={{ backgroundColor: `${bg}` }}>
                <MoreTimeIcon sx={{ color: `${color}`, fontSize: 45 }} />
            </div>
            <p>{text} </p>
            {/* {text} */}
        </div>
    )
}
