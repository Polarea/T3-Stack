
import { createCallerFactory, createTRPCRouter } from "~/server/api/trpc";
import { instructorRouter} from "./routers/instructor";
import { qualificationRouter } from "./routers/qualifications";
import { schoolRouter } from "./routers/school";
import { courseRouter } from "./routers/course";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */

export const appRouter = createTRPCRouter({
  instructors: instructorRouter,
  qualifications: qualificationRouter,
  courses: courseRouter,
  schools: schoolRouter
});

// export type definition of API
export type AppRouter = typeof appRouter;

/**
 * Create a server-side caller for the tRPC API.
 * @example
 * const trpc = createCaller(createContext);
 * const res = await trpc.post.all();
 *       ^? Post[]
 */
export const createCaller = createCallerFactory(appRouter);
