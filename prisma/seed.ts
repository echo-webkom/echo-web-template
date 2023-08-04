import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.post.createMany({
    data: [
      {
        title: "My first post",
        content: "Hello world! This is my first post.",
        published: true,
      },
      {
        title: "Lorem ipsum",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl quis aliquam dapibus, nunc nunc aliquet nunc, vitae aliquam nisl nunc vitae nisl.",
        published: true,
      },
      {
        title: "Foo bar",
        content:
          "Foo bar baz qux quux corge grault garply waldo fred plugh xyzzy thud.",
        published: false,
      },
    ],
  });
}

console.log("🌱 Seeding database...");

main()
  .then(async () => {
    await prisma.$disconnect();
    console.log("✅ Seeding database complete.");
  })
  .catch(async (e) => {
    await prisma.$disconnect();
    console.log("🚨 Seeding database failed.", e);
    process.exit(1);
  });
