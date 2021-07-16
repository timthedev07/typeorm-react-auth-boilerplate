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
exports.FRONTEND = void 0;
require("reflect-metadata");
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const apollo_server_express_1 = require("apollo-server-express");
const UserResolver_1 = require("./resolvers/UserResolver");
const type_graphql_1 = require("type-graphql");
const AuthRoute_1 = require("./routes/AuthRoute");
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const typeorm_1 = require("typeorm");
exports.FRONTEND = process.env.NODE_ENV === "production"
    ? "https://your-site-name.netlify.app"
    : "http://localhost:3000";
const PLAYGROUND = "https://studio.apollographql.com";
const PORT = parseInt(process.env.PORT || "9000");
const HOSTNAME = process.env.HOST || "localhost";
(() => __awaiter(void 0, void 0, void 0, function* () {
    const app = express_1.default();
    app.use(cookie_parser_1.default());
    app.use(express_1.default.json());
    app.use(cors_1.default({
        credentials: true,
        origin: [exports.FRONTEND, PLAYGROUND],
    }));
    app.use("/auth", AuthRoute_1.router);
    const apolloServer = new apollo_server_express_1.ApolloServer({
        schema: yield type_graphql_1.buildSchema({ resolvers: [UserResolver_1.UserResolver] }),
        context: ({ req, res }) => ({ req, res }),
    });
    yield typeorm_1.createConnection();
    yield apolloServer.start();
    apolloServer.applyMiddleware({ app, cors: false });
    app.listen(PORT, HOSTNAME, () => {
        console.log(`server up and running at http://${HOSTNAME}:${PORT}`);
    });
}))();
//# sourceMappingURL=index.js.map