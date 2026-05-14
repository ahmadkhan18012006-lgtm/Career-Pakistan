# CareerPath Pakistan API Structure

This backend is a production-ready structure for a future API layer. The current React app uses local dummy data, so running this API is optional.

## Setup

```bash
cd server
npm install
copy .env.example .env
npm run dev
```

## Models

- `Field`: career field metadata, salaries, demand, tools, roles and full roadmap.
- `User`: auth account, premium state and profile data.
- `Progress`: completed skills, roadmap steps, streaks, weekly goals and badges.
- `StudentProfile`: student account, skill progress, completed roadmap sections and next steps.
- `QuizResult`: quiz answers, scoring map, recommended field and explanation.

## API Routes

- `GET /api/health`
- `POST /api/auth/signup`
- `POST /api/auth/login`
- `POST /api/auth/forgot-password`
- `GET /api/auth/me`
- `GET /api/fields`
- `GET /api/fields/:slug`
- `POST /api/fields`
- `GET /api/progress`
- `PUT /api/progress`
- `POST /api/recommendations`
- `GET /api/students/:id`
- `POST /api/students`
- `POST /api/students/:id/quiz-results`

## AI Provider

`POST /api/recommendations` is OpenAI-ready through `OPENAI_API_KEY`. If no key is configured, it returns a deterministic fallback recommendation so the platform remains functional during local development.
