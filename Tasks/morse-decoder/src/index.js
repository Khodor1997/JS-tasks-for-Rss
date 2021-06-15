const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decoder (letter) {
    let decoder  = '';
  
    if (letter === '**********') {
        decoder = ' ';
    } else {
      let morseCode = '';
      for (let j = 0; j < 10; j += 2) {
        const numb = letter[j] + letter[j + 1];
        if(numb === '00'){
            morseCode+= '';
        }
        if(numb === '10'){
            morseCode+='.';
        }
        if(numb === '11'){
            morseCode+='-';
        }
      }
      decoder = MORSE_TABLE[morseCode];
    }
  
    return decoder;
  }
  // decoder("10101010");
  
  function decode(expr) {
    let answer = '';
    let letter = '';
    for (let i = 0; i < expr.length; i++) {
      letter += expr[i];
      if (letter.length === 10) {
        answer += decoder(letter);
        letter = '';
      }
    }
  
    return answer;
  }

module.exports = {
    decode
}