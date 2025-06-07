import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold mb-6">Separación Libre</h1>
      <p className="text-lg mb-4 text-center max-w-md">
        App para facilitar la convivencia tras una separación.
      </p>
      <Link
        href="/contrato"
        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Ir al contrato entre progenitores
      </Link>
    </main>
  );
}
