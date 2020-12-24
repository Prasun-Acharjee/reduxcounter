
let initialstate={
    count:0
}
 const Reducer=(state=initialstate,action)=>{
       switch(action.type){
       case 'INCREASE':return{
            count:state.count+ +action.item
       }
       case 'DECREASE':return{
           count:state.count- -action.item
       }
       default:return state
     }
}
export default Reducer