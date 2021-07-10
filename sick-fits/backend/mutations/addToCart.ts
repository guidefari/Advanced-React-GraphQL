/*eslint-disable*/

import { KeystoneContext } from '@keystone-next/types';
import { CartItemCreateInput } from '../.keystone/schema-types';
import { Session } from '../types';

export default async function addToCart(root: any,{ productId }: { productId: string },context: KeystoneContext): Promise<CartItemCreateInput> {
  console.log('adding to cart');
  // 1. query the current user see if they're signed in
  const sesh = context.session as Session;
  if (!sesh.itemId) {
    throw new Error('You must be logged in to do this 🔐');
  }
  // 2. query the current user's cart
  const allCartItems = await context.lists.CartItem.findMany({
    where: { user: { id: sesh.itemId }, product: { id: productId } },
    resolveFields: 'id, quantity'
  });
  // 3. see if the current item is in their cart
  const [existingCartItem] = allCartItems;
  // 4. if it is, increment by 1
  if (existingCartItem) {
    console.log(`there's already ${existingCartItem.quantity}, increment by 1`);
    return context.lists.CartItem.updateOne({
      id: existingCartItem.id,
      data: { quantity: existingCartItem.quantity + 1 },
    });
  }
  // 5. if it isnt, create a new cart item
  return context.lists.CartItem.createOne({
    data: { 
        product: { connect: {id: productId} }, 
        user: { connect: {id: sesh.itemId} }
    },
  });
}
