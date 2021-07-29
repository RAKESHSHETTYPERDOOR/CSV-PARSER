import React, { useEffect,  useState } from 'react';

import {VictoryBar, VictoryChart} from 'victory'







const ShowData=(props)=> {
     const {host,file,Duration}=props

     let hours = (Duration / 60);
     let rhours = Math.floor(hours);
     let minutes = (hours - rhours) * 60; 
     let rminutes = Math.round(minutes);
 
 

      return (

       <div className='row'>
       
        <h1>REPORT</h1>
        <h4>HOST-{host}</h4>
        <h4>TOTAL-PARTICIPANTS-{file.length}</h4>
        <h4>Duration- {Duration}minutes  {`(${rhours} hour ${rminutes} minutes)`}</h4>

        <div className='col-md-6'>
       
        <table className="table table-danger table-striped table-hover">
           <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Duration</th>
                </tr>

           </thead>
           <tbody>
             {file.map((ele,i)=>{
                return <tr key={i}>
                     <td>{ele['Name ']}</td>
                     <td>{ele['User Email']}</td>
                     <td>{ele['Total Duration ']}</td>
                 </tr>
             })}


           </tbody>



        </table>  <hr/>

        </div>


        <div className='col-md-6'>
     
        <VictoryChart
        style={{tickLabels: {fontSize: 700}}}
        width={1000}
        height={800}
        domainPadding={50}
        padding={{ top: 10, bottom: 40, left: 80, right: 10 }}
        >
       <VictoryBar data={file}  x='Name ' y="Total Duration " />
       </VictoryChart>

       </div>
        
        

        </div> 
   
    )
}
export default ShowData