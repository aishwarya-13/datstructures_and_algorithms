/**
 * https://leetcode.com/problems/find-all-anagrams-in-a-string/description/
 */

/**
    Here window will be equal to the length of pattern
 */
    var findAnagrams = function(str, pattern) {
        let map = {},
            mapLen = 0,
            start = 0,
            matched = 0,
            result = [];
        //Create frequency of chars in map
        for(let char of pattern){
            if(map[char] === undefined){
                map[char] = 0
                mapLen++
            }
            map[char]++
        }
        //Iterate str
        for(let end=0; end<str.length; end++){
            let char = str[end]
            //found a char in map so decease the freq
            if(map[char] !== undefined){
                map[char]--
            }
            //found all freq of a char so got one char match
            if(map[char] === 0){
                matched++
            }
            //found all chars match
            if(matched === mapLen){
                result.push(start)
            }
            //here window size will be equal to pattern length
            //so when end index exceeds pattern length - start sliding the window
            if(end >= pattern.length - 1){
                let ch = str[start]
                if(map[ch] === 0){
                    matched--
                }
                map[ch]++//add char back in map
                start++//slide the window
            }
        }
        return result
    };

/**
 * Footnote: Find all anagrams, Permutation in a string and Min Window substring have similar solution
 */
