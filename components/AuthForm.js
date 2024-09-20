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
} from "./ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "./ui/button";

const formSchema = z.object({
  firstname: z
    .string()
    .min(2, { message: "Firstname is too short" })
    .max(50, { message: "Firstname is too long" }),
  lastname: z.string().min(2, { message: "LastName is too short" }).max(50),
  email: z.string().email({ message: "Invalid Email Format!" }),
  password: z.string().min(6, { message: "passord is too short" }),
});

export default function AuthForm() {
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
      <form onSubmit={form.handleSubmit(onSubmit)}>
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
                <FormLabel>First Name</FormLabel>
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
                <FormLabel>First Name</FormLabel>
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

{
  /**
    <form className="*:block leading-9 *:my-4 my-5">
      {children}

      <label className="text-2xl">Email</label>
      <input
        required
        name="email"
        type="email"
        className="bg-blue-200 focus:bg-blue-300 py-2 px-3 caret-blue-800 outline-blue-600 rounded w-full"
        placeholder="Enter email"
      />
      <label className="text-2xl">Password</label>
      <input
        name="password"
        type="password"
        className="bg-blue-200 focus:bg-blue-300 py-2 px-3 caret-blue-800 outline-blue-600 rounded w-full"
        placeholder="Enter Password"
      />
      <button
        className="bg-blue-800 py-1 px-3 text-white rounded-xl hover:bg-blue-400 hover:text-blue-950
          transition-colors duration-500 ease-in-out focus:translate-y-1
          "
      >
        Submit
      </button>
    </form>

* 
 */
}
