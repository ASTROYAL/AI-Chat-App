import { Message } from '@/types/chat';
import Anthropic from '@anthropic-ai/sdk';
import { NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

export async function POST(req: Request) {
  try {
    const { messages, model } = await req.json();

    if (!messages || !model) {
      return NextResponse.json(
        { error: 'Messages and model are required' },
        { status: 400 }
      );
    }

    let response;
    const modelConfig = model.split('-')[0];

    switch (modelConfig) {
      case 'gpt':
        response = await openai.chat.completions.create({
          model: model,
          messages: messages.map((msg: Message) => ({
            role: msg.role,
            content: msg.content,
          })),
          stream: true,
        });
        break;

      case 'claude':
        response = await anthropic.messages.create({
          model: model,
          max_tokens: 4096,
          messages: messages.map((msg: Message) => ({
            role: msg.role === 'assistant' ? 'assistant' : 'user',
            content: msg.content,
          })),
          stream: true,
        });
        break;

      default:
        return NextResponse.json(
          { error: 'Unsupported model' },
          { status: 400 }
        );
    }

    return new Response(response.toReadableStream(), {
      headers: {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive',
      },
    });
  } catch (error) {
    console.error('Error in chat completion:', error);
    return NextResponse.json(
      { error: 'Failed to generate response' },
      { status: 500 }
    );
  }
} 