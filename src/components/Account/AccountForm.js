import React, { useState } from "react";
import { Form, Alert } from "react-bootstrap";
import Input from "../GeneralComponents/Input.js";
import "./AccountForm.css";
import Container from "../UI/Container.js";
import { useInput } from "../Hooks/UseInput";
import { useDispatch, useSelector } from "react-redux";
import { accountInformationActions } from "../../Store/AccountInformationSlice.js";



import SuccessCard from '../GeneralComponents/SuccessCard'
import Loader from "../GeneralComponents/Loader.js";

export default function AccountForm() {
  const edit = useSelector(state => state.edit.editState)
  const editData = useSelector(state => state.accountInfo.emailAddress)
  
  const dispatch = useDispatch();
  const [errorMsg, setErrorMsg] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [accountCreated, setAccountCreated] = useState(false);
  const emailVerify = (email) => {
    let valid = false;
    if (email.trim().includes("@") && email.length >= 7) {
      valid = true;
    }

    return valid;
  };

  const passwordVerify = (password) => {
    let valid = false;
    if (password.trim().length > 7) {
      valid = true;
    }
    return valid;
  };
  const {
    enteredInput: enteredEmail,
    onChangeHandler: emailHandler,
    inputBlurHandler: emailBlurHandler,
    isInputValid: isEmailValid,
    inputHasError: emailHasError,
    isInputTouched: emailTouched,
    inputClass: emailClass,
    text: emailText,
  } = useInput(emailVerify);

  const {
    enteredInput: enteredPassword,
    onChangeHandler: passwordHandler,
    inputBlurHandler: passwordBlurHandler,
    isInputValid: isPasswordValid,
    inputHasError: passwordHasError,
    isInputTouched: passwordTouched,
    inputClass: passwordClass,
    text: passwordText,
  } = useInput(passwordVerify);

  const {
    enteredInput: reEnteredPassword,
    onChangeHandler: reEnteredPassworddHandler,
    inputBlurHandler: reEnteredPasswordBlurdHandler,
    isInputValid: isReEnteredPasswordHasError,
    isInputHasError: reEnteredPasswordHasError,
    isInputTouched: reEnteredPasswordTouched,
    inputClass: reEnteredpasswordClass,
    text: reEnteredPasswordText,
  } = useInput(passwordVerify);

  const toggleModal = (balue) => {
    setAccountCreated(false);

  };

  const submitHandler = (e) => {
    e.preventDefault();
    
    if (emailHasError) {
      setErrorMsg("email is not valid");
      return;
    }
    if (
      enteredEmail === "" ||
      enteredPassword === "" ||
      reEnteredPassword === ""
      
    ) {
      setErrorMsg("All fields should be filled");
      return
    }
    if (passwordHasError) {
      setErrorMsg("password is not valid");
      return;
    }
    if (reEnteredPasswordHasError) {
      setErrorMsg("password is not valid");
      return;
    }
    if (!passwordsMatched) {
      setErrorMsg("passwords is not matched");
      return;
    }
    setShowModal(true);
    setTimeout(() => {
      setShowModal(false);
      setAccountCreated(true);
      dispatch(accountInformationActions.createAccount({dataArray: [`email address: ${enteredEmail}`]}));
    }, 2000);
    
  };

  let passwordsMatched = false;
  if (enteredPassword.length>0 && enteredPassword===reEnteredPassword) {
    passwordsMatched = true;
  }

  return (
    <Container>
      <Form className="application-form" onSubmit={submitHandler}>

        <div>
          <h2>Create Your Account</h2>
        </div>
        <Input
          type={"email"}
          placeholder={"your email"}
          label={"Email Address"}
        
          onChange={emailHandler}
          onBlur={emailBlurHandler}
          className={emailClass}
          text={
            (emailText === "invalid" && "email is not valid") ||
            (emailText === "valid" && "email is valid")
          }
        />
        <Input
          type={"Password"}
          placeholder={"Password"}
          label={"Password"}
          onChange={passwordHandler}
          onBlur={passwordBlurHandler}
          value={enteredPassword}
          className={passwordClass}
          text={
            (passwordText === "invalid" && "password is not valid") ||
            (passwordText === "valid" && "password is accepted")
          }
        />

        <Input
          type={"Password"}
          placeholder={"Password"}
          label={"confirm password"}
          onChange={reEnteredPassworddHandler}
          onBlur={reEnteredPasswordBlurdHandler}
          value={reEnteredPassword}
          className={reEnteredpasswordClass}
          text={
            (reEnteredPasswordText === "invalid" &&
              "passwords is not matched") ||
            (passwordsMatched && "passwords matched")
          }
        />
        {errorMsg.length > 0 && (
          <Alert  variant={"danger"}>
            {errorMsg}
          </Alert>
        )}

       {<button className="btn btn-success" >Submit</button> }
        {showModal && <Loader />}
    
        {accountCreated && <SuccessCard toggleModal={toggleModal} message={"Account is Created"} route={edit ? '/review' : '/basic-details'}/>}
      </Form>
    </Container>
  );
}
