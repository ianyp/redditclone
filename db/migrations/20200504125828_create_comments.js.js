exports.up = function (knex) {
  console.log("creating comments tables");
  return knex.schema.createTable("comments", (commentsTable) => {
    commentsTable.increments("article_id").primary();
    commentsTable.text("author").references("users.username.");
    commentsTable.integer("votes").defaultTo(0);
    commentsTable
      .timestamp("created_at", { precision: 6 })
      .defaultTo(knex.fn.now(6));
    commentsTable.text("body");
  });
};

exports.down = function (knex) {
  console.log("removing table comments");
  return knex.dropTable.schema("comments");
};
