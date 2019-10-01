module.exports = function check(str, bracketsConfig) {
  let stack = [];
    let arrBrackets = [];

    bracketsConfig.forEach(i => {
        i.forEach(y => {
            arrBrackets.push(y)
        })
    });

    let arrSameBrackets = [];

    arrBrackets.forEach((i, index) => {
        if (arrBrackets[index - 1] === i) {
            arrSameBrackets.push(i)
        }
    });

    if (str.length % 2 !== 0) return false;
    for (let i = 0; i < str.length; i++) {
        if (arrSameBrackets.includes(str[i])) {
            if (str[i] === stack[stack.length - 1]) {
                stack.pop();
            } else stack.push(str[i]);
        } else if (arrBrackets.indexOf(str[i]) % 2 === 1) {
            if (stack[stack.length - 1] === arrBrackets[arrBrackets.indexOf(str[i]) - 1]) {
                stack.pop()
            }
        } else stack.push(str[i])
    }
    return stack.length === 0;
}
