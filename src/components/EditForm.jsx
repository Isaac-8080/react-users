import React from 'react'
import { MdEmail, MdPerson, MdGroup, MdClose } from 'react-icons/md'
import { useState } from 'react';


const Users = ({user, handleEdit}) => {

  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [gen, setGen] = useState(user.gen);
  
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true)
  }
  
  const closeModal = () => {
    setIsModalOpen(false)
  }

  const handleName = (e) => {
    setName(e.target.value)
  }

  const handleEmail = (e) => {
    setEmail(e.target.value)
  }

  const handleGen = (e) => {
    setGen(e.target.value)
  }
  
  const handleSubmit = (e) => {

    const editInfo = {name, email, gen, id : user.id}

    handleEdit(user.id, editInfo)

    closeModal()
  }


  return (
    <>
      <button className="bt border px-2 py-0.5 bg-green-600 text-white rounded" onClick={openModal}>Edit</button>

      {isModalOpen && (
        <dialog open id="my_modal_1" className="modal bg-gray-200 opacity-10">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Update Info!</h3>
            <div className="modal-action">
              <form onSubmit={handleSubmit} className='flex flex-col gap-3 w-[100%]'>

                {/* if there is a button in form, it will close the modal */}
                <button className='btn bg-transparent hover:bg-transparent w-fit absolute top-3 right-3 border-0 p-2'>
                  <MdClose className='' onClick={closeModal} />
                </button>

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

                <div className='flex justify-items-end gap-3'>

                  <input type="button" value="Cancel" onClick={closeModal} className="border p-2.5 rounded-lg hover:bg-black hover:text-white transition-all duration-150 ease-in-out cursor-pointer" />

                  <input type="submit" value="Update" className="border p-2.5 rounded-lg text-white bg-green-500 hover:bg-green-600 hover:text-white transition-all duration-150 ease-in-out cursor-pointer" />

                </div>

              </form>
            </div>
          </div>
        </dialog>
      )}

    </>
  )
}

export default Users