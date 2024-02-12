import { registerformdata } from "./pages/Register";
const API_BASE_URl = import.meta.env.VITE_API_BASE_URL;

export const register = async (formData: registerformdata) => {
    console.log("api_base_url", API_BASE_URl);
    const response = await fetch(`${API_BASE_URl}/api/users/register`, {
        method: 'post',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(formData)
    });

    const responseBody = await response.json();

    if(!response.ok) {
        throw new Error(responseBody.message);
    }   
}