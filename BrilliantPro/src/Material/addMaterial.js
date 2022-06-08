import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';



export default function AddMaterial()
{
    const [view, changeView] = useState(0);

    const [name,setName]=useState("");

    const [description,setDescription]=useState("");

    const [material,setMaterial]=useState();



    const FormHandler=(event)=>{
        event.preventDefault();
        console.log(name)
        console.log(description)
        console.log(material)

        fetch('http://localhost:3000/files', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            // We convert the React state to JSON and send it as the POST body
            body: JSON.stringify({
                name:name,
                description:description,
                material:material
            })
          }).then(function(response) {
            console.log(response)
            return response.json();
          });
        
    }
    const FileHander=(event)=>{
        setMaterial(event.target.files[0])
    }

    return(
        <div className="container" id="newVeh" >
          <br />
          <Button className="buttcol" onClick={()=>changeView(0)}>Go Back</Button>
          <br /><br />
        <div className="card" >
          
          <div className="card-body">
          <Form onSubmit={FormHandler}>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Material Name</Form.Label>
                      <Form.Control type="text" placeholder="Enter Course Name" value={name} onChange={(e)=>setName(e.target.value)}/>
                      <Form.Text className="text-muted" >
                      Enter only one course name
                      </Form.Text>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Material Description</Form.Label>
                      <Form.Control type="text" placeholder="Enter Course Name" value={description} onChange={(e)=>setDescription(e.target.value)}/>
                      <Form.Text className="text-muted" >
                      Enter only one course name
                      </Form.Text>
                  </Form.Group>
    
                  <Form.Group controlId="formFile" className="mb-3">
                    <Form.Label>Upload Material File</Form.Label>
                    <Form.Control type="file"  size="lg" onChange={FileHander}/>
                </Form.Group>
                  
                  
                  
                  
                  
                  <Button type="submit" onClick={FormHandler}>Submit</Button>
              </Form>
          </div>
          
        </div>
        
      </div>
      
      )
}

