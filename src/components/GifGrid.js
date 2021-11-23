import React from "react";
import PropTypes from "prop-types";
import { useFetchGifs } from "../hooks/useFetchGifs";
import GifCard from "./GifCard";

const GifGrid = ({ word }) => {
	const { loading, gifs } = useFetchGifs(word);

	return (
		<>
			<div className="d-flex justify-content-center mt-5">
				{word.length > 0 && <h3 className="">Gifs for "{word}"</h3>}
				{loading && <p>Loadian ...</p>}
			</div>

			<div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3 mt-5">
				{gifs.map((gif) => {
					return (
						<div className="d-flex justify-content-center col" key={gif.id}>
							<GifCard gif={gif} />
						</div>
					);
				})}
			</div>
		</>
	);
};

GifGrid.propTypes = {
	word: PropTypes.string.isRequired
};

export default GifGrid;
