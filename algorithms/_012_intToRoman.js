// Source : https://leetcode.com/problems/integer-to-roman/description/
// Author : zhouweilin
// Date   : 2017-09-19
// DS     : Array
// Method : look-for array(refer to discussion!)

/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    // var charList = {
    //     'I': 1,
    //     'V': 5,
    //     'X': 10,
    //     'L': 50,
    //     'C': 100,
    //     'D': 500,
    //     'M': 1000
    // };
    var I = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"],
        X = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"],
        C = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"],
        M = ["", "M", "MM", "MMM"];
    return M[Math.floor(num/1000)] + C[Math.floor(num%1000/100)] + X[Math.floor(num%100/10)] + I[Math.floor(num%10)];
};
