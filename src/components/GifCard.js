import React from "react";
import PropTypes from "prop-types";

const GifCard = ({ gif }) => {
	const { url, title, user, avatar } = gif;

	return (
		<div className="card" style={{ width: "18rem" }}>
			<img src={url} className="card-img-top" alt={title} />
			<div className="card-body">
				<h5 className="card-title">{title}</h5>

				{user && (
					<div className="d-flex mt-3">
						<img
							className="border border-3 rounded-circle"
							src={avatar}
							alt={user}
							style={{ maxHeight: 30 }}
						/>
						<span className="card-text align-self-center ms-2">{user} </span>
					</div>
				)}

				<button className="btn btn-primary mt-4">Go somewhere</button>
			</div>
		</div>
	);
};

GifCard.propTypes = {
	gif: PropTypes.object.isRequired
};

export default GifCard;
