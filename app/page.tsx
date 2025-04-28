import prisma from "@/lib/prisma";

export default async function Home() {
  const users = await prisma.user.findMany();

  return (
    <div className="min-h-screen bg-gray-100 py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold text-center mb-12 font-sans text-gray-900">
          Superblog
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {users.map((user) => (
            <div
              key={user.id}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300"
            >
              <h2 className="text-2xl font-semibold text-gray-800">
                {user.name}
              </h2>
              <p className="mt-2 text-gray-500 text-sm">
                New member of Superblog
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
