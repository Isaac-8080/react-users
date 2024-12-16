import React, { useState } from 'react'
import { MdEmail, MdPerson, MdGroup } from 'react-icons/md'
import {v4 as uuid} from 'uuid';

const UsersForm = ({users, setUsers}) => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gen, setGen] = useState("");

  const handleName = (e) => {
    setName(e.target.value);
  }

  const handleEmail = (e) => {
    setEmail(e.target.value);
  }

  const handleGen = (e) => {
    setGen(e.target.value);
  }

  const handleSubmit = (e) => {

    e.preventDefault();

    if (name && email && gen) {

      const formValues = {name, email, gen, id: uuid()}
      
      setUsers([...users, formValues])

      setName("")
      setEmail("")
      setGen("")

    }

  }

  return (
    <>
      <div className='flex flex-col gap-3 p-10 w-[40%]'>

        <form onSubmit={handleSubmit} className='space-y-3'>

          <label className="input input-bordered flex items-center gap-2">
            <MdPerson className="h-5 w-5 opacity-70" />
            <input type="text" value={name} onChange={handleName} className="grow" placeholder="Name" />
          </label>

          <label className="input input-bordered flex items-center gap-2">
            <MdEmail className="h-4 w-4 opacity-70" />
            <input type="email" value={email} onChange={handleEmail} className="grow" placeholder="Email" />
          </label>

          <label className="input input-bordered flex items-center gap-2">
            <MdGroup className="h-5 w-5 opacity-70" />
            <input type="text" value={gen} onChange={handleGen} className="grow" placeholder="Gen" />
          </label>

          <input type="submit" value="Submit" className="border p-2.5 rounded-lg hover:bg-black hover:text-white transition-all duration-150 ease-in-out cursor-pointer w-full" />

        </form>
        
      </div>
    </>
  )
}

export default UsersForm