import React from 'react'
import {v4 as uuid} from 'uuid';
import { MdEmail, MdPerson, MdGroup, MdClose } from 'react-icons/md'
import { useState } from 'react';


const Users = (props) => {

  const [name, setName] = useState(props.users.name)
  const [email, setEmail] = useState(props.users.email)
  const [gen, setGen] = useState(props.users.gen)
  

  const handleName = (e) => {
    setName(e.target.value)
  }

  const handleEmail = (e) => {
    setEmail(e.target.value)
  }

  const handleGen = (e) => {
    setGen(e.target.value)
  }


  return (
    <>
      <div className='flex flex-col gap-3 p-10 w-[30%]'>
        {
        props.users.map(user => (
          <div className='text-black bg-[#F2F2F2] p-2 rounded-2xl' key={uuid()}>
            <span>{`Name : ${user.name}`}</span><br />
            <span>{`Email: ${user.email}`}</span><br />
            <span>{`Gender : ${user.gen}`}</span>
            <div className='flex gap-2 mt-2'>
              <button className="bt border px-2 py-0.5 bg-green-600 text-white rounded" onClick={()=>document.getElementById('my_modal_1').showModal()}>Edit</button>
              <button className="bt border px-2 py-0.5 bg-red-600 text-white rounded">Delete</button>
            </div>
          </div>
        ))
        }

        {/* Open the modal using document.getElementById('ID').showModal() method */}
        <dialog id="my_modal_1" className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Update!</h3>
            <div className="modal-action">
              <form method="dialog" className='flex flex-col gap-3 w-[100%]'>

                {/* if there is a button in form, it will close the modal */}
                <button className='btn bg-transparent hover:bg-transparent w-fit absolute top-3 right-3 border-0 p-2'>
                  <MdClose className='bt' />
                </button>

                <label className="input input-bordered flex items-center gap-2">
                  <MdPerson className="h-5 w-5 opacity-70" />
                  <input type="text" value={name} onChange={handleName} className="grow" placeholder="Name" />
                </label>

                <label className="input input-bordered flex items-center gap-2">
                  <MdEmail className="h-4 w-4 opacity-70" />
                  <input type="text" value={email} onChange={handleEmail} className="grow" placeholder="Email" />
                </label>

                <label className="input input-bordered flex items-center gap-2">
                  <MdGroup className="h-5 w-5 opacity-70" />
                  <input type="text" value={gen} onChange={handleGen} className="grow" placeholder="Gen" />
                </label>

                <div className='flex justify-items-end gap-3'>

                  <input type="submit" value="Update" className="border p-2.5 rounded-lg hover:bg-black hover:text-white transition-all duration-150 ease-in-out cursor-pointer" />

                </div>

              </form>
            </div>
          </div>
        </dialog>

      </div>
    </>
  )
}

export default Users