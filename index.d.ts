declare module "canarado-ferret-api" {
    export const API_URL = "https://ferret-api.canarado.xyz";
    export function getRandomFerret(): Promise<Record<string, string>>;
    export function getFerretById(id: string): Promise<Record<string, string>>;
    export function submitFerret(image_path: string, token?: string): Promise<Record<string, string>>;
    export function setToken(token: string): void;
}