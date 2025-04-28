import prisma from "@/lib/prisma";
import Link from "next/link";

export default async function Posts() {
  const posts = await prisma.post.findMany({
    include: {
      author: true,
    },
  });

  return (
    <div className="min-h-screen bg-[#f9f9f9] py-16 px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-5xl font-bold mb-12 text-center text-gray-900 font-[family-name:var(--font-geist-sans)]">
          Superblog
        </h1>

        <div className="space-y-12">
          {posts.map((post) => (
            <Link
              key={post.id}
              href={`/posts/${post.id}`}
              className="block group cursor-pointer"
            >
              <h2 className="text-3xl font-bold text-gray-900 group-hover:text-gray-700 transition-colors font-[family-name:var(--font-geist-sans)]">
                {post.title}
              </h2>
              <p className="mt-2 text-gray-500 text-sm">
                by {post.author.name}
              </p>
              <div className="h-px w-full bg-gray-200 mt-6 group-hover:bg-gray-400 transition-colors"></div>
            </Link>
          ))}
        </div>
        <Link href={`/posts/new`}>
          <button className="w-50 h-10 bg-blue-600 text-white cursor-pointer opacity-70 mt-10 rounded-md hover:opacity-100 transition">
            Create Post
          </button>
        </Link>
      </div>
    </div>
  );
}
