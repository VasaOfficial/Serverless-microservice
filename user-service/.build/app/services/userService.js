"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
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
exports.UserService = void 0;
const userRepository_1 = require("../repository/userRepository");
const response_1 = require("../util/response");
const tsyringe_1 = require("tsyringe");
const class_transformer_1 = require("class-transformer");
const SignInput_1 = require("../models/dto/SignInput");
const errors_1 = require("../util/errors");
const password_1 = require("../util/password");
const LoginInput_1 = require("../models/dto/LoginInput");
const notification_1 = require("../util/notification");
const VerificationInput_1 = require("../models/dto/VerificationInput");
const dateHelper_1 = require("../util/dateHelper");
const AddressInput_1 = require("../models/dto/AddressInput");
let UserService = class UserService {
    constructor(repository) {
        this.repository = repository;
    }
    ResponseWithError(event) {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, response_1.ErrorResponse)(404, "requested method is not supported!");
        });
    }
    // User Creation, Login and Verification
    CreateUser(event) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const input = (0, class_transformer_1.plainToClass)(SignInput_1.SignupInput, event.body);
                const error = yield (0, errors_1.AppValidationError)(input);
                if (error)
                    return (0, response_1.ErrorResponse)(404, error);
                const salt = yield (0, password_1.GetSalt)();
                const hashedPassword = yield (0, password_1.GetHashedPassword)(input.password, salt);
                const data = yield this.repository.createAccount({
                    email: input.email,
                    password: hashedPassword,
                    salt: salt,
                    phone: input.phone,
                    userType: 'BUYER'
                });
                return (0, response_1.SuccessResponse)(data);
            }
            catch (error) {
                return (0, response_1.ErrorResponse)(500, error);
            }
        });
    }
    LoginUser(event) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const input = (0, class_transformer_1.plainToClass)(LoginInput_1.LoginInput, event.body);
                const error = yield (0, errors_1.AppValidationError)(input);
                if (error)
                    return (0, response_1.ErrorResponse)(404, error);
                const data = yield this.repository.findAccount(input.email);
                const verified = yield (0, password_1.ValidatePassword)(input.password, data.password, data.salt);
                if (!verified) {
                    throw new Error('Password does not match');
                }
                const token = (0, password_1.GetToken)(data);
                return (0, response_1.SuccessResponse)({ token });
            }
            catch (error) {
                return (0, response_1.ErrorResponse)(500, error);
            }
        });
    }
    GetVerificationToken(event) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const token = event.headers.authorization;
                const payload = yield (0, password_1.VerifyToken)(token);
                if (!payload)
                    return (0, response_1.ErrorResponse)(403, "authorization failed!");
                const { code, expiry } = (0, notification_1.GenerateAccessCode)();
                yield this.repository.updateVerificationCode(payload.user_id, code, expiry);
                return (0, response_1.SuccessResponse)({
                    message: "verification code is sent to your registered mobile number!",
                });
            }
            catch (error) {
                return (0, response_1.ErrorResponse)(500, error);
            }
        });
    }
    VerifyUser(event) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const token = event.headers.authorization;
                const payload = yield (0, password_1.VerifyToken)(token);
                if (!payload)
                    return (0, response_1.ErrorResponse)(403, "authorization failed!");
                const input = (0, class_transformer_1.plainToClass)(VerificationInput_1.VerificationInput, event.body);
                const error = yield (0, errors_1.AppValidationError)(input);
                if (error)
                    return (0, response_1.ErrorResponse)(404, error);
                const { verification_code, expiry } = yield this.repository.findAccount(payload.email);
                // find the user account
                if (verification_code === parseInt(input.code)) {
                    // check expiry
                    const currentTime = new Date();
                    const diff = (0, dateHelper_1.TimeDifference)(expiry, currentTime.toISOString(), "m");
                    if (diff > 0) {
                        yield this.repository.updateVerifyUser(payload.user_id);
                    }
                    else {
                        return (0, response_1.ErrorResponse)(403, "verification code is expired!");
                    }
                }
                return (0, response_1.SuccessResponse)({ message: "user verified!" });
            }
            catch (error) {
                return (0, response_1.ErrorResponse)(500, error);
            }
        });
    }
    // User Profile
    CreateProfile(event) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const token = event.headers.authorization;
                const payload = yield (0, password_1.VerifyToken)(token);
                if (payload === false)
                    return (0, response_1.ErrorResponse)(403, "authorization failed!");
                const input = (0, class_transformer_1.plainToClass)(AddressInput_1.ProfileInput, event.body);
                const error = yield (0, errors_1.AppValidationError)(input);
                if (error)
                    return (0, response_1.ErrorResponse)(404, error);
                yield this.repository.createProfile(payload.user_id, input);
                return (0, response_1.SuccessResponse)({ message: 'profile created successfully!' });
            }
            catch (error) {
                return (0, response_1.ErrorResponse)(500, error);
            }
        });
    }
    GetProfile(event) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const token = event.headers.authorization;
                const payload = yield (0, password_1.VerifyToken)(token);
                if (payload === false)
                    return (0, response_1.ErrorResponse)(403, "authorization failed!");
                const result = yield this.repository.getUserProfile(payload.user_id);
                return (0, response_1.SuccessResponse)(result);
            }
            catch (error) {
                return (0, response_1.ErrorResponse)(500, error);
            }
        });
    }
    EditProfile(event) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const token = event.headers.authorization;
                const payload = yield (0, password_1.VerifyToken)(token);
                if (payload === false)
                    return (0, response_1.ErrorResponse)(403, "authorization failed!");
                const input = (0, class_transformer_1.plainToClass)(AddressInput_1.ProfileInput, event.body);
                const error = yield (0, errors_1.AppValidationError)(input);
                if (error)
                    return (0, response_1.ErrorResponse)(404, error);
                yield this.repository.editProfile(payload.user_id, input);
                return (0, response_1.SuccessResponse)({ message: 'profile updated successfully!' });
            }
            catch (error) {
                return (0, response_1.ErrorResponse)(500, error);
            }
        });
    }
    // Cart Section
    CreateCart(event) {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, response_1.SuccessResponse)({ message: 'response from Create Cart' });
        });
    }
    GetCart(event) {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, response_1.SuccessResponse)({ message: 'response from Get Cart' });
        });
    }
    UpdateCart(event) {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, response_1.SuccessResponse)({ message: 'response from Update Cart' });
        });
    }
    // Payment Section
    CreatePaymentMethod(event) {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, response_1.SuccessResponse)({ message: 'response from Create Payment Method' });
        });
    }
    GetPaymentMethod(event) {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, response_1.SuccessResponse)({ message: 'response from Get Payment Method' });
        });
    }
    UpdatePaymentMethod(event) {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, response_1.SuccessResponse)({ message: 'response from Update Payment Method' });
        });
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, tsyringe_1.autoInjectable)(),
    __metadata("design:paramtypes", [userRepository_1.UserRepository])
], UserService);
//# sourceMappingURL=userService.js.map