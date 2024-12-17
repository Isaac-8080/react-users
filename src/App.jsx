import { useState } from 'react'
import Users from './components/Users';
import UsersForm from './components/UsersForm';

function App() {

  const [users, setUsers] = useState([])

  console.log(users);
  
  const handleDelete = (id) => {
    setUsers(users.filter((user) => user.id !== id))
  }

  const handleEdit = (id, editInfo) => {
    setUsers(users.map((user) => user.id === id ? editInfo : user))
  }

  return (
    <>

      <div className='flex justify-center'>
        <UsersForm setUsers={setUsers} users={users} />
        <div className='flex flex-col gap-3 p-10 w-[30%]'>
          <Users users={users} handleDelete={handleDelete} handleEdit={handleEdit} />
        </div>
      </div>

    </> 
  )
}

export default App
