import prisma from "@/lib/prisma";
import { notFound } from "next/navigation";

export default async function PostPage({ params }: { params: { id: string } }) {
	const post = await prisma.post.findUnique({
		where: { id: parseInt(params.id) },
		include: {
			author: true,
		},
	});

	if (!post) {
		notFound();
	}

	return (
		<div className="min-h-screen bg-[#f9f9f9] py-16 px-6">
			<div className="max-w-3xl mx-auto">
				<article className="space-y-8">
					<h1 className="text-4xl font-bold text-gray-900 font-[family-name:var(--font-geist-sans)]">
						{post.title}
					</h1>
					<p className="text-gray-600 text-sm">
						by {post.author.name}
					</p>
					<div className="h-px w-full bg-gray-200"></div>
					<div className="prose prose-lg max-w-none text-gray-800 mt-8">
						{post.content || "No content available."}
					</div>
				</article>
			</div>
		</div>
	);
}
