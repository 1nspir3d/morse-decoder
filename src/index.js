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

function decode(expr) {
    const letters = [],
          letter = [];
    let start = expr.length;
    while( start > 0 ) {
        let end = start;
        letters.push( expr.slice( ( start = Math.max( 0, start - 10 ) ), end ) );
    }

    letters.forEach(element => {
        let test = ((element.replace(/10/g, '.')).replace(/11/g,'-').replace(/0/g,''));    
        letter.push(test);
    });

    letter.forEach((element, index) => {
        letter[index] = MORSE_TABLE[element];
        if (letter[index] === undefined) {
            letter[index] = ' ';
        }
    });
    

    return letter.reverse().join('');
    
}


module.exports = {
    decode
}