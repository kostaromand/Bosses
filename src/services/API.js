import axios from "axios"

const fetchRequest = (path, method, body) => {
    const headers = {
        "Authorization": "Token 4b960411f456c86f48edab5ed4c32059"
    }
    return axios({
        method,
        url: path,
        data: body,
        headers
    })
}

const fetchStaffMembers = () => {
    const url = "https://purrweb-internship.herokuapp.com/api/v1/staff_members";
    return fetchRequest(url);
}

const fetchUser = (userId) => {
    const url = `https://purrweb-internship.herokuapp.com/api/v1/staff_members/${userId}`;
    return fetchRequest(url);
}

export { fetchStaffMembers, fetchUser }