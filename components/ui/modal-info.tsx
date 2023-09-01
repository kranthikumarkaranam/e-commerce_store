'use client';

import { ShoppingCart } from 'lucide-react';

import Currency from '@/components/ui/currency';
import Button from '@/components/ui/button';
import { Product } from '@/types/index';
import useCart from '@/hooks/use-cart';

interface ModalInfoProps {
	data: Product;
}

const ModalInfo: React.FC<ModalInfoProps> = ({ data }) => {
	const cart = useCart();

	const onAddToCart = () => {
		cart.addItem(data);
	};

	return (
		<div className='mt-3'>
			<h1 className='text-2xl font-bold text-gray-800'>{data.name}</h1>
			<div className='mt-2 flex items-end justify-between'>
				<p className='text-xl text-gray-700'>
					<Currency value={data?.price} />
				</p>
			</div>
			<hr className='my-2' />
			<div className='flex flex-col gap-y-4'>
				<div className='flex items-center gap-x-4'>
					<h3 className='font-semibold text-black'>Size:</h3>
					<div>{data?.size?.value}</div>
				</div>
				<div className='flex items-center gap-x-4'>
					<h3 className='font-semibold text-black'>Color:</h3>
					<div
						className='h-6 w-6 rounded-full border border-gray-600'
						style={{ backgroundColor: data?.color?.value }}
					/>
				</div>
			</div>
			<div className='mt-6 flex items-center gap-x-3'>
				<Button
					onClick={onAddToCart}
					className='flex items-center gap-x-2'
				>
					Add To Cart
					<ShoppingCart size={20} />
				</Button>
			</div>
		</div>
	);
};

export default ModalInfo;
