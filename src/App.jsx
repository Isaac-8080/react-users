import { useState } from 'react'
import Users from './components/Users';
import UsersForm from './components/UsersForm';

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

      <div className='flex flex-col h-[100dvh] w-full items-center justify-center'>
        <UsersForm />
        <Users users={users} />
      </div>

    </> 
  )
}

export default App
