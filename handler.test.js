const { hello } = require('./handler'); // Adjust the path to the file you're testing

describe('hello function', () => {
  it('should return a successful response with the correct message', async () => {
    // Mock the event input (if needed)
    const mockEvent = {};

    // Call the function
    const result = await hello(mockEvent);

    // Assertions
    expect(result.statusCode).toBe(200); // Ensure status code is 200
    expect(result.body).toBe(JSON.stringify({
      message: "Go Serverless v4! Your function executed successfully!"
    })); // Ensure body has the correct message
  });
});
