import React, { Fragment } from "react";
import AppoitmentHook from "../../hooks/AppoitmentHook";
import "./appoitment.css";
const Appoitments = () => {
  const { appoitments: allAppoitments } = AppoitmentHook();
  const appoitmentLength = allAppoitments.length;
  const statusPending = allAppoitments.filter(
    (item) => item.status === undefined
  );
  const statusDone = allAppoitments.filter((item) => item.status === true);


  function statusChangeHandler(val) {
    fetch(`https://react-app-d64b7-default-rtdb.firebaseio.com/appoitments/${val.Patientid}.json`, {
      method: "PATCH",
      body: JSON.stringify({
        status:true
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
  return (
    <Fragment>
      <div className="allAppoitments text-white ">
        <div className="total  d-flex w-50 mx-auto justify-content-center mt-4">
          <div className="fs-3">Total Number of Appoitments =</div>
          <div className="fs-3 text-end ps-5 ">{appoitmentLength}</div>
        </div>
        <div className="total  d-flex w-50 mx-auto justify-content-center mt-4">
          <div className="fs-3">Total Pending Appointment =</div>
          <div className="fs-3 text-end ps-5 ">{statusPending.length}</div>
        </div>
        <div className="total  d-flex w-50 mx-auto justify-content-center mt-4">
          <div className="fs-3">Total Done Appointment =</div>
          <div className="fs-3 text-end ps-5 ">{statusDone.length}</div>
        </div>
      </div>
      <div className="appoitmentTable mt-5">
        <table className="table-bordered text-white w-75 mx-auto">
          <thead>
            <tr className="text-center ">
              <th className="p-2" scope="col">
                Patient Id
              </th>
              <th className="p-2" scope="col">
                Appointment Id
              </th>
              <th className="p-2" scope="col">
                Patient Name
              </th>
              <th className="p-2" scope="col">
                Patient Email
              </th>
              <th className="p-2" scope="col">
                Doctor Id
              </th>
              <th className="p-2" scope="col">
                Doctor Email
              </th>
              <th className="p-2" scope="col">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {allAppoitments.map((item) => {
              return (
                <tr key={item.Patientid}>
                  <th scope="row">{item.Patientid}</th>
                  <td className="p-2">{item.docId}</td>
                  <td className="p-2">{item.patientName}</td>
                  <td className="p-2">{item.patientEmail}</td>
                  <td className="p-2">{item.docId}</td>
                  <td className="p-2">{item.docEmail}</td>
                  <td className="p-2">
                  {item.status === undefined &&  <button
                      onClick={() => statusChangeHandler(item)}
                      className="btn btn-primary tableBtn"
                    >
                      pending
                    </button>}
                    
                  {item.status === true &&  <button className="btn btn-success tableBtn">
                      done
                    </button>}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </Fragment>
  );
};

export default Appoitments;
