import { SubmitHandler, useForm } from "react-hook-form";
import { UseMutateFunction } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { Joke } from "../../api/JokesApi";

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
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("title", { required: true })} />
      {errors.title && <span>This field is required</span>}

      <input {...register("author", { required: true })} />
      {errors.author && <span>This field is required</span>}

      <textarea {...register("body", { required: true })}></textarea>
      {errors.body && <span>This field is required</span>}

      <input type="date" {...register("createdDate", { required: true })} />
      {errors.createdDate && <span>This field is required</span>}

      <input type="number" {...register("views", { required: true })} />
      {errors.views && <span>This field is required</span>}

      <input type="submit" />
    </form>
  );
};

export default JokesForm;
