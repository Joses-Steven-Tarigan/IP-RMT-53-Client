import axios from "axios"

const instance = axios.create({
    baseURL: "http://localhost:3000"
})

export default instance

// export const jsonPlaceholderRequest= axios.create({
//     baseURL: "https://jsonPlaceholder.typicode.com",
// })
