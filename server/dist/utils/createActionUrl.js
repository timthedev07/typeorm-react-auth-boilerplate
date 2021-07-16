"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createActionUrl = void 0;
const uuid_1 = require("uuid");
const index_1 = require("../index");
const email_1 = require("../constants/email");
const redis_1 = require("../redis");
const createActionUrl = (userId, action) => __awaiter(void 0, void 0, void 0, function* () {
    const token = uuid_1.v4();
    const prefixedToken = (email_1.prefixMap[action] || "dG9rZW4=:") + token;
    redis_1.redisClient.set(prefixedToken, `${userId}`, "ex", 60 * 60 * 8);
    return `${index_1.FRONTEND}/auth/${action}/${prefixedToken}`;
});
exports.createActionUrl = createActionUrl;
//# sourceMappingURL=createActionUrl.js.map