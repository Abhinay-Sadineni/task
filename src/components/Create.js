import React, { useState, useEffect  } from 'react';
import {useNavigate} from 'react-router-dom';
import Navbar from './Navbar';
import Loading from './Loading';

const Create = () => {

    const [Name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [add_status, setAdd_status] = useState(false);
    const navigate = useNavigate();
    const [List, setList] = useState(() => {
        return JSON.parse(localStorage.getItem('todoindex')) || []
    });


    //save data in local storage
    useEffect(() => {
        if (add_status) {
            localStorage.setItem('todoindex', JSON.stringify(List));
        }
    }, [add_status]);


    //retrive data from local storage
    const handleCreate = (e) => {
        e.preventDefault();
        let num = List.length;
        console.log(List);
        setList([...List, { id: num + 1, name: Name, description: description, check: false }]);
        setAdd_status(true);
        setTimeout(() => {
            navigate('/list');
         }, 2000);
        
    }
    return (

        <div>
            <div className=' flex items-center justify-center  min-h-screen from-red-500 to-blue-500 bg-gradient-115'>
                <div className="bg-white flex flex-col w-1/2 mx-auto rounded-lg items-center justify-center ">
                    <h1>Create Task</h1>
                    <form onSubmit={handleCreate} className="flex flex-col w-full mb-4 mt-2">
                        <label className="mx-4 my-4">Task Name</label>
                        <input type="text" className="px-3 py-2 mx-4 my-4 border border-spacing-1" size="70" required value={Name} placeholder="Task" onChange={(e) => setName(e.target.value)}></input>
                        <label className="mx-4 my-4">Description</label>
                        <textarea type="text" className="px-3 py-2 mx-4 my-4 border border-spacing-1" size="100" required value={description} placeholder="description" onChange={(e) => setDescription(e.target.value)}></textarea>
                        <button className="flex mx-4 p-2 border-2 rounded border-teal-500 hover:text-white hover:bg-teal-500">Create</button>
                    </form>
                </div>
            </div></div>
    );
}

export default Create;