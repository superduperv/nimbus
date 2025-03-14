import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';

export const books = sqliteTable('Books', {
  id: integer('id').primaryKey(),
  name: text('name', { length: 256 }),
});

export const authors = sqliteTable('Authors', {
  id: integer('id').primaryKey(),
  name: text('name', { length: 256 }),
});
