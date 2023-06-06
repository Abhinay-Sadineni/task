import Navbar from "./Navbar";
import{useState,useEffect} from 'react';
import TodoList from './List';


const ListPage = () => {
    const [Name,setName] = useState('');
    const [description,setDescription] = useState('');
    const [check,setCheck] = useState(false);
    const [all_status,setAll_status] = useState(false);
    const [ready,setReady] = useState(false);

    const [List,setList] =useState(()=>{
        return JSON.parse(localStorage.getItem('todoindex')) || [{
            "id": 1,
          "name": "Today we have to finish the project and submit it",
          "description": "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
          "check": false
        },
         {
            "id": 2,
             "name": "Need complete the chapter of harry potter book",
             "description": "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
             "check": false
         }
        ,{
            "id": 3,
            "name": "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            "description": "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
            "check": false
        }]
    });

    const [DummyList,setDummyList] =useState(List);
     
    //retrive data from local storage
      useEffect(() => {
        const data = JSON.parse(localStorage.getItem('todoindex'));
        if (data) {
         setList(data);
        }
      }, []);

      useEffect(() => {
         localStorage.setItem('todoindex', JSON.stringify(List));
       }, [List]);


      //  useEffect(() => {
      //   localStorage.setItem('todoindex', JSON.stringify(List));
      //  },[edit_status])


   

   const handleSubmit =(e) =>{
     e.preventDefault();
     handleSearch(e);
     setName('');
   }



   const handleDelete = (id) => {
    const newList = List.filter(item => item.id !== id) ;
    setList(newList);
    window.location.reload();
   }

   const handlecheck = (id) => {  
    const newList = List.map(item => {
        if(item.id === id){
            item.check = !item.check;
        }
        return item;
    }) ;
    setList(newList);
   }


   const handleSearch = () => {  
    if(all_status){
      setDummyList(List);
    }
    else{
      const newList = List.filter(item => item.name.toLowerCase().includes(Name.toLowerCase())) ;
      setDummyList(newList);
    }
    setReady(true);
    setAll_status(false);
   }



    return ( 
    <div>
        <Navbar></Navbar>
         <div className=' flex items-center justify-center  min-h-screen from-red-500 to-blue-500 bg-gradient-115'>
            <div className="bg-white flex flex-col w-1/2 mx-auto rounded-lg items-center justify-center ">
            
            <h2 className="text-3xl text-center font-semibold text-black">List</h2>

         <div className="flex flex-row">
         <form onSubmit={handleSubmit} className="flex flex-row w-full mb-4 mt-2">
            <input type="text" className="px-3 py-2 mx-4" size="70" required value={Name} placeholder="Task" onChange={(e) => setName(e.target.value) }></input>
            <button className="flex mx-4 p-2 border-2 rounded border-teal-500 hover:text-white hover:bg-teal-500" onClick={()=>handleSearch()}>Search</button>
            </form>
            <button className="flex mx-4 p-2 mb-4 mt-2 border-2 rounded border-teal-500 hover:text-white hover:bg-teal-500" onClick={()=>{
              setAll_status(true);
              handleSearch()
            }}>All</button>
         </div>
             {ready && <TodoList myList={DummyList} myhandleDelete={handleDelete} myhandleCheck={handlecheck}></TodoList>}
            </div>
            </div>
    </div> );
}
 
export default ListPage;