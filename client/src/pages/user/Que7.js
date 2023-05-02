import Card from "react-bootstrap/Card";
import { useState } from "react";
import { toast } from "react-hot-toast";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { DownloadOutlined } from '@ant-design/icons';
import styles from "../HomeStyle.module.css";
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';

export default function Que7() {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const answer = e.target.answer.value;

    if (answer === "") {
      toast.error("Please enter your answer");
      return;
    }

    try {
      const res = await axios.post(`${process.env.REACT_APP_API}/que7`, {
        answer: answer,
      });

      if (res.data === "wrong") {
        toast.error("Answer is wrong");
        setTimeout(function () {
          window.location.reload();
        }, 1000);
      } else if (res.data === "correct") {
        toast.success("Congratulations! You have completed the game. Redirecting to score page in 5 seconds")

        setTimeout(function () {
        navigate("/score/user");
        }, 5000);

      }
    } catch (error) {
      toast.error("Network error");
    }
  };
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.home2}>
    <div className="container mt-3">
      <Card style={{ width: "auto" }}>
        <Card.Body>
          <Card.Title>Problem-7</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">Statement</Card.Subtitle>
          <Card.Text>
              Help Chefina to find the Flag in the given image.<br></br>
              <Link to="https://res.cloudinary.com/ddkj8wsjy/image/upload/v1681666400/FlaG_sxjvwk.png" target="_blank"><DownloadOutlined /></Link><br></br><br></br>
              <Button
                onClick={() => setOpen(!open)}
                aria-controls="example-collapse-text"
                aria-expanded={open}
              >
                Hint
              </Button>
              <Collapse in={open}>
                <div id="example-collapse-text">
                <br></br>
                1. Focus on only one color at a time.<br></br>
                2. The flag is the name of a famous personality.<br></br>
                3. He is a co-founder of many successful companies.His name &nbsp;&nbsp;&nbsp; ends with k.
                </div>
              </Collapse>
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
