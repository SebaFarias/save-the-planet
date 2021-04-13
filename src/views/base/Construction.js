import React from 'react' 
import {
  CCard,
  CCardHeader,
  CCardBody,
} from '@coreui/react'

const Construccion = () => {
  return <CCard>
    <CCardHeader>
      Próximamente...
    </CCardHeader>
    <CCardBody>
      <h2 className="text-center m-auto w-100">Página en construcción</h2>
      <img
        src='https://i.postimg.cc/nzwPtSmt/undraw-under-construction-46pa.png'
        className="img-fluid rounded m-3 p-3'"
        alt='a construction site'
      />
    </CCardBody>
  </CCard>
}

export default Construccion