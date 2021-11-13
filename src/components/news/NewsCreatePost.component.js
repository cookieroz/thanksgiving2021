import React, { useState } from "react";
import { useForm, FormProvider, Controller } from "react-hook-form";
import MarkdownEditor from "rich-markdown-editor";

import { useDatabase } from "../../hooks/useDatabaseService.hook";
import { FieldWrapper, SubmitComponent } from "../form";
import { NEWS_FORM_FIELDS } from "./constants";
import { ThanksgivingTitle } from "../../styles";

export const NewsPostCreate = () => {
  const [loading, setLoading] = useState(false);
  const { createRecord } = useDatabase("news");
  const methods = useForm();
  const { control, handleSubmit, register, reset } = methods || {};

  const handleCreateNewsPostSubmit = async (data) => {
    try {
      setLoading(true);
      await createRecord({ title: data?.title, content: data?.myField});
      reset();
      setLoading(false);
    } catch (e) {
      console.log(`FAILED CREATE news post: ${e}`);
      setLoading(false);
    }
  };

  return (
    <div>
      <ThanksgivingTitle>Create a new post</ThanksgivingTitle>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(handleCreateNewsPostSubmit)}>
          <FieldWrapper fieldName={NEWS_FORM_FIELDS.title} label="Title">
            <input
              disabled={loading}
              {...register(NEWS_FORM_FIELDS.title, {
                required: {
                  value: true,
                  message: " 🤌 Please enter a title. 🤌",
                },
              })}
            />
          </FieldWrapper>

          <FieldWrapper fieldName={NEWS_FORM_FIELDS.content} label="Content">
            <Controller
              control={control}
              name="myField"
              render={({ field: { onChange } }) => (
                <MarkdownEditor
                  disabled={loading}
                  id={NEWS_FORM_FIELDS.content}
                  name={NEWS_FORM_FIELDS.content}
                  onChange={(getValue) => onChange(getValue())}
                  placeholder="Enter party updates here."
                />
              )}
            />
          </FieldWrapper>

          <SubmitComponent value={loading ? "loading ..." : "Submit"} />
        </form>
      </FormProvider>
    </div>
  );
};
