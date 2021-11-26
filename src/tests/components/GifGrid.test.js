import React from "react";
import { shallow } from "enzyme";
import "@testing-library/jest-dom";

import GifGrid from "../../components/GifGrid";
import { useFetchGifs } from "../../hooks/useFetchGifs";
jest.mock("../../hooks/useFetchGifs");

describe("Tests in <GifGrid />", () => {
	const word = "hi";

	test("Component should be displayed correctly", () => {
		useFetchGifs.mockReturnValue({
			loading: true,
			gifs: []
		});

		const wrapper = shallow(<GifGrid word={word} />);
		expect(wrapper).toMatchSnapshot();
	});

	test("It should show gifs when useFetchGifs is loaded", () => {
		const gifs = [
			{
				id: "123",
				url: "https://localhost/any/gif.gif.",
				title: "A cool gif",
				user: "userName",
				avatar: "https://localhost/any/avatar.png."
			},
			{
				id: "456",
				url: "https://localhost/any/gif.gif.",
				title: "A cool gif",
				user: "userName",
				avatar: "https://localhost/any/avatar.png."
			}
		];

		useFetchGifs.mockReturnValue({
			loading: false,
			gifs: gifs
		});

		const wrapper = shallow(<GifGrid word={word} />);
		expect(wrapper).toMatchSnapshot();
		expect(wrapper.find("p").exists()).toBe(false);
		expect(wrapper.find("GifCard").length).toBe(gifs.length);
	});
});
