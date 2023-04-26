import { faker } from '@faker-js/faker/locale/pt_BR';
import { PrismaClient } from '@prisma/client';

export async function PropertiesSeed(prisma: PrismaClient) {
  console.log('Adicionando propriedades');

  for (let index = 0; index < 10; index++) {
    const address = faker.address;

    const statesIds = await prisma.state.findMany({
      select: {
        id: true,
      },
      where: {
        isAvailable: true,
      },
    });
    const stateId = faker.helpers.arrayElement(
      statesIds.flatMap(({ id }) => id),
    );

    const citiesIds = await prisma.city.findMany({
      select: {
        id: true,
      },
      where: {
        state: {
          id: stateId,
        },
      },
    });
    const cityId = faker.helpers.arrayElement(
      citiesIds.flatMap(({ id }) => id),
    );

    const neighborhoodIds = await prisma.neighborhood.findMany({
      select: {
        id: true,
      },
      where: {
        city: {
          id: cityId,
        },
      },
    });
    const neighborhoodId = faker.helpers.arrayElement(
      neighborhoodIds.flatMap(({ id }) => id),
    );

    const imageKey = faker.datatype.uuid();

    await prisma.property.create({
      data: {
        kind: faker.helpers.arrayElement(['apartment', 'studio', 'house']),
        area: faker.datatype.number({ min: 1 }),
        user: {
          connect: {
            id: 1,
          },
        },
        address: {
          create: {
            zipcode: address.zipCode('########'),
            stateId: stateId,
            cityId: cityId,
            neighborhoodId: neighborhoodId,
            street: address.street(),
            number: parseInt(address.buildingNumber()),
          },
        },
        photos: {
          createMany: {
            data: Array(3)
              .fill(0)
              .map(() => ({
                key: imageKey,
                url: faker.image.imageUrl(),
                filename: `${imageKey}.jpg`,
                size: faker.datatype.number({ min: 1 }),
                type: 'image/jpeg',
              })),
          },
        },
        features: {
          create: {
            isUnfurnished: faker.datatype.boolean(),
            hasParking: faker.datatype.boolean(),
            hasGym: faker.datatype.boolean(),
            hasPool: faker.datatype.boolean(),
            hasAccessibility: faker.datatype.boolean(),
            hasAirConditioning: faker.datatype.boolean(),
            hasTv: faker.datatype.boolean(),
            hasCentralHeating: faker.datatype.boolean(),
            hasElevator: faker.datatype.boolean(),
            hasOutdoorArea: faker.datatype.boolean(),
            hasBalcony: faker.datatype.boolean(),
            hasWifi: faker.datatype.boolean(),
          },
        },
      },
    });
  }
}
