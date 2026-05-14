import { createContext, useContext, useMemo, useState } from "react";
import { allFields } from "../data/fields.js";
import useLocalStorage from "../hooks/useLocalStorage.js";

const CareerContext = createContext(null);

export function CareerProvider({ children }) {
  const [bookmarks, setBookmarks] = useLocalStorage("careerpath-bookmarks", []);
  const [quizAnswers, setQuizAnswers] = useLocalStorage("careerpath-quiz-answers", {});
  const [quizResult, setQuizResult] = useLocalStorage("careerpath-quiz-result", null);

  const value = useMemo(() => {
    function toggleBookmark(fieldId) {
      setBookmarks((current) =>
        current.includes(fieldId) ? current.filter((id) => id !== fieldId) : [...current, fieldId]
      );
    }

    return {
      bookmarks,
      bookmarkedFields: allFields.filter((field) => bookmarks.includes(field.id)),
      isBookmarked: (fieldId) => bookmarks.includes(fieldId),
      toggleBookmark,
      quizAnswers,
      setQuizAnswers,
      quizResult,
      setQuizResult,
      clearQuiz: () => {
        setQuizAnswers({});
        setQuizResult(null);
      }
    };
  }, [bookmarks, quizAnswers, quizResult, setBookmarks, setQuizAnswers, setQuizResult]);

  return <CareerContext.Provider value={value}>{children}</CareerContext.Provider>;
}

export function useCareer() {
  const context = useContext(CareerContext);
  if (!context) {
    throw new Error("useCareer must be used inside CareerProvider");
  }
  return context;
}
