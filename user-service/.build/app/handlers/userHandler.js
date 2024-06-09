"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Payment = exports.Cart = exports.Profile = exports.Verify = exports.Login = exports.Signup = void 0;
const tsyringe_1 = require("tsyringe");
const userService_1 = require("../services/userService");
const core_1 = __importDefault(require("@middy/core"));
const http_json_body_parser_1 = __importDefault(require("@middy/http-json-body-parser"));
const service = tsyringe_1.container.resolve(userService_1.UserService);
// User Creation, Login and Verification
exports.Signup = (0, core_1.default)((event) => {
    return service.CreateUser(event);
}).use((0, http_json_body_parser_1.default)());
exports.Login = (0, core_1.default)((event) => {
    return service.LoginUser(event);
}).use((0, http_json_body_parser_1.default)());
exports.Verify = (0, core_1.default)((event) => {
    const httpMethod = event.requestContext.http.method.toLowerCase();
    if (httpMethod === 'post') {
        return service.VerifyUser(event);
    }
    else if (httpMethod === 'get') {
        return service.GetVerificationToken(event);
    }
    else {
        return service.ResponseWithError(event);
    }
}).use((0, http_json_body_parser_1.default)());
// User Profile
exports.Profile = (0, core_1.default)((event) => {
    const httpMethod = event.requestContext.http.method.toLowerCase();
    if (httpMethod === 'post') {
        return service.CreateProfile(event);
    }
    else if (httpMethod === 'put') {
        return service.EditProfile(event);
    }
    else if (httpMethod === 'get') {
        return service.GetProfile(event);
    }
    else {
        return service.ResponseWithError(event);
    }
}).use((0, http_json_body_parser_1.default)());
exports.Cart = (0, core_1.default)((event) => {
    const httpMethod = event.requestContext.http.method.toLowerCase();
    if (httpMethod === 'post') {
        return service.CreateCart(event);
    }
    else if (httpMethod === 'put') {
        return service.UpdateCart(event);
    }
    else if (httpMethod === 'get') {
        return service.GetCart(event);
    }
    else {
        return service.ResponseWithError(event);
    }
}).use((0, http_json_body_parser_1.default)());
exports.Payment = (0, core_1.default)((event) => {
    const httpMethod = event.requestContext.http.method.toLowerCase();
    if (httpMethod === 'post') {
        return service.CreatePaymentMethod(event);
    }
    else if (httpMethod === 'put') {
        return service.UpdatePaymentMethod(event);
    }
    else if (httpMethod === 'get') {
        return service.GetPaymentMethod(event);
    }
    else {
        return service.ResponseWithError(event);
    }
}).use((0, http_json_body_parser_1.default)());
//# sourceMappingURL=userHandler.js.map