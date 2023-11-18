module.exports = class ParseToHTML {

    constructor(style) {
        this.style = style;
    }

    parse(entry) {

        const { key, type } = entry;

        entry["HTML"] = `<span class="entry" data-key="${key}" data-type="${type}">${this.style.apply(entry)}</span>`;
    }
};