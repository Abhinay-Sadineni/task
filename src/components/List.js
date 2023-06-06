import { Link } from "react-router-dom";

const TodoList= ({myList ,myhandleDelete ,myhandleCheck}) => {
    return ( 
       <div>
          <table className="table-auto mb-4 mx-4">
            <thead>
               <tr className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b bg-gray-50">
                  <th className="px-4 py-3">Task</th>
                  <th className="px-4 py-3">description</th>
                  <th className="px-4 py-3">Status</th>
                  <th className="px-4 py-3">Action</th>
               </tr>
            </thead>
            <tbody>
            {myList.map(item => {
           return(
             <tr className='bg-white divide-y py-4' key={item.id}>
               <td><h1 className="text-3x1 text-grey-darkest px-3 py-4" >{item.name}</h1></td>
               <td><p className="text-3x1 text-grey-darkest px-3 py-4" >{item.description}</p></td>
               <td><button className="flex-no-shrink p-2  border-2 rounded text-red border-red-500 hover:text-white hover:bg-red-500" onClick={()=>myhandleCheck(item.id)} >{item.check ? "done":"notdone"}</button></td>
               <td className="flex flex-row justify-left"> <button className="flex-no-shrink p-2 m-2 border-2 rounded text-red border-red-500 hover:text-white hover:bg-red-500" onClick={() => myhandleDelete(item.id)}>Delete</button>
              <Link to={"/task/edit/"+item.id} state={{post : item}} className="flex-no-shrink p-2 m-2 border-2 rounded text-red border-red-500 hover:text-white hover:bg-red-500"  >Edit</Link></td>
            </tr>
           )
        })}
            </tbody>
         </table>
       </div>
          );
}
 
export default TodoList;