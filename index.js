const letters = {
A: `xxx
x      x
xxx
x      x
x      x`,
B: `xx
x      x
xxx
x      x
xx`,
C: `xxx
x
x
x
xxx`,
D: `xxx
x      x
x      x
x      x
xxx`,
E: `xxx
x
xx
x
xxx`,
F: `xxx,
x
xx
x
x`,
G: `xxx
x
xxx
x      x
xxx`,
H: `x      x
x      x
xxx
x      x
x      x`,
I: `xxx
      x
      x
      x
xxx`,
J: `            x
            x
            x
x      x
      x`,
K: `x
x      x
xx
x      x
x      x`,
L: `x
x
x
x
xxx`,
M: `x                  x
xx      xx
x      x      x
x                  x
x                  x`,
N: `xx                  x
x      x            x
x            x      x
x                  xx
x                        x`,
O: `xxx
x      x      
x      x      
x      x      
xxx`,
P: `xxx
x      x
xxx
x
x`,
Q: `xxx
x      x
x      x
xxx
            x`,
R: `xxx
x      x
xx
x      x
x      x`,
S: `xxx
x
xxx
            x
xxx`,
T: `xxx
      x
      x
      x
      x`,
U: `x      x
x      x
x      x
x      x
xxx`,
V: `x      x
x      x
x      x
x      x
      x`,
W: `x                  x
x                  x
x      x      x
xxxxx
xx      xx`,
X: ``,
Y: ``,
Z: `xxx
            x
      x
x
xxx`
}

/**
 * Takes a letter and returns an emoji letter
 * @param {String} letter The original letter
 * @returns The letter written in emojis
 */
function letterToEmoji(letter = '', emoji) {
  return letters[letter.toUpperCase()].replace(/x/g, emoji);
}

function translate(text = '', emoji = ':PugVibe:') {
  const letters = text.split('');
  return letters.reduce((result, currentLetter) => {
    const emojiLetter = letterToEmoji(currentLetter, emoji);
    if (!result) {
      return emojiLetter;
    }
    return result + '\n\n' + emojiLetter;
  }, '');
}

// Test code
const test = translate('qr', ':owoked:');
console.log(test);