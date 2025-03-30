'use client';

import ChatInterface from '@/components/chat/ChatInterface';
import ModelSelector from '@/components/chat/ModelSelector';
import { AI_MODELS } from '@/config/ai-models';
import { AIModel } from '@/types/chat';
import { useState } from 'react';

export default function Home() {
  const [selectedModel, setSelectedModel] = useState<AIModel>(AI_MODELS[0]);

  return (
    <main className="flex min-h-screen flex-col items-center p-4 md:p-8">
      <div className="w-full max-w-4xl space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">AI Chat Assistant</h1>
          <p className="text-gray-600 dark:text-gray-400">
            Chat with different AI models and explore their capabilities
          </p>
        </div>

        <div className="flex justify-center">
          <ModelSelector
            selectedModel={selectedModel}
            onModelSelect={setSelectedModel}
          />
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4">
          <ChatInterface selectedModel={selectedModel} />
        </div>
      </div>
    </main>
  );
}
