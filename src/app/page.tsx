import {db} from "@/lib/db/drizzle";
import {cn} from "@/lib/utils";

/**
 * The index page.
 *
 * Gets all the posts from the database and displays them in a list.
 */
export default async function Home() {
  const posts = await db.query.posts.findMany();

  return (
    <main className="max-w-screee-md mx-auto w-full py-10 text-center">
      <h1 className="text-4xl font-bold">Posts</h1>

      <ul className="mt-4">
        {posts
          .filter((post) => post.publishedAt)
          .map((post) => (
            <li key={post.id}>
              <a href={`/post/${post.id}`}>
                <p className="text-xl font-medium text-gray-500 hover:text-gray-900">
                  {post.title}
                </p>
              </a>
            </li>
          ))}
      </ul>
    </main>
  );
}
