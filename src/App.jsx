import { useState } from 'react'
import Users from './components/Users';

function App() {

  const [users, setUsers] = useState([
    {name :" user1", email : "user1@email.com", gen : "male"},
    {name : "user2", email : "user2@email.com", gen : "female"},
    {name :" user3", email : "user3@email.com", gen : "male"},
    {name :" user4", email : "user4@email.com", gen : "male"},
    {name :" user5", email : "user5@email.com", gen : "female"},
  ])

  console.log(users);
  

  return (
    <>
      
      <Users users={users} />


      {/* {users.map((user, index) => <p key={index}>{user.email}</p>)}
      {users.map((user, index) => <p key={index}>{user.gen}</p>)}
      */}
    </> 
  )
}

export default App
