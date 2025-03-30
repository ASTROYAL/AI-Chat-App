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

3. Set up environment variables:
   - Copy `.env.example` to `.env.local`
   - Get your API keys:
     - OpenAI API key from: https://platform.openai.com/api-keys
     - Anthropic API key from: https://console.anthropic.com/account/keys
   - Add your API keys to `.env.local`:
     ```
     OPENAI_API_KEY=your_actual_openai_api_key
     ANTHROPIC_API_KEY=your_actual_anthropic_api_key
     ```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Security Notes

- Never commit your `.env.local` file or expose your API keys
- Keep your API keys secure and private
- Use environment variables for sensitive data
- The `.env.example` file is provided as a template only

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
