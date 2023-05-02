import axios from "axios";
import React from "react";
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import styles from "../HomeStyle.module.css";


export default function Dashboard() {
  
 
  const [score, setScore] = useState(0);

  const getScore = async () => {
    try{
      const res = await axios.get(`${process.env.REACT_APP_API}/score/user`);
      console.log(res.data);
      setScore(res.data.score);
    }
    catch(err){
      console.log(err);
    }
  }
  useEffect(() => {
    getScore();
  }, []);

 const navigate = useNavigate();
  return (
    <>
      <div className= {styles.home4}>
      <Card className="container-fluid d-flex mt-3 container" style={{ width: "auto"}}>
        <Card.Body>
          <Card.Title className="fw-bold justify-content center text-center">Instructions</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
          </Card.Subtitle>
          <Card.Text className="mt-3 ">
           <p>1. Welcome to the adventure game.</p>
           <p>2. You will need to solve clues to discover the location of the next clue.</p>
            <p>3. Each clue may require different problem-solving techniques and can lead you to different sources such as texts, videos, 3D animations, games, links, or anything else.</p>
           <p>4.  Keep track of the clues and sources used to solve them.</p>
            <p>5. Pay attention to the details and clues hidden in each source as they may lead to dead ends.</p>
            <p>6. The final clue will lead you to the treasure.</p>
            <p>7. Remember that the game aims to evaluate your soft skills, so enjoy the adventure and challenge yourself.</p>
            <p>8. Good luck!</p>
          </Card.Text>
        </Card.Body>
      </Card>
      
      <div class="d-grid gap-2 col-1 mx-auto mt-3">
      {/* want to write js here */}
      <button onClick={e => (
        e.preventDefault(),
        
        (async () => {
          
          try {
            const que = score + 1;

            if(que === 8){
              
              navigate('/score/user');
            }
            else
            navigate(`/dashboard/que${que}`);
          } catch (error) {
            console.log(error);
          }

        })()

        
        
      )} class="btn btn-dark" type="button"> {score===0 ? "Start" : score===7 ? "See Result" : "Resume"} </button>
      <br/>
      </div>
      </div>
    </>
  );
}
