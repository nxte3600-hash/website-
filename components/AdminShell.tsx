import Link from "next/link";
import { isAdminAuthenticated } from "@/lib/adminAuth";

const nav = [
  ["/admin/dashboard", "Dashboard"],
  ["/admin/blogs", "Blogs"],
  ["/admin/leads", "All Leads"],
  ["/admin/dealers", "Dealers"],
  ["/admin/test-rides", "Test Rides"],
  ["/admin/contacts", "Contacts"]
];

export async function AdminShell({ children }: { children: React.ReactNode }) {
  const authed = await isAdminAuthenticated();

  if (!authed) {
    return (
      <main className="min-h-screen bg-midnight px-4 py-28 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl rounded-[2rem] border border-electric-cyan/20 bg-white/[0.06] p-8 shadow-glow backdrop-blur-xl">
          <p className="text-xs font-black uppercase tracking-[0.22em] text-electric-cyan">Protected admin</p>
          <h1 className="mt-4 text-5xl font-black leading-none">Login required</h1>
          <p className="mt-5 leading-8 text-steel-300">
            The admin dashboard is scaffolded, but access requires a valid environment-based admin session.
          </p>
          <Link href="/admin/login" className="mt-7 inline-flex rounded-full bg-white px-6 py-4 font-black text-midnight">
            Go to login
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-midnight px-4 py-28 text-white sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[260px_1fr]">
        <aside className="h-fit rounded-[2rem] border border-white/10 bg-white/[0.06] p-5 backdrop-blur-xl lg:sticky lg:top-28">
          <h2 className="px-3 text-2xl font-black">NXT Admin</h2>
          <nav className="mt-5 grid gap-2">
            {nav.map(([href, label]) => (
              <Link key={href} href={href} className="rounded-2xl px-3 py-3 font-bold text-steel-300 transition hover:bg-electric-cyan/10 hover:text-white">
                {label}
              </Link>
            ))}
          </nav>
        </aside>
        <section>{children}</section>
      </div>
    </main>
  );
}
