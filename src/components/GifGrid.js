import React from "react";
import PropTypes from "prop-types";
import { useFetchGifs } from "../hooks/useFetchGifs";

const GifGrid = ({ word }) => {
	const { loading, gifs } = useFetchGifs(word);

	return (
		<>
			<h3>{word}</h3>
			{loading && <p>Loadian ...</p>}

			<div className="row row-cols-1 row-cols-sm-3 g-3">
				{gifs.map((gif) => {
					return (
						<div className="col" key={gif.id}>
							<div className="border rounded p-3">Card: {gif.title}</div>
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
