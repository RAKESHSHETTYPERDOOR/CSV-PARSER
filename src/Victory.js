<VictoryChart
        style={{tickLabels: {fontSize: 120}}}
        width='960'
        height='500'
        domainPadding={50}
        padding={{ top: 10, bottom: 40, left: 80, right: 10 }}
        >
       <VictoryBar data={Data} x="Name (Original Name)" y="Total Duration (Minutes)" />
       </VictoryChart>



const reader=new FileReader();
reader.readAsText(fil)
reader.onload=()=>{
    setFile([reader.result])
   
}


const fil1 =  Array.from(fil)
fil1.forEach((ele)=>{
    console.log(ele.Name)
})