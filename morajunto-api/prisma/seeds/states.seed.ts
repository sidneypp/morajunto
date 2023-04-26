import { PrismaClient } from '@prisma/client';

export async function StatesSeed(prisma: PrismaClient) {
  console.log('Adicionando estados');

  await prisma.state.createMany({
    data: states,
    skipDuplicates: true,
  });
}

const states = [
  {
    acronym: 'AC',
    name: 'Acre',
    isAvailable: false,
  },
  {
    acronym: 'AL',
    name: 'Alagoas',
    isAvailable: true,
  },
  {
    acronym: 'AM',
    name: 'Amazonas',
    isAvailable: false,
  },
  {
    acronym: 'AP',
    name: 'Amapá',
    isAvailable: false,
  },
  {
    acronym: 'BA',
    name: 'Bahia',
    isAvailable: false,
  },
  {
    acronym: 'CE',
    name: 'Ceará',
    isAvailable: false,
  },
  {
    acronym: 'DF',
    name: 'Distrito Federal',
    isAvailable: false,
  },
  {
    acronym: 'ES',
    name: 'Espírito Santo',
    isAvailable: false,
  },
  {
    acronym: 'GO',
    name: 'Goiás',
    isAvailable: false,
  },
  {
    acronym: 'MA',
    name: 'Maranhão',
    isAvailable: false,
  },
  {
    acronym: 'MG',
    name: 'Minas Gerais',
    isAvailable: false,
  },
  {
    acronym: 'MS',
    name: 'Mato Grosso do Sul',
    isAvailable: false,
  },
  {
    acronym: 'MT',
    name: 'Mato Grosso',
    isAvailable: false,
  },
  {
    acronym: 'PA',
    name: 'Pará',
    isAvailable: false,
  },
  {
    acronym: 'PB',
    name: 'Paraíba',
    isAvailable: false,
  },
  {
    acronym: 'PE',
    name: 'Pernambuco',
    isAvailable: false,
  },
  {
    acronym: 'PI',
    name: 'Piauí',
    isAvailable: false,
  },
  {
    acronym: 'PR',
    name: 'Paraná',
    isAvailable: false,
  },
  {
    acronym: 'RJ',
    name: 'Rio de Janeiro',
    isAvailable: false,
  },
  {
    acronym: 'RN',
    name: 'Rio Grande do Norte',
    isAvailable: false,
  },
  {
    acronym: 'RO',
    name: 'Rondônia',
    isAvailable: false,
  },
  {
    acronym: 'RS',
    name: 'Rio Grande do Sul',
    isAvailable: false,
  },
  {
    acronym: 'SC',
    name: 'Santa Catarina',
    isAvailable: false,
  },
  {
    acronym: 'SE',
    name: 'Sergipe',
    isAvailable: false,
  },
  {
    acronym: 'SP',
    name: 'São Paulo',
    isAvailable: false,
  },
  {
    acronym: 'TO',
    name: 'Tocantins',
    isAvailable: false,
  },
];
