
import { GoogleGenAI, Type } from "@google/genai";
import type { AnalysisResult } from '../types';

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
    throw new Error("API_KEY environment variable not set");
}

const ai = new GoogleGenAI({ apiKey: API_KEY });

const responseSchema = {
  type: Type.OBJECT,
  properties: {
    pythonCode: {
      type: Type.STRING,
      description: "Complete Python code using pandas and matplotlib to clean, analyze, and plot the unemployment data. The code should be well-commented.",
    },
    chartData: {
      type: Type.ARRAY,
      description: "Data formatted for a time-series line chart.",
      items: {
        type: Type.OBJECT,
        properties: {
          date: {
            type: Type.STRING,
            description: "The date for the data point in 'YYYY-MM' format.",
          },
          rate: {
            type: Type.NUMBER,
            description: "The unemployment rate as a percentage.",
          },
        },
        required: ["date", "rate"],
      },
    },
    insights: {
      type: Type.ARRAY,
      description: "An array of key insights derived from the data analysis.",
      items: {
        type: Type.OBJECT,
        properties: {
          title: {
            type: Type.STRING,
            description: "A concise title for the insight.",
          },
          text: {
            type: Type.STRING,
            description: "A detailed paragraph explaining the insight.",
          },
          icon: {
            type: Type.STRING,
            description: "An icon identifier from the list: 'trend', 'impact', 'policy', 'recession', 'growth', 'inflation', 'seasonal'.",
          }
        },
        required: ["title", "text", "icon"],
      },
    },
  },
  required: ["pythonCode", "chartData", "insights"],
};

export const analyzeUnemploymentData = async (csvData: string): Promise<AnalysisResult> => {
    const prompt = `
    Analyze the following unemployment CSV data. Your primary goal is to identify trends, the impact of Covid-19 (around 2020), and provide policy-relevant insights.

    CSV Data:
    \`\`\`csv
    ${csvData}
    \`\`\`

    Your response must be a single, valid JSON object that adheres to the provided schema.
    1.  **pythonCode**: Generate Python code that a data scientist would write. It should use pandas for data loading and cleaning, and matplotlib/seaborn for creating a time-series plot. Ensure the code is clear, commented, and handles potential date parsing issues.
    2.  **chartData**: Extract the time-series data suitable for a line chart. The date should be consistently formatted as 'YYYY-MM'.
    3.  **insights**: Provide three distinct and insightful observations.
        - One about the overall **trend** or seasonality.
        - One specifically about the **impact** of Covid-19.
        - One suggesting a potential **policy** implication based on the data.
        Assign an appropriate icon to each insight from this list: 'trend', 'impact', 'policy', 'recession', 'growth', 'inflation', 'seasonal'. Use the more specific icons like 'recession' or 'seasonal' when applicable.
    `;

    try {
        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: prompt,
            config: {
                responseMimeType: "application/json",
                responseSchema: responseSchema,
                temperature: 0.2,
            },
        });
        
        const jsonText = response.text.trim();
        const result = JSON.parse(jsonText) as AnalysisResult;
        
        // Basic validation
        if (!result.pythonCode || !result.chartData || !result.insights) {
            throw new Error("Invalid response structure from AI.");
        }
        
        return result;

    } catch (error) {
        console.error("Error calling Gemini API:", error);
        throw new Error("Failed to analyze data with Gemini API.");
    }
};