import axios from 'axios';
const url ="http://localhost:5050/api";
const http = axios.create({
    baseURL:url,
    responseType:'json'
})
const getHeaders =(isSecured)=>{
    const token = localStorage.getItem("token")
    let object ={
        "content-Type":"application/json",
    }
    if(isSecured){
        object={
            "content-Type":"application/json",
            "x-auth-token":token
        }
    }
    return object;
}
const POST =(url,data,isSecured,params={})=>{
    return http.post(url,data,{
        headers: getHeaders(isSecured),
        params
    })
}
const PUT =(url,data,isSecured,params={})=>{
    return http.put(url,data,{
        headers: getHeaders(isSecured),
        params
    })
}
const GET =(url,isSecured,params={})=>{
    return http.get(url,{
        headers:getHeaders(isSecured),
        params
    })
}
const DELETE =(url,isSecured,params={})=>{
    return http.delete(url,{
        headers:getHeaders(isSecured),
        params
    })
}


const feachData ={
    POST,
    PUT,
    GET,
    DELETE,
}

export default feachData;