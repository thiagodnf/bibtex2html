module.exports = class ParsePages {

    parse(entry) {

        entry["PAGES"] = entry["PAGES"] || "";
        entry["PAGES"] = entry["PAGES"].trim();
        entry["PAGES"] = entry["PAGES"].replace(/-+/, "-");

        return entry;
    }
};
