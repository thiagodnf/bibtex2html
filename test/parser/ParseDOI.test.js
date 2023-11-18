const ParseDOI = require("../../src/parser/ParseDOI");

let parser = null;

beforeEach(() => {
    parser = new ParseDOI();
});

test("should not have DOI URL", async () => {
    await expect(parser.parse({ "DOI": undefined })).toMatchObject({ "DOI_URL": "" });
    await expect(parser.parse({ "DOI": null })).toMatchObject({ "DOI_URL": "" });
    await expect(parser.parse({ "DOI": "" })).toMatchObject({ "DOI_URL": "" });
});

test("should have DOI URL", async () => {
    await expect(parser.parse({ "DOI": "123" })).toMatchObject({ "DOI_URL": "<a class=\"doi\" href=\"https://doi.org/123\">123</a>" });
});
