"use client";

import { deleteTodo } from "@/app/actions/todoActions";
import Form from '@/components/Form';
import Button from '@/components/Button';

import { BsFillTrashFill } from "react-icons/bs";
import { TodoType } from '@/types/todoTypes';

const DeleteTodo = ({ todo }: { todo: TodoType }) => {
  return (
    <Form action={deleteTodo}>
      <input type="hidden" name="inputId" value={todo.id} />
      <Button
        actionButton
        text={<BsFillTrashFill />}
        type="submit"
      />
    </Form>
  );
};

export default DeleteTodo;
