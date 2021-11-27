import { getGifs } from "../../helpers/getGifs";

describe("Tests in getGifs Fetch", () => {
	test("Should bring 10 items", async () => {
		const gifs = await getGifs("cat");
		expect(gifs.length).toBe(10);
	});

	test("Should bring 0 items", async () => {
		const gifs = await getGifs("");
		expect(gifs.length).toBe(0);
	});
});
