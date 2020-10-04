module.exports = function check(str, bracketsConfig) {
        let checkArray = [];

        for (let i = 0; i < str.length; i++) {
            if (isOpenBracket(bracketsConfig, str[i])) {
                let bracketsPair = getBracketsPair(bracketsConfig, str[i]);
                if (checkArray[checkArray.length - 1] === str[i] && bracketsPair[0] === bracketsPair[1]) {
                    checkArray.pop();
                }
                else {
                    checkArray.push(str[i]);
                }

            }

            else if (isCloseBracket(bracketsConfig, str[i])) {
                let bracketsPair = getBracketsPair(bracketsConfig, str[i]);
                if (checkArray[checkArray.length - 1] === bracketsPair[0]) {
                    checkArray.pop();
                }
                else {
                    return false;
                }
            }
        }

        if (checkArray.length !== 0) {
            return false;
        }

        return true;
    }
    function isOpenBracket(bracketsConfig, bracket) {
        for (let i = 0; i < bracketsConfig.length; i++) {
            if (bracketsConfig[i][0] === bracket) {
                return true;
            }
        }
        return false;
    }
    function isCloseBracket(bracketsConfig, bracket) {
        for (let i = 0; i < bracketsConfig.length; i++) {
            if (bracketsConfig[i][1] === bracket) {
                return true;
            }
        }
        return false;
    }
    function getBracketsPair(bracketsConfig, bracket) {
        for (let i = 0; i < bracketsConfig.length; i++) {
            if (bracketsConfig[i][1] === bracket || bracketsConfig[i][0] === bracket) {
                return bracketsConfig[i];
            }
        }
        return [];
    }
