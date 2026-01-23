// apps/desktop/src/main/store/migrations/v002-language.ts

import type { Database } from 'better-sqlite3';
import type { Migration } from './index';

export const migration: Migration = {
  version: 2,
  up(db: Database) {
    // Add language column to app_settings table
    db.exec(`
      ALTER TABLE app_settings
      ADD COLUMN language TEXT NOT NULL DEFAULT 'auto'
    `);
  },
};
