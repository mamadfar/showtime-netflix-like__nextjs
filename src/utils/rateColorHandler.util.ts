//? Handle rate color
export const rateColorHandler = (rate: number) => {
    if (rate > 6) return "text-green-600"
    if (rate < 6 && rate > 4.5) return "text-yellow-500"
    return "text-red-600"
}
