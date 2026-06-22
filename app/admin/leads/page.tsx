import { AdminLeadTable } from "@/components/AdminLeadTable";
import { AdminShell } from "@/components/AdminShell";
import { listLeads } from "@/lib/leadStore";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export default async function AdminLeadsPage() {
  const leads = await listLeads();
  return (
    <AdminShell>
      <h1 className="text-5xl font-black leading-none">All Leads</h1>
      <p className="mt-4 max-w-3xl leading-8 text-steel-300">Unified view for contact, dealer and test ride leads. Status updates and notes are supported through the API layer.</p>
      <div className="mt-8">
        <AdminLeadTable leads={leads} />
      </div>
    </AdminShell>
  );
}
