import React from "react";
import PropTypes from "prop-types";

const GifGrid = ({ word }) => {
	return (
		<div className="row row-cols-1 row-cols-sm-3 g-3">
			<div className="col">
				<div className="border rounded p-3">Card: {word}</div>
			</div>
			<div className="col">
				<div className="border rounded p-3">Card: {word}</div>
			</div>
			<div className="col">
				<div className="border rounded p-3">Card: {word}</div>
			</div>
		</div>
	);
};

GifGrid.propTypes = {
	word: PropTypes.string.isRequired
};

export default GifGrid;
