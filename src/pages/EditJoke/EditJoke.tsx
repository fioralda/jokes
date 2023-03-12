import { useQueryClient } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";
import JokesForm from "../../components/JokesFrom/JokesForm";
import { useDeleteJokeMutation } from "../../queries/useDeleteJokeMutation";
import { useJokesDetailQuery } from "../../queries/useJokesDetailQuery";
import { useUpdateJokeMutation } from "../../queries/useUpdateJokeMutation";
import { Title } from "../CreateJoke/styled";
import { StyledButton, Wrapper } from "./styled";

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
    <Wrapper>
      <Title>Edit Joke</Title>
      <JokesForm joke={data} mutate={mutate} />
      <StyledButton
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
      </StyledButton>
    </Wrapper>
  );
};

export default EditJoke;
