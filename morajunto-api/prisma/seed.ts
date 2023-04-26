import { PrismaClient } from '@prisma/client';
import { CitiesSeed } from './seeds/cities.seed';
import { NeighborhoodsSeed } from './seeds/neighborhood';
import { PropertiesSeed } from './seeds/propeties.seed';
import { StatesSeed } from './seeds/states.seed';
import { UserSeed } from './seeds/user.seed';

const prisma = new PrismaClient();

async function main() {
  if (process.env.NODE_ENV === 'local') {
    await UserSeed(prisma);
    await PropertiesSeed(prisma);
  }
  await StatesSeed(prisma);
  await CitiesSeed(prisma);
  await NeighborhoodsSeed(prisma);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
