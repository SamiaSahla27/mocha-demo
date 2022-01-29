/* 
An English text needs to be encrypted using the following encryption scheme.
First, the spaces are removed from the text. Let  be the length of this text.
Then, characters are written into a grid, whose rows and columns have the following constraints:

Example
s = if man was meant to stay on the ground god would have given us roots
After removing spaces, the string is  characters long. is between and, 
so it is written in the form of a grid with 7 rows and 8 columns.

|ifmanwas|
|meanttos|
|tayonthe|
|groundgo|
|dwouldha|
|veginevu|
|sroots|

* Ensure that rows * columns >= L
* If multiple grids satisfy the above conditions, choose the one with the minimum area, i.e..

The encoded message is obtained by displaying the characters of each column, 
with a space between column texts.

The encoded message for the grid above is:
imtgdvs fearwer mayoogo anouuio ntnnlvt wttddes aohghn sseoau

*/

// Examples 

/*

Sample input 0 : have a nice day
Sample output 0 : hae and via ecy

Explanation 0 :
L = 12; rootSquare 12 is between 3 and 4

Rewritten with 3 rows and 4 columns :
|have|
|anic|
|eday|

--------------------------------------------------------------------------------

Sample input 1 : chillout
Sample output 1 : clu hlt io

Explanation 1 :
L = 8; rootSquare 8 is between 2 and 3

Rewritten with 3 columns and 3 rows (2 * 3 = 6 < 8 so we have to use 3X3)
|chi|
|llo|
|ut|

*/

// Create the encryption function in the editor below

/*

Function Description

*** Parameters : 
string s: a string to encrypt

*** Returns :
string: the encrypted string

*** Input Format :
One line of text, the string 

*** Constraints :
* 1 <= length of s <= 81
* s contains characters in the range ascii[a-z] and space, ascii(32).

*/


function encryptions(s) {
    let output = ''
    // write your code here
    const trimedText = s.replace(/ /g, "");
    console.log(trimedText);
    const racC = Math.sqrt(trimedText.length);
    const rowValue = Math.floor(racC);
    const columnValue = Math.ceil(racC);

    console.log('racC', racC);
    console.log('columnValue', columnValue);
    console.log('rowValue', rowValue);
    var textArray = [...trimedText]
    var tableau = []
   // hae and via ecy
//|have|
//|anic|
//|eday|
    var t = [0, 1, 2, 3]
    Array.from({length: columnValue}).map((_, i) => i + 1)

    for(var x = 0; x < columnValue ; x++){
        tableau[x] = []
        for(var y = 0; y < rowValue; y++){
            tableau[x][y] = textArray.shift()
            var index = x+(y*columnValue)
            console.log('x:' + x + ', y: ' + y + ', result:'+ index);
            output += trimedText[index]
            if(y === rowValue-1){
                output += ' '
            }
        }
    }

    console.table(tableau);
    
    // [...trimedText].forEach((letter, index) => {
    //      if (index % 4 === 0) {
    //          output += '\n|'
    //      }

    //     output += letter;

    //     if (index % rowValue === rowValue) {
    //         output += '|\n'
    //     }
    // })
    
    return output;
}
    
   console.log(encryptions('have a nice day'));
