import { AI_MODELS } from '@/config/ai-models';
import { AIModel } from '@/types/chat';
import { ChevronDown } from 'lucide-react';

interface ModelSelectorProps {
  selectedModel: AIModel;
  onModelSelect: (model: AIModel) => void;
}

export default function ModelSelector({ selectedModel, onModelSelect }: ModelSelectorProps) {
  return (
    <div className="relative">
      <select
        value={selectedModel.id}
        onChange={(e) => {
          const model = AI_MODELS.find((m) => m.id === e.target.value);
          if (model) onModelSelect(model);
        }}
        className="appearance-none bg-white dark:bg-gray-800 border rounded-lg px-4 py-2 pr-8 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        {AI_MODELS.map((model) => (
          <option key={model.id} value={model.id}>
            {model.name}
          </option>
        ))}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
        <ChevronDown className="w-4 h-4" />
      </div>
      <div className="mt-2 text-sm text-gray-500 dark:text-gray-400">
        {selectedModel.description}
      </div>
    </div>
  );
} 