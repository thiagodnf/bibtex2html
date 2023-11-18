module.exports = class ParseAuthor {

    parse(entry) {

        if (!entry["AUTHOR"]) {
            return;
        }

        const highlights = entry["AUTHORS_HIGHLIGHT"] || [];

        let authors = entry["AUTHOR"]
            .split(/\s+and\s+/)
            .map(el => el.trim())
            .map(el => this.parseAuthorName(el))
            .map((el, i) => this.parseHighlights(highlights, el, i));

        if (authors.length == 1) {
            entry["AUTHORS"] = authors[0];
        } else if (authors.length == 2) {
            entry["AUTHORS"] = authors[0] + " and " + authors[1];
        } else {
            entry["AUTHORS"] = authors.slice(0, authors.length - 1).join(", ") + ", and " + authors[authors.length - 1];
        }
    }

    parseAuthorName(name) {

        const suffix = /^(.*)\s*,\s*(.*)\s*,\s*(.*)$/.exec(name);

        if (suffix) {
            return `${suffix[3]} ${suffix[1]} ${suffix[2]}`;
        }

        const groups = /^(.*)\s*,\s*(.*)$/.exec(name);

        if (groups) {
            return `${groups[2]} ${groups[1]}`;
        }

        return name;
    }

    parseHighlights(highlights = [], el, i) {

        if (highlights.length === 0) {
            return el;
        }

        if (highlights.includes(i + 1)) {
            return `<span class="highlight">${el}</span>`;
        }

        return el;
    }
};