const api_v1_status = "http://localhost:3000/api/v1/status";

test("GET to api/v1/status should return 200", async () => {
  const response = await fetch(api_v1_status);
  expect(response.status).toBe(200);

  const responseBody = await response.json();
  expect(responseBody.update_at).toBeDefined();

  const parsedUpdateAt = new Date(responseBody.update_at).toISOString();
  expect(responseBody.update_at).toEqual(parsedUpdateAt);

  expect(responseBody.dependencies.database.max_connections).toEqual(100);
  expect(responseBody.dependencies.database.version).toEqual("16.0");
  expect(responseBody.dependencies.database.opened_connection).toEqual(1);
});
