export function formatPKR(value) {
  return new Intl.NumberFormat("en-PK", {
    style: "currency",
    currency: "PKR",
    maximumFractionDigits: 0
  }).format(value);
}

export function shortPKR(value) {
  if (value >= 100000) {
    return `PKR ${Math.round(value / 1000)}k`;
  }
  return `PKR ${value.toLocaleString("en-PK")}`;
}

export function demandColor(level) {
  if (level === "High") return "bg-green-100 text-green-700";
  if (level === "Medium") return "bg-amber-100 text-amber-700";
  return "bg-rose-100 text-rose-700";
}
