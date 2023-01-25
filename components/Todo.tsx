import React , {useState ,  useReducer} from 'react'

export interface TaskInterface {
    id:string,
    task:string
}

const initialState = [
    {id:"324SD" , task:"Take a Bath"}
]

export const todosReducer = (state:any, action:any) => { 
    switch (action.type) {
        case 'ADD_TODO':
            return [...state , action.payload]
        case 'EDIT_TODO':
            return state.map((el:TaskInterface,_)=>el.id===action.payload.id?action.payload:el)
        case 'REMOVE_TODO':
            const filteredData = state.filter((el:TaskInterface)=>el.id!==action.payload.id)
            return filteredData
    }
};
   
const Todos = () => {

    const [todos, dispatch] = useReducer(todosReducer, initialState);
    const [form , setForm] = useState<TaskInterface>({
        id:"",
        task:""
    })

    const handleChange = (key:string , value:any) => {
        setForm({...form , [key]:value})
    }

    const handleSubmit = () => {
        let data = form
        if(data.id===""){
            let rId = (Math.random() + 1).toString(36).substring(7);
            data.id = rId
            dispatch({
                type:"ADD_TODO",
                payload:data
            })
        }else{
            dispatch({
                type:"EDIT_TODO",
                payload:data
            })
        }
        setForm({...form , id:"" , task:""})
    }

    const handleEdit = (data:TaskInterface) => {
        setForm({...data})
    }

    const handleDelete = (data:TaskInterface) => {
        dispatch({
            type:"REMOVE_TODO",
            payload:data
        })
    }

    return (
        <div>
            <input
                value={form.task}
                onChange={(e)=>handleChange("task" , e.target.value)}
            />
            <button onClick={()=>handleSubmit()}>{form.id?"UPDATE":"ADD"} TODO</button>
            <ul>
                {todos?.map((todo:TaskInterface , i:number) => (
                    <li key={i}>
                        <span>{todo.id}. {todo.task}</span>
                        <button onClick={()=>handleEdit(todo)}>EDIT</button>
                        <button onClick={()=>handleDelete(todo)}>REMOVE</button>
                    </li>
                ))}
            </ul>
            
        </div>
    );
};

export default Todos