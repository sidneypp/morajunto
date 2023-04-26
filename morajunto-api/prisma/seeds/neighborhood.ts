import { PrismaClient } from '@prisma/client';

export async function NeighborhoodsSeed(prisma: PrismaClient) {
  console.log('Adicionando bairros');

  await prisma.neighborhood.createMany({
    data: neighborhoods,
    skipDuplicates: true,
  });
}

const neighborhoods = [
  {
    cityId: 1,
    name: 'Prado',
    normalizedName: 'prado',
  },
  {
    cityId: 1,
    name: 'Trapiche da Barra',
    normalizedName: 'trapiche-da-barra',
  },
  {
    cityId: 1,
    name: 'Pontal da Barra',
    normalizedName: 'pontal-da-barra',
  },
  {
    cityId: 1,
    name: 'Ponta Grossa',
    normalizedName: 'ponta-grossa',
  },
  {
    cityId: 1,
    name: 'Vergel do Lago',
    normalizedName: 'vergel-do-lago',
  },
  {
    cityId: 1,
    name: 'Levada',
    normalizedName: 'levada',
  },
  {
    cityId: 1,
    name: 'Bom Parto',
    normalizedName: 'bom-parto',
  },
  {
    cityId: 1,
    name: 'Mutange',
    normalizedName: 'mutange',
  },
  {
    cityId: 1,
    name: 'Bebedouro',
    normalizedName: 'bebedouro',
  },
  {
    cityId: 1,
    name: 'Chã da Jaqueira',
    normalizedName: 'cha-da-jaqueira',
  },
  {
    cityId: 1,
    name: 'Chã de Bebedouro',
    normalizedName: 'cha-de-bebedouro',
  },
  {
    cityId: 1,
    name: 'Centro',
    normalizedName: 'centro',
  },
  {
    cityId: 1,
    name: 'Jaraguá',
    normalizedName: 'jaragua',
  },
  {
    cityId: 1,
    name: 'Poço',
    normalizedName: 'poco',
  },
  {
    cityId: 1,
    name: 'Pajuçara',
    normalizedName: 'pajucara',
  },
  {
    cityId: 1,
    name: 'Ponta da Terra',
    normalizedName: 'ponta da terra',
  },
  {
    cityId: 1,
    name: 'Jacarecica',
    normalizedName: 'jacarecica',
  },
  {
    cityId: 1,
    name: 'Ponta Verde',
    normalizedName: 'ponta-verde',
  },
  {
    cityId: 1,
    name: 'Jatiúca',
    normalizedName: 'jatiuca',
  },
  {
    cityId: 1,
    name: 'Mangabeiras',
    normalizedName: 'mangabeiras',
  },
  {
    cityId: 1,
    name: 'Cruz das Almas',
    normalizedName: 'cruz-das-almas',
  },
  {
    cityId: 1,
    name: 'Guaxuma',
    normalizedName: 'guaxuma',
  },
  {
    cityId: 1,
    name: 'Garça Torta',
    normalizedName: 'garca-torta',
  },
  {
    cityId: 1,
    name: 'Riacho Doce',
    normalizedName: 'riacho-doce',
  },
  {
    cityId: 1,
    name: 'Pescaria',
    normalizedName: 'pescaria',
  },
  {
    cityId: 1,
    name: 'Ipioca',
    normalizedName: 'ipioca',
  },
  {
    cityId: 1,
    name: 'Jacintinho',
    normalizedName: 'jacintinho',
  },
  {
    cityId: 1,
    name: 'Feitosa',
    normalizedName: 'feitosa',
  },
  {
    cityId: 1,
    name: 'São Jorge',
    normalizedName: 'sao-jorge',
  },
  {
    cityId: 1,
    name: 'Barro Duro',
    normalizedName: 'barro-duro',
  },
  {
    cityId: 1,
    name: 'Ouro Preto',
    normalizedName: 'ouro-preto',
  },
  {
    cityId: 1,
    name: 'Serraria',
    normalizedName: 'serraria',
  },
  {
    cityId: 1,
    name: 'Antares',
    normalizedName: 'antares',
  },
  {
    cityId: 1,
    name: 'Farol',
    normalizedName: 'farol',
  },
  {
    cityId: 1,
    name: 'Pitanguinha',
    normalizedName: 'pintaguinha',
  },
  {
    cityId: 1,
    name: 'Gruta de Lourdes',
    normalizedName: 'gruta-de-lourdes',
  },
  {
    cityId: 1,
    name: 'Pinheiro',
    normalizedName: 'pinheiro',
  },
  {
    cityId: 1,
    name: 'Tabuleiro do Martins',
    normalizedName: 'tabuleiro-do-martins',
  },
  {
    cityId: 1,
    name: 'Petrópolis',
    normalizedName: 'petropolis',
  },
  {
    cityId: 1,
    name: 'Santo Amaro',
    normalizedName: 'santo-amaro',
  },
  {
    cityId: 1,
    name: 'Santa Amélia',
    normalizedName: 'santa-amelia',
  },
  {
    cityId: 1,
    name: 'Fernão Velho',
    normalizedName: 'fernao-velho',
  },
  {
    cityId: 1,
    name: 'Rio Novo',
    normalizedName: 'rio-novo',
  },
  {
    cityId: 1,
    name: 'Clima Bom',
    normalizedName: 'clima-bom',
  },
  {
    cityId: 1,
    name: 'Cidade Universitária',
    normalizedName: 'cidade-universtaria',
  },
  {
    cityId: 1,
    name: 'Santos Dumont',
    normalizedName: 'santos-dumont',
  },
  {
    cityId: 1,
    name: 'Canaã',
    normalizedName: 'canaa',
  },
  {
    cityId: 1,
    name: 'Jardim Petrópolis',
    normalizedName: 'jardim-petropolis',
  },
  {
    cityId: 1,
    name: 'Santa Lúcia',
    normalizedName: 'santa-lucia',
  },
  {
    cityId: 1,
    name: 'Benedito Bentes',
    normalizedName: 'benedito-bentes',
  },
];
