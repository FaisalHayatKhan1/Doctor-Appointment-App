import React, { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import AppoitmentHook from "../../hooks/AppoitmentHook";
const DoctorDetailsComp = () => {
 const [ispending, setIsPending]= useState(false)
  const { appoitments: allAppoitments } = AppoitmentHook();
  const navigate=useNavigate();
  const docData = useSelector((item) => item.doc.docData);
  const doctorPatient=allAppoitments.filter(item=>item.docEmail===docData.Email);
  const pendingPatient=doctorPatient.filter(item=>item.status!==true);
  const donePatient=doctorPatient.filter(item=>item.status===true);
  const totalEarning=donePatient.length*docData.fee;
  const bookAppoitmentHandler=(event)=>{
    event.preventDefault();
    if (pendingPatient.length===2) {
      setIsPending(true)
      return;
    }
    navigate('/bookAppoitment')
  }
  return (
    <Fragment>
      <div className="py-3">
        <div className="fs-2 text-center text-white">{docData.name}</div>
        <div className="doc-det"></div>
        <div className="card py-3 w-50 mx-auto">
        {ispending && <label className="text-danger text-center">doctor Already have 2 pending Patients</label>}
          <div className="avatar ">
            <img className="card-img" src={docData.image} alt="Vans" />
          </div>
          <div className="card-body">
            <h4 className="card-title text-center">{docData.name}</h4>
            <h6 className="card-subtitle mb-2 text-muted d-flex justify-content-center">{docData.Email}</h6>
            <div className="buy d-flex justify-content-between align-items-center">
              <div className="price text-success">
                <h6 className="mt-1">id</h6>
              </div>
              <div className="price text-success">
                <h6 className="mt-1">{docData.id}</h6>
              </div>
            </div>
            <div className="buy d-flex justify-content-between align-items-center">
              <div className="price text-success">
                <h6 className="mt-1">Speciality</h6>
              </div>
              <div className="price text-success">
                <h6 className="mt-1">{docData.Speciality}</h6>
              </div>
            </div>
            <div className="buy d-flex justify-content-between align-items-center">
              <div className="price text-success">
                <h6 className="mt-1">Age</h6>
              </div>
              <div className="price text-success">
                <h6 className="mt-1">{docData.Age}</h6>
              </div>
            </div>
            <div className="buy d-flex justify-content-between align-items-center">
              <div className="price text-success">
                <h6 className="mt-1">Doctor Fee</h6>
              </div>
              <div className="price text-success">
                <h6 className="mt-1">${docData.fee}</h6>
              </div>
            </div>
            <div className="buy d-flex justify-content-between align-items-center">
              <div className="price text-success">
                <h6 className="mt-1">Total No. of Patients</h6>
              </div>
              <div className="price text-success">
                <h6 className="mt-1">{doctorPatient.length}</h6>
              </div>
            </div>
            <div className="buy d-flex justify-content-between align-items-center">
              <div className="price text-success">
                <h6 className="mt-1">Patients Pending.</h6>
              </div>
              <div className="price text-success">
                <h6 className="mt-1">{pendingPatient.length}</h6>
              </div>
            </div>
            <div className="buy d-flex justify-content-between align-items-center">
              <div className="price text-success">
                <h6 className="mt-1">Total Earning.</h6>
              </div>
              <div className="price text-success">
                <h6 className="mt-1">${totalEarning}</h6>
              </div>
            </div>
            <div className="buy d-flex justify-content-end py-4 align-items-center">
              <div className="price text-success">
                <button onClick={bookAppoitmentHandler} className="text-end">Book An Appoitment</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default DoctorDetailsComp;
