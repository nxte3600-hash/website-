import { AdminLoginForm } from "@/components/AdminLoginForm";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export default function AdminLoginPage() {
  return (
    <main className="min-h-screen bg-midnight px-4 py-28 text-white sm:px-6 lg:px-8">
      <AdminLoginForm />
    </main>
  );
}
