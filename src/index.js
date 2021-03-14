module.exports = function check(str, bracketsConfig) {
    if (str.length % 2 !== 0) return false;

    let brackets = "[]{}()<>||";
    let input = str.split("");
    let stack = [];

    for (let bracket of input) {
        let bracketInd = brackets.indexOf(bracket);

        if (bracketInd % 2 === 0) {
            if (
                bracketInd === 8 &&
                input.length % 2 === 0 &&
                input.pop() === bracket
            ) {
                return true;
            }
            stack.push(bracketInd + 1);
        } else {
            if (stack.pop() !== bracketInd) {
                return false;
            }
        }
    }
    return stack.length === 0;
};
