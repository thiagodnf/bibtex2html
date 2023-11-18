module.exports = class ParseMonthToString {

    static months = {
        "January": ["1", "jan", "january"],
        "February": ["2", "feb", "february"],
        "March": ["3", "mar", "march"],
        "April": ["4", "apr", "april"],
        "May": ["5", "may", "may"],
        "June": ["6", "jun", "june"],
        "July": ["7", "jul", "july"],
        "August": ["8", "aug", "august"],
        "September": ["9", "sep", "september"],
        "October": ["10", "oct", "october"],
        "November": ["11", "nov", "november"],
        "December": ["12", "dec", "december"]
    };

    parse(entry) {
        entry["MONTH"] = this.getMonth(entry["MONTH"]) || "";
    }

    getMonth(str) {

        if (!str) {
            return str;
        }

        const { months } = ParseMonthToString;

        for (const [key, value] of Object.entries(months)) {

            if (value.includes(str)) {
                return key;
            }
        }

        return str;
    }
};
