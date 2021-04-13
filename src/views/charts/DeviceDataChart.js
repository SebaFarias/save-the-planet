import React from 'react'
import { CChartLine } from '@coreui/react-chartjs'

const DeviceDataChart = attributes => {

  const defaultOptions = (()=>{
    return {
        maintainAspectRatio: false,
        legend: {
          display: true
        },
        scales: {
          xAxes: [{
            gridLines: {
              drawOnChartArea: false
            }
          }],
          yAxes: [{
            ticks: {
              beginAtZero: true,
              maxTicksLimit: 5,
              stepSize: Math.ceil(250 / 5),
              max: 250
            },
            gridLines: {
              display: true
            }
          }]
        },
        elements: {
          point: {
            radius: 0,
            hitRadius: 10,
            hoverRadius: 4,
            hoverBorderWidth: 3
          }
        }
      }
    }
  )()

  // render
  return (
    <CChartLine
      {...attributes}
      datasets={attributes?.devicedata}
      options={attributes?.option || defaultOptions}
      labels={attributes?.labels || ['Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sa', 'Do', 'Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sa', 'Do','Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sa', 'Do','Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sa', 'Do',]}
    />
  )
}


export default DeviceDataChart
