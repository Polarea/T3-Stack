import { createTRPCRouter, publicProcedure } from "../trpc";

export const courseRouter = createTRPCRouter({
    getAll: publicProcedure
    .query(async ({ctx}) => {
        const courses = (await ctx.db.course.findMany({include: {schools: true}}));
        return courses
    })
});