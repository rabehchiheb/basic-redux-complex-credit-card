const initialState = {
    NUMBERCARD: "**** **** **** ****",
    NAMECARD:"FOULEN",
    DATECARD:"1508"
}



function CardReducers (state = initialState, action){
    switch(action.type){
        case "CHNG_NUMBER": {
            return {...state, ...action}
        }
        case "CHNG_NAME": {
            return {...state, ...action}
        }
        case "CHNG_DATE": {
            return {...state, ...action}
        }
        default:
            return state
    }
} 

export default CardReducers;
