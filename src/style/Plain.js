const Mustache = require("mustache");

module.exports = class Plain {

    apply(entry) {

        const { type } = entry;

        const templates = {
            "phdthesis": this.thesis,
            "mastersthesis": this.thesis,
            "thesis": this.thesis,
            "article": this.article,
            "inproceedings": this.inproceedings,
            "incollection": this.incollection
        };

        const template = templates[type];

        if (template) {

            let rendered = template(entry);

            rendered = Mustache.render(rendered, entry);

            return rendered;
        }

        return "MISSING STYLE";
    }

    inproceedings(entry) {

        const keys = {
            // Required
            "AUTHORS": entry["AUTHORS"] ? "{{{AUTHORS}}}," : "",
            "TITLE": entry["TITLE"] ? " \"{{TITLE}},\"" : "",
            "BOOKTITLE": entry["BOOKTITLE"] ? " in <i>{{{BOOKTITLE}}}</i>," : "",
            "YEAR": entry["YEAR"] ? " {{YEAR}}," : "",
            // Optional
            "EDITOR": entry["EDITOR"] ? " {{EDITOR}}, Eds.," : "",
            "VOLUME": entry["VOLUME"] ? " vol. {{VOLUME}}," : "",
            "NUMBER": entry["NUMBER"] ? " no. {{NUMBER}}," : "",
            "SERIES": entry["SERIES"] ? " ser. {{SERIES}}," : "",
            "PAGES": entry["PAGES"] ? " pp. {{PAGES}}." : "",
            "ADDRESS": entry["ADDRESS"] ? " {{ADDRESS}}:" : "",
            "MONTH": entry["MONTH"] ? " {{MONTH}}" : "",
            "ORGANIZATION": entry["ORGANIZATION"] ? " {{ORGANIZATION}}." : "",
            "PUBLISHER": entry["PUBLISHER"] ? " {{PUBLISHER}}," : "",

            "NOTE": entry["NOTE"] ? " {{NOTE}}." : "",
            "URL": entry["URL_HTML"] ? " [Online]. Available: {{{URL_HTML}}}." : "",
            "DOI": entry["DOI"] ? " DOI: {{{DOI_URL}}}." : "",
        };

        const template = "{{AUTHORS}}{{{TITLE}}}{{{BOOKTITLE}}}{{SERIES}}{{EDITOR}}{{VOLUME}}{{NUMBER}}{{ORGANIZATION}}{{ADDRESS}}{{PUBLISHER}}{{MONTH}}{{YEAR}}{{PAGES}}{{{NOTE}}}{{{URL}}}{{{DOI}}}";

        return Mustache.render(template, keys);
    }

    incollection(entry) {

        const keys = {
            // Required
            "AUTHORS": entry["AUTHORS"] ? "{{{AUTHORS}}}," : "",
            "TITLE": entry["TITLE"] ? " \"{{TITLE}},\"" : "",
            "BOOKTITLE": entry["BOOKTITLE"] ? " in <i>{{{BOOKTITLE}}}</i>," : "",
            "PUBLISHER": entry["PUBLISHER"] ? " {{PUBLISHER}}," : "",
            "YEAR": entry["YEAR"] ? " {{YEAR}}" : "",
            // Optional
            "EDITOR": entry["EDITOR"] ? " {{EDITOR}}, Eds.," : "",
            "VOLUME": entry["VOLUME"] ? " vol. {{VOLUME}}," : "",
            "NUMBER": entry["NUMBER"] ? " no. {{NUMBER}}," : "",
            "SERIES": entry["SERIES"] ? " ser. {{SERIES}}," : "",
            "PAGES": entry["PAGES"] ? " pp. {{PAGES}}." : "",
            "ADDRESS": entry["ADDRESS"] ? " {{ADDRESS}}:" : "",
            "MONTH": entry["MONTH"] ? " {{MONTH}}" : "",

            "NOTE": entry["NOTE"] ? ", {{NOTE}}" : "",
            "URL": entry["URL_HTML"] ? " [Online]. Available: {{{URL_HTML}}}." : "",
            "DOI": entry["DOI"] ? " DOI: {{{DOI_URL}}}." : "",
        };

        const template = "{{AUTHORS}}{{{TITLE}}}{{{BOOKTITLE}}}{{SERIES}}{{EDITOR}}{{VOLUME}}{{NUMBER}}{{ORGANIZATION}}{{ADDRESS}}{{PUBLISHER}}{{MONTH}}{{YEAR}}{{PAGES}}{{{NOTE}}}{{{URL}}}{{{DOI}}}";

        return Mustache.render(template, keys);
    }

    article(entry) {

        const keys = {
            // Required
            "AUTHORS": entry["AUTHORS"] ? "{{{AUTHORS}}}," : "",
            "TITLE": entry["TITLE"] ? " \"{{TITLE}},\"" : "",
            "JOURNAL": entry["JOURNAL"] ? " <i>{{{JOURNAL}}}</i>," : "",
            "YEAR": entry["YEAR"] ? " {{YEAR}}." : "",
            // Optional
            "VOLUME": entry["VOLUME"] ? " vol. {{VOLUME}}," : "",
            "NUMBER": entry["NUMBER"] ? " no. {{NUMBER}}," : "",
            "PAGES": entry["PAGES"] ? " pp. {{PAGES}}," : "",
            "MONTH": entry["MONTH"] ? " {{MONTH}}" : "",

            "NOTE": entry["NOTE"] ? " {{NOTE}}." : "",
            "URL": entry["URL_HTML"] ? " [Online]. Available: {{{URL_HTML}}}." : "",
            "DOI": entry["DOI"] ? " DOI: {{{DOI_URL}}}." : "",
        };

        const template = "{{AUTHORS}}{{{TITLE}}}{{{JOURNAL}}}{{VOLUME}}{{NUMBER}}{{PAGES}}{{MONTH}}{{YEAR}}{{{NOTE}}}{{{URL}}}{{{DOI}}}";

        return Mustache.render(template, keys);
    }

    thesis(entry) {

        const keys = {
            // Required
            "AUTHORS": entry["AUTHORS"] ? "{{{AUTHORS}}}," : "",
            "TITLE": entry["TITLE"] ? " \"{{TITLE}},\"" : "",
            "SCHOOL": entry["TITLE"] ? " {{SCHOOL}}," : "",
            "YEAR": entry["YEAR"] ? " {{YEAR}}." : "",
            // Optional
            "TYPE": entry["TYPE"] ? " {{TYPE}}," : "",
            "ADDRESS": entry["ADDRESS"] ? " {{ADDRESS}}," : "",
            "MONTH": entry["MONTH"] ? " {{MONTH}}" : "",

            "NOTE": entry["NOTE"] ? " {{NOTE}}." : "",
            "URL": entry["URL_HTML"] ? " [Online]. Available: {{{URL_HTML}}}." : "",
            "DOI": entry["DOI"] ? " DOI: {{{DOI_URL}}}." : "",
        };

        const template = "{{AUTHORS}}{{{TITLE}}}{{TYPE}}{{{SCHOOL}}}{{ADDRESS}}{{MONTH}}{{YEAR}}{{{NOTE}}}{{{URL}}}{{{DOI}}}";

        return Mustache.render(template, keys);
    }
};
