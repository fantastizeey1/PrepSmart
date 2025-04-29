# Prepsmart

**Prepsmart** is an advanced, AI-powered job interview preparation platform built with a modern tech stack including **Next.js**, **Firebase**, **Tailwind CSS**, **Vapi AI**, and **Google Gemini**. The platform seamlessly merges cutting-edge artificial intelligence with sleek, responsive design to deliver a rich, interactive, and immersive preparation experience tailored for job seekers. Whether you're preparing for your first job interview or looking to refine your skills, Prepsmart offers intelligent, engaging tools to help you succeed.

---

## ⚙️ Tech Stack

- **Next.js** – Powers the front-end and back-end with server-side rendering and dynamic routing.
- **Firebase** – Manages secure authentication and scalable real-time database operations.
- **Tailwind CSS** – A utility-first CSS framework that provides fully responsive and highly customizable styling.
- **Vapi AI** – Implements smart voice agents for simulated conversational interviews.
- **Google Gemini** – Supplies generative AI to enrich interview scenarios and provide insightful feedback.
- **shadcn/ui** – Offers a comprehensive suite of elegant and accessible UI components.
- **Zod** – Ensures strong schema validation and type safety for forms and APIs.

---

## 🔋 Features

### 👉 Authentication
Robust and secure authentication system that supports email/password login, powered by Firebase Authentication. User sessions are persistent and securely stored for a seamless experience.

### 👉 Create Interviews
Effortlessly generate customized job interview scenarios. Vapi's voice agents collaborate with Google Gemini to simulate human-like conversations tailored to job roles and industries.

### 👉 Get Feedback from AI
Interact with AI voice agents in real-time and receive detailed, structured feedback instantly after the session. Insights include tone analysis, key response highlights, and improvement suggestions.

### 👉 Modern UI/UX
Polished, intuitive interface designed with Tailwind CSS and shadcn/ui for fluid navigation and accessibility. Every screen is crafted for user efficiency and visual clarity.

### 👉 Interview Page
A dedicated space to conduct live, AI-driven voice interviews. Features include real-time audio interaction, transcription display, voice replay, and integrated feedback summaries.

### 👉 Dashboard
Centralized dashboard to monitor interview history, track progress, and revisit transcripts. Users can also manage profile settings and configure preferences easily.

### 👉 Responsive Design
Fully responsive layout that functions beautifully across desktops, tablets, and mobile devices. Optimized performance and fluid layouts ensure accessibility anytime, anywhere.

### 👉 Extensible and Scalable
Built with modular architecture, making it easy to extend functionality, add new AI agents, or integrate with additional APIs in future.

---

## 🚀 Getting Started

1. **Clone the repository**
```bash
git clone https://github.com/fantastizeey1/PrepSmart.git
cd PrepSmart
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up environment variables**
Create a `.env.local` file in the root directory and include your Firebase configuration along with any required API keys.

4. **Run the development server**
```bash
npm run dev
```
Visit `http://localhost:3000` to view the app in your browser.

---

## 📁 Folder Structure
```
PrepSmart/
├── components/          # Reusable UI components
├── app/                 # Next.js pages and routing
├── lib/                 # Utility functions and API handlers
├── styles/              # Global styles and Tailwind setup
├── firebase/            # Firebase setup and helper files
├── hooks/               # Custom React hooks for state management and side effects
├── types/               # Shared TypeScript types
└── public/              # Static files and assets (e.g. icons, images)
```

---

## 📌 Highlights
- Thoughtfully modular codebase designed for maintainability and scalability
- Real-time AI-driven voice interactions with dynamic feedback
- Clean, reusable UI components powered by shadcn/ui
- Robust form validation and API safety with Zod
- Easy to deploy, extend, and customize for future features

---

## 📄 License
This project is licensed under the MIT License. You are free to use, modify, and distribute it with attribution.

---

## 🙌 Acknowledgements
- [Vapi AI](https://www.vapi.ai/) – For providing conversational AI capabilities
- [Firebase](https://firebase.google.com/) – For authentication and cloud database services
- [Google Gemini](https://deepmind.google/technologies/gemini/) – For generative AI and intelligent insights
- [Tailwind CSS](https://tailwindcss.com/) – For styling and responsive design utilities
- [shadcn/ui](https://ui.shadcn.com/) – For elegant and accessible React components

