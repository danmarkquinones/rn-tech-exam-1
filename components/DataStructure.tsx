import React , {useState , useEffect} from 'react'

const initialData = [
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

const DataStructure = (props:any) => {
    const [data , setData] = useState([])

    useEffect(()=>{
        let result = groupByKey(initialData, 'status');
        result = Object.fromEntries(
            Object.entries(result).map(([key, value]) => 
              [`status-${key}`, value]
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
            <pre id='json'>
                {JSON.stringify(data , undefined , 2)}
            </pre>
        </div>
    )
}

export default DataStructure