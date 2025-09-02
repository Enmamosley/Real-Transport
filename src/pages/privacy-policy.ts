// Redirección automática de /privacy-policy a /aviso-de-privacidad
export async function GET() {
  return new Response(null, {
    status: 301,
    headers: {
      Location: "/aviso-de-privacidad"
    }
  });
}
