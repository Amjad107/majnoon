export async function fetchRealResponse(prompt) {
  try {
    const res = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.NEXT_PUBLIC_OPENAI_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-4',
        messages: [{ role: 'user', content: prompt }],
        temperature: 0.5,
        max_tokens: 500,
      }),
    });

    const data = await res.json();

    const aiContent = data.choices?.[0]?.message?.content || '';

    return [
      {
        type: 'frontend',
        title: prompt,
        content: aiContent,
      },
    ];
  } catch (error) {
    console.error('OpenAI fetch error:', error);
    return [];
  }
}
