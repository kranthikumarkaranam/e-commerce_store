import { Billboard } from '@/types/index';
import { cn } from '@/lib/utils';

interface BillboardProps {
	data: Billboard;
}

const Billboard: React.FC<BillboardProps> = ({ data }) => {
	console;
	return (
		<div className='p-4 sm:p-6 lg:p-8 rounded-xl overflow-hidden'>
			<div
				style={{ backgroundImage: `url(${data?.imageUrl})` }}
				className={cn(
					'rounded-xl relative aspect-square md:aspect-[3/1] overflow-hidden bg-cover',
					data.id === '64e636aa48e608f65d8a09c2' && 'md:aspect-[4.3/1]'
				)}
			>
				{/*  Add Billboard Label if needed */}
				{data.id === '64e6401a7721850bcb8e736b' && (
					<div className='h-full w-full flex flex-col justify-center items-center text-center gap-y-8'>
						<div className='font-bold text-3xl sm:text-5xl lg:text-6xl sm:max-w-xl max-w-xs'>
							{data.label}
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default Billboard;
