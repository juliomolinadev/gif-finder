import React from "react";
import SearchBar from "../../components/SearchBar";
import { shallow } from "enzyme";
import "@testing-library/jest-dom";

describe("Tests in <SearchBar />", () => {
	const setWord = jest.fn();
	let wrapper;

	beforeEach(() => {
		jest.clearAllMocks();
		wrapper = shallow(<SearchBar setWord={setWord} />);
	});

	test("Should be displayed correctly", () => {
		expect(wrapper).toMatchSnapshot();
	});

	test("Text input should change", () => {
		const input = wrapper.find("input");
		const value = "hola";

		input.simulate("change", { target: { value } });
		expect(wrapper.find("input").prop("value")).toBe(value);
	});

	test("Should not post the form", () => {
		wrapper.find("form").simulate("submit", { preventDefault() {} });
		expect(setWord).not.toHaveBeenCalled();
	});

	test("Should to call setWord and clear the input", () => {
		const value = "hola";

		wrapper.find("input").simulate("change", { target: { value } });
		wrapper.find("form").simulate("submit", { preventDefault() {} });

		expect(setWord).toHaveBeenCalled();
		expect(setWord).toHaveBeenCalledTimes(1);
		expect(setWord).toHaveBeenCalledWith(expect.any(String));
		expect(wrapper.find("input").prop("value")).toBe("");
	});
});
