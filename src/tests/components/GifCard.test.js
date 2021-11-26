import React from "react";
import { shallow } from "enzyme";
import "@testing-library/jest-dom";
import GifCard from "../../components/GifCard";

describe("Tests in <GifCard />", () => {
	const gif = {
		url: "https://localhost/any.js",
		title: "a great title",
		user: "julz molina",
		avatar: "https://localhost/img.png"
	};

	let wrapper = shallow(<GifCard gif={gif} />);

	beforeEach(() => {
		wrapper = shallow(<GifCard gif={gif} />);
	});

	test("Component should be displayed correctly", () => {
		expect(wrapper).toMatchSnapshot();
	});

	test("Should have an img whith the url and title in props", () => {
		const img = wrapper.find("img").at(0);
		expect(img.prop("src")).toBe(gif.url);
		expect(img.prop("alt")).toBe(gif.title);
	});

	test("Should have an h5 whith the title in props", () => {
		const title = wrapper.find("h5");
		expect(title.text().trim()).toBe(gif.title);
	});

	test("Should have an img whith the avatar and user in props", () => {
		const img = wrapper.find("img").at(1);
		expect(img.prop("src")).toBe(gif.avatar);
		expect(img.prop("alt")).toBe(gif.user);
	});

	test("Should have a link whith the url in props", () => {
		const link = wrapper.find("a");
		expect(link.prop("href")).toBe(gif.url);
	});

	test("It shouldn't have 2 img if the props doesn't have a user", () => {
		const gifWithoutUser = {
			url: "https://localhost/any.js",
			title: "a great title"
		};

		const wrapperWithoutUser = shallow(<GifCard gif={gifWithoutUser} />);
		const img = wrapperWithoutUser.find("img").at(1).exists();

		expect(wrapperWithoutUser).toMatchSnapshot();
		expect(img).toBe(false);
	});
});
