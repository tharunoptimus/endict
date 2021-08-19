module.exports = { parseSentence: parseSentence };

function parseSentence(words) {
    console.log("Words to the function is: ", words)
    var sentence = "";  
    for(var i = 1; i < words.length; i++) { 
        console.log(words[i]) 
        sentence = sentence + words[i] + " ";  
    }
}