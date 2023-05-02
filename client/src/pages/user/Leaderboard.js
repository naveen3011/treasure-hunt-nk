import React, { useEffect, useState } from 'react';
import UserTable from './UserTable';
import axios from 'axios';

 export default function Leaderboard() {
  const [users, setUsers] = useState([]);

   const getUsers = async () => {
        
     try {

      const res = await axios.get(`${process.env.REACT_APP_API}/getAllUsers`);
      setUsers(res.data);
      console.log(res.data);
      
     } catch (error) {

      console.log(error);
      
      
     }
     
   };

    useEffect(() => {
    getUsers();
  }, []);
   
  return <UserTable users={users} />;
}

