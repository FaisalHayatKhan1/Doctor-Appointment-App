import{ useEffect, useState } from 'react'

const DoctorsData = () => {
  const [doctorData, setDoctorData]=  useState([])
    useEffect(()=>{
       async function availableDoctor(){
        const response = await fetch(
            "https://react-app-d64b7-default-rtdb.firebaseio.com/doctors/-N5aesMJq1fQZ98Meemc.json"
          );
          const data = await response.json();
          let recieveData = [];
          for (const key in data) {
            recieveData.push({
              id: Math.random().toString(),
              name: data[key].name,
              Age: data[key].Age,
              Speciality: data[key].Speciality,
              Email: data[key].Email,
              image:data[key].image,
              fee: data[key].fee,
            });
          }
          setDoctorData(recieveData);
       }
       availableDoctor()
    },[])
  return {
    doctors:doctorData,
  }
  
}

export default DoctorsData
