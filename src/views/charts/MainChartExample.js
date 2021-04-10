import React from 'react'
import { CChartLine } from '@coreui/react-chartjs'
import { getStyle, hexToRgba } from '@coreui/utils'

const brandWarning = getStyle('warning') || '#F9B115'
const brandInfo = getStyle('info') || '#20a8d8'
const brandDanger = getStyle('danger') || '#f86c6b'

const MainChartExample = attributes => {
  const random = (min, max)=>{
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  const defaultDatasets = (()=>{
    let elements = 27
    const data1 = []
    const data2 = []
    const data3 = []
    for (let i = 0; i <= elements; i++) {
      data1.push(random(50, 200))
      data2.push(random(80, 100))
      data3.push(135)
    }
    return [
      {
        label: 'Consumo Agua',
        backgroundColor: hexToRgba(brandInfo, 10),
        borderColor: brandInfo,
        pointHoverBackgroundColor: brandInfo,
        borderWidth: 2,
        data: data1
      },
      {
        label: 'Consumo Eléctrico',
        backgroundColor: 'transparent',
        borderColor: brandWarning,
        pointHoverBackgroundColor: brandWarning,
        borderWidth: 2,
        data: data2
      },
      {
        label: 'Meta diaria',
        backgroundColor: 'transparent',
        borderColor: brandDanger,
        pointHoverBackgroundColor: brandDanger,
        borderWidth: 1,
        borderDash: [8, 5],
        data: data3
      }
    ]
  })()

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
      datasets={defaultDatasets}
      options={defaultOptions}
      labels={['Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sa', 'Do', 'Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sa', 'Do','Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sa', 'Do','Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sa', 'Do',]}
    />
  )
}


export default MainChartExample
