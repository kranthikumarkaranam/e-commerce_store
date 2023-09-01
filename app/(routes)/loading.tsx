import Container from '@/components/ui/container';
import Skeleton from '@/components/ui/skeleton';

const Loading = () => {
	return (
		<Container>
			<div className='w-full h-full p-8'>
				<Skeleton className='w-full aspect-square rounded-xl md:aspect-[3/1]' />
				<div className='mt-8 mb-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4'>
					<Skeleton className='aspect-square rounded-xl' />
					<Skeleton className='aspect-square rounded-xl' />
					<Skeleton className='aspect-square rounded-xl' />
					<Skeleton className='aspect-square rounded-xl' />
					<Skeleton className='aspect-square rounded-xl' />
					<Skeleton className='aspect-square rounded-xl' />
					<Skeleton className='aspect-square rounded-xl' />
					<Skeleton className='aspect-square rounded-xl' />
					<Skeleton className='aspect-square rounded-xl' />
					<Skeleton className='aspect-square rounded-xl' />
					<Skeleton className='aspect-square rounded-xl' />
					<Skeleton className='aspect-square rounded-xl' />
				</div>
				<Skeleton className='w-full aspect-square rounded-xl md:aspect-[3/1]' />
			</div>
		</Container>
	);
};

export default Loading;
