const palindromes = function (text) {
    let comparison = '';
    const regex = /\s|[.,!?]/g;
    let processedText = text.replaceAll(regex, '').toLowerCase();

    for (let i = processedText.length - 1; i >= 0; i--) {
        comparison += processedText[i];
    }

    if (processedText != comparison) {
        return false;
    }

    return true;
};

// Do not edit below this line
module.exports = palindromes;
