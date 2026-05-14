import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import {
  Bar,
  BarChart,
  PolarAngleAxis,
  RadialBar,
  RadialBarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from "recharts";
import PageShell from "../components/PageShell.jsx";
import SectionHeader from "../components/SectionHeader.jsx";
import StickySidebar from "../components/common/StickySidebar.jsx";
import Skeleton from "../components/ui/Skeleton.jsx";
import Icon from "../components/Icon.jsx";
import { useCareer } from "../context/CareerContext.jsx";
import { quizQuestions } from "../data/quizQuestions.js";
import { buildPersonalizedRecommendations, calculateQuizResult } from "../utils/quizEngine.js";

export default function QuizPage() {
  const { quizAnswers, setQuizAnswers, setQuizResult, clearQuiz } = useCareer();
  const [step, setStep] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [loadingResult, setLoadingResult] = useState(false);
  const navigate = useNavigate();
  const current = quizQuestions[step];

  const result = useMemo(() => calculateQuizResult(quizAnswers), [quizAnswers]);
  const recommendations = useMemo(() => buildPersonalizedRecommendations(result), [result]);
  const completion = Math.round((Object.keys(quizAnswers).length / quizQuestions.length) * 100);
  const selectedAnswer = quizAnswers[current.id]?.id;
  const chartData = result.topMatches.slice(0, 5).map((item) => ({
    career: item.career,
    match: item.percentage
  }));

  function choose(option) {
    setQuizAnswers((answers) => ({
      ...answers,
      [current.id]: {
        id: option.id,
        label: option.label,
        weights: option.weights,
        category: current.category,
        questionIndex: step
      }
    }));
  }

  function next() {
    if (step === quizQuestions.length - 1) {
      setLoadingResult(true);
      window.setTimeout(() => {
        setQuizResult({ ...result, savedAt: new Date().toISOString() });
        setShowResult(true);
        setLoadingResult(false);
      }, 450);
      return;
    }
    setStep((value) => Math.min(quizQuestions.length - 1, value + 1));
  }

  function previous() {
    setShowResult(false);
    setStep((value) => Math.max(0, value - 1));
  }

  function skip() {
    setQuizAnswers((answers) => {
      const copy = { ...answers };
      delete copy[current.id];
      return copy;
    });
    next();
  }

  function restart() {
    clearQuiz();
    setShowResult(false);
    setStep(0);
  }

  function openRoadmap(fieldId = recommendations.field.id) {
    navigate(`/roadmaps/${fieldId}`);
  }

  return (
    <PageShell>
      <section className="page-section">
        <div className="container-page">
          <SectionHeader
            eyebrow="Smart career selector"
            title="Professional career quiz with live matching"
            description="Weighted scoring, normalized percentages, confidence calculation, persistent answers and personalized recommendations."
          />

          <div className="grid gap-6 lg:grid-cols-[1fr_24rem]">
            <div className="glass-card overflow-hidden p-5 sm:p-7">
              <div className="mb-6">
                <div className="mb-3 flex items-center justify-between text-sm font-black text-slate-500 dark:text-slate-400">
                  <span>{showResult ? "Result" : `Question ${step + 1} of ${quizQuestions.length}`}</span>
                  <span>{completion}% complete</span>
                </div>
                <div className="h-3 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800">
                  <motion.div className="h-full rounded-full bg-gradient-to-r from-primary to-accent" animate={{ width: `${completion}%` }} />
                </div>
              </div>

              <AnimatePresence mode="wait">
                {loadingResult ? (
                  <motion.div key="loading" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                    <Skeleton className="h-10 w-2/3" />
                    <div className="mt-6 grid gap-4 md:grid-cols-3">
                      <Skeleton className="h-40" />
                      <Skeleton className="h-40" />
                      <Skeleton className="h-40" />
                    </div>
                  </motion.div>
                ) : showResult ? (
                  <ResultView
                    result={result}
                    recommendations={recommendations}
                    chartData={chartData}
                    onOpenRoadmap={openRoadmap}
                    onRestart={restart}
                  />
                ) : (
                  <motion.div
                    key={current.id}
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -24 }}
                    transition={{ duration: 0.25 }}
                  >
                    <span className="eyebrow">{current.category}</span>
                    <h2 className="mt-4 text-2xl font-black tracking-tight dark:text-white sm:text-3xl">{current.question}</h2>
                    <p className="mt-3 text-sm text-slate-500 dark:text-slate-400">{current.helper}</p>
                    <div className="mt-6 grid gap-3 md:grid-cols-2">
                      {current.options.map((option) => {
                        const selected = selectedAnswer === option.id;
                        return (
                          <button
                            key={option.id}
                            type="button"
                            onClick={() => choose(option)}
                            className={`rounded-2xl border p-5 text-left transition hover:-translate-y-0.5 ${
                              selected
                                ? "border-primary bg-blue-50 text-primary shadow-md dark:border-blue-400/40 dark:bg-blue-400/10 dark:text-blue-300"
                                : "border-slate-200 bg-white text-slate-700 hover:border-blue-200 hover:text-primary dark:border-white/10 dark:bg-slate-950 dark:text-slate-300"
                            }`}
                          >
                            <span className="block text-sm font-black">{option.label}</span>
                            <span className="mt-2 block text-sm leading-6 text-slate-500 dark:text-slate-400">{option.description}</span>
                          </button>
                        );
                      })}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {!showResult && !loadingResult && (
                <div className="mt-8 flex flex-col justify-between gap-3 sm:flex-row">
                  <button type="button" className="btn-secondary disabled:opacity-50" onClick={previous} disabled={step === 0}>
                    Previous
                  </button>
                  <div className="flex flex-col gap-3 sm:flex-row">
                    <button type="button" className="btn-secondary" onClick={skip}>
                      Skip
                    </button>
                    <button type="button" className="btn-primary" onClick={next}>
                      {step === quizQuestions.length - 1 ? "Generate Result" : "Next"}
                      <Icon name="arrow" className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              )}
            </div>

            <StickySidebar>
              <p className="text-sm font-black uppercase tracking-wider text-primary dark:text-blue-300">Live matching</p>
              <h3 className="mt-3 text-2xl font-black dark:text-white">{recommendations.career}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
                Recommendation updates after every answer using weighted, normalized scoring.
              </p>
              <div className="mt-5 h-48">
                <ResponsiveContainer width="100%" height="100%">
                  <RadialBarChart innerRadius="72%" outerRadius="100%" data={[{ name: "Match", value: result.best?.percentage || 0 }]} startAngle={90} endAngle={-270}>
                    <PolarAngleAxis type="number" domain={[0, 100]} tick={false} />
                    <RadialBar dataKey="value" cornerRadius={16} fill="#2563eb" />
                    <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle" className="fill-slate-900 text-3xl font-black dark:fill-white">
                      {result.best?.percentage || 0}%
                    </text>
                  </RadialBarChart>
                </ResponsiveContainer>
              </div>
              <div className="grid gap-3">
                {result.topMatches.slice(0, 3).map((item) => (
                  <div key={item.career} className="rounded-2xl bg-white p-4 shadow-sm dark:bg-slate-950">
                    <div className="flex justify-between gap-3 text-sm font-black dark:text-white">
                      <span>{item.career}</span>
                      <span>{item.percentage}%</span>
                    </div>
                    <div className="mt-2 h-2 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800">
                      <div className="h-full rounded-full bg-gradient-to-r from-primary to-accent" style={{ width: `${item.percentage}%` }} />
                    </div>
                  </div>
                ))}
              </div>
              <button type="button" onClick={() => openRoadmap()} className="btn-primary mt-5 w-full">
                Open Recommended Roadmap
              </button>
            </StickySidebar>
          </div>
        </div>
      </section>
    </PageShell>
  );
}

function ResultView({ result, recommendations, chartData, onOpenRoadmap, onRestart }) {
  return (
    <motion.div key="result" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}>
      <span className="eyebrow">Personalized result</span>
      <h2 className="mt-4 text-3xl font-black tracking-tight dark:text-white sm:text-4xl">
        Best match: {recommendations.career}
      </h2>
      <p className="mt-4 max-w-3xl text-slate-600 dark:text-slate-300">{recommendations.report}</p>

      <div className="mt-6 grid gap-5 xl:grid-cols-[1fr_0.9fr]">
        <div className="rounded-2xl bg-white p-5 shadow-sm dark:bg-slate-950">
          <h3 className="mb-4 font-black dark:text-white">Top career matches</h3>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData} layout="vertical" margin={{ left: 24, right: 12 }}>
                <XAxis type="number" domain={[0, 100]} tick={{ fill: "#94a3b8", fontSize: 12 }} />
                <YAxis type="category" dataKey="career" width={120} tick={{ fill: "#94a3b8", fontSize: 12 }} />
                <Tooltip />
                <Bar dataKey="match" fill="#2563eb" radius={[0, 12, 12, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="grid gap-3">
          <Info title="Recommended tools" value={recommendations.tools.join(", ")} />
          <Info title="Suggested projects" value={recommendations.projects.join(", ")} />
          <Info title="Pakistani companies" value={recommendations.companies.join(", ")} />
          <Info title="Career roles" value={recommendations.roles.join(", ")} />
        </div>
      </div>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <button type="button" onClick={() => onOpenRoadmap()} className="btn-primary">
          Open Recommended Roadmap
        </button>
        <button type="button" onClick={onRestart} className="btn-secondary">
          Retake Quiz
        </button>
      </div>
    </motion.div>
  );
}

function Info({ title, value }) {
  return (
    <div className="rounded-2xl bg-white p-4 shadow-sm dark:bg-slate-950">
      <p className="text-xs font-black uppercase tracking-wider text-slate-400">{title}</p>
      <p className="mt-1 text-sm font-semibold text-slate-700 dark:text-slate-300">{value}</p>
    </div>
  );
}
