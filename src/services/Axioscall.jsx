import React, { useContext } from 'react'

import axios from 'axios';
import { ApibaseURL, Baseurl } from './BaseUrl';
import { show_toast } from '../utils/Toast';




export default async function Axioscall(method,endpoint,datalist,header) {

  try {
    let base_url = `${ApibaseURL}/${endpoint}`;
    let data;
    let body = {
      method:method,
      url:base_url,
      data:datalist
    }
    if(header){
      const headerauth = {'Authorization': `Bearer ${localStorage.getItem('token')}`}
      body.headers = headerauth
    }
    if(method==="get"){
      data = await axios.get(base_url,{params:datalist,headers:{'Authorization': `Bearer ${localStorage.getItem('token')}`}})
    }else {

      data = await axios(body)
    }
    
    return data
  } catch (error) {
    console.log("error",error)
    show_toast(error.response.data.message,false)
    if(error.message==="Request failed with status code 403"){
        window.localStorage.clear()
        return navigate("/");
    }
    return error
  }
    
}
export const APIsCall = async (method, endpoint, data, params, is_formdata) => {
  var headers = {
    "Content-Type": is_formdata ? "multipart/form-data" : "application/json",
    "Authorization": "Bearer " + localStorage.getItem("token")
  };
  var url = `${ApibaseURL}/${endpoint}`;

  try {
    const res = await axios({
      method,
      url,
      params,
      data,
      headers,
    });
    
    // var response = { status : true , message : res.data }
    // ShowToast(res.data.message , true)
    return res
  } catch (error) {
    show_toast(error.response ? error.response.data.message : 'Internal Server Error',false)
    return error;
  }
};
