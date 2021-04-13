import React from 'react'
import { CFooter, CRow, CCol } from '@coreui/react'

const TheFooter = () => {
  return (
    <CFooter fixed={false}>
      <CRow className="mx-auto">
        <CCol md="12" lg="6" className="text-center ">
          <a href="http://www.github.com/sebafarias" target="_blank" rel="noopener noreferrer">Seba Farias</a>
          <span className="ml-1">&copy; 2021 Manutara Studios.</span>
        </CCol>
        <CCol md="12" lg="6" className="mfs-auto text-center m-auto">
          <span className="mr-1">Powered by</span>
          <a href="https://coreui.io/react" target="_blank" rel="noopener noreferrer">CoreUI for React</a>
        </CCol>
      </CRow>
    </CFooter>
  )
}

export default React.memo(TheFooter)
