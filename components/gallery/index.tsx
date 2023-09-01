'use client';

import NextImage from 'next/image';
import { Tab } from '@headlessui/react';

import { Image } from '@/types/index';

import GalleryTab from './gallery-tab';

interface GalleryProps {
	images: Image[];
}

const Gallery: React.FC<GalleryProps> = ({ images = [] }) => {
	return (
		<Tab.Group
			as='div'
			className='flex flex-col-reverse'
		>
			<div className='mx-auto mt-6 hidden w-full max-w-md sm:block lg:max-w-none'>
				<Tab.List className='grid grid-cols-[80px_80px_80px_80px_80px_80px] gap-3'>
					{images.map((image) => (
						<GalleryTab
							key={image.id}
							image={image}
						/>
					))}
				</Tab.List>
			</div>
			<Tab.Panels className='aspect-square  w-full'>
				{images.map((image) => (
					<Tab.Panel key={image.id}>
						<div className='shadow-lg aspect-square relative h-full w-full sm:rounded-lg overflow-hidden'>
							<NextImage
								fill
								src={image.url}
								alt='Image'
								className='object-cover  object-center'
							/>
						</div>
					</Tab.Panel>
				))}
			</Tab.Panels>
		</Tab.Group>
	);
};

export default Gallery;
