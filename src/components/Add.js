import {useState ,useEffect} from 'react';

const Create = () => {
    const [Name,setName] = useState('');
    const [description,setDescription] = useState('');
    const [List,setList] =useState(()=>{
        var response=localStorage.getItem('todoindex');
        if(response!=null){
            const data = JSON.parse(response);
            if (data) {
             console.log(data);
                 return data;
             }
        }
        
    });
    const [add_status,setAdd_status] = useState(false);
    const [ready,setReady] = useState(false);
    

      
     //save data in local storage
     useEffect(() => {
       if(add_status==true){
        localStorage.setItem('todoindex', JSON.stringify(List));
       }
      }, [add_status]);
    



    const handleCreate = (e) => {
        e.preventDefault();
        let num=List.length;
        console.log(List);
        setList([...List,{id:num+1,name:Name,description:description}]);    
        setAdd_status(true);
    }

    return (<div>
        <h1>Create Task</h1>
        <form onSubmit={handleCreate}>
            <label>Name</label>
            <input type="text" required value={Name} onChange={(e) => setName(e.target.value)}></input>
            <label>Description</label>
            <input type="text" required value={description} onChange={(e) => setDescription(e.target.value)}></input>
            <button>Create</button>
        </form>
    </div>  );
}
 
export default Create;