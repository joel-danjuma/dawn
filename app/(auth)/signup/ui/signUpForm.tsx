"use client";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { RegisterSchema } from "@/schemas";
import FormError from "../../ui/form-error";
import { signup } from "../../../actions/auth/action";
// import { Input } from "@/components/ui/input";
import { Input } from "@/components/ui/gradientInput";
import FormSuccess from "../../ui/form-success";
import { Button } from "@/components/ui/button";
import { startTransition, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormField,
  FormControl,
  FormItem,
  FormMessage,
} from "@/components/ui/form";

const SignUpForm = () => {
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");

  const form = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof RegisterSchema>) => {
    // client-side-validation
    setError("");
    setSuccess("");
    startTransition(() => {
      signup(values).then((data) => {
        if (data) {
          setError(data.error);
          setSuccess(data.success);
        } else {
          return;
        }
      });
    });
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="grid gap-4 min-w-[320px] min-h-[200px]"
      >
        <div className="grid gap-2">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl className="w-full">
                  <Input {...field} name="name" placeholder="Full Name" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="grid gap-2">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl className="w-full">
                  <Input
                    {...field}
                    name="email"
                    type="email"
                    placeholder="m@example.com"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="grid gap-2">
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem className="w-full ">
                <FormControl className="w-full">
                  <Input
                    {...field}
                    name="password"
                    type={"password"}
                    placeholder={"8+ Characters"}
                  />
                  {/* <div className="w-full flex items-end">
                   
                    <Button
                      className="rounded-none border-l-0 border-r-0 border-t-0 border-b-2 "
                      variant="outline"
                      type="button"
                      onClick={toggleVisibility}
                    >
                      {isVisible ? <EyeSlashFilledIcon /> : <EyeFilledIcon />}
                    </Button>
                  </div> */}
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormError message={error} />
        <FormSuccess message={success} />

        <Button type="submit" className="w-full">
          Create an account
        </Button>
      </form>
    </Form>
  );
};

export default SignUpForm;
