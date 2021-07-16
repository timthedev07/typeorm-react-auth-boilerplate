"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HTMLFileToString = void 0;
const fs_1 = require("fs");
const HTMLFileToString = (path) => {
    const data = fs_1.readFileSync(path, {
        encoding: "utf8",
    });
    return data;
};
exports.HTMLFileToString = HTMLFileToString;
//# sourceMappingURL=html.js.map