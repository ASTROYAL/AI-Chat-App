import { AIModel } from '@/types/chat';

export const AI_MODELS: AIModel[] = [
  {
    id: 'gpt-4',
    name: 'GPT-4',
    provider: 'openai',
    description: 'Most capable model, great for complex tasks',
    maxTokens: 8192,
    temperature: 0.7,
  },
  {
    id: 'claude-3-opus',
    name: 'Claude 3 Opus',
    provider: 'anthropic',
    description: 'Advanced reasoning and analysis',
    maxTokens: 4096,
    temperature: 0.7,
  },
  {
    id: 'mistral-large',
    name: 'Mistral Large',
    provider: 'mistral',
    description: 'Balanced performance and efficiency',
    maxTokens: 32768,
    temperature: 0.7,
  },
]; 