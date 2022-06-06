// import React from 'react';
// // import ReactDOM from 'react-dom';
// import './Assessments.css';
// import Assessment from './Assessment';
// import Add from './AddQues'
// import MaterialDash from './materialDash';

// export default function Assessments()
// {
//   return(
//     <div>
//       {/* <Add></Add> */}
//       <Assessment></Assessment>

//       {/* <MaterialDash></MaterialDash> */}

//     </div>
//   )
// }

import React from 'react'
import CardStats from "components/Cards/CardStats.js";
// import Card from ''
import { Link } from "react-router-dom";

export default function  Assessment
() {
  return (
    
        <div className="px-4 md:px-10 mx-auto w-full">
            <br /><br />
          
            <div className="flex flex-wrap">
            <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
              <Link to="/addAssess">
                <CardStats
                  statSubtitle="Add New Assessment"
                  statIconName="fas fa-book"
                  statIconColor="bg-red-500"
                />
              </Link>
                </div>
                
              
                <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <Link to="/Assessments">
                <CardStats
                  statSubtitle="View Assessments"
                  
                  statIconName="fas fa-users"
                  statIconColor="bg-orange-500"
                />
                </Link>
              </div>
              
                
              
               
    </div>
    </div>
    
  )
}

    
 

