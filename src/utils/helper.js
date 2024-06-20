export function restrauntfilter(searchInput, restraunt) {
	const filterData = restraunt.filter((restraunts) =>
		restraunts.info.name.toLowerCase().includes(searchInput.toLowerCase())
	);
	return filterData;
}