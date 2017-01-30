import React from 'react'
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip} from 'recharts'

const SimpleBarChart = ({data, color, width}) => {
  return (
    <div style={{display:'flex',justifyContent: 'center'}}>
      <BarChart width={width} height={200} data={data}
                margin={{top: 40, right: 20, left: 0, bottom: 0}}>
        <XAxis dataKey="name"/>
        <YAxis/>
        <CartesianGrid strokeDasharray="3 3"/>
        <Tooltip/>

        <Bar dataKey="percentile" fill={color} />
      </BarChart>
    </div>
  )
}

export default SimpleBarChart