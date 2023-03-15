import axios from "axios";

export const getAllWine=async()=>{
const url =`https://api.sampleapis.com/wines/reds`;
let response=null;
await axios
.get(url).then((res)=>{
    response=res;

}).catch((err)=>{
    response =err;
})
return response;
};