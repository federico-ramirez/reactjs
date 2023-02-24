import axios from "axios";
import { BASE_URL, fetchAllBloodTypes, fetchAllEmergencies, fetchAllEmergencyCases, fetchAllEmergencyTypes, fetchAllUsers } from "../helpers/helper";

const services = {};

services.login = async (email, password) => {
    const response = await axios.post(`${BASE_URL}login`,
        JSON.stringify({
            email: email,
            password: password
        }), {
        headers: {
            "Content-type": "application/json"
        }
    });

    if (response.status === 200) {
        const data = await response.data;
        return data;
    }

    return {};
};

/*services.verifyToken = async (token) => {
    const response = await axios.get(`${BASE_URL}auth/whoami`, {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    });

    if (response.status === 200) {
        const data = await response.data;
        return data;
    }

    return {};
};*/

export const allUserServices = {
    getUsers: async () => {
        try {
            const result = await fetchAllUsers();
            return { items: result.items, success: true }
        } catch (error) {
            console.error({ error });
            return { items: [] }
        }
    }
}

export const allEmergencyServices = {
    getAllEmergencies: async () => {
        try {
            const result = await fetchAllEmergencies();
            return { items: result.items, success: true }
        } catch (error) {
            console.error({ error });
            return { items: [] }
        }
    }
}

export const allEmergencyCasesServices = {
    getAllEmergencyCases: async () => {
        try {
            const result = await fetchAllEmergencyCases();
            return { items: result.items, success: true }
        } catch (error) {
            console.error({ error });
            return { items: [] }
        }
    }
}

export const allEmergencyTypesServices = {
    getAllEmergencyTypes: async () => {
        try {
            const result = await fetchAllEmergencyTypes();
            return { items: result.items, success: true }
        } catch (error) {
            console.error({ error });
            return { items: [] }
        }
    }
}

export const allBloodTypeServices = {
    getAllBloodTypes: async () => {
        try {
            const result = await fetchAllBloodTypes();
            return { items: result.items, success: true }
        } catch (error) {
            console.error({ error });
            return { items: [] }
        }
    }
}

export default services;