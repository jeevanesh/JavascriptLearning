// Function to find the longest word in a given sentence
function findLongestWord(sentence) {

    // Split the sentence into an array of words (using space as a separator)
    const words = sentence.split(" ");

    // Initialize a variable to keep track of the longest word found so far
    let longestWord = "";

    // Loop through each word in the array
    for (let word of words) {

        // Check if the current word is longer than the previously stored longest word
        if (word.length > longestWord.length) {
            // Update longestWord to the current word
            longestWord = word;
        }
    }

    // Return the longest word after checking all words
    return longestWord;
}

// Test the function with an example sentence
console.log(findLongestWord("I love coding in Javascript"));  
// Output: "Javascript"
