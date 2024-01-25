// import { PrismaClient } from "@prisma/client";
// import { PrismaPg } from "@prisma/adapter-pg";
// import { Pool } from "pg";

export const onRequest = async (ctx) => {
  // const pool = new Pool({ connectionString: ctx.env.DATABASE_URL });
  // const adapter = new PrismaPg(pool);
  // const prisma = new PrismaClient({ adapter });

  // const res = await prisma.user.findMany();

  // console.log(res);

  // return new Response(JSON.stringify(res, null, 2));
  return new Response("bonjour");
}
