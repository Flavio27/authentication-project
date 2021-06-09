import useAuth from "../hooks/useAuth";
import React from 'react';

function Dashboard(props) {
  const { user } = useAuth();
  console.log(user);

  return (<div>
    <img src={user?.photoURL} alt="" />
     <h1>Name: { user?.displayName}</h1>
     <h1>Email: {user?.email}</h1>
     </div>);
}

export default Dashboard;