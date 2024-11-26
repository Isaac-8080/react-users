import React from 'react'

const Users = (props) => {
  return (
    <>
      <div className=''>
        {
        props.users.map((user, index) => (
          <p key={index}>{user.name + " | " + user.email + " | " + user.gen}</p>
        ))
        }
      </div>
      
    </>
  )
}

export default Users