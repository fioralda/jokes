import { useQueryClient } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";
import JokesForm from "../../components/JokesFrom/JokesForm";
import { useDeleteJokeMutation } from "../../queries/useDeleteJokeMutation";
import { useJokesDetailQuery } from "../../queries/useJokesDetailQuery";
import { useUpdateJokeMutation } from "../../queries/useUpdateJokeMutation";

const EditJoke = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  const queryClient = useQueryClient();

  const { data, isSuccess } = useJokesDetailQuery(id!);

  const { mutate } = useUpdateJokeMutation(id!);

  const { mutate: deleteMutate } = useDeleteJokeMutation();

  if (!isSuccess) {
    return null;
  }

  return (
    <>
      <div>Edit joke{id}</div>
      <JokesForm joke={data} mutate={mutate} />
      <button
        onClick={() =>
          deleteMutate(id!, {
            onSuccess: () => {
              queryClient.invalidateQueries({ queryKey: ["jokes"] });
              navigate("/");
            },
          })
        }
      >
        Delete
      </button>
    </>
  );
};

export default EditJoke;
