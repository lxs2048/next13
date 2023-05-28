import { prisma } from "@/db"
type TodoAddProps = {
    title:string
    complete:boolean
}
const getTodos = async () => {
    return prisma.todo.findMany()
}
const updateTodos = async (id:string,complete:boolean) => {
    return prisma.todo.update({where:{id},data:{complete}})
}
const addTodo = async (data:TodoAddProps) => {
    return prisma.todo.create({data})
}
export {
    getTodos,
    updateTodos,
    addTodo
}