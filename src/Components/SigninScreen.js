import React from 'react';
import { useState } from 'react';
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css';
import { GoogleLogin } from 'react-google-login';
import FacebookLogin from 'react-facebook-login';
import Server from './APIs/Server';
import { useHistory } from "react-router-dom";
import Footer from './Dashboard/Footer';
import { Alert, Col, message, Row } from 'antd';
import 'firebase/database';
import 'firebase/auth';
import firebase from '../config/firebase';


const clientId = "1043266914152-ao4hgut18q0esah1la68oopva6njib3k.apps.googleusercontent.com";

function SigninScreen()
{
    let history = useHistory();

    let checked = false;
    const [value, setValue] = useState();
    const [terms, setTerms]=useState('');
    

    let sendOtp = false;

    const onFailure = (res) =>
    {
        console.log('Login failed: res:', res);
        alert(`Failed to login. `);
    };

    const style = { background: '#0092ff', padding: '8px 0' };

    const googleLogin = async (email, name, imageUrl, googleId) =>
    {
        let age = "";
        let dob = "";
        let phoneNumber = "";

        let response = await Server.googleLogin(googleId, name, email, dob, age, imageUrl, phoneNumber);

        console.log(response);

        if (response["response"] === "success")
        {
            message.success("Login Success");

            let user =
            {
                "id": response["userdata"][0]["id"],
                "name": name,
                "email": email,
                "phoneNumber": phoneNumber,
                "image": imageUrl,
                "isLoggedIn": true
            };

            console.log(user);

            localStorage.setItem("user", JSON.stringify(user));
            history.push("/");
        }
        else {
            return (<Alert message="Error" type="error" />)
        }
    }

    const onSuccess = (res) =>
    {
        let email = res.profileObj.email;
        let name = res.profileObj.name;
        let imageUrl = res.profileObj.imageUrl;
        let googleId = res.profileObj.googleId;

        googleLogin(email, name, imageUrl, googleId);
    };

    const responseFacebook = (response) =>
    {
        console.log(response);
    };

    const setUpRecaptcha = () =>
    {
        window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
            "recaptcha-container",
            {
                size: "invisible",
                callback: function (response)
                {
                    console.log("Captcha Resolved");
                    this.onSignInSubmit();
                },
                defaultCountry: "IN",
            });
        };

    const onSignInSubmit = (e) =>
    {
        console.log(value);
        e.preventDefault();
        setUpRecaptcha();

        let phoneNumber = value;

        let appVerifier = window.recaptchaVerifier;firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier).then(function (confirmationResult)
        {
            // SMS sent. Prompt user to type the code from the message, then sign the
            // user in with confirmationResult.confirm(code).
            window.confirmationResult = confirmationResult;
            // console.log(confirmationResult);
            console.log("OTP is sent");
        
                history.push({
                    pathname: '/verifyotp',
                    state: { detail: phoneNumber }
                  });
                
                
            
            // history.push("/verifyotp")
        })
        .catch(function (error)
        {
            console.log(error);
        });
        
    };

    const onSubmitOtp = (e) =>
    {
        e.preventDefault();

        let otpInput = this.state.otp;
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

    const isChecked = () =>
    {
      
        checked = true;
    }
    


// function handleData(form_element){
//     // e.preventDefault();
//     console.log("Check Box ", terms);
//     if(!this.form.terms.checked)
// {
//     alert('You must agree to the terms first.');
//     return false;
// }
    

// function checkCheckBoxes() {
//     console.log("terms", terms);
//     if (terms =="on") 
//     {
//         // alert ('You didn\'t choose any of the checkboxes!');
//         onSignInSubmit()
       
//     }else{
//         alert("Not Checked");
//     }
    
// }



    return (
        <div>
            <section className="form-wrapper" >
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-sm-5">
                            <div className="form-div text-center">
                                <a href="/" className="logo float-none mt-4"><img src="images/logo.png" alt="" /></a>
                                <h5 className="mt-3">Login with </h5>
                                <form >

                                    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                                        <Col className="gutter-row" span={12}>
                                            <FacebookLogin
                                                className="col-lg-5"
                                                size="small"
                                                appId="2875447942684950"
                                                textButton="Facebook"
                                                fields="name,email,picture"
                                                buttonText="abbb"
                                                callback={responseFacebook}
                                                cssClass="kep-login-facebook"
                                                style={{ marginRight: "5px" }}
                                            />
                                        </Col>

                                        <Col className="gutter-row" span={12}>
                                            <GoogleLogin
                                                clientId={clientId}
                                                buttonText="Google"
                                                onSuccess={onSuccess}
                                                onFailure={onFailure}
                                                cookiePolicy={'single_host_origin'}
                                                style={{ marginTop: '100px' }}
                                                isSignedIn={false}
                                            />
                                        </Col>
                                    </Row>

                                    <h5>OR</h5>
                                    <div className="form-group mt-3">
                                        <div id="recaptcha-container"></div>
                                        <PhoneInput
                                            defaultCountry="IN"
                                            placeholder="Enter phone number"
                                            value={value}
                                            onChange={setValue}
                                            className="form-control" required/>
                                    </div>
                                    <div className="form-group form-check-label">
                                        <label htmlFor="terms"> 
                                        <input type="checkbox" id="terms" name="terms"  className="mr-3"    onChange={(e)=> setTerms(e.target.value)} />
                                        <span className="checkmark"></span>
                                            <p style={{ color: "white" }}>I understand and accept the
                                                <a href="/terms"> <span style={{ color: "#D04050" }}>Terms & Condition</span></a> &
                                                <a href="/privacy-policy"><span style={{ color: "#D04050" }}> Privacy Policies</span></a></p>
                                        </label>
                                    </div>
                                    <div>
                                        <p id="message"></p>
                                    </div>

                                    <div className="form-group button-block text-center">
                                        {terms=="on" ? (<button onClick={onSignInSubmit}className="form-btn" id='myButton'>Login with OTP</button>) : (<button disabled={true}className="form-btn" id='myButton1'>Login with OTP</button>) }
                                    </div>
                                    
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
        
    );
}

export default SigninScreen;







