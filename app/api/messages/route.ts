import { NextRequest, NextResponse } from 'next/server';
import { ChatMessageSchema } from '@/lib/validation';

// Chat messages are stored in this table (to be created)
// CREATE TABLE chat_messages (
//   id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
//   user_id uuid,
//   message text NOT NULL,
//   user_ip text,
//   created_at timestamptz DEFAULT now()
// );

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate message
    const validatedData = ChatMessageSchema.parse(body);

    // Security: Check for SQL injection patterns
    const sqlPatterns = [
      /union\s+select/gi,
      /drop\s+table/gi,
      /insert\s+into/gi,
      /update\s+.*\s+set/gi,
      /delete\s+from/gi,
      /--|#|\/\*/gi,
    ];

    for (const pattern of sqlPatterns) {
      if (pattern.test(validatedData.message)) {
        return NextResponse.json(
          { error: 'Invalid input detected' },
          { status: 400 }
        );
      }
    }

    // Get client IP for logging
    const clientIp =
      request.headers.get('x-forwarded-for')?.split(',')[0] ||
      request.ip ||
      'unknown';

    // TODO: Store message in Supabase
    // For now, just log
    console.log('Chat message:', {
      message: validatedData.message,
      userId: validatedData.userId,
      ip: clientIp,
      timestamp: new Date().toISOString(),
    });

    // Return acknowledgment
    return NextResponse.json(
      {
        success: true,
        id: crypto.randomUUID(),
        message: validatedData.message,
        timestamp: new Date().toISOString(),
      },
      { status: 201 }
    );
  } catch (error) {
    // Handle validation errors
    if (error instanceof Error && error.name === 'ZodError') {
      return NextResponse.json(
        { error: 'Validation failed' },
        { status: 400 }
      );
    }

    console.error('Chat API error:', error);
    return NextResponse.json(
      { error: 'An error occurred' },
      { status: 500 }
    );
  }
}

// GET messages (optional - for chat history)
export async function GET(request: NextRequest) {
  try {
    // TODO: Implement proper session/user tracking
    // For demo, just return empty array
    return NextResponse.json(
      {
        messages: [
          {
            id: '1',
            role: 'assistant',
            message: 'Hello! How can we help you today?',
            timestamp: new Date().toISOString(),
          },
        ],
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Chat GET error:', error);
    return NextResponse.json(
      { error: 'An error occurred' },
      { status: 500 }
    );
  }
}

// CORS preflight
export async function OPTIONS(request: NextRequest) {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}
