import React, { useState, useEffect } from "react";
import "./Experience.css";
import Container from "../UI/Container";
import Input from "../GeneralComponents/Input";
import { Form } from "react-bootstrap";
import { useExp } from "../Hooks/ValidationHook";
import { Alert } from "react-bootstrap";
import SuccessCard from "../GeneralComponents/SuccessCard";
import Loader from "../GeneralComponents/Loader";
import { useDispatch, useSelector } from "react-redux";
import { experienceSliceActions } from "../../Store/ExperienceSlice";
export default function Experience() {
  const [errorState, setErrorState] = useState();
  const edit = useSelector((state) => state.edit.editState);

  const {
    enteredValue: exp,
    valueHandler: totalExpHandler,
    isValid: isTotalExpValid,
  } = useExp((exp) => {
    return exp > 0;
  });
  const {
    enteredValue: reactExp,
    valueHandler: reactExpHandler,
    isValid: isReactExpValid,
  } = useExp((exp) => {
    return exp > 0;
  });
  const {
    enteredValue: prevCompany,
    valueHandler: previousCompanyHandler,
    isValid: isPreviousCompanyValid,
  } = useExp((exp) => {
    return exp.trim() !== "";
  });
  const {
    enteredValue: currentCompany,
    valueHandler: currentCompanyHandler,
    isValid: isCurrentCompanyValid,
  } = useExp((exp) => {
    return exp.trim() !== "";
  });
  const {
    enteredValue: notice,
    valueHandler: noticePeriodHandler,
    isValid: isNoticePeriodValid,
  } = useExp((exp) => {
    return exp > 0;
  });

  const [showLoader, setShowLoader] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    if (
      !isTotalExpValid ||
      !isCurrentCompanyValid ||
      !isReactExpValid ||
      !isPreviousCompanyValid ||
      !isNoticePeriodValid
    ) {
      setErrorState("please check all the fields");
      setTimeout(() => {
        setErrorState(false);
      }, 3000);
      return;
    }
    setShowLoader(true);
    setTimeout(() => {
      setShowLoader(false);
      setShowModal(true);
      dispatch(
        experienceSliceActions.storeExperience({
          dataArray: [
            `Total Experience: ${exp} Years`,
            `React Experience: ${reactExp} Years`,
            `Previous Company: ${prevCompany}`,
            `Current Company: ${currentCompany}`,
            `Notice Period: ${notice}`,
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
      <Form className="experience-form" onSubmit={submitHandler}>
        <Input
          label="Total years of Experience"
          type="number"
          min="1"
          max="12"
          placeholder={"ex:2 years"}
          onChange={totalExpHandler}
        />
        <Input
          label="Experice with React JS"
          type="number"
          min="1"
          max="10"
          placeholder="In Years"
          onChange={reactExpHandler}
        />
        <Input
          label="Your Previous Company"
          type="text"
          placeholder={"ex:IBM"}
          onChange={previousCompanyHandler}
        />
        <Input
          label="Your current Company"
          type="text"
          placeholder={"ex:Kyndryl"}
          onChange={currentCompanyHandler}
        />
        <Input
          label="Notice Period"
          type="number"
          min="1"
          max="3"
          placeholder={"In Months (2 months)"}
          onChange={noticePeriodHandler}
        />
        <button>Submit</button>

        {errorState && (
          <Alert className="exp-alert" variant="danger">
            {errorState}
          </Alert>
        )}
      </Form>
      {showLoader && <Loader />}
      {showModal && (
        <SuccessCard
          route={edit ? "/review" : "/education"}
          message="experience section completed"
          toggleModal={toggleModal}
        />
      )}
    </Container>
  );
}
