import database from "infra/database.js";

async function status(request, response) {
  const updateAt = new Date().toISOString();

  const maxConnectionsResult = await database.query("SHOW max_connections;");
  const maxConnectionsValue = maxConnectionsResult.rows[0].max_connections;

  const databaseVersionResult = await database.query("SHOW server_version;");
  const databaseVersionValue = databaseVersionResult.rows[0].server_version;

  const databaseName = process.env.POSTGRES_DB;
  const activeConnectionsResult = await database.query({
    text: "SELECT count(*) FROM pg_stat_activity WHERE datname = $1;",
    values: [databaseName],
  });
  const activeConnectionsValue = activeConnectionsResult.rows[0].count;

  response.status(200).json({
    update_at: updateAt,
    dependencies: {
      database: {
        max_connections: Number(maxConnectionsValue),
        version: databaseVersionValue,
        opened_connection: Number(activeConnectionsValue),
      },
    },
  });
}

export default status;
