import axios from "axios"

const fetchRequest = (path, method, body) => {
    return axios({
        method,
        url: path,
        data: body,
        headers: { "Authorization": "Token 4b960411f456c86f48edab5ed4c32059" }
    })
}

export { fetchRequest }