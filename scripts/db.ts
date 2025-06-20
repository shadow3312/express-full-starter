#!/usr/bin/env ts-node

import { execSync } from 'child_process';

const [command, ...args] = process.argv.slice(2);

function run(cmd: string) {
  execSync(cmd, { stdio: 'inherit' });
}

switch (command) {
  case 'migrate':
    if (args.length === 0) {
      console.error('❌ Please provide a migration name.');
      process.exit(1);
    }
    const migrationName = args.join('-');
    console.log(`🚀 Running: prisma migrate dev --name ${migrationName}`);
    run(`npx prisma migrate dev --name ${migrationName}`);
    break;

  case 'push':
    console.log('🚀 Running: prisma db push');
    run('npx prisma db push');
    break;

  case 'studio':
    console.log('🚀 Running: prisma studio');
    run('npx prisma studio');
    break;

  case 'reset':
    console.log('🚨 Resetting database...');
    run('npx prisma migrate reset');
    break;

  default:
    console.error(`❌ Unknown command: ${command}`);
    console.log(`Usage:
  pnpm db:migrate <name>   Create and apply a migration
  pnpm db:push             Push schema to database
  pnpm db:studio           Open Prisma Studio
  pnpm db:reset            Reset database`);
    process.exit(1);
}
