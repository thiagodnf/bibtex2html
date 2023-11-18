const { isString, isNatural } = require("../util/Is");

module.exports = class ParseToInteger {

    parse(entry) {
        this.parseField(entry, "YEAR");
        this.parseField(entry, "VOLUME");
        this.parseField(entry, "NUMBER");
    }

    parseField(entry, field) {

        const value = entry[field];

        if (value && isString(value) && isNatural(value)) {
            entry[field] = parseInt(entry[field]);
        }
    }
};