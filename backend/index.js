require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { GoogleGenerativeAI } = require('@google/generative-ai');
// const admin = require('firebase-admin');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Initialize Firebase
// const serviceAccount = require(process.env.FIREBASE_SERVICE_ACCOUNT_KEY_PATH);
// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount),
// });

// Initialize Gemini
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

app.post('/api/generate', async (req, res) => {
  try {
    const { prompt } = req.body;

    const imageGenerationPrompt = `
      You are a Turkish tile design assistant.
      Interpret the user's description to create a visually rich and aesthetically pleasing pattern in the style of classic Turkish tile art.
      Pay close attention to color harmony, symmetry, balance of motifs, and historical styles (e.g., Iznik, Kütahya, Seljuk).
      Generate a detailed description for an image generation model.

      User's description: "${prompt}"

      Detailed image generation description:
    `;

    const model = genAI.getGenerativeModel({ model: 'gemini-pro' });
    const result = await model.generateContent(imageGenerationPrompt);
    const response = await result.response;
    const text = response.text();

    const imageUrl = `https://picsum.photos/seed/${encodeURIComponent(text)}/512`;

    res.json({ imageUrl });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to generate content' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
