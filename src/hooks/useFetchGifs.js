import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (word) => {
	const [state, setstate] = useState({ loading: true, gifs: [] });

	useEffect(() => {
		getGifs(word).then((gifs) => {
			setstate({ loading: false, gifs });
		});
	}, [word]);

	return state;
};
