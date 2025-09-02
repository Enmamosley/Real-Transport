// Redirección automática de /terms-of-service a /terminos-de-servicio
export async function GET() {
  return new Response(null, {
    status: 301,
    headers: {
      Location: "/terminos-de-servicio"
    }
  });
}
