import React from 'react'
import CIcon from '@coreui/icons-react'

const _nav =  [
  {
    _tag: 'CSidebarNavItem',
    name: 'Resumen',
    to: '/dashboard',
    icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon"/>,
    badge: {
      color: 'info',
      text: 'NEW',
    }
  },
  {
    _tag: 'CSidebarNavTitle',
    _children: ['Datos']
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Centrales',
    to: '/centrales',
    icon: 'cil-library-building',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Fábrica Lunar',
        to: '/centrales/000001',
        icon: 'cil-factory',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Laboratorio Lunar',
        to: '/centrales/000002',
        icon: 'cil-beaker',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Dormitorios Estación',
        to: '/centrales/000003',
        icon: 'cil-bed',
      },
    ]
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Dispositivos',
    to: '/dispositivos',
    icon: 'cil-router',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Termómetros',
        to: '/dispositivos/001000',
        icon: 'cil-burn',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Niveles',
        to: '/dispositivos/002000',
        icon: 'cil-speedometer',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Flujómetros',
        to: '/dispositivos/003000',
        icon: 'cil-sync',
      },
    ]
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Alertas',
    to: '/alertas',
    icon: 'cil-bullhorn',
  },
  {
    _tag: 'CSidebarNavTitle',
    _children: ['Contrato']
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Mi Plan',
    route: '/base',
    icon: 'cil-briefcase',
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Mis Pagos',
    route: '/buttons',
    icon: 'cil-wallet',
  },
  {
    _tag: 'CSidebarNavDivider'
  },
  {
    _tag: 'CSidebarNavTitle',
    _children: ['Extras'],
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Alertas',
    route: '/pages',
    icon: 'cil-alarm',
  },
]

export default _nav
