import React from 'react'

const Users = (props) => {
  return (
    <>
      {
      props.users.map((user, index) => (
        <p key={index}>{user.name + " | " + user.email + " | " + user.gen}</p>
      ))
      }
    </>
  )
}

export default Users