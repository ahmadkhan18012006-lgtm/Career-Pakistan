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
- `StudentProfile`: student account, skill progress, completed roadmap sections and next steps.
- `QuizResult`: quiz answers, scoring map, recommended field and explanation.

## API Routes

- `GET /api/health`
- `GET /api/fields`
- `GET /api/fields/:slug`
- `POST /api/fields`
- `GET /api/students/:id`
- `POST /api/students`
- `POST /api/students/:id/quiz-results`
