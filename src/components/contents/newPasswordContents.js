import React, { useState } from "react";
import { Button } from "@material-ui/core";
import TextField from "@mui/material/TextField";
import { v4 as uuid } from "uuid";
import { useDispatch } from "react-redux";
import { addPassword } from "../../Slicers/addNewPassword";
import { setClose } from "../../Slicers/modalSlicer";

const PasswordContent = () => {
  const [newPass, setNewPass] = useState({
    name: "",
    email: "",
    password: "",
    id: "",
  });
  const dispatch = useDispatch();

  console.log(newPass);

  return (
    <div className="password__content">
      <h1>New Password</h1>
      <div className="password__inputs">
        <ul>
          <li>
            <TextField
              label="Name"
              variant="filled"
              onChange={(e) => {
                setNewPass({ ...newPass, name: e.target.value });
              }}
            />
          </li>
          <li>
            <TextField
              label="Email"
              variant="filled"
              onChange={(e) => {
                setNewPass({ ...newPass, email: e.target.value });
              }}
            />
          </li>
          <li>
            <TextField
              label="Password"
              variant="filled"
              onChange={(e) => {
                setNewPass({ ...newPass, password: e.target.value });
              }}
            />
          </li>
        </ul>
      </div>
      <Button
        variant="contained"
        color="success"
        onClick={(e) => {
          setNewPass({ ...newPass, id: uuid() });
          dispatch(addPassword(newPass));
        }}
      >
        Submit
      </Button>
      <Button
        variant="outlined"
        color="error"
        onClick={(e) => dispatch(setClose())}
      >
        Cancel
      </Button>
    </div>
  );
};

export default PasswordContent;
