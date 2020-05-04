exports.up = function (knex) {
  console.log("creating topic table");
  return knex.schema.createTable("topics", (topicsTable) => {
    topicsTable.text("slug").primary();
    topicsTable.text("description").notNullable();
  });
};

exports.down = function (knex) {
  console.log("removing topics table");
  return knex.schema.dropTable("topics");
};
