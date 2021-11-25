import React from "react";
import { shallow } from "enzyme";
import "@testing-library/jest-dom";
import GifCard from "../../components/GifCard";

describe("Tests in <GifCard />", () => {
	const gifWithUser = {
		url: "https://localhost/any.js",
		title: "a great title",
		user: "julz molina",
		avatar: "https://localhost/img.png"
	};

	const gifWithoutUser = {
		url: "https://localhost/any.js",
		title: "a great title"
	};

	let wrapperWithUser = shallow(<GifCard gif={gifWithUser} />);
	let wrapperWithoutUser = shallow(<GifCard gif={gifWithoutUser} />);

	beforeEach(() => {
		wrapperWithUser = shallow(<GifCard gif={gifWithUser} />);
		wrapperWithoutUser = shallow(<GifCard gif={gifWithoutUser} />);
	});

	test("Component should be displayed correctly", () => {
		expect(wrapperWithUser).toMatchSnapshot();
		expect(wrapperWithoutUser).toMatchSnapshot();
	});

	test("Should have an img whith the url and title in props", () => {
		const img = wrapperWithUser.find("img").at(0);
		expect(img.prop("src")).toBe(gifWithUser.url);
		expect(img.prop("alt")).toBe(gifWithUser.title);
	});

	test("Should have an h5 whith the title in props", () => {
		const title = wrapperWithUser.find("h5");
		expect(title.text().trim()).toBe(gifWithUser.title);
	});

	test("Should have an img whith the avatar and user in props", () => {
		const img = wrapperWithUser.find("img").at(1);
		expect(img.prop("src")).toBe(gifWithUser.avatar);
		expect(img.prop("alt")).toBe(gifWithUser.user);
	});

	test("It shouldn't have 2 img if the props doesn't have a user", () => {
		const img = wrapperWithoutUser.find("img").at(1).exists();
		expect(img).toBe(false);
	});

	test("Should have a link whith the url in props", () => {
		const link = wrapperWithUser.find("a");
		expect(link.prop("href")).toBe(gifWithUser.url);
	});
});
