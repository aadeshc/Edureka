var initialState = {
    Name : "Millind",
    Age : "32",
    Users : [],

}


export function Reducer(state=initialState,action){
    debugger;
var newState = {...state}


if(action.type=="Btn_Click_Async"){
    console.log(action.value)
}

if(action.type=="UserDetails"){
    debugger;
   newState.Users = action.Users
   return newState
}
if(action.type=="NameSetter"){
    debugger;
    newState.Name = action.NameValue
    return newState
}
if(action.type=="AgeSetter"){
    debugger;
    newState.Age = action.AgeValue
    return newState
}
return newState


}