import { useState } from 'react'
import Users from './components/Users';
import UsersForm from './components/UsersForm';
import {v4 as uuid} from 'uuid';


function App() {

  const [users, setUsers] = useState([
    {name :" user1", email : "user1@email.com", gen : "male", id : uuid()},
    {name : "user2", email : "user2@email.com", gen : "female", id : uuid()},
  ])  

  return (
    <>

      <div className='flex justify-center'>
        <UsersForm setUsers={setUsers} users={users} />
        <Users users={users} />
      </div>

    </> 
  )
}

export default App
