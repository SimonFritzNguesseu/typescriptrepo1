export function makeHeading(text: string, level: number): string {
    if (level < 1 || level > 6 || !Number.isInteger(level)) {
        throw new Error("Invalid heading level");
    }
    return `<h${level}>${text}</h${level}>`;
}
