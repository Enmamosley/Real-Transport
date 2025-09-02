// Redirección automática de /about a /nosotros
export async function GET() {
  return new Response(null, {
    status: 301,
    headers: {
      Location: "/nosotros"
    }
  });
}
