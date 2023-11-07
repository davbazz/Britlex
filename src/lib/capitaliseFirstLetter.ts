export default function capitaliseFirstLetter(str: string) {
  const words = str.split(" ");

  const capitalizedWords = [];

  for (const word of words) {
    const capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1);
    capitalizedWords.push(capitalizedWord);
  }

  const result = capitalizedWords.join(" ");

  return result;
}

// Example usage with a sentence:
const inputString = "hello world";
const capitalizedString = capitaliseFirstLetter(inputString);
console.log(capitalizedString); // Output: "Hello World"
