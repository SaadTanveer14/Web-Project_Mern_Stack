import { useState, useEffect} from 'react';
// import cou from './ai.jpg'
// import Record from './record.json';
import React from 'react';
import './courses.css'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import course from './course';
import Axios from 'axios'; 

var Record=[
  {
    name: "Artificial Intelligence",
    overview: "Very Nice",
    image1: "./assets/ai.jpg",
    deadline: "December 1, 2022",
    start_date: "January 1, 2023",
    end_date: "June 1, 2023"
  },

  {
      name: "Machine Learning",
      overview: "Very Nice",
      image1: "./assets/ml.jpg",
      deadline: "December 1, 2022",
      start_date: "January 1, 2023",
      end_date: "June 1, 2023"
  },

  {
      name: "Natural Language Processing",
      overview: "Very Nice",
      image1: "./assets/nlp.jpg",
      deadline: "December 1, 2022",
      start_date: "January 1, 2023",
      end_date: "June 1, 2023"
  },

  {
      name: "Web Programming",
      overview: "Very Nice",
      image1: "./assets/web1.jpg",
      deadline: "December 1, 2022",
      start_date: "January 1, 2023",
      end_date: "June 1, 2023"
  },

  {
      name: "Ethical Hacking",
      overview: "Very Nice",
      image1: "./assets/EH.jpg",
      deadline: "December 1, 2022",
      start_date: "January 1, 2023",
      end_date: "June 1, 2023"
  },

  {
      name: "Block Chain Technology",
      overview: "Very Nice",
      image1: "./assets/BC.png",
      deadline: "December 1, 2022",
      start_date: "January 1, 2023",
      end_date: "June 1, 2023"
  }
];


export default function Courses(){
  // const [cou,couchange]=useState(courses)
  // var ima=Record[0].image1
  // console.log(Record[0].image1)
  // var imi=require(ima).default
  const [view, changeView] = useState(0);

  const [record,setRecord] = useState([])

  useEffect(() => {
    Axios.get('http://localhost:3000/course').then((response) => {
      setRecord(response.data) 
      // console.log(response.data)
  });
}, [])

  const [name,setName]=useState("");
  const [description,setDescription]=useState("");
  const [picture,setPicture]=useState("");
  const [startdate,setStartdate]=useState("");
  const [enddate,setEnddate]=useState("");
  const [deadline,setDeadline]=useState("");

  const FormHandler=(event)=>{
    event.preventDefault();
    Record.push(
      {
        name: name,
        overview: description,
        image1: picture,
        deadline: deadline,
        start_date: startdate,
        end_date: enddate
      }
    )
  
    alert(name + " " + description + " " +picture+ " " +String(deadline)+ " " +String(startdate)+ " " +String(enddate))

    // console.log(Record)
    // const options = {
    //   method: 'POST',
    //   headers: { crossDomain: true },
    //   data: {
    //     name: name,
    //     overview: description,
    //     image1: picture,
    //     deadline: deadline,
    //     start_date: startdate,
    //     end_date: enddate
    //   },
    //   url:"http://localhost/3000/course/"
    // };

    // Axios(options)
    var data= {
          name: name,
          overview: description,
          image1: picture,
          deadline: deadline,
          start_date: startdate,
          end_date: enddate
        }
        console.log(data)

    fetch('http://localhost:3000/course', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        // We convert the React state to JSON and send it as the POST body
        body: JSON.stringify(data)
      }).then(function(response) {
        console.log(response)
        return response.json();
      });

  }
  
 


  if(view===0)
  {

    // console.log(record)
    
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

        {record.map(course=>{
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
        }
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
        <br />
        <Button className="buttcol" onClick={()=>changeView(0)}>Go Back</Button>
        <br /><br />
      <div className="card" >
        
        <div className="card-body">
        <Form onSubmit={FormHandler}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Course Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Course Name" value={name} onChange={(e)=>setName(e.target.value)}/>
                    <Form.Text className="text-muted" >
                    Enter only one course name
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Course Description</Form.Label>
                    <Form.Control type="text" placeholder="Enter Details about the course" value={description} onChange={(e)=>setDescription(e.target.value)}/>
                </Form.Group>
                
                <Form.Label>Select Picture</Form.Label>
                <Form.Select value={picture} onChange={(e)=>setPicture(e.target.value)}>
                  <option disabled></option>
                  <option value="./assets/web2.webp">./assets/web2.webp</option>
                  <option value="./assets/BC1.jpg">./assets/BC1.jpg</option>
                  <option value="./assets/DS2.jpg">./assets/DS2.jpg</option>
                  <option value="./assets/CC2.jpg">./assets/CC2.jpg</option>
                  <option value="./assets/app.jpg">./assets/app.jpg</option>
                  <option value="./assets/CC1.png">./assets/CC1.png</option>
                </Form.Select>

                <Form.Label>Course Start-Date</Form.Label>
                <Form.Control type="date" value={startdate} onChange={(e)=>setStartdate(e.target.value)}/>

                <Form.Label>Course End-Date</Form.Label>
                <Form.Control type="date"  value={enddate} onChange={(e)=>setEnddate(e.target.value)}/>

                <Form.Label>Last Date to Apply</Form.Label>
                <Form.Control type="date" value={deadline} onChange={(e)=>setDeadline(e.target.value)} />
                
                <Button type="submit">Submit</Button>
            </Form>
        </div>
        
      </div>
      
    </div>
    
    )
  }


}