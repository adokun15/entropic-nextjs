"use client";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const formSchema = z.object({
  email: z.string().email({ message: "Invalid Email Format!" }),
  password: z.string().min(6, { message: "passord is too short" }),
});

export default function Login() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (value) => {
    console.log(value);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          name="email"
          control={form.control}
          render={({ field }) => (
            <>
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="Enter Email" {...field} />
                </FormControl>
              </FormItem>
            </>
          )}
        />
        <FormField
          name="password"
          control={form.control}
          render={({ field }) => (
            <>
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="Enter First Name"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            </>
          )}
        />
        <Button> Click</Button>
      </form>
    </Form>
  );
}
