# 📊 AI Unemployment Data Analyzer

## 🧠 Overview
**AI Unemployment Data Analyzer** is an interactive web-based tool that uses **Artificial Intelligence** to analyze unemployment data.  
Users can **upload a CSV file**, and the application automatically generates:
- Key **insights** and **summaries**
- **Visual charts** and **graphs**
- AI-generated **Python analysis code** for deeper exploration

This project showcases how **AI can assist in data analysis** by automating insight extraction, visualization, and code generation — making data exploration faster and smarter.

---

## ⚙️ Features
- 📂 **Upload CSV Files** — upload any unemployment-related dataset  
- 📈 **Automatic Visualizations** — bar charts, line graphs, pie charts, etc.  
- 🧮 **Insight Generation** — AI summarizes trends and correlations  
- 🧠 **Code Generation** — get Python snippets to reproduce analysis  
- 🌐 **Interactive Web Interface** — easy to use, clean layout  

---

## 🧰 Tech Stack
| Component | Technology |
|------------|-------------|
| Frontend | HTML, CSS, JavaScript |
| Backend | Flask (Python) |
| Data Analysis | Pandas, NumPy, Matplotlib / Plotly |
| AI Model | Google Gemini (for insight & code generation) |

---

## 🚀 How It Works
1. Upload your **CSV dataset** (e.g., unemployment rate, age group, country, etc.).  
2. The app processes your data and sends it to the **Gemini AI model**.  
3. AI analyzes and generates:
   - Textual insights  
   - Visual data charts  
   - Python analysis code  
4. The results are displayed in an easy-to-read dashboard.  

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local)
3. Run the app:
   `npm run dev`
