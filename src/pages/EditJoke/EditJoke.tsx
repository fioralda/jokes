import { useParams } from "react-router-dom";
import JokesForm from "../../components/JokesFrom/JokesForm";
import { useJokesDetailQuery } from "../../queries/useJokesDetailQuery";
import { useUpdateJokeMutation } from "../../queries/useUpdateJokeMutation";

const EditJoke = () => {
  const { id } = useParams();

  const { data, isSuccess } = useJokesDetailQuery(id!);

  const { mutate } = useUpdateJokeMutation(id!);

  if (!isSuccess) {
    return null;
  }

  return (
    <>
      <div>Edit joke{id}</div>
      <JokesForm joke={data} mutate={mutate} />
    </>
  );
};

export default EditJoke;
