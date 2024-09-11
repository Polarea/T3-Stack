import { createTRPCRouter, publicProcedure } from "../trpc";

export const qualificationRouter = createTRPCRouter({
    getAll: publicProcedure
    .query(async ({ctx}) => {
    return ctx.db.qualification.findMany();
    })
});