import React from 'react'
import CardStats from "components/Cards/CardStats.js";
// import Card from ''
import { Link } from "react-router-dom";

export default function  Materials
() {
  return (
    
        <div className="px-4 md:px-10 mx-auto w-full">
            <br /><br />
          
            <div className="flex flex-wrap">
            <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
              <Link to="/addMaterial">
                <CardStats
                  statSubtitle="Add New Material"
                  statIconName="fas fa-book"
                  statIconColor="bg-red-500"
                />
              </Link>
                </div>
                
              
                <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <Link to="/ViewMaterials">
                    <CardStats
                    statSubtitle="View Material"
                    
                    statIconName="fas fa-users"
                    statIconColor="bg-orange-500"
                    />
                </Link>
              </div>
              
                
              
               
    </div>
    </div>
    
  )
}