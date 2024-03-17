import { useCallback, useEffect, useState } from "react";

export const useGetGameData = () => {
  const [quizData, setQuizdata] = useState();
  const [category, setCategory] = useState("any");

  const getQuestion = useCallback(() => {
    let url = "https://opentdb.com/api.php?amount=1";
    if (category !== "any") url += `&category=${category}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => setQuizdata(data.results[0]));
  }, [category]);

  useEffect(() => {
    getQuestion();
  }, [getQuestion, category]);

  return { quizData, category, setCategory, getQuestion };
};
