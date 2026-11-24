import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-md py-16 text-center">
      <div className="text-5xl" aria-hidden>
        💻
      </div>
      <h1 className="mt-2 text-2xl font-extrabold">404 — Page not in memory</h1>
      <p className="mt-2 text-ink-2">That address wasn&apos;t found in the Year 9 Science hub.</p>
      <Link href="/" className="btn btn-primary mt-6">
        Back to Year 9 Science Home
      </Link>
    </div>
  );
}
