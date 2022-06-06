import { useState } from 'react';
// import cou from './ai.jpg'
// import Record from './record.json';
import React from 'react';
// import './courses.css'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


export default function Courses(){
  // const [cou,couchange]=useState(courses)
  // var ima=Record[0].image1
  // console.log(Record[0].image1)
  // var imi=require(ima).default
  const [view, changeView] = useState(0);


  if(view===0)
  {

    return(
      <div className="container">
        <div className="row row-cols-1 row-cols-md-3 g-4">
        {/* <img src={ima} alt="adsfasd" ></img> */}

        <div className="col" onClick={()=>changeView(view+2)}>
                <div className="card">

                <img src={"./assets/new.jpg"} className="card-img-top blur" alt="..." />            
                    <div className="card-body" >
                      <h3 className="card-title">Add new Course</h3>
                      
                        <h5 className="addicon"> </h5>
                        <span className="material-symbols-outlined  addiconsize addicon">
                          add_box
                        </span>
                        
                        <br />
                                
                                <h5 className="h5">Course Overview</h5>
                                <h6 className="h6" style={{marginLeft:"5%"}}>Overview</h6>
                                <br />
                                <p className="position-absolute bottom-0 end-0 greysmall" style={{color:"grey"}}>Last Date: date</p>
                    </div>
                  </div>
              </div>

        {/* {Record.map(course=>{
                  return(
                  
              <div key={course.name} className="col" onClick={()=>changeView(view+1)}>
                <div className="card">

                <img src={course.image1} className="card-img-top" alt="..." />            
                    <div className="card-body" >
                      <h3 className="card-title">{course.name}</h3>
                      <br />
                                
                      <h5 className="h5">Course Overview</h5>
                      <h6 className="h6" style={{marginLeft:"5%"}}>{course.overview}</h6>
                      <br />
                      <p className="position-absolute bottom-0 end-0 greysmall" style={{color:"red"}}>Last Date: {course.deadline}</p>
                      
                      
                    </div>
                  </div>
              </div>
        
                )
              })
        } */}
        </div>
      </div>
    )

  }
  else if(view===1){
    return(
      <h1 onClick={()=>changeView(view-1)}>View Changed</h1>
    )
  }
  else if(view===2){
    return(
      <div className="container" id="newVeh" >
      <div className="card" >
        <div className="card-body">
        <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Course Name</Form.Label>
                    <Form.Control type="email" placeholder="Enter Course Name" />
                    <Form.Text className="text-muted">
                    Enter only one course name
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Course Description</Form.Label>
                    <Form.Control type="password" placeholder="Enter Details about the course" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
        
      </div>
    </div>
    )
  }


}
