import React from 'react';
import {useState} from 'react';
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'



function SigninScreen(){

    const [value, setValue] = useState();
    
    return(
        <div>

        
        <div className="preloader"></div>

    
    <div className="main-wrapper">
        {/* <!-- header wrapper --> */}
        <div className="header-wrapper">
            <div className="container">
                <div className="row">
                    {/*  <div className="col-sm-12 text-center">
                        <a href="index.html" className="logo float-none mt-4"><img src="images/logo.png" /></a>
                        
                    </div>  */}
                </div>
            </div>
        </div>
        {/* <!-- header wrapper --> */}

        <section className="form-wrapper" >
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-sm-5">
                        <div className="form-div text-center">
                            <a href="index.html" className="logo float-none mt-4"><img src="images/logo.png" alt="" /></a>
                            <h5 className="mt-3">Login with </h5>
                            <form action="/verifyotp">
                                <div className="col">
                                    <a href="/" className="col-5 fb btn fb-icon-btn" alt=""><span>
                                        <i className="ti-facebook"></i> </span>
                                        Facebook
                                    </a>
                                    <a href="/" className="col-5 google btn google-icon-btn ">
                                        <span><img src="images/google.png" alt=""/> </span>Google
                                    </a>
                                </div>
                                <h5>OR</h5>
                                <div className="form-group mt-3">
                                    {/* <select className="drop-down">
                                        <option selected value="IN">India</option>
                                        <option value="US">USA</option>
                                        <option value="AU">Australia</option>
                                        <option value="UK">UK</option>
                                    </select> */}
                                    <PhoneInput
                                        placeholder="Enter phone number"
                                        value={value}
                                        onChange={setValue}
                                        className="form-control " />
                                  {/* <input className="form-control" type="tel" placeholder="Enter Mobile Number" /
                                  > */}

                                </div>
                                <div className="form-group button-block text-center">
                                  <button className="form-btn">Login with OTP</button>
                                </div>
                                <div className="form-group form-check-label">
                                    <label for="tarms-check">
                                      
                                      <input type="checkbox" id="tarms-check" name="tarms-check" value="terms" className="mr-3"/>
                                      <span class="checkmark"></span>
                                      <p>I understand and accept the 
                                          <a href="/terms"> Terms & Condition</a> </p>
                                    </label>
                                  </div>
                                
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <div className="footer-wrapper">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 lower-footer"></div>
                    <div className="col-sm-6">
                        <p className="copyright-text">© 2020 copyright. All rights reserved.</p>
                    </div>
                    <div className="col-sm-6 text-right">
                        <p className="float-right copyright-text">
                        <a href="/">Privacy Policy</a> | 
                        <a href="/">Terms of Use</a> | 
                        <a href="/">Refund Policy</a> | 
                        <a href="/">Help</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
    );
}

export default SigninScreen;