# TestCraft.ai

An AI-powered Learning Management System (LMS) designed for tutors to create and manage assessments.

## Overview

TestCraft.ai enables educators to create and manage quizzes with AI assistance. The platform supports multiple question types, real-time monitoring, and automated grading.

## Features

- User Authentication (Google & Apple Sign-in)
- AI-Powered Quiz Generation
- Multiple Question Types Support
- Real-time Quiz Monitoring
- Automated Grading
- Quiz Sharing & Distribution

## Tech Stack

- **Frontend**: React.js, Next.js, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: PostgreSQL
- **Authentication**: Firebase Auth / OAuth
- **AI Integration**: OpenAI API
- **Hosting**: Vercel (Frontend), AWS (Backend & Database)

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- PostgreSQL
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/testcraft.ai.git
cd testcraft.ai
```

2. Install frontend dependencies:

```bash
cd frontend
npm install
```

3. Install backend dependencies:

```bash
cd ../backend
npm install
```

4. Set up environment variables:

- Copy `.env.example` to `.env` in both frontend and backend directories
- Fill in the required environment variables

5. Start the development servers:

Frontend:

```bash
cd frontend
npm run dev
```

Backend:

```bash
cd backend
npm run dev
```

## Project Structure

```
testcraft.ai/
├── frontend/          # Next.js frontend application
├── backend/           # Express.js backend server
└── database/          # Database migrations and schemas
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
