import { prisma } from "@/lib/db/prisma";
import { notFound } from "next/navigation";
import { Metadata } from "next/types";
import { AlertOctagon } from "lucide-react";

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
 */
const getData = async ({ params }: Props) => {
  const parsedId = Number(params.id);

  if (isNaN(parsedId)) {
    return notFound();
  }

  const post = await prisma.post.findUnique({
    where: {
      id: parsedId,
    },
  });

  if (!post) {
    return notFound();
  }

  return {
    post,
  };
};

/**
 * Generates the metadata for the page.
 *
 * Since this route is dynamic, we need to
 * create a generic function that can generate
 * the metadata for any post. This uses the
 * `getData` function to get the post.
 */
export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const { post } = await getData({ params });

  return {
    title: post.title,
  };
};

/**
 * The page displayed for the user. Also uses the `getData`
 * function to get the post.
 */
export default async function Post({ params }: Props) {
  const { post } = await getData({ params });

  return (
    <main className="py-10 max-w-screen-md mx-auto w-full">
      {!post.published && (
        <div className="rounded-lg my-4 px-2 py-4 border-2 border-red-600 bg-red-200 flex items-center">
          <AlertOctagon className="w-6 h-6 mr-2 text-red-600" />
          <p className="text-red-700 font-bold">This post is not published</p>
        </div>
      )}

      <h1 className="text-4xl font-bold">{post.title}</h1>

      <p className="mt-4 text-gray-700">{post.content}</p>
    </main>
  );
}
