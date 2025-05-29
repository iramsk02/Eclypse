import  { Request, Response } from 'express';
import Cart, { ICart } from '../models/Cart';


export const AddToCart = async (req: Request, res: Response) => {
    try {
        const { userId, productId, quantity } = req.body;

        let cartItem = await Cart.findOne({ userId, productId });

        if (cartItem) {
            cartItem.quantity += quantity;
        } else {
            cartItem = new Cart({ userId, productId, quantity });
        }

        await cartItem.save();
        res.status(200).json({ message: 'Item added to cart', cartItem });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to add to cart' });
    }
}


export const getCart=async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;

    const cartItems = await Cart.find({ userId })
      .populate('productId', 'name price images') // Select only necessary fields
      .exec();

    res.status(200).json({ cart: cartItems });
  } catch (error) {
    console.error(' Error fetching cart:', error);
    res.status(500).json({ message: 'Failed to fetch cart' });
  }
}

