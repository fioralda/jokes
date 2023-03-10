import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useCreateJokeMutation } from "../../queries/useCreateJokeMutation";

type Inputs = {
  title: string;
  author: string;
  body: string;
  createdDate: string;
  views: string;
};

const JokesForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const { mutate } = useCreateJokeMutation();

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
