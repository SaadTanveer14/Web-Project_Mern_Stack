import React from 'react'
import CardStats from "components/Cards/CardStats.js";
// import Card from ''
import { Link } from "react-router-dom";
import axios from 'axios';
import { useState, useEffect} from 'react';

export default function  ShowAssessment
() {

    const [record,setRecord] = useState([])
    const [view, changeView] = useState(0);
    const [currentassign, setCurrentassign] = useState();

    useEffect(() => {
      axios.get('http://localhost:3000/addAssess').then((response) => {
        setRecord(response.data) 
        console.log(response.data)
    });
  }, [])

//   const ShowHandler=(event)=>{
//     // event.preventDefault();
//     console.log(event)
//   }


  if(view===0)
  {
    return (

        <div >
      {record.map(assessment=>{
         
          
          return(
              
              <div key={assessment.name} className="px-4 md:px-10 mx-auto w-full" onClick={()=>{changeView(view+1);setCurrentassign(assessment)}}>
              <br /><br />
            
              <div className="flex flex-wrap">
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                
                  <CardStats
                    statSubtitle={assessment.name}
                    statIconName="fas fa-book"
                    statIconColor="bg-red-500"
                  />
                
                  </div>
                 
          </div>
          </div>
          )
      })}
          
      </div>
    )
  }else if(view===1)
  {
    return(
        <div>
            heading
            {console.log(currentassign)}
        </div>
    )
    
  }
  

}