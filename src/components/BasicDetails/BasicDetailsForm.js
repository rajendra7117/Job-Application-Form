import React, { useState } from "react";
import "./BasicDetailsForm.css";
import Input from "../GeneralComponents/Input";
import Container from "../UI/Container";
import { Form } from "react-bootstrap";
import Select from "../GeneralComponents/Select";
import { useInput } from "../Hooks/UseInput";
import { Alert } from "react-bootstrap";
import Loader from "../GeneralComponents/Loader";
import SuccessCard from "../GeneralComponents/SuccessCard";
import { useDispatch, useSelector } from "react-redux";
import { basicDetailsActions } from "../../Store/BasicDetailSlice";
export default function BasicDetailsForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [country, setCountry] = useState("");
  const [error, setError] = useState("");
  const [showLoader, setShowLoader] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const edit = useSelector((state) => state.edit.editState);

  const dispatch = useDispatch();
  const firstNameHandler = (e) => {
    setFirstName(e.target.value);
  };
  const lastNameHandler = (e) => {
    setLastName(e.target.value);
  };

  const verifyMobileNumber = (mobile) => {
    let valid = false;
    let phoneno = /^\d{10}$/;
    if (mobile.match(phoneno)) {
      valid = true;
    
    } else {
      valid = false;
    }
    return valid;
  };

  const {
    enteredInput: mobileNumber,
    onChangeHandler: mobileHandler,
    isInputValid: mobileNumberValid,
    inputHasError: mobileNumberHasError,
    inputBlurHandler: mobileBlurHandler,
  } = useInput(verifyMobileNumber);

  const selectedCountry = (e) => {
    setCountry(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (firstName === "" || lastName === "") {
      setError("Both first name and last must be filled");

      return;
    }
    if (mobileNumberHasError) {
      setError("Mobile Number is invalid");
      return;
    }
    if (country === "" || country === "Select Country") {
      setError("Please select your Country");

      return;
    }
    setShowLoader(true);
    setTimeout(() => {
      setShowLoader(false);
      setShowModal(true);
      dispatch(
        basicDetailsActions.storeBasiceDetails({
          dataArray: [
            `Name: ${firstName} ${lastName}`,
            `Mobile: ${mobileNumber}`,
            `Country: ${country}`,
          ],
        })
      );
    }, 2000);
  };
  const toggleModal = (e) => {
    setShowModal(false);
  };

  return (
    <Container>
      <Form className="basic-details-form" onSubmit={submitHandler}>
        <div>
          <h2>Basic Details</h2>
        </div>

        <Input
          label={"First Name"}
          placeholder="First Name"
          type="text"
          onChange={firstNameHandler}
        />
        <Input
          label={"Last Name"}
          placeholder="Last Name"
          type="text"
          onChange={lastNameHandler}
        />
        <Input
          label={"Mobile Number"}
          placeholder="Mobile Number"
          type="tel"
          onChange={mobileHandler}
          onBlur={mobileBlurHandler}
        />
        <Select onClick={selectedCountry} id={country} />
        {error.length > 0 && <Alert variant="danger">{error}</Alert>}
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
        {showLoader && <Loader />}
        {showModal && (
          <SuccessCard
            message={"Basic steps section completed"}
            route={edit ? "/review" : "/skills"}
            toggleModal={toggleModal}
          />
        )}
      </Form>
    </Container>
  );
}
