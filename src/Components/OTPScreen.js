import React from 'react';

function OTPScreen(){
    return(
        <div className="container-fluid height-100 d-flex justify-content-center align-items-center">
            <div className="position-relative">
                <div className="card otp-card col-12 p-3 text-center">
                    <img src="images/logo.png" className="logo"  alt=""/>
                    <h6>Please enter the OTP to verify your account</h6>
                    <div id="otp" className="inputs d-flex flex-row justify-content-center mt-2"> 
                        <input className="m-2 text-center form-control rounded" type="text" id="first" maxLength="1" /> 
                        <input className="m-2 text-center form-control rounded" type="text" id="second" maxLength="1" /> 
                        <input className="m-2 text-center form-control rounded" type="text" id="third" maxLength="1" /> 
                        <input className="m-2 text-center form-control rounded" type="text" id="fourth" maxLength="1" /> 
                        <input className="m-2 text-center form-control rounded" type="text" id="fifth" maxLength="1" /> 
                        <input className="m-2 text-center form-control rounded" type="text" id="sixth" maxLength="1" /> 
                    </div>
                    <div className="content d-flex justify-content-center align-items-center"> 
                        <span style={{color:'white'}}>Didn't recieve the code?</span> 
                        <a href="/" className="text-decoration-none ms-1" style={{color:'red'}}>RESEND OTP</a> </div>
                    <div className="mt-4"> 
                        <button className="btn btn-danger px-4 validate">Login with OTP</button> 
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OTPScreen;