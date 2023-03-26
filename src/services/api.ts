import axios from "axios"
export const api = axios.create({baseURL: `https://dicio-api-ten.vercel.app/v2/`})