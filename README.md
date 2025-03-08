# ToDo App

A simple, responsive Todo application built with React and styled with Tailwind CSS.

## Features

- ✅ Create and delete tasks
- 📱 Fully responsive design (mobile, tablet, and desktop)
- ⌨️ Keyboard support (press Enter to add task)
- 🎨 Clean, modern UI with Tailwind CSS
- 🚫 Validation to prevent empty tasks
- 🗑️ Task deletion functionality
- 📊 Empty state handling

## Technologies Used

- React
- Tailwind CSS
- TypeScript/TSX

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

## Project Structure

```
src/
├── App.tsx         # Main application component
├── App.css         # Tailwind CSS imports
├── assets/         # Static assets
├── main.tsx        # Entry point
└── index.html      # HTML template
```

## Usage

1. Type a task in the input field
2. Click the "Add" button or press Enter to add the task
3. Click the delete icon next to a task to remove it

## Code Example

The main component uses React's useState hook to manage the todo list:

```jsx
import { useState } from 'react';

function App() {
  const [toDo, addToDo] = useState([]);
  const [input, setInput] = useState('');

  return (
    <div className="min-h-screen bg-gray-100 py-6 px-2 sm:py-10 sm:px-4">
      {/* App content */}
    </div>
  );
}
```

## Future Enhancements

- Task completion status (checkbox)
- Task categories or tags
- Local storage integration for persistence
- Drag and drop reordering
- Due dates and reminders
- Task editing functionality
- Dark mode support

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request
