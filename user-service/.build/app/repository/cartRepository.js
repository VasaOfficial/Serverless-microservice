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
exports.CartRepository = void 0;
const prismaClient_1 = __importDefault(require("../util/prismaClient"));
class CartRepository {
    constructor() { }
    findShoppingCart(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            return prismaClient_1.default.shoppingCart.findFirst({
                where: { user_id: userId },
            });
        });
    }
    createShoppingCart(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            return prismaClient_1.default.shoppingCart.create({
                data: { user_id: userId },
            });
        });
    }
    findCartItemById(cartId) {
        return __awaiter(this, void 0, void 0, function* () {
            return prismaClient_1.default.cartItem.findFirst({
                where: { cart_id: cartId },
            });
        });
    }
    findCartItemByProductId(productId) {
        return __awaiter(this, void 0, void 0, function* () {
            return prismaClient_1.default.cartItem.findFirst({
                where: { product_id: productId },
            });
        });
    }
    findCartItems(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            const cart = yield this.findShoppingCart(userId);
            if (!cart)
                return [];
            return prismaClient_1.default.cartItem.findMany({
                where: { cart_id: cart.cart_id },
            });
        });
    }
    findCartItemsByCartId(cartId) {
        return __awaiter(this, void 0, void 0, function* () {
            return prismaClient_1.default.cartItem.findMany({
                where: { cart_id: cartId },
            });
        });
    }
    createCartItem(data) {
        return __awaiter(this, void 0, void 0, function* () {
            return prismaClient_1.default.cartItem.create({
                data,
            });
        });
    }
    updateCartItemById(itemId, qty) {
        return __awaiter(this, void 0, void 0, function* () {
            return prismaClient_1.default.cartItem.update({
                where: { item_id: itemId },
                data: { item_qty: qty },
            });
        });
    }
    updateCartItemByProductId(productId, qty) {
        return __awaiter(this, void 0, void 0, function* () {
            const cartItem = yield prismaClient_1.default.cartItem.findFirst({
                where: { product_id: productId },
            });
            if (!cartItem) {
                return null;
            }
            return prismaClient_1.default.cartItem.update({
                where: { item_id: cartItem.item_id },
                data: { item_qty: qty },
            });
        });
    }
    deleteCartItem(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield prismaClient_1.default.cartItem.delete({
                where: { item_id: id },
            });
        });
    }
}
exports.CartRepository = CartRepository;
//# sourceMappingURL=cartRepository.js.map