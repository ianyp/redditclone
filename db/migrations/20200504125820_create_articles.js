exports.up = function (knex) {
  console.log("creating articles tables");
  return knex.schema.createTable("articles", (articlesTable) => {
    articlesTable.increments("article_id").primary();
    articlesTable.text("title").notNullable();
    articlesTable.text("body").notNullable();
    articlesTable.integer("votes").defaultTo(0).notNullable();
    articlesTable.text("slug").references("topics.slug");
    articlesTable.text("author").references("users.username.");
    articlesTable
      .timestamp("created_at", { precision: 6 })
      .defaultTo(knex.fn.now(6));
  });
};

exports.down = function (knex) {
  console.log("dropping articles table");
  return knex.schema.dropTable('articles"');
};
