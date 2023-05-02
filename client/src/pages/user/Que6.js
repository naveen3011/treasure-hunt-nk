import Card from "react-bootstrap/Card";
import { useState } from "react";
import { toast } from "react-hot-toast";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { DownloadOutlined } from '@ant-design/icons';
import styles from "../HomeStyle.module.css";
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';

export default function Que6() {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const answer = e.target.answer.value;

    if (answer === "") {
      toast.error("Please enter your answer");
      return;
    }

    try {
      const res = await axios.post(`${process.env.REACT_APP_API}/que6`, {
        answer: answer,
      });

      if (res.data === "wrong") {
        toast.error("Answer is wrong");
        // setTimeout(function () {
        //   window.location.reload();
        // }, 1000);
      } else if (res.data === "correct") {
        toast.success("Answer is correct");

        navigate("/dashboard/que7");
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
          <Card.Title>Problem-6</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">Statement</Card.Subtitle>
          <Card.Text>
              F.R.I.E.N.D.S make you winner.<br></br>
              Refer Collage.jpg<br></br>
              <Link to="https://res.cloudinary.com/ddkj8wsjy/image/upload/v1681665883/Collage_uhuxsn.jpg" target="_blank"><DownloadOutlined /></Link><br></br><br></br>
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
                1. Every Friend counts.<br></br>
                2. Collecting photos and videos is also a hobby.
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
