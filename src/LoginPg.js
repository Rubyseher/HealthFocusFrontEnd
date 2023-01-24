import React, { useState, useEffect } from "react";
import Form from 'react-bootstrap/Form'
import './Login.css'
import axios from './axios.js';
import { useNavigate } from "react-router-dom";


function LoginPg() {
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [fullName, setFullName] = useState("");
    const [age, setAge] = useState("");
    const [bloodGroup, setBloodGroup] = useState("");
    const [address, setAddress] = useState("");
    const [dob, setDob] = useState("");

    const [signIn, setSignIn] = React.useState(true)

    const navigate = useNavigate();
    const routeChange = () => {
        let path = `/patient`;
        navigate(path, {
            state: {
                specialization: "hi"
            }
        });
    }

    async function handleSignIn(event) {
        event.preventDefault();
        console.log(phone, password)
        const res = await axios.post('/login', {
            phone,
            password,
        }).then( (res)=>res.json())
                routeChange()
        .then((data)=>{
            console.log(data);
            if(data.status=="ok"){
                routeChange()
            }
        });
    }
    async function handleSignUp(event) {
        event.preventDefault();
        console.log(phone, password, fullName, age, bloodGroup)
        const res = await axios.post('/register', {
            fullName,
            age,
            bloodGroup,
            phone,
            password,
            address,
            dob
        }).then(function (response) {
            console.log(response);
        }).catch(function (error) {
            console.log(error);
        });
    }

    return (
        <div className="cornerBg">
            <div style={{ padding: '110px 0 0 120px' }}>
                <div style={{ borderRadius: 20, width: '28%', backgroundColor: 'white', padding: '30px' }} className='shadow'>
                    {
                        signIn == true ?
                            <form onSubmit={handleSignIn}>
                                <img alt="" src="/img/logoGlow.png" class='centerlogo' />

                                <input type="text" name="phone" placeholder="Phone Number" value={phone}
                                    onChange={(e) => setPhone(e.target.value)} />

                                <input type="password" name="password" placeholder="Password" value={password}
                                    onChange={(e) => setPassword(e.target.value)} />

                                <div class="forgot-remember">
                                    <div class="forgot"> <a href="#">Forgot Password?</a> </div>
                                </div>

                                <input type="submit" name="send" value="SIGN IN" />

                                <div class="createAcc" style={{ textAlign: 'center' }}>
                                    <div class="createAcc" onClick={() => setSignIn(false)}> <a href="#">Dont have an Account?<br />Create one Now</a> </div>
                                </div>
                            </form>

                            :
                            <form onSubmit={handleSignUp}>
                                <img alt="" src="/img/logoGlow.png" class='centerlogo' />

                                <input type="text" name="phone" placeholder="Phone Number" value={phone}
                                    onChange={(e) => setPhone(e.target.value)} />

                                <input type="password" name="password" placeholder="Password" value={password}
                                    onChange={(e) => setPassword(e.target.value)} />

                                <input type="text" name="name" placeholder="Full Name" value={fullName}
                                    onChange={(e) => setFullName(e.target.value)} />

                                <div >
                                    <input style={{ width: '45%', marginRight: 18, display: "inline-block" }} type="text" name="age" placeholder="Age" value={age}
                                        onChange={(e) => setAge(e.target.value)} />
                                    <input style={{ width: '49%', display: "inline-block" }} type="text" name="text" placeholder="Blood Group" value={bloodGroup}
                                        onChange={(e) => setBloodGroup(e.target.value)} />
                                </div>

                                <input type="text" name="address" placeholder="Address" value={address}
                                    onChange={(e) => setAddress(e.target.value)} />

                                <input type="date" name="dob" placeholder="Date of Birth" value={dob}
                                    onChange={(e) => setDob(e.target.value)} />

                                <input type="submit" name="send" value="SIGN UP" />
                            </form>
                    }

                </div>
            </div>
            <img src='/img/login2.svg' className="login-img" />
        </div>
    )
}

export default LoginPg;