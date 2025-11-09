# ÇiniAI - Smart Tile Design Assistant

## About The Project

ÇiniAI is a design tool that allows users to describe patterns or themes they want to see in Turkish tile art in natural language. The Gemini model analyzes this description to produce high-resolution, original tile patterns.

## Key Features

*   **Pattern Description Area:** Users can enter descriptions in Turkish or English, such as "a classic Iznik style tile with tulips and geometric motifs."
*   **Gemini Analysis:** The description is sent to Gemini. The model analyzes:
    *   Color palettes (e.g., cobalt blue, turquoise, coral red)
    *   Pattern structure (geometric, floral, calligraphy, symmetrical, etc.)
    *   Cultural motifs (Seljuk, Ottoman, Iznik, Kütahya style)
    *   The overall composition of the pattern.
*   **Automatic Image Generation:** Gemini transforms the description into a visual generation API prompt (e.g., `image_gen.text2im`) and creates an original tile pattern.
*   **Live Preview:** The generated pattern is displayed in the application. The user can change the colors or composition (e.g., "make the red tones more dominant").
*   **Save & Share:** The user can download their design in high resolution or export it as a PDF.

## Built With

*   **Backend:** Gemini API + Firebase
*   **Image Generation:** `image_gen.text2im` or Gemini Vision
*   **UI:** React
*   **File Export:** PNG / PDF

## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

*   npm
    ```sh
    npm install npm@latest -g
    ```

### Installation

1.  Clone the repo
    ```sh
    git clone https://github.com/your_username_/CiniAI.git
    ```
2.  Install NPM packages for the frontend
    ```sh
    cd frontend
    npm install
    ```
3.  Install NPM packages for the backend
    ```sh
    cd ../backend
    npm install
    ```

## Usage

To run the application, you will need to run the frontend and backend servers separately.

### Frontend

```sh
cd frontend
npm start
```

### Backend

```sh
cd ../backend
npm start
```
