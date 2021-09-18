export default function Technology({ details }) {
	return (
		<li className='flex justify-center items-center'>
			<img
				src={details.image}
				alt={details.name}
				className=' w-10 hover:scale-125 transition duration-500 hover:animate-pulse rounded-lg'
			/>
		</li>
	);
}
