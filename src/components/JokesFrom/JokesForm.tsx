import { SubmitHandler, useForm } from "react-hook-form";
import { UseMutateFunction } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { Joke } from "../../api/JokesApi";
import {
  StyledButton,
  StyledForm,
  StyledInput,
  StyledTextArea,
} from "./styled";

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
  CreatedAt: 0,
};

const formatTimestampToFormDate = (value: number) => {
  const d = new Date(value);
  const year = d.getFullYear();
  const month = d.getMonth() + 1;
  const date = d.getDate();
  return `${year}-${month < 10 ? `0${month}` : month}-${
    date < 10 ? `0${date}` : date
  }`;
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
        onSuccess: () => {
          navigate("/");
        },
      }
    );
  };

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <StyledInput
        placeholder="Title"
        {...register("title", { required: true })}
      />
      {errors.title && <span>This field is required</span>}

      <StyledInput
        placeholder="Author"
        type="email"
        {...register("author", { required: true })}
      />
      {errors.author && <span>This field is required</span>}

      <StyledTextArea
        placeholder="Write your joke here..."
        {...register("body", { required: true })}
      ></StyledTextArea>
      {errors.body && <span>This field is required</span>}

      <StyledInput
        type="date"
        {...register("createdDate", { required: true })}
      />
      {errors.createdDate && <span>This field is required</span>}

      <StyledInput
        type="number"
        placeholder="Views"
        {...register("views", { required: true })}
      />
      {errors.views && <span>This field is required</span>}

      <StyledButton type="submit">Submit</StyledButton>
    </StyledForm>
  );
};

export default JokesForm;
