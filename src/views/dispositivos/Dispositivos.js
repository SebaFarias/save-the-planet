import React, { useState, useEffect } from 'react'
import { 
  CCol,
  CNav,
  CNavItem,
  CNavLink,
  CTabContent,
  CTabs,
  CRow,
  CCard,
  CCardHeader,
  CCardBody,
  CTabPane,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import DataTablePrimary from '../base/tables/DataTablePrimary'
import devicesMethods from './data'
import centralesMethods from '../centrales/data'
import GeneralTabPane from './GeneralTabPanel'
import DetallesTabPane from './DetallesTabPane'
import Construccion from '../base/Construction'


const Dispositivos = ({match}) => {
  
  const addCentralData = devices => {
    return devices.map( device => {
      return {
        ...device,
        central: centralesMethods.getCentralNameById(device.central),
        centralId: device.central,
      }
    })
  }
  
  const id = match.params.id
  const fields = ['id', 'tipo', 'central' , 'centralId','subsistema', 'zona' , 'status', 'fechaInstalacion']
  const [ data, setData ] = useState(addCentralData(devicesMethods.getDeviceById(id)))
  const [ active, setActive ] = useState(0)

  useEffect(() => {
    setData( prevState => {
      return addCentralData(devicesMethods.getDeviceById(match.params.id)) 
    })
    return () => {
    }
  }, [match])

  return(
  ['Flujometro','Nivel','Termometro'].some( item => item === id )
  ?
  <CRow>
    <CCol sm="12">
      <CCard>
        <CCardHeader>
          {`Dispositivos de tipo ${id}`}
        </CCardHeader>
        <CCardBody>
          <DataTablePrimary
            itemSet={addCentralData(devicesMethods.filterByType(match.params.id))}
            fields={fields}
            itemsPerPage={25}
          />
        </CCardBody>
      </CCard>
    </CCol>
  </CRow>
  : 
  <CRow>
    <CCol xl="12">
      <CCard>
          <CCardHeader>
            <h5>{data[0]?.tipo} id: {data[0]?.id}</h5>
          </CCardHeader>
          <CCardBody>
            <CTabs activeTab={active} onActiveTabChange={idx => setActive(idx)}>
              <CNav fill variant="tabs">
                <CNavItem>
                  <CNavLink>
                    <CIcon name="cil-clipboard" />
                    { active === 0 && ' General'}
                  </CNavLink>
                </CNavItem>
                <CNavItem>
                  <CNavLink>
                    <CIcon name="cil-router" />
                    { active === 1 && ' Datos'}
                  </CNavLink>
                </CNavItem>
                <CNavItem>
                  <CNavLink>
                    <CIcon name="cil-heart"/>
                    { active === 2 && 'Estado'}
                  </CNavLink>
                </CNavItem>
                <CNavItem>
                  <CNavLink>
                    <CIcon name="cil-task"/>
                    { active === 3 && ' Tareas'}
                  </CNavLink>
                </CNavItem>
              </CNav>
              <CTabContent className="mt-3">
                <CTabPane>
                  <GeneralTabPane data={data[0]}/>
                </CTabPane>
                <CTabPane>
                  <DetallesTabPane data={data}/>
                </CTabPane>
                <CTabPane>
                  <Construccion/>
                </CTabPane>
                <CTabPane>
                  <Construccion/>
                </CTabPane>
              </CTabContent>
            </CTabs>
        </CCardBody>
      </CCard>
    </CCol>
  </CRow>
  )
}

export default Dispositivos