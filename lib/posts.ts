import { prisma } from './prisma'

// Get all posts with their author
export async function getPosts() {
  return prisma.post.findMany({
    include: { author: true }, // joins the User
    orderBy: { id: 'desc' }
  })
}

// Get single post
export async function getPostById(id: number) {
  return prisma.post.findUnique({
    where: { id },
    include: { author: true }
  })
}

// Create a post
export async function createPost(title: string, content: string, authorId: number) {
  return prisma.post.create({
    data: { title, content, authorId }
  })
}

// Update a post
export async function updatePost(id: number, data: { title?: string, content?: string, published?: boolean }) {
  return prisma.post.update({
    where: { id },
    data
  })
}

// Delete a post
export async function deletePost(id: number) {
  return prisma.post.delete({ where: { id } })
}