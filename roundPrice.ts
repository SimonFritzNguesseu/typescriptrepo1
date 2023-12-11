export function roundPrice(price: number, pattern: string = '%PRICE% SEK'): string {
    const roundedPrice = price.toFixed(2);
    return pattern.replace('%PRICE%', roundedPrice);
}
