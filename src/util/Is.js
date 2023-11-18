module.exports = class Is {

    static isString(param) {
        return typeof param === "string" || param instanceof String;
    }

    static isNatural(param) {
        return /^\d+$/.test(param);
    }
};