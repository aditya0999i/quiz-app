# Quiz App

A modern, interactive quiz application built with React, TypeScript, and Tailwind CSS.

## Features

- **Welcome Screen**: Clean introduction with quiz overview
- **Interactive Quiz**: 
  - One question at a time for focused thinking
  - 4 multiple-choice options per question
  - Immediate feedback on answers
  - Navigation between questions (Previous/Next)
  - Progress bar and score tracking
- **Results Page**: 
  - Final score display with percentage
  - Detailed breakdown of all answers
  - Correct/incorrect answer comparison
  - Motivational messages based on performance
- **Responsive Design**: Works seamlessly on desktop and mobile devices

## Technical Implementation

- **React 19** with functional components and hooks
- **TypeScript** for type safety
- **Tailwind CSS** for modern, responsive styling
- **State Management**: Uses React hooks (useState, useEffect) for quiz flow
- **Component Architecture**: Modular components with clear separation of concerns
- **Local Data**: Questions loaded from local JSON file

## State Flow

1. **Welcome** → User sees introduction and starts quiz
2. **Quiz** → Questions are presented one at a time with navigation
3. **Results** → Final score and detailed breakdown with restart option

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Open your browser and navigate to the local development URL

## Project Structure

```
src/
├── components/
│   ├── Welcome.tsx      # Welcome screen component
│   ├── Quiz.tsx         # Main quiz interface
│   └── Results.tsx      # Results and summary
├── data/
│   └── questions.json   # Quiz questions data
├── types/
│   └── index.ts         # TypeScript type definitions
├── App.tsx              # Main app component with state management
└── main.tsx             # App entry point
```

## Customization

- **Questions**: Modify `src/data/questions.json` to add/change questions
- **Styling**: Update Tailwind classes in components for different visual themes
- **Scoring**: Modify scoring logic in the `handleAnswerSelect` function
- **Navigation**: Adjust quiz flow in the main App component

## Requirements Met

✅ Clean, responsive layout for desktop and mobile  
✅ One question at a time with four options  
✅ Prominent navigation (Next, Previous, Submit/Finish)  
✅ Clear score and progress display  
✅ Modern, readable font (system default)  
✅ 10 multiple-choice questions from local JSON  
✅ Score tracking (correct/incorrect)  
✅ Final score display  
✅ Results summary with answer breakdown  
✅ Restart quiz functionality  
✅ React functional components with hooks  
✅ Effective use of props  
✅ Tailwind CSS styling  
✅ State management for quiz flow  
✅ Local JSON data source  

## Bonus Features

- Smooth transitions and hover effects
- Progress bar visualization
- Motivational messages based on performance
- Detailed answer analysis
- Responsive grid layouts
- Accessibility considerations
