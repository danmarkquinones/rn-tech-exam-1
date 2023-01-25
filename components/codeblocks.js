export const questionOne =`class MyComponent extends React.Component {
        constructor(props) {
          // set the default internal state
          this.state = {
            clicks: 0
          };
        }
      
        componentDidMount() {
          this.refs.myComponentDiv.addEventListener('click', this.clickHandler);
        }
      
        componentWillUnmount() {
          this.refs.myComponentDiv.removeEventListener('click', this.clickHandler);
        }
      
        clickHandler() {
          this.setState({
            clicks: this.clicks + 1
          });
        }
      
        render() {
          let children = this.props.children;
      
          return (
            <div className="my-component" ref="myComponentDiv">
            <h2>My Component ({this.state.clicks} clicks})</h2>
            <h3>{this.props.headerText}</h3>
          {children}
          </div>
          );
        }
      }`

export const qOneAnswer = `const QuestionOne = (props:any) => {

    const [counter , setCounter] = useState<number>(0)

    const handleCounterChange = () => {
        setCounter(counter+1)
    }

    return(
        <div className="my-component" onClick={()=>handleCounterChange()}>
            <h2>My Component ({counter} clicks)</h2>
        </div>
    )
}

export default QuestionOne`

export const questionTwo = `const todosReducer = (state, action) => { 
    switch (action.type) {
      case 'ADD_TODO':
      case 'REMOVE_TODO':
    }
   
   
   };
   
   const TodoList = () => {
    
    const [todos, dispatch] = useReducer(todosReducer, []);
   
    return (
      <div>
        <ul>
          {todos.map((todo) => (
            <li><button>Remove todo</button></li>
          ))}
        </ul>
        <button>Add todo</button>
      </div>
    );
   };
   `

export const qTwoAnswer = `import React , {useState ,  useReducer} from 'react'

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
   
export const TodoListUsingReducer = () => {

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
`

export const questionThree = `[
    {
      "id": 1,
      "name": "John Doe",
      "status": 1
    },
    {
      "id": 2,
      "name": "Jane Doe",
      "status": 2
    },
    {
      "id": 3,
      "name": "Adam Rocket",
      "status": 2
    },
    {
      "id": 4,
      "name": "Luis Rocket",
      "status": 1
    }
  ]
  `

export const qThreeAnswer = `const DataStructure = (props:any) => {
    const [data , setData] = useState([])

    useEffect(()=>{
        let result = groupByKey(initialData, 'status');
        result = Object.fromEntries(
            Object.entries(result).map(([key, value]) => 
              [\`status-\${key}\`, value]
            )
        )
        console.log(result)
        setData(result)
    },[])

    const groupByKey = (list:any, key:string) => list.reduce((hash:any, obj:any) => 
        ({...hash, [obj[key]]:( hash[obj[key]] || [] ).concat(obj)}), 
    {})

    return(
        <div>
            <p>
                {JSON.stringify(data)}
            </p>
        </div>
    )
}

export default DataStructure`