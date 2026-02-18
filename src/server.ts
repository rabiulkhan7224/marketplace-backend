
import app from './app';

const PORT = process.env.PORT || 5000;

async function main() {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

main()
  