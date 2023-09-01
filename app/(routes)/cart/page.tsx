'use client';

import { useEffect, useState } from 'react';

import Container from '@/components/ui/container';
import useCart from '@/hooks/use-cart';

import Summary from './components/summary';
import CartItem from './components/cart-item';

export const revalidate = 0;

const CartPage = async () => {
	const cart = useCart();
	const [isMounted, setIsMounted] = useState(false);

	useEffect(() => {
		setIsMounted(true);
	}, []);

	if (!isMounted) {
		return null;
	}

	return (
		<Container>
			<div className='px-4 sm:px-6 lg:px-8'>
				<h1 className='text-3xl font-bold text-black'>Shopping Cart</h1>
				<div className='mt-4 lg:grid lg:grid-cols-12 lg:items-start gap-x-12'>
					<div className='lg:col-span-7'>
						{cart.items.length === 0 && (
							<p className='text-neutral-500'>No items added to cart.</p>
						)}
						<ul>
							{cart.items.map((item) => (
								<CartItem
									key={item.id}
									data={item}
								/>
							))}
						</ul>
					</div>
					<Summary />
				</div>
			</div>
		</Container>
	);
};

export default CartPage;
