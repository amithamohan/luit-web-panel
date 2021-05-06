import React, {Component, useState} from 'react';
import ReactStars from "react-rating-stars-component";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';



const ratingChanged = (newRating) => {
    console.log(newRating);
  };


class StarRating extends Component{
    
    // const [show, setShow] = useState(false);
    state={
        show: false
    };
    handleClose=()=>{
        this.setState({show: false});
    }
    handleShow=()=>{
        this.setState({show: true});
    }
    
    
    render() {
    return(
        <div>
            
             <Button style={{  backgroundColor:'transparent', border: 'none', padding: 0, margin: 0}} onClick={this.handleShow}>
             <ReactStars
                count={1}
                onChange={ratingChanged}
                size={35}
                isHalf={false}
                activeColor="#ffd700"
                
            />
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
                    <Button variant="primary" onClick={this.handleClose}>Submit</Button>
                </Modal.Footer>
                </Modal>
            
            
        </div>
        
        )
    }

}
export default StarRating;