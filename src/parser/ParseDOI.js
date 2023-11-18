module.exports = class ParseDOI {

    parse(entry) {

        entry["DOI_URL"] = entry["DOI_URL"] || "";

        if (entry["DOI"]) {
            entry["DOI_URL"] = `<a class="doi" href="https://doi.org/${entry["DOI"]}">${entry["DOI"]}</a>`;
        }

        return entry;
    }
};