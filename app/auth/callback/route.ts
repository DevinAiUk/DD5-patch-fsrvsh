// For static export, we'll use a simplified callback route
export async function GET() {
  return Response.redirect(new URL('/', process.env.NEXT_PUBLIC_URL || 'http://localhost:3000'));
}