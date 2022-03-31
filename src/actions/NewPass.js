import React from "react";
import { Modal } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import {switctVisibility} from '../Slicers/modalSlicer'

const NewPassword = ({isOpen}) => {
  

  return (
    <div>
      <Modal 
        open={isOpen}
      >
        <P>PassWord Modal</P>
      </Modal>
    </div>
  )
}

export default NewPassword;