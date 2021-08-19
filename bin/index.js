#! /usr/bin/env node

const fs = require("fs") 
const dictionary = require("./dictionary") 
const clearConsole = require('clear-any-console')
const yargs = require("yargs")
var size = require('window-size')
clc = require("cli-color")
const wrap = require('word-wrap')

const usage = "\nFind the meaning of the word in the dictionary!\nUsage: dict word";

const options = yargs  
      .usage(usage)                                                                                                
      .help(true)  
      .argv;

let word = options._[0]; // Get the word from the cmd line args

printWord(dictionary[word]); // Get the definition from the dictionary

function printWord (definition) {
    clearConsole();
    if(definition !== undefined) {
        let dashes = "-".repeat(size.width);
        console.log(dashes)
        console.log(clc.green(word + ": "))
        console.log(wrap(addNewLine(definition), {width: size.width - 1, indent: "", newline: '\n', trim: true}))
        console.log(dashes)
    }
    else {
        console.log(word + ": No such word in dictionary")
    }
}

function addNewLine(string) {
    let newString = string.replace(/\d+/g, (match) => {
        return "\n\n" + match
    });
    return newString;
}