import React, { useEffect } from 'react'
import { CDataTable, CBadge } from '@coreui/react'


const DataTablePrimary = attributes => {

  const DEFAULT_PROPS = {
    fields: attributes?.fields,
    itemSet: attributes?.items,
    itemsPerPage: attributes?.itemsPerPage || 15,
  }

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
}

export default DataTablePrimary