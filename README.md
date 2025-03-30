# AI Chat Assistant

A modern Next.js application that allows users to chat with different AI models including GPT-4, Claude 3 Opus, and Mistral Large.

## Features

- Chat interface with support for multiple AI models
- Real-time streaming responses
- Markdown support for AI responses
- Dark mode support
- Responsive design
- TypeScript for type safety

## Prerequisites

- Node.js 18.x or later
- OpenAI API key
- Anthropic API key

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/yourusername/ai-chat-app.git
cd ai-chat-app
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env.local` file in the root directory and add your API keys:
```
OPENAI_API_KEY=your_openai_api_key_here
ANTHROPIC_API_KEY=your_anthropic_api_key_here
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/
│   ├── api/
│   │   └── chat/
│   │       └── route.ts
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   └── chat/
│       ├── ChatInterface.tsx
│       └── ModelSelector.tsx
├── config/
│   └── ai-models.ts
└── types/
    └── chat.ts
```

## Technologies Used

- Next.js 14
- TypeScript
- Tailwind CSS
- OpenAI API
- Anthropic API
- React Markdown

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
