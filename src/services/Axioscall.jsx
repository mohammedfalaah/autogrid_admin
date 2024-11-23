import axios from 'axios';
import {  Baseurl } from './BaseUrl';
import { Show_Toast } from '../utils/Toast';

  


export default async function Axioscall(method,endpoint,datalist,header) {

  try {
    let base_url = Baseurl+'/'+endpoint
    let data;
    let body = {
      method:method,
      url:base_url,
      data:datalist
    }
    if(header){
      const headerauth = {'Authorization':`Bearer ${localStorage.getItem('token')}`}
      body.headers = headerauth
    }
    if(method==="get"){
      data = await axios.get(base_url,{params:datalist,headers:{'Authorization':`Bearer ${localStorage.getItem('token')}`}})
    }else {
      data = await axios(body)
    }
    return data
  } catch (error) {
    console.log("error",error)
  
    if(error.message==="Request failed with status code 403"){
        window.localStorage.clear()
        
        return  navigate("/");
    }
    return error
  }
    
}




