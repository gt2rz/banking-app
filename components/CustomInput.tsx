import {
  FormControl,
  FormField,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Form } from "react-hook-form";

interface CustomInputProps {
  form: typeof Form;
  name: string;
  label: string;
  placeholder: string;
  type: "text" | "password" | "email" | "number" | "tel" | "date"; // Add more types here
}

const CustomInput = ({
  form,
  name,
  label,
  placeholder,
  type,
}: CustomInputProps) => {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }: { field: any }) => (
        <div className="form-item">
          <FormLabel className="form-label">{label}</FormLabel>
          <div className="flex w-full flex-col">
            <FormControl>
              <Input
                type={type}
                placeholder={placeholder}
                className="input-class"
                {...field}
              />
            </FormControl>
            <FormMessage className="form-message mt-2" />
          </div>
        </div>
      )}
    />
  );
};

export default CustomInput;
