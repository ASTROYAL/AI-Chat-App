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
      return new NextResponse(
        JSON.stringify({ error: 'Messages and model are required' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const [modelProvider] = model.split('-');

    // Create a TransformStream for streaming the response
    const stream = new TransformStream();
    const writer = stream.writable.getWriter();
    const encoder = new TextEncoder();

    // Process the request based on the model provider
    try {
      switch (modelProvider) {
        case 'gpt':
          const completion = await openai.chat.completions.create({
            model: model,
            messages: messages,
            stream: true,
          });

          for await (const chunk of completion) {
            const content = chunk.choices[0]?.delta?.content || '';
            await writer.write(encoder.encode(`data: ${JSON.stringify({ content })}\n\n`));
          }
          break;

        case 'claude':
          const stream = await anthropic.messages.create({
            model: model,
            messages: messages.map((msg: Message) => ({
              role: msg.role === 'assistant' ? 'assistant' : 'user',
              content: msg.content,
            })),
            stream: true,
          });

          for await (const chunk of stream) {
            const content = chunk.delta?.text || '';
            await writer.write(encoder.encode(`data: ${JSON.stringify({ content })}\n\n`));
          }
          break;

        default:
          throw new Error(`Unsupported model: ${model}`);
      }

      await writer.close();
    } catch (error) {
      console.error('Error processing request:', error);
      await writer.write(
        encoder.encode(`data: ${JSON.stringify({ error: 'Error processing request' })}\n\n`)
      );
      await writer.close();
    }

    return new NextResponse(stream.readable, {
      headers: {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive',
      },
    });
  } catch (error) {
    console.error('Error in chat route:', error);
    return new NextResponse(
      JSON.stringify({ error: 'Internal server error' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
} 