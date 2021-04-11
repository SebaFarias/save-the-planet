import React from 'react'

const ChartConsumeExamples = attributes => {
  const random = (min, max)=>{
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  const data = [  ]
  const options = {
    tooltips: {
      enabled: true
    },
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: (ctx) => 'Chart.js Line Chart - stacked=' + ctx.chart.options.scales.y.stacked
      },
      tooltip: {
        mode: 'index'
      },
    },
    interaction: {
      mode: 'nearest',
      axis: 'x',
      intersect: false
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Month'
        }
      },
      y: {
        stacked: true,
        title: {
          display: true,
          text: 'Value'
        }
      }
    }
  }

  return(
    <CCard>
        <CCardHeader>
          Line Chart
        </CCardHeader>
        <CCardBody>
          <CChartLine
            datasets={data}
            options={options}
            labels="months"
          />
        </CCardBody>
      </CCard>
  )
} 

export default ChartConsumeExamples