import * as user from "../user";

describe("user handler", () => {
  it("should create a new user", async () => {
    const req = {
      body: {
        username: "test",
        password: "test",
      },
    };
    const res = {
        json: jest.fn(),
        status: jest.fn(),
        send: jest.fn()
    }
    const newuser = await user.createNewUser(req,res)
    const responseData = res.json.mock.calls[0][0]; // Get the data passed to res.json()

    expect(res.json).toHaveBeenCalledTimes(1);
    expect(responseData).toHaveProperty("token");
  });
  it("shoul1 create a new user", () => {});
  it("shoul2 create a new user", () => {});
});
