import List_item from "./List";
import{useState,useEffect} from 'react';

const Home = () => {
    const [ready,setReady] = useState(false);
    const [List,setList] =useState(()=>{
        return JSON.parse(localStorage.getItem('todoindex')) || [{
            "id": 1,
          "name": "To-do List",
         "description": "This is a list of tasks that need to be completed, typically organized in order of priority."
        },
         {
            "id": 2,
             "name": "To-do List 2",
             "description": "This is a list of tasks that need to be completed, typically organized in order of priority."
         }]
    });
     
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

    const handleDelete = (id) => {
        const newList = List.filter(item => item.id !== id) ;
        setList(newList);
    }

    return (<div>
        <h1>Home</h1>
        <a href="/create">Create</a>
        {console.log(List)}
       {
        <List_item myList={List} myhandleDelete={handleDelete}></List_item>
       }
    </div>  );
}
 
export default Home;