import React, { useState } from "react";
import PropTypes from "prop-types";

const SearchBar = ({ setWord }) => {
	const [value, setValue] = useState("");

	const handleInputChange = (e) => {
		setValue(e.target.value);
	};

	const handleSetWord = (e) => {
		e.preventDefault();
		setWord(value);
		setValue("");
	};

	return (
		<form className="d-flex" onSubmit={handleSetWord}>
			<input
				id="searchInput"
				type="text"
				value={value}
				onChange={handleInputChange}
				className="form-control"
			/>

			<button className="btn btn-primary ms-2">Search</button>
		</form>
	);
};

SearchBar.propTypes = {
	setWord: PropTypes.func.isRequired
};

export default SearchBar;
