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
  firstname: z
    .string()
    .min(2, { message: "Firstname is too short" })
    .max(50, { message: "Firstname is too long" }),
  lastname: z.string().min(2, { message: "LastName is too short" }).max(50),
  email: z.string().email({ message: "Invalid Email Format!" }),
  password: z.string().min(6, { message: "passord is too short" }),
});

export default function SignUp() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = (value) => {
    console.log(value);
  };

  return (
    <Form {...form}>
      <form className="px-[10vw]" onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          name="firstname"
          control={form.control}
          render={({ field }) => (
            <>
              <FormItem>
                <FormLabel>First Name</FormLabel>
                <FormControl>
                  <Input placeholder="Enter First Name" {...field} />
                </FormControl>
              </FormItem>
            </>
          )}
        />
        <FormField
          name="lastname"
          control={form.control}
          render={({ field }) => (
            <>
              <FormItem>
                <FormLabel>Last Name</FormLabel>
                <FormControl>
                  <Input placeholder="Enter Last Name" {...field} />
                </FormControl>
                <FormMessage>{form.formState.errors.lastname}</FormMessage>
              </FormItem>
            </>
          )}
        />
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
