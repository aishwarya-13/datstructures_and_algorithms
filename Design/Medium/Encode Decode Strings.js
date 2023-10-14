/**
 * https://leetcode.com/problems/encode-and-decode-strings/description/
 */

/**
Aishwarya
** Encoding Process **
    Initialize an empty string (or a string builder/stream for efficiency) to hold the encoded string.
    Iterate over each string in the input list. For each string:
    Replace each occurrence of the slash character / with two slash characters //. This is our way of "escaping" the slash character.
    Add the escaped string and our chosen delimiter /: to the encoded string.
    Return the encoded string after all strings in the input list have been processed.

** Decoding Process **
    Initialize an empty list to hold the decoded strings.
    Initialize an empty string to build the current string being decoded.
    Iterate over the characters in the encoded string. For each character:
    If the character and the next one form the delimiter /:, add the current string to the list of decoded strings and clear the current string for the next one. Skip the next character in the string.
    If the character and the next one form the escaped slash //, add a single slash to the current string. Skip the next character in the string.
    Otherwise, add the character to the current string.
    Return the list of decoded strings after all characters in the encoded string have been processed.
 */

/**
 * Encodes a list of strings to a single string.
 */
let delimiter = '/:'
var encode = function(strs) {
    let encodedResult = '',
        encodedStr = '';
    for(let str of strs){
        for(let i=0; i<str.length; i++){
            if(str[i] === '/'){
                encodedStr+= '/'
            }
            encodedStr+= str[i]
        }
        encodedResult+= encodedStr + delimiter
        encodedStr = ''
    }
    console.log(encodedResult)
    return encodedResult
};

/**
 * Decodes a single string to a list of strings.
 */
var decode = function(s) {
    let result = [],
        decodedStr = '',
        i=0;
    while(i<s.length){
        if(s[i] === '/' && s[i+1] == ':'){
            result.push(decodedStr)
            decodedStr = ''
            i++
        }else if(s[i] == '/' && s[i+1] === '/'){
            decodedStr+= s[i]
            i++
        }else{
            decodedStr+= s[i]
        }
        i++
    }
    return result;
};

/**
 * Your functions will be called as such:
 * decode(encode(strs));
 */

/**
 * Encodes a list of strings to a single string.
 */
let delimiter = 'aish'
var encode = function(strs) {
    let encodedStr = ''
    for(let i=0; i<strs.length; i++){
        encodedStr+= i === strs.length - 1 ? strs[i] : strs[i] + delimiter
    }
    console.log(encodedStr)
    return encodedStr
};

/**
 * Decodes a single string to a list of strings.
 */
var decode = function(s) {
    return s.split(delimiter)
};
