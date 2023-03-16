import axios from "axios";
import * as fs from "fs";
import path from "path";

export const API_URL = "https://ferret-api.canarado.xyz";
let _api_key: string;

export async function getRandomFerret(): Promise<Record<string, string>> {
    let res = await axios.get(`${API_URL}/api/random`);
    
    return res.data;
}

export async function getFerretById(id: string): Promise<Record<string, string>> {
    let res = await axios.get(`${API_URL}/api/ferret/${id}`);

    return res.data;
}

export async function submitFerret(image_path: string, token?: string): Promise<Record<string, string>> {

    if(!token && !_api_key) throw new Error("Please set API token");

    let blob = new Blob([fs.readFileSync(image_path)]);

    let form = new FormData();
    form.append("file", blob, path.basename(image_path));
    form.append("token", token || _api_key);

    let res = await axios.post(`${API_URL}/api/submit`, form, { headers: { 'Content-Type': 'multipart/form-data'}});

    return res.data;
}

export function setToken(token: string) {
    _api_key = token;
}