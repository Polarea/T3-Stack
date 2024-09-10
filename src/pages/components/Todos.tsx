import type { todosType } from "~/server/api/routers/todos";
interface props{
    todos : todosType[] | undefined
}
export const Todos = ({todos} : props) => {
    return (
        <ul>        
        {todos?.map(t => (
            <li key={t.id}>{t.id}: {t.text}</li>
        ))}
        </ul>
    ) 
}
