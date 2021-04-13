import React from 'react'
import {
  CCard,
  CCardHeader,
  CCardBody,
  CRow,
  CCol,
} from '@coreui/react'
import DeviceDataChart from '../charts/DeviceDataChart'
import DataTablePrimary from '../base/tables/DataTablePrimary'
import { getStyle, hexToRgba } from '@coreui/utils'

const brandInfo = getStyle('info') || '#20a8d8'

const DetallesTabPane = attributes => {
  
  const consumo = {
    Termometro: 'Temperaturas',
    Nivel: 'Niveles',
    Flujometro: 'Flujos'
  }
  const random = (min, max)=>{
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
  
  const defaultDatasets = ( ( quantity = 27 ) => {
    let elements = quantity
    const data1 = []
    for (let i = 0; i <= elements; i++) {
      data1.push(random(50, 200))
    }
    return [
      {
        label: consumo[attributes?.data[0]?.tipo] || 'Valores',
        backgroundColor: hexToRgba(brandInfo, 10),
        borderColor: brandInfo,
        pointHoverBackgroundColor: brandInfo,
        borderWidth: 2,
        data: data1
      },
    ]
  })()
  
  return <CCard>
    <CCardHeader>
      Detalles
    </CCardHeader>
    <CCardBody>
      <CRow>
        <CCol sm="12">
          <DeviceDataChart
            style={{height: '300px', marginTop: '40px'}}
            device={attributes.data}
            devicedata={attributes?.datasets || defaultDatasets}
          />
        </CCol>
        <CCol sm="12">
          <DataTablePrimary
            itemSet={[]}
          />
        </CCol>
      </CRow>  
    </CCardBody>
  </CCard>
}

export default  DetallesTabPane