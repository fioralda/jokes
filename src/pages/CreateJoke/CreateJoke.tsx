import JokesFrom from "../../components/JokesFrom";
import { useCreateJokeMutation } from "../../queries/useCreateJokeMutation";

const CreateJoke = () => {
  const { mutate } = useCreateJokeMutation();

  return (
    <>
      <div>Create Joke</div>
      <div>
        <JokesFrom mutate={mutate} />
      </div>
    </>
  );
};

export default CreateJoke;
