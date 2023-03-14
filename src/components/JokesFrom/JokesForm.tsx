import { SubmitHandler, useForm } from "react-hook-form";
import { UseMutateFunction, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { Joke } from "../../api/JokesApi";
import {
  FormError,
  StyledButton,
  StyledForm,
  StyledInput,
  StyledTextArea,
} from "./styled";
import { emailRegex, formatTimestampToFormDate } from "../../constants";

type Inputs = {
  title: string;
  author: string;
  body: string;
  createdDate: string;
  views: string;
};

type Props = {
  joke?: Joke;
  mutate: UseMutateFunction<Joke, unknown, Omit<Joke, "id">>;
};

const defaultJoke = {
  id: 0,
  Body: "",
  Title: "",
  Views: "",
  Author: "",
  CreatedAt: new Date().getTime(),
};

const JokesForm = ({ joke = defaultJoke, mutate }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    defaultValues: {
      title: joke.Title,
      author: joke.Author,
      body: joke.Body,
      createdDate: formatTimestampToFormDate(joke.CreatedAt),
      views: joke.Views,
    },
  });

  const navigate = useNavigate();

  const queryClient = useQueryClient();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    mutate(
      {
        Title: data.title,
        Author: data.author,
        Body: data.body,
        CreatedAt: new Date(data.createdDate).getTime(),
        Views: data.views,
      },
      {
        onSuccess: async () => {
          await queryClient.invalidateQueries({ queryKey: ["jokes"] });
          await queryClient.invalidateQueries({ queryKey: ["joke"] });
          navigate("/");
        },
      }
    );
  };

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <StyledInput
        placeholder="Title"
        data-testid="joke-title"
        {...register("title", { required: "Title is required" })}
      />
      <FormError data-testid="form-error">{errors.title?.message}</FormError>

      <StyledInput
        placeholder="Author"
        type="email"
        data-testid="joke-author"
        {...register("author", {
          required: "Author is required",
          pattern: {
            value: emailRegex(),
            message: "Provide a valid email address",
          },
        })}
      />
      <FormError data-testid="form-error">{errors.author?.message}</FormError>

      <StyledTextArea
        placeholder="Write your joke here..."
        data-testid="joke-body"
        {...register("body", { required: "Joke is required" })}
      ></StyledTextArea>
      <FormError data-testid="form-error">{errors.body?.message}</FormError>

      <StyledInput
        type="date"
        data-testid="joke-date"
        {...register("createdDate", {
          required: "Created Date is required",
        })}
      />
      <FormError data-testid="form-error">
        {errors.createdDate?.message}
      </FormError>

      <StyledInput
        type="number"
        placeholder="Views"
        data-testid="joke-views"
        {...register("views", { required: "Views is required" })}
      />
      <FormError data-testid="form-error">{errors.views?.message}</FormError>

      <StyledButton type="submit">Submit</StyledButton>
    </StyledForm>
  );
};

export default JokesForm;
