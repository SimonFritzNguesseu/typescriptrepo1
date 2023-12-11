export function validateZip(zip: string): boolean {
    return /^\d{5}$/.test(zip);
}
