import { Metadata } from 'next';
import getBillboard from '@/actions/get-billboard';
import Billboard from '@/components/billboard';
import Container from '@/components/ui/container';

export const metadata: Metadata = {
	title: 'Ecommerce | Cart',
};

export default async function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const billboard = await getBillboard('64e636aa48e608f65d8a09c2');

	return (
		<>
			<Container>
				<Billboard data={billboard} />
				{children}
			</Container>
		</>
	);
}
