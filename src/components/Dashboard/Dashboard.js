import React from "react";
import {Chart} from 'react-google-charts'



export const Dashboard = ({props}) => {


const configs={
is3d:true,
title:'Expenses Chart'
}


const rows=([])
props.map((x)=>{
  x.forEach((y)=>{
   rows.push([[y.category],[y.amount]])
  })
  })
    return (
      <>
      <Chart 
      columns={[
        {type:'string',
        label:'categories'},
        {
          type:'number',
          label:'amount'
        }
      ]}
        chartType="PieChart"
        data={rows}
        width="100%"
        height="450px"
        options={configs}
        legendToggle
      >

      </Chart>


  </>
    )
}