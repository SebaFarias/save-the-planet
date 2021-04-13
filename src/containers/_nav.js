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
        to: '/dispositivos/Termometro',
        icon: 'cil-burn',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Niveles',
        to: '/dispositivos/Nivel',
        icon: 'cil-speedometer',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Flujómetros',
        to: '/dispositivos/Flujometro',
        icon: 'cil-sync',
      },
    ]
  },
  {
    _tag: 'CSidebarNavTitle',
    _children: ['Análisis'],
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Predecir',
    to: '/Construction',
    icon: 'cil-audio-spectrum',
    badge:{
      color: 'success',
      text: 'BETA',
    },
  },
  {
    _tag: 'CSidebarNavDivider'
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Reportes',
    to:'/Construction',
    icon: 'cil-clipboard',
    badge:{
      color: 'danger',
      text: 'ALPHA',
    },
  },
  {
    _tag: 'CSidebarNavTitle',
    _children: ['Acciones']
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Alertas',
    to: '/Construction',
    icon: 'cil-bullhorn',    
    badge:{
      color: 'danger',
      text: 'ALPHA',
    },
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Tareas',
    to: '/Construction',
    icon: 'cil-task',
    badge:{
      color: 'danger',
      text: 'ALPHA',
    },
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Gatillos',
    to: '/Construction',
    icon: 'cil-functions',
    badge:{
      color: 'danger',
      text: 'ALPHA',
    },
  },
]

export default _nav
