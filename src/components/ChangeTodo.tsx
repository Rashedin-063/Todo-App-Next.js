import { todoStatus } from "@/app/actions/todoActions";
import Form from "@/components/Form";
import Button from '@/components/Button';
import { AiOutlineCheckCircle } from "react-icons/ai";
import { TodoType } from "@/types/todoTypes";

const ChangeTodo = ({ todo }: { todo: TodoType }) => {
  return (
    <Form action={todoStatus}>
      <input
        name="inputId"
        value={todo.id}
        className="border-gray-700 border"
        type="hidden"
      />

      <Button
        actionButton
        type="submit"
        text={<AiOutlineCheckCircle />}
      />
    </Form>
  );
};

export default ChangeTodo;
