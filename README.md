# Chef Claude 🍽️ — AI-Powered Recipe Generator

Chef Claude is a fun and interactive web app that generates creative recipes based on the list of ingredients you provide. It uses modern React with Vite for a fast UI, and connects to an AI service to produce dynamic recipe suggestions. :contentReference[oaicite:0]{index=0}

## 🚀 Features

✅ Add ingredients dynamically  
✅ Generate AI-powered recipes based on what you have  
✅ Clean, responsive UI built with React + Vite  
✅ Fast local development and build setup
## 📸 Screenshots

### Ingredient Input & AI Recipe Output
<img width="1860" height="1000" alt="image" src="https://github.com/user-attachments/assets/a664eec4-fe29-4b03-b029-1a81a2956287" />
<img width="1779" height="921" alt="image" src="https://github.com/user-attachments/assets/8dbb2191-85f9-4452-a6a0-ccfba9676186" />


## 🧠 How It Works

1. Enter one ingredient at a time  
2. Add it to the ingredient list  
3. When you’ve added enough ingredients, click “Get Recipe”  
4. An AI model (e.g., Claude or similar) generates a recipe suggestion based on the input

## 🛠️ Tech Stack

| Layer | Technology |
|-------|------------|
| Frontend | React |
| Build Tool | Vite |
| Styling | CSS |
| AI Integration | AI recipe generation (via your configured AI API) |
| Deployment | (your choice — e.g., Netlify, Vercel, GitHub Pages) |

## 📦 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/Rishindra07/chef-claude.git
cd chef-claude
2. Install Dependencies
npm install

3. Run Locally
npm start


This will start the development server (usually at http://localhost:3000 or similar).

4. Build for Production
npm run build

📁 Project Structure
chef-claude/
├── components/         # React components (e.g., Ingredient inputs, Recipe display)
├── images/             # Static image assets
├── ai.js               # AI integration / API logic
├── index.jsx           # React entry point
├── App.jsx             # Main UI component
├── index.css           # Global styles
├── package.json        # Dependencies + scripts
├── vite.config.js      # Vite build configuration
└── README.md           # This file

🧩 Environment Variables

If your project uses an AI API that requires a key (e.g., Hugging Face, Claude, OpenAI, Anthropic):

Create a .env file in the root.

Add your key like:

VITE_API_KEY=your_api_key_here


Then access it in your code with import.meta.env.VITE_API_KEY.

🔗 Learn More

Check out:

Vite Documentation — https://vitejs.dev/

React Documentation — https://reactjs.org/

🎉 Thanks for using Chef Claude!

Made with ❤️ using React, Vite, and a pinch of AI magic! 🍳🔥
