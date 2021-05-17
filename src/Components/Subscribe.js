import React from 'react';
import { Component } from 'react';
import { Radio, Card, Button, message } from 'antd';
import { Row } from 'antd';
import NavigationBar from './Dashboard/NavBar';
import Server from './APIs/Server';





class Subscribe extends Component
{
    constructor(props)
    {
        super(props);

        this.state =
        {
            subscriptionPlans: [],
            selectedOption: "0",
            days: 0,
        }
        
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount()
    {
        this.getSubscriptionPlans();
    }

    async getSubscriptionPlans()
    {
        let list = [];
        let response = await Server.fetchSubscriptionPlans();

        if(response["response"] === "success")
        {
            for(let i = 0; i < response["data"].length; i++)
            {
                list.push(response["data"][i]);
            }
        }
		this.setState({subscriptionPlans: list});

        console.log(this.state.subscriptionPlans);
    }

    handleSubmit = async (refNumber, amount) =>
    {
        console.log("handle submit");

        let userId = 4;
        // let days;
        let startDate;
        let endDate;

        let newDate = new Date();
        let day = newDate.getDate();
        let month = newDate.getMonth();
        let year = newDate.getFullYear();

        startDate = year+ "-" + month + "-" + day;

        const date = new Date();
        let x = new Date(date.setDate(date.getDate() + this.state.days));
        endDate = x.getFullYear() + "-" + x.getMonth() + "-" + x.getDate();

        let response = await Server.monthlyPayment(userId, this.state.days, startDate, endDate, amount, refNumber);

        if(response["response"] === "success")
        {   
            message.success("Payment Sucess");
        }
        else
        {
            message.error("Payment Error");
        }
    }

    async handleOnChanged(value, days)
    {
        this.state.selectedOption = value;
        this.state.days = days;

        console.log(this.state.days);
    }

    openCheckout = ()  =>
	{
        let status = false;
        let result;
        let ref_number;
        let amount = this.state.selectedOption * 100;

        var self = this;

        let response;
        self.handleSubmit(response, amount);


		let options =
		{
			"key": "rzp_test_dKDuSXlctyepdF",
		  	"amount": amount, // 2000 paise = INR 20, amount in paisa
		  	"name": "Merchant Name",
		  	"description": "Purchase Description",
		  	"image": "/images/favicon.png",

		  	"handler": function (response)
			{
                result = response;
                ref_number = response.razorpay_payment_id;

                message.success("Payment Success " + response.razorpay_payment_id);
                status = true;

                self.handleSubmit(ref_number, amount);
		  	},
		  	"prefill":
			{
				"name": "Amitha",
				"email": "amitha@gmail.com"
		  	},
		  	"notes":
			{
				"address": "Hello World"
		  	},
		  	"theme":
			{
				"color": "#0a6bfc"
		  	}
		};

		let rzp = new window.Razorpay(options);
		rzp.open();

        rzp.on('payment.failed', function (response)
        {
            message.error("Payment Error, try again later" + response.error.description);
            status = false;
        });
	}
    

    render()
    {
        const list = [];
        for(let i = 0; i < this.state.subscriptionPlans.length; i++)
        {
            const plans = this.state.subscriptionPlans[i];

            let id = i + 1;

            list.push
            (
                <Radio.Group name="radiogroup" defaultValue={1}>
                    <Row>
                        <div className="site-card-border-less-wrapper">
                        <Card  bordered={false} style={{ width: 400, marginTop: 10, backgroundColor: "#031031", borderRadius: 10 }}>
                            <div>
                                <input id={id} class="radio-custom" name="radio-group" type="radio" defaultChecked={this.state.selectedOption === {id}} onChange={() => this.handleOnChanged(plans["amount"], plans["duration"])} />
                                <label htmlFor={id} class="radio-custom-label">
                                    <b className="heading-font">&#x20B9; {plans["amount"]} for {plans["duration"]} Days</b>
                                </label>
                            </div>
                            <div className="border-top mt-3 pt-3">
                                <p>Watch and Download <mark style={{color: "yellow", backgroundColor:'transparent'}}>all content for {plans["duration"]} Days </mark>.</p>
                            </div>
                            </Card>
                        </div>
                    </Row>
                </Radio.Group>
            );
        }
        return(
            <div className="container">
                <NavigationBar />
                <div className="subscribe-main" style={{backgroundColor: "#2A314D",paddingRight: "25px", paddingLeft: "25px", paddingTop: "25px"}}>
                    <div>
                    <Radio.Group name="radiogroup" defaultValue={1}>
                    <h3 style={{color: 'white', textAlign:'center'}}>Pay & Watch</h3>
                    <Row>
                    <div className="site-card-border-less-wrapper">
                        <Card  bordered={false} style={{ width: 400, marginTop: 10, backgroundColor: "#031031", borderRadius: 10 }}>
                        <div>
                            <input id="0" class="radio-custom" name="radio-group" type="radio" defaultChecked={this.state.selectedOption === "1"} onChange={() => this.handleOnChanged("50", 30)} />
                            <label htmlFor="0" class="radio-custom-label">
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
                    <div>
                    {
                        list
                    }
                    </div>
                    </Radio.Group>
                        <Row>
                            <Button onClick={this.openCheckout}  style={{width: 400, marginTop: 10, backgroundColor: "#031031", borderRadius: 5, color:'white', height: 60, fontSize: 20, marginBottom: '2rem'}}>
                            <i class="ti-credit-card pay-btn"></i>PAY NOW</Button>
                        </Row>
                    </div>
                </div>
            </div>
        )
    }
}



export default Subscribe;






