import * as path from "path";
import * as helpers from "yeoman-test";

// TODO Fix test configuration
describe('generator-udutha:app', () => {
    beforeAll(() => {
        return helpers
            .run(path.join(__dirname, '../generators/app'))
            .withPrompts({ someAnswer: true });
    });
});
