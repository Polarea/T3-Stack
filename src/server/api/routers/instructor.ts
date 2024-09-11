import { z } from "zod";
import { createTRPCRouter, publicProcedure} from "~/server/api/trpc";

export const instructorRouter = createTRPCRouter({
  getAll: publicProcedure
    .query(async ({ctx}) => {
      return (await ctx.db.instructor.findMany({include: {qualifications:true}}));
    }),

  add: publicProcedure
  .input( z.object({ name: z.string() }))
  .mutation(async ({ctx, input}) => {
    return ctx.db.instructor.create({
      data : {
        name: input.name,
      }
    });
  }),

  });

/* export type todosType= { 
  id: number; 
  text: string; 
  completed: boolean 
}
const todos: todosType[] = [];

export const todosRouter = createTRPCRouter({
  getTodos: publicProcedure.query(() => {
    return todos;
  }),
  addTodo: publicProcedure
    .input(z.object({ text: z.string() }))
    .mutation(({ input }) => {
      const newTodo = { id: todos.length + 1, text: input.text, completed: false };
      todos.push(newTodo);
      return newTodo;
    }),
  toggleTodo: publicProcedure
    .input(z.object({ id: z.number() }))
    .mutation(({ input }) => {
      const todo = todos.find(t => t.id === input.id);
      if (todo) {
        todo.completed = !todo.completed;
        return todo;
      }
      throw new Error('Todo not found');
    }),
}); 


export const postRouter = createTRPCRouter({
  hello: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Hello ${input.text}`,
      };
    }),

  create: publicProcedure
    .input(z.object({ name: z.string().min(1) }))
    .mutation(async ({ ctx, input }) => {
      return ctx.db.post.create({
        data: {
          name: input.name,
        },
      });
    }),

  getLatest: publicProcedure.query(async ({ ctx }) => {
    const post = await ctx.db.post.findFirst({
      orderBy: { createdAt: "desc" },
    });

    return post ?? null;
  }),
}); 
*/