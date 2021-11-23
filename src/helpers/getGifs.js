export const getGifs = async (word) => {
	const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(
		word
	)}&limit=10&api_key=40NwHbLFGBBwnEsdxbDw5ZEvkqJoPlNl`;
	const resp = await fetch(url);
	const { data } = await resp.json(resp);

	const gifs = data.map((img) => {
		return {
			id: img.id,
			title: img.title,
			url: img.images?.downsized_medium.url,
			user: img.user?.display_name,
			avatar: img.user?.avatar_url
		};
	});

	return gifs;
};
