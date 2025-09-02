// Redirección automática de /services a /servicios
export async function GET() {
  return new Response(null, {
    status: 301,
    headers: {
      Location: "/servicios"
    }
  });
}
