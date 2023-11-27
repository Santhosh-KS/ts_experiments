import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query"
import { addTodo, fetchTodos } from "./api";
import TodoCard from "./components/TodoCard";
import { useState } from "react";

export default function Demo() {
  const queryClient = useQueryClient();
  const [title, setTitle] = useState("");
  const {data:todos1, isLoading }= useQuery({
    queryFn: () => fetchTodos(),
    queryKey: ["todos"]
  });

  const {mutateAsync:addTodoMutation }= useMutation({
    mutationFn: addTodo,
    onSuccess: () => {
      queryClient.invalidateQueries(["todos"])
    }
  });

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    <div>
      <div>
        <input type="text" 
          onChange={(e)=> setTitle(e.target.value)}
          value={title} 
        />
        <button onClick={async ()=> {
          try {
            await addTodoMutation({title});
            setTitle("");
          }catch(e) {
            console.log(e)
          }
        }}>
          Add Todo
        </button>
      </div>
      { todos1?.map((todo) => {
        return <TodoCard key={todo.id} todo={todo} />
      })}
    </div>
  )
}
