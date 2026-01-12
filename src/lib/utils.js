/**
 * Utility function to merge class names
 * @param {...string} inputs - Class names to merge
 * @returns {string} - Merged class names
 */
export function cn(...inputs) {
  const classes = inputs
    .filter(Boolean)
    .map((input) => {
      if (typeof input === "string") {
        return input;
      }
      if (typeof input === "object" && input !== null) {
        return Object.entries(input)
          .filter(([_, value]) => value)
          .map(([key]) => key)
          .join(" ");
      }
      return "";
    })
    .join(" ")
    .split(" ")
    .filter((cls, index, arr) => arr.indexOf(cls) === index)
    .join(" ");

  return classes;
}
