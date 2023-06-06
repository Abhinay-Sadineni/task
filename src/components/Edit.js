import React, { useState, useEffect  } from 'react';
import {useNavigate ,useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Loading from './Loading';

const Edit = () => {
    
    const location = useLocation();
    const navigate = useNavigate();
    if (!location.state) {
        navigate('/list');
    }
    const post = location.state.post;

    const [Name, setName] = useState(post.name);
    const [description, setDescription] = useState(post.description);
    const [edit_id, setedit_id] = useState(post.id);
    const [edit_status, setedit_status] = useState(false);
    
    const [List, setList] = useState(() => {
        return JSON.parse(localStorage.getItem('todoindex')) || []
    });


    //save data in local storage
    useEffect(() => {
        if (edit_status) {
            localStorage.setItem('todoindex', JSON.stringify(List));
            navigate('/list');
        }
    }, [edit_status]);


    //update data in local storage
    
   const handleEdit = () => {
    const id = edit_id;
    if(id==null){
      return;
    }
     const newList = List.map(item => {
          if(item.id === id){
              item.name = Name;
                item.description = description;
          }
          return item;
     });

      setList(newList);
      setedit_status(true);

     

   }

  
    
    return (

        <div>
            <Navbar></Navbar>
            <div className=' flex items-center justify-center  min-h-screen from-red-500 to-blue-500 bg-gradient-115'>
   
                <div className="bg-white flex flex-col w-1/2 mx-auto rounded-lg items-center justify-center ">
                    <h1>Create Task</h1>
                    <form onSubmit={handleEdit} className="flex flex-col w-full mb-4 mt-2">
                        <label className="mx-4 my-4">Task Name</label>
                        <input type="text" className="px-3 py-2 mx-4 my-4 border border-spacing-1" size="70" required value={Name} placeholder="Task" onChange={(e) => setName(e.target.value)}></input>
                        <label className="mx-4 my-4">Description</label>
                        <textarea type="text" className="px-3 py-2 mx-4 my-4 border border-spacing-1" size="100" required value={description} placeholder="description" onChange={(e) => setDescription(e.target.value)}></textarea>
                        <button className="flex mx-4 p-2 border-2 rounded border-teal-500 hover:text-white hover:bg-teal-500">Save</button>
                    </form>
                </div>
            </div></div>
    );
}

export default Edit;