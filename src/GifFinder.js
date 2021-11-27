import React, { useState } from "react";
import GifGrid from "./components/GifGrid";
import SearchBar from "./components/SearchBar";

export const GifFinder = () => {
	const [word, setWord] = useState("");

	return (
		<div className="container text-secondary">
			<div className="d-flex justify-content-center mt-5">
				<h1>Gif Finder</h1>
			</div>

			<div className="row d-flex justify-content-center mt-4">
				<div className="col-md-6">
					<SearchBar setWord={setWord} />
				</div>
			</div>

			<div className="mt-4 animate__animated animate__fadeIn">
				<GifGrid word={word} />
			</div>
		</div>
	);
};
