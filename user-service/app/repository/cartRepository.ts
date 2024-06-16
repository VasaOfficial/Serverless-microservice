import { ShoppingCartModel } from "../models/ShoppingCartModel";
import prisma  from "../util/prismaClient"
import { CartItemModel } from "../models/CartItemsModel";

export class CartRepository {
  constructor() {}

  async findShoppingCart(userId: number): Promise<ShoppingCartModel | null> {
    return prisma.shoppingCart.findFirst({
      where: { user_id: userId },
    });
  }

  async createShoppingCart(userId: number): Promise<ShoppingCartModel> {
    return prisma.shoppingCart.create({
      data: { user_id: userId },
    });
  }

  async findCartItemById(cartId: number): Promise<CartItemModel | null> {
    return prisma.cartItem.findFirst({
      where: { cart_id: cartId },
    });
  }

  async findCartItemByProductId(productId: string): Promise<CartItemModel | null> {
    return prisma.cartItem.findFirst({
      where: { product_id: productId },
    });
  }

  async findCartItems(userId: number): Promise<CartItemModel[]> {
    const cart = await this.findShoppingCart(userId);
    if (!cart) return [];
    
    return prisma.cartItem.findMany({
      where: { cart_id: cart.cart_id },
    });
  }

  async findCartItemsByCartId(cartId: number): Promise<CartItemModel[]> {
    return prisma.cartItem.findMany({
      where: { cart_id: cartId },
    });
  }

  async createCartItem(data: CartItemModel): Promise<CartItemModel> {
    return prisma.cartItem.create({
      data,
    });
  }

  async updateCartItemById(itemId: number, qty: number): Promise<CartItemModel> {
    return prisma.cartItem.update({
      where: { item_id: itemId },
      data: { item_qty: qty },
    });
  }

  async updateCartItemByProductId(productId: string, qty: number): Promise<CartItemModel> {
    const cartItem = await prisma.cartItem.findFirst({
      where: { product_id: productId },
    });

    if (!cartItem) {
      return null;
    }
  
    return prisma.cartItem.update({
      where: { item_id: cartItem.item_id },
      data: { item_qty: qty },
    });
  }

  async deleteCartItem(id: number): Promise<void> {
    await prisma.cartItem.delete({
      where: { item_id: id },
    });
  }
}