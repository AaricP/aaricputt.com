import { prisma } from './prisma'

export async function getUsers() {
  return prisma.user.findMany({
    include: { posts: true } // includes all posts per user
  })
}

export async function createUser(email: string, name: string) {
  return prisma.user.create({
    data: { email, name }
  })
}