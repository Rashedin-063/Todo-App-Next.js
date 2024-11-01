import { create } from "@/app/actions/todoActions";
import Button from "./Button";
import Form from "./Form";
import Input from "./Input";


const AddTodo = () => {
  return (
    <Form action={create} className="mt-8">
      <div className="flex">
       <Input
          name="input"
          type="text"
          placeholder="Add Todo..."
        />
        <Button type="submit" text="Add" />
      </div>
   </Form>
  );
};
export default AddTodo;
