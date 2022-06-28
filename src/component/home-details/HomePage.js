import React, { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import DoctorsData from "../../hooks/DoctorsData";
import { useDispatch } from "react-redux/es/exports";
import { docAction } from "../../store/doctor-Data";
import './Home.css';
const HomePage = () => {
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const { doctors: availableDoctors } = DoctorsData();
  const cartItemHandler = (val) => {
    dispatch(docAction.docToogle(val))
    // const docName=val.name.replace(/\s/g, '')
    navigate(`/doctordetail/${val.id}`)
  };
  return (
    <Fragment>
      <div className="container mt-5">
        <div className="rowProperty row p-0">
          {availableDoctors.map((item) => {
            return (
              <div
                key={item.id}
                className="cart-item col-12 col-sm-8 col-md-6 col-lg-4  "
              onClick={()=>cartItemHandler(item)}
              >
                <div className="card py-3 ">
                  <div className="avatar ">
                    <img className="card-img" src={item.image} alt="Vans" />
                  </div>
                  <div className="card-body">
                    <h4 className="card-title">{item.name}</h4>
                    <h6 className="card-subtitle mb-2 text-muted">
                      {item.Email}
                    </h6>
                    <div className="buy d-flex justify-content-between align-items-center">
                      <div className="price text-success">
                        <h6 className="mt-1">Speciality</h6>
                      </div>
                      <div className="price text-success">
                        <h6 className="mt-1">{item.Speciality}</h6>
                      </div>
                    </div>
                    <div className="buy d-flex justify-content-between align-items-center">
                      <div className="price text-success">
                        <h6 className="mt-1">Age</h6>
                      </div>
                      <div className="price text-success">
                        <h6 className="mt-1">{item.Age}</h6>
                      </div>
                    </div>
                    <div className="buy d-flex justify-content-between align-items-center">
                      <div className="price text-success">
                        <h6 className="mt-1">Doctor Fee</h6>
                      </div>
                      <div className="price text-success">
                        <h6 className="mt-1">${item.fee}</h6>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Fragment>
  );
};

export default HomePage;
