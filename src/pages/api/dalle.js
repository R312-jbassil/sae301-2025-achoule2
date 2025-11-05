export const prerender = false;

export async function POST({ request }) {
  const { prompt } = await request.json();
  const apiKey = import.meta.env.OPENAI_API_KEY;

  const response = await fetch("https://api.openai.com/v1/images/generations", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      prompt: prompt,
      n: 1,
      size: "512x512",
    }),
  });

  if (!response.ok) {
    return new Response(
      JSON.stringify({ error: true, status: response.status }),
      { status: response.status }
    );
  }

  const data = await response.json();
  return new Response(
    JSON.stringify({ image_url: data.data[0].url }),
    {
      headers: { "Content-Type": "application/json" }
    }
  );
}
