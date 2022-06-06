import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
var questions=[];

export default function Add() {
    const[statement,setstatement]=useState("");
    const[option1,setoption1]=useState("");
    const[correctoption1,setcorrectoption1]=useState("");

    const[option2,setoption2]=useState("");
    const[correctoption2,setcorrectoption2]=useState("");

    const[option3,setoption3]=useState("");
    const[correctoption3,setcorrectoption3]=useState("");

    const[option4,setoption4]=useState("");
    const[correctoption4,setcorrectoption4]=useState("");

    const fromhandler = (event)=>{
        event.preventDefault();
        alert(statement+option1+correctoption1);
        questions.push({
            Statement:statement,
            Options:[
                {Option1: option1,correctoption1:correctoption1},
                {Option2: option2,correctoption2:correctoption2},
                {Option3: option3,correctoption3:correctoption3},
                {Option4: option4,correctoption4:correctoption4}
            ]
        })

        // var data= {
        //     Statement:statement,
        //     Options:[
        //         {Option1: option1,correctoption1:correctoption1},
        //         {Option2: option2,correctoption2:correctoption2},
        //         {Option3: option3,correctoption3:correctoption3},
        //         {Option4: option4,correctoption4:correctoption4}
        //     ]
        //   }

        //   console.log(data)


    }

    const assessmentHandler = (event)=>{
        event.preventDefault();
        fetch('http://localhost:3000/addAssess', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            // We convert the React state to JSON and send it as the POST body
            body: JSON.stringify(questions)
        }).then(function(response) {
            console.log(response)
            return response.json();
        });
        
        console.log(questions)

    }
    
	return(
        <div className="container" id="newVeh" >
        
        <br />
        
        <br />
      <div className="card" >
        
        <div className="card-body">
            <form onSubmit={fromhandler}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Enter Question statement</Form.Label>
                <Form.Control type="text" placeholder="Enter Course Name" value={statement} onChange={(e)=>setstatement(e.target.value)}/>
                <Form.Text className="text-muted" >
                    Enter only one course name
                </Form.Text>
            </Form.Group>
            
            


            <Form.Label>Option1</Form.Label>
            <Form.Control type="text" placeholder="Enter Option " value={option1} onChange={(e)=>setoption1(e.target.value)}/>
            <Form.Select value={correctoption1} onChange={(e)=>setcorrectoption1(e.target.value)}><option value="" disabled>Select Possible Answer</option><option value="false">False</option><option value="true">True</option></Form.Select>
            <br />

            <Form.Label>Option2</Form.Label>
            <Form.Control type="text" placeholder="Enter Option " value={option2} onChange={(e)=>setoption2(e.target.value)} />
            <Form.Select value={correctoption2} onChange={(e)=>setcorrectoption2(e.target.value)}><option value="" disabled>Select Possible Answer</option><option value="false">False</option><option value="true">True</option></Form.Select>
            <br />

            <Form.Label>Option3</Form.Label>
            <Form.Control type="text" placeholder="Enter Option " value={option3} onChange={(e)=>setoption3(e.target.value)}/>
            <Form.Select id="" value={correctoption3} onChange={(e)=>setcorrectoption3(e.target.value)}><option value="" disabled>Select Possible Answer</option><option value="false">False</option><option value="true">True</option></Form.Select>
            <br />

            <Form.Label>Option4</Form.Label>
            <Form.Control type="text" placeholder="Enter Option " value={option4} onChange={(e)=>setoption4(e.target.value)}/>
            <Form.Select value={correctoption4} onChange={(e)=>setcorrectoption4(e.target.value)}><option value="" disabled>Select Possible Answer</option><option value="false">False</option><option value="true">True</option></Form.Select>
            <br />
            <div style={{display: "inline-block",}}>
                <Button type="submit" >Add Questions</Button>
                <Button variant="primary" size="lg" style={{ backgroundColor:"green"}} type="submit" onClick={assessmentHandler}>Add Assessment</Button>
            </div>

            
            {/* {console.log(questions)} */}
            
        </form> 
        </div>
        </div>
    </div>
    )
}
