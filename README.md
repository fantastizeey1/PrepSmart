# 🤖 PrepSmart - AI-Powered Interview Preparation

**PrepSmart** is a cutting-edge, AI-driven platform designed to revolutionize how job seekers prepare for interviews. Built with **Next.js 15**, **Firebase**, **Vapi AI**, and **Google Gemini**, it provides an immersive simulation experience that feels like a real conversation.

---

## ✨ Features

- **🗣️ AI Voice Interviews**: Practice with real-time AI agents powered by Vapi AI.
- **🧠 Intelligent Feedback**: Receive detailed analysis on your communication, technical skills, and posture (via Google Gemini).
- **� Secure Authentication**: Robust login system with Firebase.
- **📊 Performance Dashboard**: Track your progress and review past interview transcripts.
- **🎨 Modern Dark UI**: Sleek, responsive design built with Tailwind CSS and shadcn/ui.

---

## �️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Database & Auth**: [Firebase](https://firebase.google.com/)
- **Voice AI**: [Vapi AI](https://vapi.ai/)
- **LLM**: [Google Gemini 2.0 Flash](https://deepmind.google/technologies/gemini/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/)
- **Validation**: [Zod](https://zod.dev/)

---

## � Getting Started

### 1. Prerequisites

- Node.js 20+ installed
- A Firebase project
- Vapi AI and Google Gemini API keys

### 2. Clone the Repository

```bash
git clone https://github.com/fantastizeey1/PrepSmart.git
cd PrepSmart
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Environment Variables

Create a `.env.local` file in the root and add the following:

```env
# Firebase Client (Public)
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id

# Firebase Admin (Server)
FIREBASE_PROJECT_ID=your_project_id
FIREBASE_CLIENT_EMAIL=your_service_account_email
FIREBASE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n"

# AI Services
GOOGLE_GENERATIVE_AI_API_KEY=your_gemini_api_key
NEXT_PUBLIC_VAPI_PUBLIC_KEY=your_vapi_public_key
NEXT_PUBLIC_VAPI_WORKFLOW_ID=your_vapi_workflow_id
```

### 5. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the result.

---

## 📁 Folder Structure

```
PrepSmart/
├── app/                 # Next.js App Router (pages, layouts, api)
├── Components/          # React components (including shadcn/ui)
├── firebase/            # Firebase config & Admin SDK initialization
├── lib/                 # Server actions and utility functions
├── public/              # Static assets (images, logos)
├── types/               # TypeScript definitions
└── constants/           # Shared constants & schemas
```

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙌 Acknowledgements

- Thanks to the Vapi AI team for the incredible voice capabilities.
- Powered by Google Gemini.
