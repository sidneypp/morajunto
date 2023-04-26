import { PrismaClient } from '@prisma/client';

export async function CitiesSeed(prisma: PrismaClient) {
  console.log('Adicionando cidades');

  await prisma.city.createMany({
    data: cities,
    skipDuplicates: true,
  });
}

const cities = [
  {
    name: 'Maceió',
    normalizedName: 'maceio',
    stateAcronym: 'AL',
  },
];
