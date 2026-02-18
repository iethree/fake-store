export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <div className="mb-lg">
        fake store home (dev)
      </div>

      <a href="/account" className="ml-4 rounded bg-blue-500 px-3 py-2 text-sm text-white">
        Account
      </a>
      <a href="/checkout" className="ml-4 rounded bg-blue-500 px-3 py-2 text-sm text-white">
        Checkout
      </a>
    </div>
  );
}
