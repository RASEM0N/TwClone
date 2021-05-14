export default function normalizingValue(value: number): string | number {
    const length = String(value).length
    if (length >= 7) return `${Math.floor(+value/1_000_000)} милл.`
    if (length >= 4) return `${Math.floor(+value/1_000)} тыс.`
    return value
}