import React, { useState } from "react";
import SearchBar from "./components/SearchBar";

export const GifFinder = () => {
	const [word, setWord] = useState("");

	return (
		<div className="container">
			<div className="d-flex justify-content-center mt-5">
				<h1>Gif Finder</h1>
			</div>

			<div className="row d-flex justify-content-center mt-4">
				<div className="col-md-6">
					<SearchBar setWord={setWord} />
					<p>Buscando... {word}</p>
				</div>
			</div>
		</div>
	);
};
