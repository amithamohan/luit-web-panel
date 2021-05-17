// import React from 'react';

import React, { useState } from 'react';
// import { Modal, Button } from 'antd';


const SuccessPopup = () => {
  
  return (
      <div>
        
        <div class="box">
            <a class="button" href="#popup1">Let me Pop up</a>
        </div>
    
        <div id="popup1" class="overlay">
            <div class="popup">
                <h2>Thank You!</h2>
                <a class="close" href="#">&times;</a>
                <div class="content">
                    <div className="row mt-3">
                        <div className="col-6">
                            <b>Date </b><br />
                            <b>Sep 25, 2020</b>
                        </div>
                        <div className="col-6 text-center">
                            <b>Time : 08:15:12 </b>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-6">
                            <b>Amitha Mohan </b><br />
                            <b>amitah@gmail.com</b>
                        </div>
                        <div className="col-6 text-center">
                            <img src="/images/favicon.png" width={50} height={50}/>
                            
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-6">
                            <b>Amount </b><br />
                            <b>Rs 10</b>
                        </div>
                        <div className="col-6 text-center">
                            <b>Completed</b>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
      
  );
};

export default SuccessPopup;
