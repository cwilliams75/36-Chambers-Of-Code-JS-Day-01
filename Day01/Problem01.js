class Problem {
    /**
 * Have the wordCount(input) take the str string parameter being passed
 * and return the number of words the string contains
 * (e.g. "Never eat shredded wheat or cake" would return 6). Words will be
 * separated by single spaces.
 */
    wordCount(input) {

        //  1. identify the input
        //   2. split the string
        //     3. return the length of the string
        let words = input.split(' ').length;

        // code goes here
        return words;
    }


    /**
     * Have the function LetterCapitalize(str) take the str parameter being passed and capitalize the first 
     letter of each word. Words will be separated by only one space.
    * 
    */
    letterCapitalize(str) {

        // 1. identify the string to be capitalized
        // 2. split the string
        // 3. capitalize the first letter using .toUpperCase
        // 4. separate first letter of each word by using .substring
        // 5. join the new string
        // 6. return new string
        let strSplit = str.split(" ");
        for (let i = 0; i < strSplit.length; i++) {
            let word = strSplit[i];
            strSplit[i] = word[0].toUpperCase() + word.substring(1);
        }
        return strSplit.join(" ");
    }

    /**
     * Have the function firstReverse(String input) take the input parameter being passed and
     * return the string in reversed order. For example: if the input string is "Hello World and Coders" then your
     * program should return the string sredoC dna dlroW olleH.
     */

    firstReverse(input) {
        // Step 1. Use the split() method to return a new array
        let splitString = input.split("");
        console.log(input);
        // Step 2. Use the reverse() method to reverse the new created array
        let reverseArray = splitString.reverse();
        // Step 3. Use the join() method to join all elements of the array into a string
        let joinArray = reverseArray.join("");
        //Step 4. Return the reversed string

        return joinArray;
    }

    /**
     * Have the longestWord(String input) take the input parameter being passed and return the
     * largest word in the string. If there are two or more words that are the same length,
     * return the first word from the string with that length. Ignore punctuation and assume
     * input will not be empty.
     */
    longestWord(input) {

        // 1. identify the string
        // 2. split the string into substrings using split method
        // 3. create a variable to hold the length of the longest word
        // 4. create a for loop that will iterate through the string
        //  4a identify if there are any non alpha-numeric characters
        // 5. return the longest word
        let stringSplit = input.match(/[a-z]+/gi);
        let longest = 0;
        let word = null;
        for (let i = 0; i < stringSplit.length; i++) {
            if (longest < stringSplit[i].length) {// { // If strSplit[i].length is greater than the word it is compared with..}
                longest = stringSplit[i].length; // ..then longestWord takes this new value
                word = stringSplit[i];
            }
        }
        // code goes here
        return word;
    }

    /**
     * Have the swapCase(String input) take the input parameter and swap the case of each
     * character. For example: if str is "Hello World" the output should be hELLO wORLD.
     * Let numbers and symbols stay the way they are.
     */
    swapCase(str) {

        // code goes here
        let string = '';
        let i = 0;
        while (i < str.length) {
            let n = str.charAt(i);
            if (n == n.toUpperCase()) {
                // *Call* toLowerCase
                n = n.toLowerCase();
            } else {
                // *Call* toUpperCase
                n = n.toUpperCase();
            }
            i += 1;
            string += n;
        }
        // code goes here
        return string;
    }

}

module.exports = Problem;