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
exports.UserRepository = void 0;
const prismaClient_1 = __importDefault(require("../util/prismaClient"));
class UserRepository {
    constructor() { }
    createAccount(_a) {
        return __awaiter(this, arguments, void 0, function* ({ email, password, salt, phone, userType }) {
            // DB Operations using Prisma
            try {
                const newUser = yield prismaClient_1.default.user.create({
                    data: {
                        email,
                        password,
                        salt,
                        phone,
                        userType,
                    },
                });
                return newUser;
            }
            catch (error) {
                console.error('Error creating user:', error);
                throw error;
            }
            finally {
                yield prismaClient_1.default.$disconnect();
            }
        });
    }
    findAccount(email) {
        return __awaiter(this, void 0, void 0, function* () {
            // DB Operations using Prisma
            try {
                const user = yield prismaClient_1.default.user.findUnique({
                    where: {
                        email,
                    },
                });
                return user;
            }
            catch (error) {
                console.error('Error finding user:', error);
                throw error;
            }
            finally {
                yield prismaClient_1.default.$disconnect();
            }
        });
    }
}
exports.UserRepository = UserRepository;
//# sourceMappingURL=userRepository.js.map