import {prisma} from "@/lib/db/prisma";
import {cn} from "@/lib/utils";

/**
 * The index page.
 *
 * Gets all the posts from the database and displays them in a list.
 */
export default async function Home() {
  const posts = await prisma.post.findMany();

  return (
    <main className="max-w-screee-md mx-auto w-full py-10 text-center">
      <h1 className="text-4xl font-bold">Posts</h1>

      <ul className="mt-4">
        {posts.map((post) => (
          <li key={post.id}>
            <a href={`/post/${post.id}`}>
              <p
                className={cn("text-xl font-medium text-gray-500 hover:text-gray-900", {
                  "line-through": !post.published,
                })}
              >
                {post.title}
              </p>
            </a>
          </li>
        ))}
      </ul>
    </main>
  );
}
