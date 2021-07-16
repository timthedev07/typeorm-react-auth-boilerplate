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
exports.sendEmail = void 0;
const nodemailer_1 = __importDefault(require("nodemailer"));
const html_1 = require("../utils/html");
const path_1 = __importDefault(require("path"));
const handlebars_1 = require("handlebars");
const sendEmail = (recipient, url, verb, noun) => __awaiter(void 0, void 0, void 0, function* () {
    const transporter = nodemailer_1.default.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
            user: process.env.MAIL_USERNAME,
            pass: process.env.MAIL_PASSWORD,
        },
        tls: {
            rejectUnauthorized: false,
        },
    });
    let html;
    try {
        const rawHtml = html_1.HTMLFileToString(path_1.default.resolve(__dirname, "../email.html"));
        const template = handlebars_1.compile(rawHtml);
        const data = {
            url,
            buttonText: verb.charAt(0).toUpperCase() + verb.slice(1),
        };
        html = template(data);
    }
    catch (err) {
        console.log("err: ", err);
    }
    const mailOptions = {
        from: `"No Reply" <${process.env.USERNAME}>`,
        to: recipient,
        subject: `${verb.charAt(0).toUpperCase() + verb.slice(1)} your ${noun}`,
        html,
    };
    transporter.sendMail(mailOptions, (err) => {
        if (err) {
            return false;
        }
        else {
            return true;
        }
    });
});
exports.sendEmail = sendEmail;
//# sourceMappingURL=sendEmail.js.map