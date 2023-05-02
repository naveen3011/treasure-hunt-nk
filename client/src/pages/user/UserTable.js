import React from 'react';
import Table from 'react-bootstrap/Table'
import styles from "../HomeStyle.module.css";

function UserTable({ users }) {
  // sort the users by score
  users.sort((a, b) =>{
    if(a.score===b.score){
      const AccuracyA = (a.total_attempted - a.wrong_attempted)/a.total_attempted;
      const AccuracyB = (b.total_attempted - b.wrong_attempted)/b.total_attempted;
      return AccuracyB - AccuracyA;
    }
    return b.score - a.score;
  });
  return (
    <div className= {styles.home2}>
    <br></br>
    
    <h1 className='text-center text-white'> Leaderboard </h1>
    
    <br></br>

     <div className='container mt-3 bg-white border-5 border-black rounded table-responsive'>
        <Table striped bordered hover  className='table'>
      <thead>
        <tr>
          <th>Rank</th>
          <th>User</th>
          <th>Score</th>
          <th>Total Attempt</th>
          <th>Correct Attempt</th>
          <th>Accuracy</th>
          {/* <th>Duration</th> */}
        </tr>
      </thead>
      <tbody>
        
        {users.map((user, index) => (
            <tr key={index}>
                <td>{index+1}</td>
                <td>{user.username}</td>
                <td>{user.score}</td>
                <td>{user.total_attempted}</td>
                <td>{user.total_attempted - user.wrong_attempted}</td>
                {/* const Accuracy = (res.data.total_attempted - res.data.wrong_attempted)/res.data.total_attempted; */}
                <td>{ user.total_attempted===0? '0.00' :(((user.total_attempted-user.wrong_attempted)/user.total_attempted).toFixed(4))*100}%</td>
                {/* <td>{(Date(user.end_time)-Date(user.start_time))/1000}</td> */}
            </tr>
        ))}

      </tbody>
    </Table>
     </div>
     </div>
  );
}

export default UserTable;
