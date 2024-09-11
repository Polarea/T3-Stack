import { createTRPCRouter, publicProcedure } from "../trpc";

export const courseRouter = createTRPCRouter({
    getAll: publicProcedure
    .query(async ({ctx}) => {
        return ctx.db.course.findMany();
    })
});