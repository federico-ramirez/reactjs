import axios from "axios";
export const BASE_URL = "https://apisafeonsivar.live/";

const getToken = () => localStorage.getItem('token');

export const fetchAllUsers = async () => {
    const response = await axios.get(`${BASE_URL}users`,
    {
        headers: {
            "Authorization": `Bearer ${getToken()}`
        }
    });

    const usersResponse = await response.data;

    return { items: usersResponse.users }
}

export const fetchAllEmergencies = async () => {
    const response = await axios.get(`${BASE_URL}emergencies`, 
    {
        headers: {
            "Authorization": `Bearer ${getToken()}`
        }
    });

    const emergenciesResponse = await response.data;

    return { items: emergenciesResponse.emergencies }
}

export const fetchAllEmergencyCases = async () => {
    const response = await axios.get(`${BASE_URL}emergencycases`,
    {
        headers: {
            "Authorization": `Bearer ${getToken()}`
        }
    })

    const emergencyCasesResponse = await response.data;

    return { items: emergencyCasesResponse.type }
}

export const fetchAllEmergencyTypes = async () => {
    const response = await axios.get(`${BASE_URL}emergencytypes`,
    {
        headers: {
            "Authorization": `Bearer ${getToken()}`
        }
    })

    const emergencyTypesResponse = await response.data;

    return { items: emergencyTypesResponse.type }
}

export const fetchAllBloodTypes = async () => {
    const response = await axios.get(`${BASE_URL}bloodtypes`,
    {
        headers: {
            "Authorization": `Bearer ${getToken()}`
        }
    })

    const bloodTypesResponse = await response.data;

    return { items: bloodTypesResponse.bloodtypes }
}