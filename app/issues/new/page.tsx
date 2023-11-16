"use client";

import { IcreateIssue } from "@/app/ValidateSchema";
import MSError from "@/app/components/ms-error/MSError";
import { MSLoading } from "@/app/components/ms-error/ms-loading/MSLoading";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Callout, TextField } from "@radix-ui/themes";
import axios from "axios";
import "easymde/dist/easymde.min.css";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import SimpleMDE from "react-simplemde-editor";
import { z } from "zod";

type IssuesForm = z.infer<typeof IcreateIssue>;
function NewIssue() {
  const router = useRouter();
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IssuesForm>({
    defaultValues: {
      title: "",
      description: "",
    },
    resolver: zodResolver(IcreateIssue),
  });
   //** state store message error from backend  */
  const [error, setError] = useState<string | null>(null);
   //** loading submit */
  const [isSubmiting, setIsSubmiting] = React.useState<boolean>(false);
  //** function submit */
  const onSubmit = handleSubmit(async (data) => {
    try {
      setIsSubmiting(true);
       await axios.post("/api/issues", data).then((res) => {
        // ** Redirect to /issues *
        router.push("/issues");
        setIsSubmiting(false);
      });
    } catch (error: any) {
      setError("Error unexpected");
    }
  });
  return (
    <form className="max-w-xl space-y-5" onSubmit={onSubmit}>
      {/** Title Input */}
      <TextField.Root>
        <TextField.Input placeholder="title" {...register("title")} />
      </TextField.Root>
       {/** Title Input error*/}
      {errors.title && <MSError>{errors.title.message}</MSError>}
      {/** Description Input */}
      <Controller
        name="description"
        control={control}
        render={({ field }) => (
          <SimpleMDE placeholder="description new issues" {...field} />
        )}
      />
       {/** Description Input error */}
      {errors.description && <MSError>{errors.description.message}</MSError>}
       {/** Button Submit new Issue */}
      <Button>Submit {isSubmiting && <MSLoading />}</Button>
      {/** when error from backend */}     
      {error && (
        <Callout.Root>
          <Callout.Icon>s</Callout.Icon>
          <Callout.Text>{error}</Callout.Text>
        </Callout.Root>
      )}
    </form>
  );
}

export default NewIssue;
