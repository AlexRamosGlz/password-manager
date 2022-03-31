import React from "react";
import { FcMenu } from "react-icons/fc";
import  {Button}  from "@material-ui/core";
import { ButtonGroup } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { switchState } from "../Slicers/OpenSlicer";


const TopBar = () => {
  const dispatch = useDispatch();

  const openBar = (button) => {
    dispatch(switchState());
  }

  return(
    <div className="top__bar">
      <Button 
        variant="outlined"
        onClick={(e) => openBar(e.target)}  
        className='button_top_bar'
      >
        <FcMenu className="topBar__icon"/>
      </Button>
      <div></div>
      <div>
        <Button variant='contained' className='button_top_bar'>Sign Up</Button>
        <Button variant='contained' className='button_top_bar'>Sign Up</Button>
      </div>
    </div>
  )
}

export default TopBar;