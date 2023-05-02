import React from "react";
import { Card, Button } from "react-bootstrap";
import { useAuth } from "../../context/auth.js";
import styles from "../HomeStyle.module.css";
import axios from "axios";
import { HourglassOutlined,DingdingOutlined, UserOutlined ,UserAddOutlined,ReadOutlined} from '@ant-design/icons';

export default function  Score() {

  const [score, setScore] = React.useState([]);
  const [total_attempted, setTotal_attempted] = React.useState([]);
  const [wrong_attempted, setWrong_attempted] = React.useState([]);
  const [accuracy, setAccuracy] = React.useState([]);
  const [start_time, setStart_time] = React.useState([]);
  const [end_time, setEnd_time] = React.useState([]);
  const [duration, setDuration] = React.useState([]);

      const getScore = async () => {
        try {
          const res = await axios.get(`${process.env.REACT_APP_API}/score/user`);
          setScore(res.data.score);
          setTotal_attempted(res.data.total_attempted);
          setWrong_attempted(res.data.wrong_attempted);
          if(res.data.total_attempted === 0){
            setAccuracy(0);
          }
          else{
          const Accuracy = res.data.total_attempted===0?0:(((res.data.total_attempted - res.data.wrong_attempted)/res.data.total_attempted).toFixed(2));
          setAccuracy(Accuracy*100);
          }

          setStart_time(res.data.start_time);
          setEnd_time(res.data.end_time);
          
          const st=new Date(res.data.start_time);
          const et=new Date(res.data.end_time);
          const duration = (et-st)/1000;
          // duration=duration/60;

          console.log(duration);
          setDuration(duration);
          


        } catch (error) {

          console.log(error);
        }
      };

      React.useEffect(() => {
        getScore();
      }, []);

  const [auth, setAuth] = useAuth();
  return (
    <div className= {styles.home2}>
      <h1 className='text-center text-white'> Score </h1>
      <Card className="container mt-3" style={{ width: '20rem'}}>
      <img class="card-img-top" src="https://res.cloudinary.com/ddkj8wsjy/image/upload/v1681658619/engin-akyurt-bPiuY2ZSlvU-unsplash_kxurf8.jpg" alt="Card image cap"></img>
      <Card.Body className="container"  style={{ width: 'auto'}}>
        <Card.Title className="fs-2  my-2"><HourglassOutlined/><i my-3 mx-5> { auth?.user?.username?.toUpperCase()}</i></Card.Title>
        <Card.Subtitle className="mb-2 text-muted fs-3 mt-3"><i>Your Score :</i> <i>{score} </i> </Card.Subtitle>
        <Card.Subtitle className="mb-2 text-muted fs-3 mt-2"><i>Total Attempt :</i> <i>{total_attempted} </i> </Card.Subtitle>
        <Card.Subtitle className="mb-2 text-muted fs-3 mt-2"><i>Correct Attempt :</i> <i>{total_attempted - wrong_attempted} </i> </Card.Subtitle>
        <Card.Subtitle className="mb-2 text-muted fs-3 mt-2"><i>Accuracy :</i> <i> {accuracy} </i></Card.Subtitle>
        <Card.Subtitle className="mb-2 text-muted fs-3 mt-2 mb-2"><i>Duration :</i> <i>{duration} </i> sec </Card.Subtitle>
        <Card.Text>
        
        </Card.Text>
       
      </Card.Body>
    </Card>
    </div>
  );
}
