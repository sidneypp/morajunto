import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';

export async function UserSeed(prisma: PrismaClient) {
  console.log('Adicionando usuários');

  await prisma.user.create({
    data: {
      name: 'Sidney Oliveira',
      email: 'sidney.oliveira@morajunto.com',
      password: await bcrypt.hash('KPyzstD3u8%C', 10),
    },
  });
}
