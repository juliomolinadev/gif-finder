import { renderHook } from "@testing-library/react-hooks";
import { useFetchGifs } from "../../hooks/useFetchGifs";

describe("Tests in useFetchGifs.test.js custom hook", () => {
	test("Should return the initial state", async () => {
		const { result, waitForNextUpdate } = renderHook(() => useFetchGifs("Dog"));
		const { gifs, loading } = result.current;

		await waitForNextUpdate();

		expect(gifs).toEqual([]);
		expect(loading).toBe(true);
	});

	test("Should return a 10 items array and loading in false", async () => {
		const { result, waitForNextUpdate } = renderHook(() => useFetchGifs("Dog"));
		await waitForNextUpdate();

		const { gifs, loading } = result.current;

		expect(gifs.length).toBe(10);
		expect(loading).toBe(false);
	});
});
