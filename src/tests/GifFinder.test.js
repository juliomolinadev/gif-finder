import React from "react";
import { shallow } from "enzyme";
import { GifFinder } from "../GifFinder";

describe("Tests in <GifFinder /> ", () => {
	test("should be displayed correctly", () => {
		const wrapper = shallow(<GifFinder />);
		expect(wrapper).toMatchSnapshot();
	});
});
