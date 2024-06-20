import { IMG_CDN_URL, STAR } from "../Constant";

const Restaurantcard = ({ name, cloudinaryImageId,avgRating }) => {
	return (
		<div className="w-80 p-2 m-5 mx-[22px] h-[460px] shadow-lg bg-pink-50 transition ease-in-out hover:-translate-y-1 hover:scale-90 hover:bg-pink-200">
			<img
				src={IMG_CDN_URL + cloudinaryImageId}
				className="w-80 h-72"
				alt="not rendered"
			/>
			<div className="flex flex-col ">
				<h2 className="font-bold text-xl p-3 m-3 capitalize font-serif truncate">
					{name}
				</h2>
				{/* <h3 className="text-gray-700 text-base">{cuisines.join(",")}</h3> */}
				<div className="p-3 m-3 text-xl font-bold flex items-center gap-1">
					<div className="text-black">{avgRating}</div>
          <div className="rounded-full">

					{STAR}
          </div>
				</div>
			</div>
		</div>
	);
};

export default Restaurantcard;
