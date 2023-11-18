module.exports = class ParseAuthorAn {

    parse(entry) {

        entry["AUTHOR+AN"] = entry["AUTHOR+AN"] || "";
        entry["AUTHORS_HIGHLIGHT"] = [];

        const parts = entry["AUTHOR+AN"].split(/\s*,\s*/).map(el => el.trim());

        const exp = /^(\d+)\s*=\s*highlight$/;

        for (const part of parts) {

            const result = exp.exec(part);

            if (result) {
                entry["AUTHORS_HIGHLIGHT"].push(parseInt(result));
            }
        }
    }
};