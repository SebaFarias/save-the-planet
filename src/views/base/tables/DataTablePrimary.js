import React, { useEffect } from 'react'
//import { useHistory } from 'react-router-dom'
import { CDataTable, CBadge, CLink } from '@coreui/react'


const DataTablePrimary = attributes => {
  //const history = useHistory()

  const getBadge = status => {
    switch (status) {
      case 'ok': return 'success'
      case 'apagado': return 'secondary'
      case 'durmiendo': return 'warning'
      case 'dañado': return 'danger'
      default: return 'primary'
    }
  }

    
  useEffect(()=>{},[attributes])

  return <CDataTable
    items={attributes?.itemSet}
    fields={attributes?.fields}
    hover
    striped
    bordered
    size="sm"
    itemsPerPage={attributes?.itemsPerPage || 15}
    //onRowClick={(item) => history.push(item?.route||`/devices/${item?.id}`)}
    pagination = {{align:"center"}}
    scopedSlots = {{
      'status':
        (item)=>(
          <td>
            <CBadge color={getBadge(item.status)}>
              {item.status}
            </CBadge>
          </td>
        ),
      'id':
      (item)=>(
        <td>
          <CLink to={`/dispositivos/${item.id}`}>
            {item.id}
          </CLink>
        </td>
      ),
      'centralId':
      (item)=>(
        <td>
          <CLink to={`/centrales/${item.centralId}`}>
            {item.centralId}
          </CLink>
        </td>
      ),
    }}
  />
}

export default DataTablePrimary