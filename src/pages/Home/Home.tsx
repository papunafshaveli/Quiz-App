import categories from "../../categories/categories";
import { useNavigate } from "react-router-dom";
import { HomeContainer, StartButton } from "./styles";
const Home = ({
  category,
  setCategory,
}: {
  category: string | number;
  setCategory: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const navigate = useNavigate();
  const handleGetStarted = () => {
    navigate("/game");
  };
  return (
    <HomeContainer>
      <label htmlFor="category">Select Category</label>
      <select
        name="category"
        id="category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        {categories.map((cat) => (
          <option
            value={cat.id}
            key={cat.id}
            dangerouslySetInnerHTML={{ __html: cat.name }}
          ></option>
        ))}
      </select>
      <StartButton onClick={handleGetStarted}>Start</StartButton>
    </HomeContainer>
  );
};

export default Home;
