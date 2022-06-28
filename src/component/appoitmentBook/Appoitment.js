import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AppoitmentHook from "../../hooks/AppoitmentHook";
/** @format */
import useInput from "../../hooks/inputValidation";
import { useSelector } from "react-redux/es/hooks/useSelector";


const isNotEmpty = (value) => value.trim() !== "";
const isEmail = (value) => value.includes("@") && value.trim() !== "";
const Appoitment = (props) => {
  const { appoitments: allAppoitments } = AppoitmentHook();
 const [isCheck, setIsCheck]= useState(false)
    const navigate=useNavigate();
  const docData = useSelector((item) => item.doc.docData);
  const {
    value: NameValue,
    isValid: NameIsValid,
    hasError: NameHasError,
    valueChangeHandler: NameChangeHandler,
    inputBlurHandler: NameBlurHandler,
    reset: resetName,
  } = useInput(isNotEmpty);

  const {
    value: diseaseValue,
    isValid: diseaseIsValid,
    hasError: diseaseHasError,
    valueChangeHandler: diseaseChangeHandler,
    inputBlurHandler: diseaseBlurHandler,
    reset: resetdisease,
  } = useInput(isNotEmpty);
  const {
    value: patientEmailValue,
    isValid: patientEmailIsValid,
    hasError: patientEmailHasError,
    valueChangeHandler: patientEmailChangeHandler,
    inputBlurHandler: patientEmailBlurHandler,
    reset: resetpatientEmail,
  } = useInput(isEmail);

  let formIsValid = false;

  if (NameIsValid && diseaseIsValid && patientEmailIsValid) {
    formIsValid = true;
  }
  async function submitHandler(event) {
    event.preventDefault();
    const pendingStaus=allAppoitments.filter(item=>item.patientEmail===patientEmailValue && item.status!==true);
    if (!formIsValid) {
      return;
    }
    if (pendingStaus.length!==0) {
      setIsCheck(true)
      return;
    }
    fetch(
      "https://react-app-d64b7-default-rtdb.firebaseio.com/appoitments.json",
      {
        method: "POST",
        body: JSON.stringify({
          patientName: NameValue,
          docEmail: docData.Email,
          docId: docData.id,
          disease: diseaseValue,
          patientEmail: patientEmailValue,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    navigate('/ShowAppoitment')
    resetName();
    resetdisease();
    resetpatientEmail();
  }

  const NameClasses = NameHasError
    ? "form-control-my invalid"
    : "form-control-my";
  const diseaseClasses = diseaseHasError
    ? "form-control-my invalid"
    : "form-control-my";
  const patientClasses = patientEmailHasError
    ? "form-control-my invalid"
    : "form-control-my";

  return (
    <div className="d-flex justify-content-center mt-5 pt-5 ">
      <form onSubmit={submitHandler}>
      {isCheck &&<label htmlFor="" className="text-danger">your Request already pending</label>}
      
        <h1 className="text-center text-white py-4">Book Appoitment</h1>
        <div className="control-group">
          <div className={NameClasses}>
            <label htmlFor="name">Name of the Patient.</label>
            <input
              type="text"
              id="name"
              onChange={NameChangeHandler}
              onBlur={NameBlurHandler}
            />
            {NameHasError && (
              <p className="error-text">please Enter Patient Name</p>
            )}
          </div>
          <div className='form-control-my'>
            <label htmlFor="name">Doctor Email</label>
            <input
              value={docData.Email}
              type="text"
              id="name"
            />
          </div>
        </div>
        <div className="control-group">
          <div className={diseaseClasses}>
            <label htmlFor="name">Disease</label>
            <input
              type="text"
              id="name"
              onChange={diseaseChangeHandler}
              onBlur={diseaseBlurHandler}
            />
            {diseaseHasError && (
              <p className="error-text">please enter Disease</p>
            )}
          </div>
          <div className='form-control-my'>
            <label htmlFor="name">Doctor Id</label>
            <input
              value={docData.id}
              type="text"
              id="name"
            />
          </div>
        </div>
        <div className="control-group">
          <div className={patientClasses}>
            <label htmlFor="name">Email of Patient</label>
            <input
              type="text"
              id="name"
              onChange={patientEmailChangeHandler}
              onBlur={patientEmailBlurHandler}
            />
            {patientEmailHasError && (
              <p className="error-text">Please enter a valid email address.</p>
            )}
          </div>
        </div>
        <div className="form-actions">
          <button disabled={!formIsValid}>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Appoitment;
