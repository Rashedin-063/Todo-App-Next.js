"use client";

import { edit } from "@/app/actions/todoActions";
import Form from '@/components/Form';
import Button from '@/components/Button';
import Input from '@/components/Input';
import { BiEdit } from "react-icons/bi";
import { useState } from "react";

import { TodoType } from "@/types/todoTypes";

const EditTodo = ({ todo }: { todo: TodoType }) => {
  const [editTodo, setEditTodo] = useState(false);

  const handleEdit = () => {
    setEditTodo(!editTodo);
  };

  const handleSubmit = () => {
    setEditTodo(false);
  };
  return (
    <div className="flex gap-5 items-center">
      <Button
        onClick={handleEdit}
        text={<BiEdit />}
        actionButton
      />

      {editTodo ? (
        <Form action={edit} onSubmit={handleSubmit}>
          <Input
            name="inputId"
            value={todo.id}
            type="hidden"
          />
          <div className="flex justify-center">
            <Input
              type="text"
              name="newTitle"
              placeholder="Edit Todo..."
            />

            <Button type="submit" text="Save" />
          </div>
        </Form>
      ) : null}
    </div>
  );
};

export default EditTodo;
