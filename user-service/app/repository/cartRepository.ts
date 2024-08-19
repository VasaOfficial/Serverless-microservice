import prisma from 'app/util/prismaClient'
import { CartModel } from 'app/models/CartModel'

export class CartRepository {
  constructor() {}

  async addToCart({ firebaseUid, destinationId, quantity }: CartModel) {
    try {
      // Check if the user exists
      const user = await prisma.user.findUnique({
        where: { firebaseUid: firebaseUid },
      })

      if (!user) {
        throw new Error('User does not exist')
      }

      // Check if the destination exists
      const destinationExists = await prisma.destination.findUnique({
        where: { id: destinationId },
      })

      if (!destinationExists) {
        throw new Error('Invalid destination ID')
      }

      // Check if the cart item already exists
      const existingCartItem = await prisma.cartItem.findFirst({
        where: {
          userId: firebaseUid,
          destinationId: destinationId,
        },
      })

      if (existingCartItem) {
        // Update the quantity if the item already exists
        const updatedCartItem = await prisma.cartItem.update({
          where: {
            id: existingCartItem.id,
          },
          data: {
            quantity: existingCartItem.quantity + quantity,
          },
          include: {
            destination: true,
          },
        })

        return updatedCartItem
      }

      // Add new item to the cart
      const cartItem = await prisma.cartItem.create({
        data: {
          userId: firebaseUid,
          destinationId: destinationId,
          quantity: quantity,
        },
        include: {
          destination: true,
        },
      })

      return cartItem
    } catch (error) {
      throw new Error(`Failed to add item to cart: ${error.message}`)
    } finally {
      await prisma.$disconnect()
    }
  }

  async getCartItems({ firebaseUid }: CartModel) {
    try {
      // Check if the user exists
      const user = await prisma.user.findUnique({
        where: { firebaseUid: firebaseUid },
        include: {
          CartItem: {
            include: {
              destination: true,
            },
          },
        },
      })

      if (!user) {
        throw new Error('User does not exist')
      }

      // Check if the cart is empty
      if (user.CartItem.length === 0) {
        return { message: 'Cart is empty' }
      }

      // Return cart items directly
      return user.CartItem.map((item) => ({
        id: item.id,
        destination: item.destination,
        quantity: item.quantity,
        createdAt: item.createdAt,
      }))
    } catch (error) {
      throw new Error(`Failed to retrieve cart items: ${error.message}`)
    } finally {
      await prisma.$disconnect()
    }
  }

  async updateCart({ firebaseUid, destinationId, quantity }: CartModel) {
    try {
      // Check if the cart item exists
      const existingCartItem = await prisma.cartItem.findFirst({
        where: {
          userId: firebaseUid,
          destinationId: destinationId,
        },
      })

      if (!existingCartItem) {
        throw new Error('Cart item does not exist')
      }

      // Update the quantity of the cart item
      const updatedCartItem = await prisma.cartItem.update({
        where: {
          id: existingCartItem.id,
        },
        data: {
          quantity: quantity,
        },
      })

      return updatedCartItem
    } catch (error) {
      throw new Error(`Failed to update cart item: ${error.message}`)
    } finally {
      await prisma.$disconnect()
    }
  }

  async removeFromCart({ firebaseUid, destinationId }: CartModel) {
    try {
      // Check if the cart item exists
      const existingCartItem = await prisma.cartItem.findFirst({
        where: {
          userId: firebaseUid,
          destinationId: destinationId,
        },
      })

      if (!existingCartItem) {
        throw new Error('Cart item does not exist')
      }

      // Delete the cart item
      await prisma.cartItem.delete({
        where: {
          id: existingCartItem.id,
        },
      })

      return { message: 'Item removed from cart successfully' }
    } catch (error) {
      throw new Error(`Failed to remove item from cart: ${error.message}`)
    } finally {
      await prisma.$disconnect()
    }
  }
}
