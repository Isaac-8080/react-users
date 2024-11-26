import React, { useState } from 'react'
import { MdEmail, MdPerson, MdGroup } from 'react-icons/md'

const UsersForm = () => {

  return (
    <>
      <div className='flex flex-col gap-3 p-20 w-[40%]'>
        <form>
          <label className="input input-bordered flex items-center gap-2">
            <MdPerson className="h-5 w-5 opacity-70" />
            <input type="text" className="grow" placeholder="Name" />
          </label>
          <label className="input input-bordered flex items-center gap-2">
            <MdEmail className="h-4 w-4 opacity-70" />
            <input type="text" className="grow" placeholder="Email" />
          </label>
          <label className="input input-bordered flex items-center gap-2">
            <MdGroup className="h-5 w-5 opacity-70" />
            <input type="password" className="grow" value="password" />
          </label>
        </form>
      </div>
    </>
  )
}

export default UsersForm