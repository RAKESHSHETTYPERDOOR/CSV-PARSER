import React, { useEffect ,useState} from 'react'
import {parse} from 'papaparse'
import ShowData from './ShowData'


const CsvParser=(props)=>{
    const [file,setFile]=useState([])
    const [host,setHost]=useState('')
    const [Duration,setduration]=useState(0)

            useEffect(()=>{
            const hosts =file.filter((ele)=>{
            return ele['Guest']==='No'
            })
              hosts.map((ele)=>{
                   setHost(ele['Name '])
                   setduration(ele['Total Duration '])
               })
         },[file])

    
    const handlechange=(e)=>{
        const fil = e.target.files[0]
        const reader=new FileReader();
       reader.readAsText(fil)
       reader.onload=()=>{
       const p1= reader.result
       const result=parse(p1,{header:true})
       console.log(result)
       setFile(result.data)}
    }

       
       


    return(
        <div>

           
           <input type='file' onChange={handlechange} />   <hr/>
           
            
          {file.length >1 && <ShowData file={file} host ={host} Duration={Duration}/>}


        </div>
    )
}
export default CsvParser