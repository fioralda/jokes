import JokesFrom from "../../components/JokesFrom";
import { useCreateJokeMutation } from "../../queries/useCreateJokeMutation";
import { Title, Wrapper } from "./styled";

const CreateJoke = () => {
  const { mutate } = useCreateJokeMutation();

  return (
    <Wrapper>
      <div>
        <Title>Create Joke</Title>
      </div>
      <div>
        <JokesFrom mutate={mutate} />
      </div>
    </Wrapper>
  );
};

export default CreateJoke;
