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
  fontSize: z.coerce.number().min(8).max(40),
  code: z.string().min(1, "Code is required"),
  tests: z.array(
    z.object({
      type: z.enum(["string", "number"]),
      name: z.string(),
      value: z.string(),
      output: z.string(),
      weight: z.coerce.number().min(0).max(1),
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
      title: initialData?.title ?? "",
      category: initialData?.category ?? "",
      level: initialData?.level ?? "Easy",
      description: initialData?.description ?? "",
      functionName: initialData?.functionName ?? "",
      language: initialData?.language ?? "js",
      fontSize: initialData?.fontSize ?? 14,
      code: initialData?.code ?? "",
      tests: initialData?.tests ?? [],
    },
  });

  const description = watch("description");
  const language = watch("language");
  const fontSize = watch("fontSize");
  const code = watch("code");

  useEffect(() => {
    if (initialData) {
      setValue("description", initialData.description ?? "");
      setValue("code", initialData.code ?? "");
      setValue("language", initialData.language ?? "js");
      setValue("fontSize", initialData.fontSize ?? 14);
      setValue("level", initialData.level ?? "Easy");
    }
  }, [initialData, setValue]);

  const { fields, append, remove } = useFieldArray({
    control,
    name: "tests",
  });

  async function internalSubmit(data: FormData) {
    await onSubmit(data);
  }

  return (
  <form onSubmit={handleSubmit(internalSubmit)} className="p-6 space-y-6">
    <div className="flex gap-8">
      {/* Left side */}
      <div className="flex-1 space-y-4">
        {/* Title */}
        <div>
          <Label>Title</Label>
          <Input {...register("title")} />
          {errors.title && <p className="text-red-500">{errors.title.message}</p>}
        </div>

        {/* Category */}
        <div>
          <Label>Category</Label>
          <Input {...register("category")} />
          {errors.category && <p className="text-red-500">{errors.category.message}</p>}
        </div>

        {/* Level */}
        <div>
          <Label>Level</Label>
          <select {...register("level")} className="border rounded p-2 w-full">
            <option value="Easy">Easy</option>
            <option value="Moderate">Moderate</option>
            <option value="Hard">Hard</option>
          </select>
          {errors.level && <p className="text-red-500">{errors.level.message}</p>}
        </div>

        {/* Description (Markdown) */}
        <div>
          <Label>Description</Label>
          <SimpleMDE value={description} onChange={(val) => setValue("description", val)} />
          {errors.description && <p className="text-red-500">{errors.description.message}</p>}
        </div>
      </div>

      {/* Right side */}
      <div className="flex-1 flex flex-col space-y-4">
        {/* Language, Font Size, Create/Update Button (oben rechts) */}
        <div className="flex items-center space-x-4">
          <div>
            <Label>Language</Label>
            <select {...register("language")} className="border rounded p-2 w-full max-w-xs">
              <option value="js">JavaScript</option>
              <option value="py">Python</option>
            </select>
            {errors.language && <p className="text-red-500">{errors.language.message}</p>}
          </div>

          <div>
            <Label>Font Size</Label>
            <select {...register("fontSize")} className="border rounded p-2 w-full max-w-xs">
              <option value={12}>12px</option>
              <option value={14}>14px</option>
              <option value={16}>16px</option>
              <option value={18}>18px</option>
              <option value={20}>20px</option>
            </select>
            {errors.fontSize && <p className="text-red-500">{errors.fontSize.message}</p>}
          </div>

          <Button type="submit" className="h-10 self-end">
            {initialData ? "Update Challenge" : "Create Challenge"}
          </Button>
        </div>

        {/* Function Name */}
        <div>
          <Label>Function Name</Label>
          <Input {...register("functionName")} />
          {errors.functionName && <p className="text-red-500">{errors.functionName.message}</p>}
        </div>

        {/* Code Editor */}
        <div>
          <Label>Code</Label>
          <CodeMirror
            value={code}
            extensions={[language === "js" ? javascript() : python()]}
            onChange={(val) => setValue("code", val)}
            style={{ fontSize: `${fontSize}px` }}
            height="400px"
          />
          {errors.code && <p className="text-red-500">{errors.code.message}</p>}

          {/* Tests Label links und + Button rechts unter Code Editor */}
          <div className="flex justify-between mt-2">
            <span className="text-lg font-semibold">Tests</span>
            <Button
              type="button"
              onClick={() => append({ type: "string", name: "", value: "", output: "", weight: 1 })}
              className="text-lg font-bold w-10 h-10 flex items-center justify-center"
              aria-label="Add Test"
              title="Add Test"
            >
              +
            </Button>
          </div>
        </div>
      </div>
    </div>

    {/* Tests Liste (unter dem zweispaltigen Bereich) */}
    <div>
      {fields.map((field, index) => (
        <div key={field.id} className="mb-4 border p-4 rounded space-y-2">
          <div>
            <Label>Type</Label>
            <select {...register(`tests.${index}.type`)} className="border rounded p-1 w-full">
              <option value="string">String</option>
              <option value="number">Number</option>
            </select>
          </div>
          <div>
            <Label>Name</Label>
            <Input {...register(`tests.${index}.name`)} />
          </div>
          <div>
            <Label>Value</Label>
            <Input {...register(`tests.${index}.value`)} />
          </div>
          <div>
            <Label>Output</Label>
            <Input {...register(`tests.${index}.output`)} />
          </div>
          <div>
            <Label>Weight (0 to 1)</Label>
            <Input
              type="number"
              step="0.01"
              min={0}
              max={1}
              {...register(`tests.${index}.weight`, { valueAsNumber: true })}
            />
          </div>
          <Button type="button" variant="destructive" onClick={() => remove(index)}>
            Remove Test
          </Button>
        </div>
      ))}
    </div>
  </form>
);

}
