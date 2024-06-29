
export function formatNumber(num) {
    if (num >= 1_000_000_000) {
        return (num / 1_000_000_000).toFixed(0) + 'B';
    }
    if (num >= 1_000_000) {
        return (num / 1_000_000).toFixed(0) + 'M';
    }
    if (num >= 1_000) {
        return (num / 1_000).toFixed(0) + 'k';
    }
    return num.toString();
}