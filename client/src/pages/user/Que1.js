import Card from "react-bootstrap/Card";
import { useState } from "react";
import { toast } from "react-hot-toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { DownloadOutlined } from "@ant-design/icons";
import styles from "../HomeStyle.module.css";
import Button from 'react-bootstrap/Button';
import Fade from 'react-bootstrap/Fade';

export default function Que1() {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const answer = e.target.answer.value;

    if (answer === "") {
      toast.error("Please enter your answer");
      return;
    }

    try {
      const res = await axios.post(`${process.env.REACT_APP_API}/que1`, {
        answer: answer,
      });

      if (res.data === "wrong") {
        toast.error("Answer is wrong");
        // setTimeout(function () {
        //   window.location.reload();
        // }, 1000);
      } else if (res.data === "correct") {
        toast.success("Answer is correct");
        navigate("/dashboard/que2");
      }
    } catch (error) {
      console.log(error);
      toast.error("Network error");
    }
  };
  const [open, setOpen] = useState(false);

  return (
    <div className= {styles.home2}>
    <div className="container mt-3">
      <Card style={{ width: "auto" }}>
        <Card.Body>
          <Card.Title className="text-center">Problem-1</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">Statement</Card.Subtitle>
          <Card.Text>
          <br></br>
          There is a hidden message in the image which needs to be found.<br></br>
         <img src="https://res.cloudinary.com/dgsgi8g9f/image/upload/v1683056322/ques1_b9drbt.jpg" className="d-flex " alt="CRflag" width="1000" height="500"></img>
          <Button className="mt-1 text-center"
        onClick={() => setOpen(!open)}
        aria-controls="example-fade-text"
        aria-expanded={open}
      >
       Clue 1
      </Button >
      <Fade in={open}>
        <div id="example-fade-text">
        With so many different marketing and sales platforms available to companies, it's no wonder that marketers.
        </div>
      </Fade>  
      <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-fade-text"
        aria-expanded={open}
      >
        Clue 2
      </Button>
      <Fade in={open}>
        <div id="example-fade-text">
          Decoder can be used.
        </div>
      </Fade> 
      <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-fade-text"
        aria-expanded={open}
      >
        Clue 3
      </Button>
      <Fade in={open}>
        <div id="example-fade-text">
          Decoder can be used.
        </div>
      </Fade> 
      <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-fade-text"
        aria-expanded={open}
      >
        Clue 4
      </Button>
      <Fade in={open}>
        <div id="example-fade-text">
          Read the text in the image.
        </div>
      </Fade> 
      <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-fade-text"
        aria-expanded={open}
      >
        Clue 5
      </Button>
      <Fade in={open}>
        <div id="example-fade-text">
          Read the text in the image and use decoder.
        </div>
      </Fade>        
         
          </Card.Text>
        </Card.Body>
      </Card>

      <form onSubmit={handleSubmit}>
        <div className="form-group mt-2">
          <label htmlFor="answer"></label>
          <input
            type="text"
            className="form-control mt-2 w-25 p-3"
            id="answer"
            placeholder="Enter your answer"
          />
        </div>
        <button type="submit" className="btn btn-dark mt-2">
          Submit
        </button>
      </form>
    </div>
    </div>
  );
}
