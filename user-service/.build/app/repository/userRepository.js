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
        return __awaiter(this, arguments, void 0, function* ({ phone, email, password, salt, userType }) {
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
    updateVerificationCode(userId, code, expiry) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const updatedUser = yield prismaClient_1.default.user.update({
                    where: {
                        user_id: userId,
                    },
                    data: {
                        verification_code: code,
                        expiry: expiry,
                    },
                });
                return updatedUser;
            }
            catch (error) {
                console.error('Error updating verification code:', error);
                throw error;
            }
            finally {
                yield prismaClient_1.default.$disconnect();
            }
        });
    }
    updateVerifyUser(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // Check if the user is already verified before attempting to update
                const user = yield prismaClient_1.default.user.findUnique({
                    where: {
                        user_id: userId
                    }
                });
                if (!user) {
                    throw new Error("User not found");
                }
                // If user is not verified, update the verification status
                if (!user.verified) {
                    const updatedUser = yield prismaClient_1.default.user.update({
                        where: {
                            user_id: userId
                        },
                        data: {
                            verified: true
                        }
                    });
                    return updatedUser;
                }
                else {
                    throw new Error("User already verified");
                }
            }
            catch (error) {
                console.error('Error updating verification status:', error);
                throw error;
            }
            finally {
                yield prismaClient_1.default.$disconnect();
            }
        });
    }
    updateUser(userId, firstName, lastName, userType) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const updatedUser = yield prismaClient_1.default.user.update({
                    where: { user_id: userId },
                    data: { first_name: firstName, last_name: lastName, userType: userType }
                });
                if (updatedUser)
                    return updatedUser;
                throw new Error("User not found");
            }
            catch (error) {
                console.error('Error updating user:', error);
                throw error;
            }
            finally {
                yield prismaClient_1.default.$disconnect();
            }
        });
    }
    createProfile(userId_1, _a) {
        return __awaiter(this, arguments, void 0, function* (userId, { firstName, lastName, userType, address: { city, country, addressLine1, addressLine2, post_code }, }) {
            try {
                // Update the user's profile information
                const updatedUser = yield this.updateUser(userId, firstName, lastName, userType);
                // Create the address associated with the user
                const newAddress = yield prismaClient_1.default.address.create({
                    data: {
                        user_id: userId,
                        city: city,
                        country: country,
                        address_line1: addressLine1,
                        address_line2: addressLine2,
                        post_code: post_code,
                    },
                });
                return { user: updatedUser, address: newAddress };
            }
            catch (error) {
                console.error('Error creating profile:', error);
                throw error;
            }
            finally {
                yield prismaClient_1.default.$disconnect();
            }
        });
    }
    getUserProfile(user_id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // Fetch user details
                const user = yield prismaClient_1.default.user.findUnique({
                    where: {
                        user_id,
                    },
                    select: {
                        first_name: true,
                        last_name: true,
                        email: true,
                        phone: true,
                        userType: true,
                        verified: true,
                        address: {
                            select: {
                                id: true,
                                city: true,
                                country: true,
                                address_line1: true,
                                address_line2: true,
                                post_code: true,
                            },
                        },
                    },
                });
                if (!user) {
                    throw new Error("User not found");
                }
                return user;
            }
            catch (error) {
                console.error('Error fetching user profile:', error);
                throw error;
            }
            finally {
                yield prismaClient_1.default.$disconnect();
            }
        });
    }
    editProfile(userId_1, _a) {
        return __awaiter(this, arguments, void 0, function* (userId, { firstName, lastName, userType, address: { city, country, addressLine1, addressLine2, post_code, id }, }) {
            try {
                yield this.updateUser(userId, firstName, lastName, userType);
                // Update the address associated with the user
                const updatedAddress = yield prismaClient_1.default.address.update({
                    where: {
                        id: userId,
                    },
                    data: {
                        id: id,
                        city: city,
                        country: country,
                        address_line1: addressLine1,
                        address_line2: addressLine2,
                        post_code: post_code,
                    },
                });
                return { address: updatedAddress };
            }
            catch (error) {
                console.error('Error creating profile:', error);
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