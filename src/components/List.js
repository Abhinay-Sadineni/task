import{useState,useEffect} from 'react';


const List_item = ({myList ,myhandleDelete}) => {
    return ( 
       <div>
         <h2>List</h2>
         {
          myList.map(item => {
           return(
             <div className='item' key={item.id}>
                <h1>{item.name}</h1>
                <h4>{item.description}</h4>
                <button onClick={() => myhandleDelete(item.id)}>Delete</button>
            </div>
           )
        })
          }
       </div>
          );
}
 
export default List_item;