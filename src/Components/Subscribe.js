import React from 'react';
import { Component } from 'react';
import { Radio, Card, Button } from 'antd';
import { Row, Col } from 'antd';
import NavigationBar from './Dashboard/NavBar';




class Subscribe extends Component{
    render(){
        
        return(
        
        <div className="container" >
            <NavigationBar />
            <div className="subscribe-main">
                
            <Radio.Group name="radiogroup" defaultValue={1}>
            <h3 style={{color: 'white', textAlign:'center'}}>Pay & Watch</h3>
            <Row>
            <div className="site-card-border-less-wrapper">
                <Card  bordered={false} style={{ width: 400, marginTop: 10, backgroundColor: "#031031", borderRadius: 10 }}>
                <div>
                    <input id="radio-1" class="radio-custom" name="radio-group" type="radio"  />
                    <label for="radio-1" class="radio-custom-label">
                        <b className="heading-font">&#x20B9; 50</b> </label>
                </div>
                <div className="border-top mt-3 pt-3">
                    <p>Watch and Download the selected content for 365 days.</p>
                </div>
                </Card>
            </div>
            </Row>
            <h3 style={{color: 'white', textAlign:'center', marginTop:"2rem"}}>OR</h3> 
            <h5 style={{color: 'white', textAlign:'center',  marginTop:"1rem", marginBottom: '2rem'}}>Select Subscription Pack</h5>
            <Row>
            <div className="site-card-border-less-wrapper">
            <Card  bordered={false} style={{ width: 400, marginTop: 10, backgroundColor: "#031031", borderRadius: 10 }}>
                <div>
                    <input id="radio-2" class="radio-custom" name="radio-group" type="radio"  />
                    <label for="radio-2" class="radio-custom-label">
                        <b className="heading-font">&#x20B9; 199 for 90 Days</b> 
                    </label>
                </div>
                <div className="border-top mt-3 pt-3">
                    <p>Watch and Download <mark style={{color: "yellow", backgroundColor:'transparent'}}>all content for 90 Days </mark>.</p>
                </div>
                </Card>
            </div>
            </Row>
            <Row>
            <div className="site-card-border-less-wrapper">
            <Card  bordered={false} style={{ width: 400, marginTop: 10, backgroundColor: "#031031", borderRadius: 10 }}>
                <div>
                    <input id="radio-3" class="radio-custom" name="radio-group" type="radio"  />
                    <label for="radio-3" class="radio-custom-label">
                        <b className="heading-font">&#x20B9; 299 for 180 Days</b> </label>
                </div>
                <div className="border-top mt-3 pt-3">
                    <p>Watch and Download <mark style={{color: "yellow", backgroundColor:'transparent'}}>all content for 180 Days </mark>.</p>
                </div>
                </Card>
            </div>
            </Row>
            <Row>
            <div className="site-card-border-less-wrapper">
            <Card  bordered={false} style={{ width: 400, marginTop: 10, backgroundColor: "#031031", borderRadius: 10 }}>
                <div>
                    <input id="radio-4" class="radio-custom" name="radio-group" type="radio"  />
                    <label for="radio-4" class="radio-custom-label">
                        <b className="heading-font">&#x20B9; 399 for 365 Days</b> </label>
                </div>
                <div className="border-top mt-3 pt-3">
                    <p>Watch and Download <mark style={{color: "yellow", backgroundColor:'transparent'}}>all content for 365 Days </mark>.</p>
                </div>
                </Card>
            </div>
            </Row>
            
            </Radio.Group>
            <Row>
                <Button  style={{width: 400, marginTop: 10, backgroundColor: "#031031", borderRadius: 5, color:'white', height: 60, fontSize: 20, marginBottom: '2rem'}}>
                <i class="ti-credit-card pay-btn"></i>PAY NOW</Button>
            </Row>
            </div>
        </div>
        
            


         
        )
    }
}



export default Subscribe;