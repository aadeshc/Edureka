// javascript obj which has property type

export function SetName(Name){
    debugger;
    return{
            type: "NameSetter",
            NameValue : Name
    }
}

export function UserID(ID){
    // return
}


//npm install redux-thunk



export function GetUserSuccess(Users){
    debugger;
    return{
        type : "UserDetails",
        Users : Users
    }
}

export function GetUserFailure(Err){
    return{
        type : "ErrorMsg",
        Err : Err
    }
}


export function SetAge(Age){
    debugger;
    return{
        type : "AgeSetter",
        AgeValue : Age
    }
}