'use client';

import { useEffect } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { python } from "@codemirror/lang-python";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Challenge } from "@/app/types";

const schema = z.object({
  title: z.string().min(1, "Title is required"),
  category: z.string().min(1, "Category is required"),
  level: z.enum(["Easy", "Moderate", "Hard"]),
  description: z.string().min(1, "Description is required"),
  functionName: z.string().min(1, "Function name is required"),
  language: z.enum(["js", "py"]),
  fontSize: z.string().min(1),
  code: z.string().min(1, "Code is required"),
  tests: z.array(
    z.object({
      type: z.enum(["string", "number"]),
      name: z.string(),
      value: z.string(),
      output: z.string(),
      weight: z.number().min(0).max(1),
    })
  ),
});

type FormData = z.infer<typeof schema>;

interface ChallengeFormProps {
  initialData?: Challenge;
  onSubmit: (data: FormData) => Promise<void> | void; 
}

export default function ChallengeForm({ initialData, onSubmit }: ChallengeFormProps) {
  const {
    register,
    handleSubmit,
    control,
    setValue,
    watch,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      title: "",
      category: "",
      level: "Easy",
      description: "",
      functionName: "",
      language: "js",
      fontSize: "14px",
      code:
        initialData && typeof initialData.code === "string"
          ? initialData.code
          : "",
      tests: [],
      ...initialData,
    },
  });

  // Controlled watches
  const description = watch("description");
  const language = watch("language");
  const fontSize = watch("fontSize");
  const code = watch("code");
  const level = watch("level");

  useEffect(() => {
    if (initialData) {
      if (initialData.description) setValue("description", initialData.description);
      if (initialData.code && typeof initialData.code === "string") setValue("code", initialData.code);
      if (initialData.language) setValue("language", initialData.language);
      if (initialData.fontSize) setValue("fontSize", initialData.fontSize);
      if (initialData?.level) setValue("level", initialData.level);
    }
  }, [initialData, setValue]);

  const { fields, append, remove } = useFieldArray({
    control,
    name: "tests",
  });

 
  function internalSubmit(data: FormData) {
    onSubmit(data);
  }

  return (
    <form onSubmit={handleSubmit(internalSubmit)} className="p-6 space-y-6">
    

   
      <div>
        <Label>Title</Label>
        <Input {...register("title")} />
        {errors.title && <p className="text-red-500">{errors.title.message}</p>}
      </div>

      

      <Button type="submit" className="mt-6">
        {initialData ? "Update Challenge" : "Create Challenge"}
      </Button>
    </form>
  );
}
