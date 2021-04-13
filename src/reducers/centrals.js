const centralReducer = (state=0, action) => {
  switch (action.type){
    case'CENTRAL_BY_ID': 
      return (state?.update || state )
    default: return state
    }
}

export default centralReducer