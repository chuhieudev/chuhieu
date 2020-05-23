import axios from 'axios'; 
import * as Config from './../constans/Config'

export default function CallApi(endpoint,method,body){
    return axios({
        method:method,
        url:`${Config.API_URL}/${endpoint}`,
        data:body
    }).catch(erro=>{
        console.log(erro)
    })
}