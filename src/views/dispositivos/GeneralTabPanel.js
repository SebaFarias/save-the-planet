import React from 'react'
import {
  CCard,
  CCardHeader,
  CCardBody,
  CRow,
  CCol,
  CLink,
  CListGroup,
  CListGroupItem,
} from '@coreui/react'

const DetallesTabPane = attributes => {
  
  
  
  return <CCard>
    <CCardHeader>
      General
    </CCardHeader>
    <CCardBody>
      <CRow className="justify-content-center align-items-center">
        <CCol sm="12" md="6" align="center">
          <CListGroup className="mt-auto">
            <CListGroupItem>
              Id dispositivo: 
              <CLink to={`/dispositivos/${attributes?.data?.id}`}>{attributes?.data?.id}</CLink>
            </CListGroupItem>
            <CListGroupItem>
              Tipo dispositivo: {attributes?.data?.tipo}
            </CListGroupItem>
            <CListGroupItem>
              Subsistema dispositivo: {attributes?.data?.subsistema}
            </CListGroupItem>
            <CListGroupItem>
              Central dispositivo: {attributes?.data?.central}
            </CListGroupItem>
            <CListGroupItem>
              central Id: 
              <CLink to={`/centrales/${attributes?.data?.centralId}`}>{attributes?.data?.centralId}</CLink>
            </CListGroupItem>
          </CListGroup>
        </CCol>
        <CCol sm="12" md="6">
          <img 
            src="https://autosolar.es/images/accesorios-inversores/solaredge-energy-meter-modbus_thumb_main.jpg"
            alt={`a little thubnail of ${attributes?.data?.tipo}`}
            className='w-100 img-fluid rounded m-3 p-3 mx-auto'
          />
        </CCol>
      </CRow>
    </CCardBody>
  </CCard>
}

export default  DetallesTabPane