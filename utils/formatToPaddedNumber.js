export function formatToPaddedNumber(numStr) {
  try {
    const num = parseInt(numStr);
    if (isNaN(num)) {
      return "Invalid input";
    }

    const formattedNumber = num.toString().padStart(6, "0");

    return `#${formattedNumber}`;
  } catch (error) {
    return "Error formatting number";
  }
}
