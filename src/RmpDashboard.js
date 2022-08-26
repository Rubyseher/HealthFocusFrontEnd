import React, { useEffect, useState } from "react";
import { RmpNotification, MultipurposeButton } from './components'
import axios from "./axios.js";

function RmpDashboard() {
    const [Notification, setNotification] = React.useState([])

    useEffect(() => {
        async function fetchData() {
            const db = await axios.get('/rmp')
            console.log(db.data);

            setNotification((oldState) => db.data)
        }
        fetchData();
    }, [])
    return (
        <div>
            <div style={{ display: 'flex', backgroundColor: ' var(--lightBlue)', padding: '30px 30px 30px 60px' }}>
                <div >
                    <h3 >Notification</h3>
                    <div style={{ display: 'inline-flex', width: '900', flexFlow: 'wrap', overflow: 'scroll', height: '230px' }}>
                        {
                            Notification && Notification.map((d) => (
                                <RmpNotification name={d.name} date={d.date} spec={d.specialization} time={d.time} />
                            ))
                        }
                    </div>
                </div>
                <img src='./img/doctor.gif' height='380px' style={{ float: 'right', marginTop: '-50px' }} />
            </div>
            <div style={{ backgroundColor: ' var(--lightPurple)' }}>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <MultipurposeButton color={'#6d45ae'} text={'Register musltiple users'} />
                    <MultipurposeButton color={'#6d45ae'} text={'Cancel All Appointments'} />
                    <MultipurposeButton color={'#6d45ae'} text={'Show Patient Details'} />
                    <MultipurposeButton color={'#6d45ae'} text={'Book Appointments'} />
                </div>
            </div>

        </div>
    )
}

export default RmpDashboard;