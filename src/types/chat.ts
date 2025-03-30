export type MessageRole = 'user' | 'assistant' | 'system';

export interface Message {
  id: string;
  role: MessageRole;
  content: string;
  createdAt: Date;
  model?: string;
}

export interface Chat {
  id: string;
  title: string;
  messages: Message[];
  createdAt: Date;
  updatedAt: Date;
  model: string;
}

export type AIModel = {
  id: string;
  name: string;
  provider: string;
  description: string;
  maxTokens: number;
  temperature: number;
};

export interface ChatState {
  chats: Chat[];
  currentChat: Chat | null;
  selectedModel: AIModel | null;
  isLoading: boolean;
  error: string | null;
} 