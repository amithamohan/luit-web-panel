import React from 'react';
import {useState} from 'react';
import 'firebase/database';
import 'firebase/auth';


function OTPScreen()
{
    const [value, setValue] = useState();

    let otpCode;

    function codeVerify()
    {
        var coderesult;
        var code=document.getElementById("first").value;

        coderesult.confirm(code).then((result)=>
        {
            alert("Successfully Verified");
            var user= result.user;

            console.log(user);

        }).catch((error)=>
        {
            alert(error.message);
        })
    }

    const handleOTP = (event) =>
	{
        otpCode = event.target.value;
        console.log(otpCode);
	}


    const onSubmitOtp = (e) =>
    {
        console.log(otpCode);
        e.preventDefault();

        let otpInput = otpCode;
        let optConfirm = window.confirmationResult;
        // console.log(codee);
        optConfirm.confirm(otpInput).then(function (result)
        {
            // User signed in successfully.
            // console.log("Result" + result.verificationID);
            let user = result.user;
        })
        .catch(function (error)
        {
            console.log(error);
            alert("Incorrect OTP");
        });
    };

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