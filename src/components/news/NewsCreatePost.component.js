import React, { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";

import { useDatabase } from "../../hooks/useDatabaseService.hook";
import { FieldWrapper, SubmitComponent } from "../form";
import { NEWS_FORM_FIELDS } from "./constants";
import {ThanksgivingTitle} from "../../styles";

export const NewsPostCreate = () => {
  const [loading, setLoading] = useState(false);
  const { createRecord } = useDatabase("news");
  const methods = useForm();
  const { handleSubmit, register, reset } = methods || {};

  const handleCreateNewsPostSubmit = async (data) => {
    try {
      setLoading(true);
      await createRecord(data);
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

          <FieldWrapper fieldName={NEWS_FORM_FIELDS.content} label="Post content">
          <textarea
            cols="30"
            disabled={loading}
            name="textarea"
            placeholder="Enter party updates here."
            {...register(NEWS_FORM_FIELDS.content, {
              required: {
                value: true,
                message: " 🤌 Please enter content for the post. 🤌",
              },
            })}
            rows="5"
          />
          </FieldWrapper>

          <SubmitComponent value={loading ? "loading ..." : "Submit"} />
        </form>
      </FormProvider>
    </div>
  );
};
