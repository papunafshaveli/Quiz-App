import { useCallback, useEffect, useState } from "react";

export const useGetGameData = () => {
  const [quizData, setQuizdata] = useState();
  const [category, setCategory] = useState("any");
  const [isLoading, setIsLoading] = useState(false);

  const getQuestion = useCallback(() => {
    let url = "https://opentdb.com/api.php?amount=1";
    if (category !== "any") url += `&category=${category}`;
    setIsLoading(true);
    fetch(url)
      .then((res) => res.json())
      .then((data) => setQuizdata(data.results[0]));
    setIsLoading(false);
  }, [category]);

  useEffect(() => {
    getQuestion();
  }, [getQuestion, category]);

  return { quizData, category, setCategory, getQuestion, isLoading };
};
