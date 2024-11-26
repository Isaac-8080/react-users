import React from 'react'
import {v4 as uuid} from 'uuid';


const Users = (props) => {
    
  return (
    <>
      <div className='flex flex-col gap-3 p-10 w-[30%]'>
        {
        props.users.map(user => (
          <div className='bg-black text-white p-2 rounded-2xl' key={uuid()}>
            <span>{`Name : ${user.name}`}</span><br />
            <span>{`Email: ${user.email}`}</span><br />
            <span>{`Gender : ${user.gen}`}</span>
          </div>
        ))
        }
      </div>
    </>
  )
}

export default Users