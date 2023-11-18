const ParsePages = require("../../src/parser/ParsePages");

let parser = null;

beforeEach(() => {
    parser = new ParsePages();
});

test("should not change the pages", async () => {
    await expect(parser.parse({ "PAGES": undefined })).toEqual({ "PAGES": "" });
    await expect(parser.parse({ "PAGES": null })).toEqual({ "PAGES": "" });
    await expect(parser.parse({ "PAGES": "" })).toEqual({ "PAGES": "" });
    await expect(parser.parse({ "PAGES": "123" })).toEqual({ "PAGES": "123" });
    await expect(parser.parse({ "PAGES": "12-13" })).toEqual({ "PAGES": "12-13" });
});

test("should trim and reduce the dash symbols", async () => {
    await expect(parser.parse({ "PAGES": "  12  " })).toEqual({ "PAGES": "12" });
    await expect(parser.parse({ "PAGES": "12--13" })).toEqual({ "PAGES": "12-13" });
    await expect(parser.parse({ "PAGES": "12---13" })).toEqual({ "PAGES": "12-13" });
    await expect(parser.parse({ "PAGES": "12----13" })).toEqual({ "PAGES": "12-13" });
});
