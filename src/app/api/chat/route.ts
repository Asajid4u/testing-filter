import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { message, userId } = await request.json();

    // For now, just echo back the message with a simple response
    // In a real app, this would save to database and handle real-time messaging
    const response = {
      id: Date.now(),
      message: message,
      timestamp: new Date().toISOString(),
      sender: 'user',
      userId: userId || 'current-user'
    };

    // Simulate a response from Jane Cooper after a short delay
    setTimeout(() => {
      // This would normally be handled by WebSocket or polling
      console.log('Jane Cooper would respond here');
    }, 1000);

    return NextResponse.json({
      success: true,
      message: response,
      response: {
        id: Date.now() + 1,
        message: "Hi! Thanks for your message. I'm excited to chat about travel plans!",
        timestamp: new Date().toISOString(),
        sender: 'jane-cooper',
        userId: 'jane-cooper'
      }
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to send message' },
      { status: 500 }
    );
  }
}
