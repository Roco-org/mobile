export function getDotColor(option) {
  switch (option) {
    case "Pending":
      return "bg-yellow-500";
    case "Completed":
      return "bg-green-500";
    case "Cancelled":
      return "bg-red-500";
    default:
      return "bg-gray-400";
  }
}
