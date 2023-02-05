import { fetchItems } from "./fetchItems";

describe("fetchItems", () => {
  const users = [
    {
      id: 1,
      email: "test@test.com",
      first_name: "test",
      last_name: "test",
      avatar: "avatar",
    },
  ];
  const fetchSpy = jest.spyOn(window, "fetch");

  it("returns an error when resource was not found", async () => {
    const response = await fetchItems("resource");

    expect(fetchSpy).toBeCalledTimes(0);
    expect(response).toEqual({ success: false });
  });

  it("returns a response properly", async () => {
    fetchSpy.mockImplementationOnce(() =>
      Promise.resolve({
        json: () => Promise.resolve({ data: users }),
      } as Response)
    );

    const response = await fetchItems("users");

    expect(fetchSpy).toBeCalledWith("https://reqres.in/api/users");
    expect(fetchSpy).toBeCalledTimes(1);
    expect(response).toEqual({ resource: users, success: true });
  });

  it("returns an error when resource could not be fetched", async () => {
    fetchSpy.mockImplementationOnce(() => Promise.reject(""));

    const response = await fetchItems("users");

    expect(fetchSpy).toBeCalledWith("https://reqres.in/api/users");
    expect(fetchSpy).toBeCalledTimes(1);
    expect(response).toEqual({ success: false });
  });
});
