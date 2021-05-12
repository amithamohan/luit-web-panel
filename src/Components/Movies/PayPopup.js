import React, { useState } from 'react';
import { Modal, Button } from 'antd';
import { Redirect } from 'react-router';
import { useHistory } from "react-router-dom";

const PayPopup = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };
const history=useHistory();
  const handleOk = () => {
    history.push("/subscribe");
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Button className="btn btn-lg" onClick={showModal} style={{height: 50}}>
      
        Pay Now
      </Button>
      <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <h3>Please Subscribe to Watch this Video</h3>
      </Modal>
    </>
  );
};

export default PayPopup;