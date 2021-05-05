import axios from "@/config/axios.config";

const api = {};


api.geIndex = (data) => {
    return axios.get("xxxx",{
        params:data
    });
};





export default api;

