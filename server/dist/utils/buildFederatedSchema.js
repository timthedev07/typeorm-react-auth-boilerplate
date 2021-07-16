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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildFederatedSchema = void 0;
const graphql_1 = require("graphql");
const directives_1 = __importDefault(require("@apollo/federation/dist/directives"));
const graphql_tag_1 = __importDefault(require("graphql-tag"));
const federation_1 = require("@apollo/federation");
const apollo_graphql_1 = require("apollo-graphql");
const type_graphql_1 = require("type-graphql");
const createResolversMap_1 = require("type-graphql/dist/utils/createResolversMap");
const buildFederatedSchema = (options, referenceResolvers) => __awaiter(void 0, void 0, void 0, function* () {
    const schema = yield type_graphql_1.buildSchema(Object.assign(Object.assign({}, options), { directives: [
            ...graphql_1.specifiedDirectives,
            ...directives_1.default,
            ...(options.directives || []),
        ], skipCheck: true }));
    const federatedSchema = federation_1.buildFederatedSchema({
        typeDefs: graphql_tag_1.default(federation_1.printSchema(schema)),
        resolvers: createResolversMap_1.createResolversMap(schema),
    });
    if (referenceResolvers) {
        apollo_graphql_1.addResolversToSchema(federatedSchema, referenceResolvers);
    }
    return federatedSchema;
});
exports.buildFederatedSchema = buildFederatedSchema;
//# sourceMappingURL=buildFederatedSchema.js.map