import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-[60vh] flex-col items-center justify-center gap-4 p-8 text-center">
      <h1 className="text-5xl font-extrabold">Page not found</h1>
      <p className="max-w-md text-lg opacity-70">
        The page you are looking for doesn&apos;t exist or was moved. Let&apos;s
        get you back to the light.
      </p>
      <Link
        href="/"
        className="rounded-lg bg-orange-500 px-8 py-3 font-bold text-white transition hover:opacity-80 active:bg-orange-600"
      >
        Go home
      </Link>
    </main>
  );
}
