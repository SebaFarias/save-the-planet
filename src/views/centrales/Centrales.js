import React, { useState, useEffect, useCallback } from 'react'
import {
  CChartLine,
} from '@coreui/react-chartjs'
import { 
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CCollapse,
  CListGroup,
  CListGroupItem,
  CNav,
  CNavItem,
  CNavLink,
  CRow,
  CTabs,
  CTabContent,
  CTabPane,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import devicesMethods from '../dispositivos/data'
import centralesMethods from '../centrales/data'
import DataTablePrimary from '../base/tables/DataTablePrimary'
import Construccion from '../base/Construction'

const Centrales = ({match}) => {
  
  const fetchCentralData = useCallback( () => {
    return {
      ...centralesMethods.getCentralDataById(match.params.id),
      devices: devicesMethods.getDevicesByCentralId(match.params.id),
    }
  },[match]) 

  const fields = ['id', 'tipo', 'central' , 'centralId','subsistema', 'zona' , 'status', 'fechaInstalacion']
  const [ data, setData ] = useState(fetchCentralData(match.params.id))
  const [ active, setActive ] = useState(1)
  const [ accordion, setAccordion ] = useState(1)

useEffect( () => {
  setData(fetchCentralData(match.params.id))
},[match.params.id,fetchCentralData])

  return(
    <CRow>
      <CCol xl="12">
        <CCard>
          <CCardHeader>
            <CIcon name={data.icon}></CIcon>
            <h5>{data.name}</h5>
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
                    { active === 1 && ' Dispositivos'}
                  </CNavLink>
                </CNavItem>
                <CNavItem>
                  <CNavLink>
                    <CIcon name="cil-chart"/>
                    { active === 2 && 'Detalles'}
                  </CNavLink>
                </CNavItem>
                <CNavItem>
                  <CNavLink>
                    <CIcon name="cil-bullhorn"/>
                    { active === 3 && ' Alerts'}
                  </CNavLink>
                </CNavItem>
              </CNav>
              <CTabContent className="mt-3">
                <CTabPane>
                  <CRow >
                    <CCol sm="12" md="6">
                      <CListGroup className='mt-3'>
                        <CListGroupItem className='mx-3' >Central: {data.name}</CListGroupItem>
                        <CListGroupItem className='mx-3' >id: {data.id} </CListGroupItem>
                    </CListGroup>
                    </CCol>
                    <CCol sm="12" md="6">
                      <img 
                        src={data.img}
                        alt={`a little thubnail of ${data.name}`}
                        className='img-fluid rounded m-3 p-3'
                      />
                    </CCol>
                  </CRow>
                </CTabPane>
                <CTabPane>
                  <DataTablePrimary
                    itemSet={data?.devices}
                    fields={fields}
                  />
                </CTabPane>
                <CTabPane>
                  <CRow>
                    <CCol sm="12">
                      <CCard>
                      <CCardHeader>
                        {data.name}: Consumo Histório
                      </CCardHeader>
                      <CCardBody>
                        <CChartLine 
                          style={{minHeight: '300px', marginTop: '40px'}}
                          datasets={[
                            {
                              label: 'Refrigeración',
                              backgroundColor: 'rgb(51,153,255,0.9)',
                              data: [30, 39, 10, 50, 30, 70, 35]
                            },
                            {
                              label: 'Calefacción',
                              backgroundColor: 'rgb(229,83,83,0.9)',
                              data: [39, 30, 40, 35, 70, 90, 45]
                            },
                            {
                              label: 'Iluminación',
                              backgroundColor: 'rgb(249,177,21,0.9)',
                              data: [15, 39, 30, 50, 30, 70, 35]
                            },
                            {
                              label: 'Ventilación',
                              backgroundColor: 'rgb(46,184,92,0.9)',
                              data: [39, 80, 40, 35, 40, 20, 45]
                            },
                          ]}
                          options={{
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
                          
                          }}
                          labels="months"
                        />
                      </CCardBody>
                    </CCard>
                    </CCol>
                    <CCol sm="12">
                      <CCard>
                        <CCardHeader>
                          Consumo Histório
                          <small> por subsistema </small>
                        </CCardHeader>
                        <CCardBody>
                          <div id="accordion">
                            <CCard className="mb-0">
                              <CCardHeader id="headingOne">
                                <CButton 
                                  block 
                                  color="link" 
                                  className="text-left m-0 p-0" 
                                  onClick={() => setAccordion(accordion === 0 ? null : 0)}
                                >
                                  <h5 className="m-0 p-0">Refrigeración</h5>
                                </CButton>
                              </CCardHeader>
                              <CCollapse show={accordion === 0}>
                                <CCardBody>
                                  <DataTablePrimary
                                    itemSet={devicesMethods.filterBySubsistem('Refrigeracion',data?.devices)}
                                    fields={fields}
                                    itemsPerPage={15}
                                  />
                                </CCardBody>
                              </CCollapse>
                            </CCard>
                            <CCard className="mb-0">
                              <CCardHeader id="headingTwo">
                                <CButton 
                                  block 
                                  color="link" 
                                  className="text-left m-0 p-0" 
                                  onClick={() => setAccordion(accordion === 1 ? null : 1)}
                                >
                                  <h5 className="m-0 p-0">Calefacción</h5>
                                </CButton>
                              </CCardHeader>
                              <CCollapse show={accordion === 1}>
                                <CCardBody>
                                <DataTablePrimary
                                    itemSet={devicesMethods.filterBySubsistem('Calefaccion',data?.devices)}
                                    fields={fields}
                                    itemsPerPage={15}
                                  />
                                </CCardBody>
                              </CCollapse>
                            </CCard>
                            <CCard className="mb-0">
                              <CCardHeader id="headingThree">
                                <CButton 
                                  block 
                                  color="link" 
                                  className="text-left m-0 p-0" 
                                  onClick={() => setAccordion(accordion === 2 ? null : 2)}
                                >
                                  <h5 className="m-0 p-0">Iluminación</h5>
                                </CButton>
                              </CCardHeader>
                              <CCollapse show={accordion === 2}>
                                <CCardBody>
                                  <DataTablePrimary
                                      itemSet={devicesMethods.filterBySubsistem('Iluminacion',data?.devices)}
                                      fields={fields}
                                      itemsPerPage={15}
                                    />
                                </CCardBody>
                              </CCollapse>
                            </CCard>
                            <CCard className="mb-0">
                              <CCardHeader id="headingThree">
                                <CButton 
                                  block 
                                  color="link" 
                                  className="text-left m-0 p-0" 
                                  onClick={() => setAccordion(accordion === 3 ? null : 3)}
                                >
                                  <h5 className="m-0 p-0">Ventilación</h5>
                                </CButton>
                              </CCardHeader>
                              <CCollapse show={accordion === 3}>
                                <CCardBody>
                                <DataTablePrimary
                                    itemSet={devicesMethods.filterBySubsistem('Ventilacion',data?.devices)}
                                    fields={fields}
                                    itemsPerPage={15}
                                  />
                                </CCardBody>
                              </CCollapse>
                            </CCard>
                          </div>
                        </CCardBody>
                      </CCard>
                    </CCol>
                  </CRow>                  
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

export default Centrales