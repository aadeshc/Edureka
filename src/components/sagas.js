import {take, takeEvery,put} from 'redux-saga/effects'
import { GetUserSuccess } from './actions'


function* BtnClickAsync(){
     const json = yield fetch('https://jsonplaceholder.typicode.com/users')
     .then(response => response.json())





    


    
     yield put({type:"Btn_Click_Async",value:json})
     
}





export function* watchButtonClick(){
       yield takeEvery("Btn_Up",BtnClickAsync)
}