const bibtexParse = require("bibtex-parse");
const fs = require("fs");

// Generators

const ParseAuthor = require("./parser/ParseAuthor");
const ParseAuthorAn = require("./parser/ParseAuthorAn");
const ParseToInteger = require("./parser/ParseToInteger");
const ParseMonthToString = require("./parser/ParseMonthToString");
const ParseDOI = require("./parser/ParseDOI");
const ParseToHTML = require("./parser/ParseToHTML");
const ParseURL = require("./parser/ParseURL");
const ParsePages = require("./parser/ParsePages");

// Bibliography Style

const Plain = require("./style/Plain");

module.exports = class Parser {

    constructor() {

        this.generators = [];

        this.addGenerators(new ParseAuthorAn());
        this.addGenerators(new ParseAuthor());
        this.addGenerators(new ParseToInteger());
        this.addGenerators(new ParseMonthToString());
        this.addGenerators(new ParseDOI());
        this.addGenerators(new ParseURL());
        this.addGenerators(new ParsePages());

        this.addGenerators(new ParseToHTML(new Plain()));
    }

    addGenerators(generator) {
        this.generators.push(generator);
    }

    parse(content) {

        let entries = bibtexParse.entries(content);

        for (const entry of entries) {
            for (const generator of this.generators) {
                generator.parse(entry);
            }
        }

        return entries;
    }
};
