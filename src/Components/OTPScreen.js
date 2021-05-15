import React from 'react';
import {useState} from 'react';
import 'firebase/database';
import 'firebase/auth';
import { useLocation, useHistory } from "react-router-dom";
import { useEffect } from "react";
import Server from './APIs/Server';
import { message } from 'antd';


function OTPScreen()
{
    const [value, setValue] = useState();
    const location = useLocation();

    let history = useHistory();

    let otpCode;


    useEffect(() => 
    {
        console.log(location.pathname); // result: '/secondpage'
        console.log(location.state.detail); // result: 'some_value'
    }, [location]);
 

    const handleOTP = (event) =>
	{
        otpCode = event.target.value;
        console.log(otpCode);
	}


    const onSubmitOtp = (e) =>
    {
        e.preventDefault();

        let otpInput = otpCode;
        let otpConfirm = window.confirmationResult;
        // console.log(codee);
        otpConfirm.confirm(otpInput).then(function (result)
        {
            // User signed in successfully.
            console.log("Result" + result);
            let user = result.user;
            console.log(user);

        })
        .catch(function (error) 
        {
            console.log(error);
            alert("Incorrect OTP");
        });
    };

    const loginWithOtp = async () =>
    {
        let phoneNumber = location.state.detail;

        let response = await Server.loginWithOtp(phoneNumber);

        console.log(response);

        if(response["response"] === "success")
        {
            message.success("Login Success");

            let user =
            {
                "id": response["credential"][0]["id"],
                "name": "",
                "email": "",
                "phoneNumber": phoneNumber,
                "image": "",
                "isLoggedIn": true
            };

            console.log(user);

            localStorage.setItem("user", JSON.stringify(user));

            history.push("/");
        }
        else
        {
            message.error("Oops, error in login, try again later");
        }
    }

    return(
        <div className="container-fluid height-100 d-flex justify-content-center align-items-center">
            <div className="position-relative">
                <div className="card otp-card col-12 p-3 text-center">
                    <img src="images/logo.png" className="logo"  alt=""/>
                    <h6>Please enter the OTP to verify your account</h6>
                    <div id="otp" className="inputs justify-content-center mt-2">
                        <input onChange = {handleOTP} className="m-2  form-control rounded" type="number" id="first"  />
                        {/* <input className="m-2 text-center form-control rounded" type="text" id="second" maxlength="1" />
                        <input className="m-2 text-center form-control rounded" type="text" id="third" maxlength="1" />
                        <input className="m-2 text-center form-control rounded" type="text" id="fourth" maxlength="1" />
                        <input className="m-2 text-center form-control rounded" type="text" id="fifth" maxlength="1" />
                        <input className="m-2 text-center form-control rounded" type="text" id="sixth" maxlength="1" />  */}
                    </div>
                    <div className="content d-flex justify-content-center align-items-center">
                        <span style={{color:'white'}}>Didn't recieve the code?</span>
                        <a href="/" className="text-decoration-none ms-1" style={{color:'red'}}>RESEND OTP</a> </div>
                    <div className="mt-4">
                        <button onClick={onSubmitOtp} className="btn btn-danger px-4 validate">Login with OTP</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OTPScreen;