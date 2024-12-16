import React from 'react'
import EditForm from './EditForm';

const Users = ({users, handleDelete, handleEdit}) => {

  return (
    <>
      {
      users.length === 0 ? <p>No user available</p>
      : (users.map((user) => {
        return (
          <div className='text-black bg-[#F2F2F2] p-2 rounded-2xl' key={user.id}>
            <span>{`Name : ${user.name}`}</span><br />
            <span>{`Email: ${user.email}`}</span><br />
            <span>{`Gender : ${user.gen}`}</span>
            <div className='flex gap-2 mt-2'>
              <EditForm user={user} handleEdit={handleEdit} />
              <button className="bt border px-2 py-0.5 bg-red-600 text-white rounded" onClick={() => {handleDelete(user.id)}}>Delete</button>
            </div>
          </div>
        )
      }))
      }
    </>
  )
}

export default Users