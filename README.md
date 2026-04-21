# Election Process Assistant

## 📌 Project Overview
The Election Process Assistant is an interactive, dynamic web application designed to help users understand the complex election process, typical timelines, and essential voting steps. Built with modern web technologies, it features an interactive timeline and an AI-powered conversational agent that provides strictly educational and neutral information regarding elections.

**🔗 Live Preview (V1):** [https://election-assistant.vercel.app/](https://election-assistant.vercel.app/)
**🔗 Live Preview (V2 - Latest Score Improvements):** [https://election-assistant-spy3.vercel.app/](https://election-assistant-spy3.vercel.app/)


## 🎯 Chosen Vertical
**Educational/Civic Engagement Assistant**
The project focuses on civic education by simplifying the electoral process for the general public, encouraging voter awareness, and helping users understand how democratic systems function.

## 🛠 Approach and Logic
1. **Interactive Timeline**: 
   - A visual, easy-to-read chronological path outlining major steps from Voter Registration to Inauguration.
   - Designed with Vanilla CSS for a premium, lightweight, and modern aesthetic (glassmorphism, subtle micro-animations).
   
2. **AI-Powered Conversational Agent**: 
   - Integrates the Google Gemini API to dynamically answer user questions about the election process.
   - **Logic & Safeguards**: The assistant is strictly prompted with system instructions to remain neutral. It does not endorse candidates, express political preferences, or discuss sensitive non-process related political issues. Its primary role is to inform and educate.

3. **Performance & Optimization**:
   - Built as a React Single Page Application (SPA) using Vite for lightning-fast load times.
   - Minimal core dependencies (`react`, `lucide-react`, `@google/generative-ai`) to ensure the repository remains well under the 1 MB limit.
   - Leverages `React.memo` and `useCallback` to prevent unnecessary component re-renders.

4. **Accessibility (a11y)**:
   - Implements semantic HTML (`<main>`, `<header>`, `<ul>`, `<li>`) for proper screen reader navigation.
   - ARIA labels (`aria-label`, `aria-live`, `aria-busy`) are used in the dynamic chat interface to ensure interactive elements and live updates are accessible.

5. **Testing**:
   - Includes an automated test suite powered by **Vitest** and **React Testing Library**.
   - Validates UI component rendering, state changes, and mocked API interactions.

## 💡 Assumptions Made
- The user has access to a modern web browser to view the application.
- The user has a valid Google Gemini API key to run the assistant locally.
- The application assumes the context of a general U.S. Presidential Election timeline as the default educational example, though the AI can explain other types of elections if asked.

## 🚀 How to Run Locally

1. **Clone the repository** (if not already done).
2. **Install dependencies**:
   ```bash
   npm install
   ```
3. **Configure the Environment**:
   - Copy `.env.example` to a new file named `.env`.
   - Add your Gemini API key to the `.env` file:
     ```env
     VITE_GEMINI_API_KEY=your_actual_api_key_here
     ```
4. **Start the Development Server**:
   ```bash
   npm run dev
   ```
5. **Open your browser** to `http://localhost:5173` to interact with the assistant.

## 🔐 Security & Best Practices
- The `.env` file is included in `.gitignore` to prevent leaking API keys to the public repository.
- **Cross-Site Scripting (XSS) Protection**: All markdown-parsed content returned by the Gemini API is rigorously sanitized using `DOMPurify` before being injected into the DOM via `dangerouslySetInnerHTML`.
- The repository only contains a single `main` branch.

## 🧪 Running Tests
To run the automated unit test suite locally:
```bash
npm run test
```
