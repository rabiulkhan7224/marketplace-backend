
import app from './app';
import { prisma } from './app/lib/prisma';

const PORT = process.env.PORT || 5000;

async function main() {
  try {
    await prisma.$connect()
    console.log('✅ PostgreSQL connected via Prisma')

   app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`)
    })

   

  } catch (err) {
    console.error('❌ Startup failed:', err)
    process.exit(1)
  }
}

main()
  