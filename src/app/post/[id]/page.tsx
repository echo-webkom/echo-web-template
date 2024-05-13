import {cache} from "react";
import {notFound} from "next/navigation";
import {Metadata} from "next/types";
import {db} from "@/lib/db/drizzle";
import {sql} from "drizzle-orm";
import {AlertOctagon} from "lucide-react";

/**
 * Type for the props passed to the page.
 *
 * The route is defined as `/post/[id]`, so
 * we have to tell TypeScript that the `id`
 * parameter is a string.
 */
type Props = {
  params: {
    id: string;
  };
};

/**
 * Get the relevant inital data for the page.
 *
 * Gives a 404 page if the id is not a number,
 * or if the post does not exist.
 *
 * This function is wrapped in the `cache` function
 * from React to ensure that the data is only fetched
 * once per page load.
 */
const getData = cache(async ({params}: Props) => {
  const post = await db.query.posts.findFirst({
    where: (p, {eq, and, ne}) => and(eq(p.id, params.id), ne(p.publishedAt, sql`NULL`)),
  });

  if (!post) {
    return notFound();
  }

  return {
    post,
  };
});

/**
 * Generates the metadata for the page.
 *
 * Since this route is dynamic, we need to
 * create a generic function that can generate
 * the metadata for any post. This uses the
 * `getData` function to get the post.
 */
export const generateMetadata = async ({params}: Props): Promise<Metadata> => {
  const {post} = await getData({params});

  return {
    title: post.title,
  };
};

/**
 * The page displayed for the user. Also uses the `getData`
 * function to get the post.
 */
export default async function Post({params}: Props) {
  const {post} = await getData({params});

  return (
    <main className="mx-auto w-full max-w-screen-md py-10">
      {!post.publishedAt && (
        <div className="my-4 flex items-center rounded-lg border-2 border-red-600 bg-red-200 px-2 py-4">
          <AlertOctagon className="mr-2 h-6 w-6 text-red-600" />
          <p className="font-bold text-red-700">This post is not published</p>
        </div>
      )}

      <h1 className="text-4xl font-bold">{post.title}</h1>

      <p className="mt-4 text-gray-700">{post.content}</p>
    </main>
  );
}
