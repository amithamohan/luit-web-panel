import React, {Component, useState} from 'react';
import ReactStars from "react-rating-stars-component";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Server from '../APIs/Server';
import { message } from 'antd';

let remarks;

const ratingChanged = (newRating) =>
{
    remarks = newRating;
};


class StarRating extends Component{

    // const [show, setShow] = useState(false);

    componentDidMount()
    {
        this.getUserDetails();
    }
    getUserDetails()
    {
		let data = JSON.parse(localStorage.getItem("user"));
		
		if(data != null){
			this.setState({userId:data["id"]})
            this.checkRating(data["id"]);
		}
    }
    state=
    {
        show: false,
        isRated: false,
        
    };

    handleClose = () =>
    {
        this.setState({show: false});
    }

    handleShow = () =>
    {
        if(!this.state.isRated)
        {
            this.setState({show: true});
        }
        else
        {
            message.warning("Rating Done");
        }
    }

    handleSubmit = async () =>
    {
        //let userId = 2;
        let id = this.props.details["id"];
        let type = this.props.details["type"];

        let response = await Server.rateContent(this.state.userId, id, type, remarks);

        console.log(response);

        if(response["response"] === "success")
        {
            this.setState({show: false});

            message.success("Rating done");
        }
        else
        {
            message.error("Opps something went wrong");
        }
    }

    checkRating = async (userId) =>
    {
        //let userId = 2;
        let id = this.props.details["id"];
        let type = this.props.details["type"];

        let response = await Server.checkIfVideoRated(userId, id, type);

        console.log(response);

        if(response["response"] === "success")
        {
            this.setState({isRated: true});
            
        }
    }


    render()
    {
        return(
            <div>
                <Button style={{  backgroundColor:'transparent', border: 'none',}} onClick={this.handleShow}>
                <ReactStars
                    count={5}
                    onChange={ratingChanged}
                    size={30}
                    isHalf={false}
                    color={"white"}
                    activeColor= {this.state.isRated === true ? "#F7B932" : "#8095C2"}  /> 
                
                
                </Button>
                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Please Rate the Video</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                    <ReactStars
                        count={5}
                        onChange={ratingChanged}
                        size={50}
                        isHalf={true}
                        activeColor="#ffd700"
                    />
                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleClose}>Close</Button>
                        <Button variant="primary" onClick={this.handleSubmit}>Submit</Button>
                    </Modal.Footer>
                    </Modal>


            </div>
        );
    }

}
export default StarRating;