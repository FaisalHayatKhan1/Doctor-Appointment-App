import{ useEffect, useState } from 'react'

const AppoitmentHook = () => {
  const [allAppoitments, setAllAppoitments]=  useState([])
    useEffect(()=>{
       async function availableDoctor(){
        const response = await fetch(
            "https://react-app-d64b7-default-rtdb.firebaseio.com/appoitments.json"
          );
          const data = await response.json();
          let recieveData = [];
          for (const key in data) {
            recieveData.push({
              Patientid: key,
              status:data[key].status,
              patientName: data[key].patientName,
              docEmail: data[key].docEmail,
              docId:  data[key].docId,
              disease:  data[key].disease,
              patientEmail: data[key].patientEmail,
            });
          }
          setAllAppoitments(recieveData);
       }
       availableDoctor()
    },[])
  return {
    appoitments:allAppoitments,
  }
  
}

export default AppoitmentHook
