import { createTRPCRouter, publicProcedure } from "../trpc";

export const schoolRouter = createTRPCRouter({
    getAll: publicProcedure
    .query(async ({ctx}) => {
        return ctx.db.school.findMany();
    })
});