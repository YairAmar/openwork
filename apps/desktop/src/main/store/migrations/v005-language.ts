// apps/desktop/src/main/store/migrations/v005-language.ts

import type { Database } from 'better-sqlite3';
import type { Migration } from './index';

export const migration: Migration = {
  version: 5,
  up(db: Database) {
    // Check if language column already exists
    const tableInfo = db.prepare('PRAGMA table_info(app_settings)').all() as Array<{ name: string }>;
    const hasLanguageColumn = tableInfo.some(col => col.name === 'language');

    // Only add language column if it doesn't exist
    if (!hasLanguageColumn) {
      db.exec(`
        ALTER TABLE app_settings
        ADD COLUMN language TEXT NOT NULL DEFAULT 'auto'
      `);
    }
  },
};
