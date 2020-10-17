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
  var sliced = '';
  var final = '';
    for (var i = 10; i <= expr.length; i += 10 ) {
      //declare empty decoded (means from 10,11 to morse)
      var decoded = '';
      sliced = expr.slice(i-10, i)

      if (sliced === '**********') {
        final = final + ' '
      } else {
        // check 10 or 11 with 1 and 0 separately by steps 2
            for (var j=0; j < sliced.length; j += 2){
                    if (sliced.charAt(j) === '1' && sliced.charAt(j+1) === '0'){
                      decoded = decoded + '.'
                    } else if (sliced.charAt(j) === '1' && sliced.charAt(j+1) === '1'){
                      decoded = decoded + '-'
                    } else {}
            }
      }
      //check if morse table includes this expression
      if (decoded in MORSE_TABLE){
         final = final + MORSE_TABLE[decoded]
      }

    }
  return final;
}

module.exports = {
    decode
}
