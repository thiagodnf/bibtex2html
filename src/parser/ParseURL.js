module.exports = class ParseURL {

    parse(entry) {

        entry["URL_HTML"] = entry["URL_HTML"] || "";

        if (entry["URL"]) {
            entry["URL_HTML"] = `<a class="url" href="${entry["URL"]}">${entry["URL"]}</a>`;
        }

        return entry;
    }
};