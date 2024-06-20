const Shimmer = () => {
	return (
		<>
			<div className="flex flex-wrap">
				{Array(10)
					.fill("")
					.map((e, index) => {
						return (
							<div
								key={index}
								className="bg-gray-300 w-80 p-2 m-5 h-[400px] animate-pulse"
							></div>
						);
					})}
			</div>
		</>
	);
};
export default Shimmer;
