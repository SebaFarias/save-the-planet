const centrales = {
  '000001': {
    id:'000001',
    name:'Fábrica Lunar',
    icon:'cil-factory',
    img: 'https://services.meteored.com/img/article/crean-oxigeno-a-partir-del-polvo-lunar-podremos-habita-la-luna-231471-1_768.jpg',
    devices:[],
    zones:[],
    tasks:[],
    users:[],
    subsistems:{},
  },
  '000002': {
    id:'000002',
    name:'Laboratorio Lunar',
    icon:'cil-beaker',
    img: 'https://www.stirworld.com/images/article_gallery/the-pod-imagined-on-the-moon-s-surface-the-biopod-interstellar-lab-stirworld-210128022444.jpg',
    devices:[],
    zones:[],
    tasks:[],
    users:[],
    subsistems:{},
  },
  '000003':{
    id:'000003',
    name:'Dormitorios Estación',
    icon:'cil-bed',
    img: 'https://www.spaceconnectonline.com.au/images/resize/3D-Printed-Lunar-Base_f2f5.jpg',
    devices:[],
    zones:[],
    tasks:[],
    users:[],
    subsistems:{},
  },
}



const centralesMethods = {
  getCentralNameById : id => {
    return centrales[`00000${id}`]?.name
  },
  getCentralDataById: id => {
    const longID = idString => {
      const faltantes = 5 - idString.length
      let newID = ''
      for (let i = 0; i <= faltantes; i++) {
        newID+='0'
      }
      return newID+idString
    }
    const normalizedId = (''+id).length<5? longID(id) : id
    return centrales[normalizedId]
  },
}
export default centralesMethods