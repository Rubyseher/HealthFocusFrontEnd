import axios from "axios"

const instances = axios.create({
    baseURL:"https://tarubackend.onrender.com"
    // baseURL:"http://localhost:8001"
    // baseURL:"https://tarufoundationremakebackend.netlify.app"
})

export default instances;