import { PrismaClient } from '@prisma/client';
import { BcryptService } from '../src/bcrypt/bcrypt.service';

const prisma = new PrismaClient();
const bcrypt = new BcryptService();
async function seed() {
  const andrew = await prisma.user.upsert({
    where: { email: 'andrew@example.io' },
    update: {},
    create: {
      email: 'andrew@example.io',
      username: 'Andrew',
      hash: `${await bcrypt.hash('andrewPassword1')}`,
      token: `${await bcrypt.hash('andrew@example.io+Andrew')}`,
    },
  });
  const bob = await prisma.user.upsert({
    where: { email: 'bob@example.io' },
    update: {},
    create: {
      email: 'bob@example.io',
      username: 'Bob',
      hash: `${await bcrypt.hash('bobPassword1')}`,
      token: `${await bcrypt.hash('bob@example.io+Bob')}`,
    },
  });
  const denis = await prisma.user.upsert({
    where: { email: 'denis@example.io' },
    update: {},
    create: {
      email: 'denis@example.io',
      username: 'Denis',
      hash: `${await bcrypt.hash('denisPassword1')}`,
      token: `${await bcrypt.hash('denis@example.io+Denis')}`,
    },
  });
  const john = await prisma.user.upsert({
    where: { email: 'john@example.io' },
    update: {},
    create: {
      email: 'john@example.io',
      username: 'John',
      hash: `${await bcrypt.hash('johnPassword1')}`,
      token: `${await bcrypt.hash('john@example.io+John')}`,
    },
  });
  const kate = await prisma.user.upsert({
    where: { email: 'kate@example.io' },
    update: {},
    create: {
      email: 'kate@example.io',
      username: 'Kate',
      hash: `${await bcrypt.hash('katePassword1')}`,
      token: `${await bcrypt.hash('kate@example.io+Kate')}`,
    },
  });
}

seed()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
