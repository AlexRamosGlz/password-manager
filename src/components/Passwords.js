import React from "react";
import ModalBluePrint from "./ModalBluePrint/ModalBluePrint";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setOpen, setClose } from "../Slicers/modalSlicer";
import PasswordContent from "./contents/newPasswordContents";

const Passwords = () => {
  const dispatch = useDispatch();
  const dispatchModal = useDispatch();
  const passwordsSate = useSelector((state) => state.password.value);
  const [passBody, setPassBody] = useState({
    name: "",
    email: "",
    password: "",
  });
  const modalOpen = useSelector((state) => state.modalOpen.value);

  console.log(passwordsSate);

  return (
    <div>
      <h1>Passwords</h1>
      <div className="search_bar_group">
        <input
          className="search__bar"
          placeholder="  What are you looking for?"
        ></input>
      </div>

      <button onClick={(e) => dispatchModal(setOpen())}>new pass</button>
      <ModalBluePrint
        header="new password"
        isOpen={modalOpen}
        modalType={<PasswordContent />}
      ></ModalBluePrint>

      {/*<Modal isOpen={modalOpen} onRequestClose={() => dispatchModal(setClose())}>
        <TextField 
          id="name_textfield" 
          label="Name" 
          variant="filled" 
          onChange={
            (e) => (setPassBody({ ...passBody, name: e.target.value}))
          }/>

        <TextField 
          id="email_textfield" 
          label="Email" 
          variant="filled" 
          onChange={
            (e) => (setPassBody({...passBody, email: e.target.value}))
          }/>

        <TextField 
          id="password_textfield" 
          label="Password" 
          variant="filled" 
          onChange={
            (e) => (setPassBody({...passBody, password: e.target.value}))
          }/>

        <Button 
          variant="contained" 
          onClick={
            () => dispatch(addPassword({...passBody, id: uuid()}))
          }>
        Submit</Button>

        </Modal>*/}
      {passwordsSate.length > 0 &&
        passwordsSate.map((el) => {
          //console.log(el);

          return (
            <div>
              <p>
                {el.name} {el.email} {el.password}
              </p>
            </div>
          );
        })}
    </div>
  );
};

export default Passwords;
