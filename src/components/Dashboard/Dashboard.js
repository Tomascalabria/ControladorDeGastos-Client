import { Container } from "@chakra-ui/react";
import React from "react";
import {Chart} from 'react-google-charts'



export const Dashboard = ({props}) => {


const configs={
is3d:true,
title:'Cuadro de gastos!',


}

const rows=([])

  props.map((x)=>{
    rows.push(['Category','Amount'])
    x.forEach((y)=>{
      
      rows.push([y.category,y.amount])
    })
    console.log(rows)
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
        style={{background:'transparent'}}

        width='max-content'
        height="450px"
        options={configs}
        legendToggle
      >

      </Chart>
   


  </>
    )
}