import React, { useState } from 'react'
import { 
  CBadge,
  CButton,
  CCol,
  CDataTable,
  CRow,
  CCollapse,
  CCardBody,
  CCard,
  CCardHeader,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import devicesData from '../dispositivos/data'
const centrales = {
  '000001': {
    id:'000001',
    name:'Fábrica Lunar',
    icon:'cil-factory',
    devices:{},
    zones:[],
    tasks:[],
    users:[],
  },
  '000002': {
    id:'000002',
    name:'Laboratorio Lunar',
    icon:'cil-beaker',
    devices:{},
    zones:[],
    tasks:[],
    users:[],
  },
  '000003':{
    id:'000003',
    name:'Dormitorios Estación',
    icon:'cil-bed',
    devices:{},
    zones:[],
    tasks:[],
    users:[],
  },
}

const Centrales = ({match}) => {
  
  const fetchCentralData = id => {
    return centrales[id]
  }
  const getBadge = status => {
    switch (status) {
      case 'Active': return 'success'
      case 'Inactive': return 'secondary'
      case 'Pending': return 'warning'
      case 'Banned': return 'danger'
      default: return 'primary'
    }
  }
  const fields = ['tipo','id', 'central', 'zona' , 'status']
  const data = fetchCentralData(match.params.id,)
  const [accordion, setAccordion] = useState(1)

  return(
    <>
      <CRow>
        <CCol xl="12">
          <CCard>
            <CCardHeader>
              {data?.name}
            </CCardHeader>
            <CCardBody>
              <div id="accordion">
                <div className="mb-0">
                  <CCardHeader id="headingOne">
                    <CButton 
                      block 
                      color="link" 
                      className="text-left m-0 p-0" 
                      onClick={() => setAccordion(prevState => prevState === 0 ? null : 0)}
                    >
                      
                      <h5 className="m-0 p-0">
                        <CIcon name={`${data?.icon}`} customClasses=""></CIcon>
                        {data.name}
                      </h5>
                    </CButton>
                  </CCardHeader>
                  <CCollapse show={accordion === 0}>
                    <CCardBody>
                      <CCol sm="6">
                        
                      </CCol>
                      <CCol sm="6">

                      </CCol>
                    </CCardBody>
                  </CCollapse>
                  </div>
              </div>
              </CCardBody>
          </CCard>
        </CCol>
      </CRow>
      <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
              Dispositivos
            </CCardHeader>
            <CCardBody>
              <CDataTable
                items={devicesData}
                fields={fields}
                hover
                striped
                bordered
                size="sm"
                itemsPerPage={10}
                pagination
                scopedSlots = {{
                  'status':
                    (item)=>(
                      <td>
                        <CBadge color={getBadge(item.status)}>
                          {item.status}
                        </CBadge>
                      </td>
                    )
                }}
              />
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default Centrales