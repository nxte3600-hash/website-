import { AdminLeadTable } from "@/components/AdminLeadTable";
import { AdminShell } from "@/components/AdminShell";
import { listLeads } from "@/lib/leadStore";

export default async function AdminTestRidesPage() {
  const leads = await listLeads("testRideLeads");
  return (
    <AdminShell>
      <h1 className="text-5xl font-black leading-none">Test Ride Requests</h1>
      <p className="mt-4 max-w-3xl leading-8 text-steel-300">View model interest, city, callback needs and finance questions from ride requests.</p>
      <div className="mt-8">
        <AdminLeadTable leads={leads} />
      </div>
    </AdminShell>
  );
}
