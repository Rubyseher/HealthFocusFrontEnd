import React, { useState, useEffect } from 'react'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import "./App.css";
import EventBusyIcon from '@mui/icons-material/EventBusy';
import { PatientsToday, PatientsTodayBack, MultipurposeButton } from "./components"
import './FlipBox.css'
import axios from './axios.js';

function DocDashboard() {
    const [value, onChange] = useState(new Date());

    const [PatientsList, setPatientsList] = React.useState([])

    useEffect(() => {
        async function fetchData() {
            const db = await axios.get('/doc')
            console.log(db.data);

            setPatientsList((oldState) => db.data)
        }
        fetchData();
    }, [])

    return (
        <div style={{backgroundColor: ' var(--lightBlue)'}}>
            <h2 className='title-main'> Schedule</h2>

            <div style={{ display: 'flex', padding: '10px 0px 30px 30px'}}>
                <Calendar onChange={onChange} value={value} class='react-calendar' />

                <div style={{ display: 'inline-flex', flexFlow: 'wrap', height: '330px',overflowY:'scroll',overflowX:'hidden'}}>
                    <label>
                        <input type="checkbox" />
                        <div class="card">
                            <div class="front"> <PatientsToday /></div>
                            <div class="back"> <PatientsTodayBack /></div>
                        </div>
                    </label>
                    <label>
                        <input type="checkbox" />
                        <div class="card">
                            <div class="front"> <PatientsToday /></div>
                            <div class="back"> <PatientsTodayBack /></div>
                        </div>
                    </label>
                    <label>
                        <input type="checkbox" />
                        <div class="card">
                            <div class="front"> <PatientsToday /></div>
                            <div class="back"> <PatientsTodayBack /></div>
                        </div>
                    </label>
                    <label>
                        <input type="checkbox" />
                        <div class="card">
                            <div class="front"> <PatientsToday /></div>
                            <div class="back"> <PatientsTodayBack /></div>
                        </div>
                    </label>
                </div>
                <img src='./img/Hospital_wheelchair-2.gif' height='400' style={{ float: 'right', marginTop: '-70px' }} />

            </div>
            <div style={{ display: 'flex', justifyContent: 'center', backgroundColor: 'var(--babyPurple)' }}>
                <MultipurposeButton color={'#6d45ae'} bg={'#eae1fa'} text={'Publish Free Slots'} />
                <MultipurposeButton color={'#6d45ae'} bg={'#eae1fa'} text={'Cancel All Appointments'} />
                <MultipurposeButton color={'#6d45ae'} bg={'#eae1fa'} text={'Show Patient Details'} />
            </div>
        </div>
    )
}

export default DocDashboard