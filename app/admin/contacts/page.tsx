import { AdminLeadTable } from "@/components/AdminLeadTable";
import { AdminShell } from "@/components/AdminShell";
import { listLeads } from "@/lib/leadStore";

export default async function AdminContactsPage() {
  const leads = await listLeads("contactLeads");
  return (
    <AdminShell>
      <h1 className="text-5xl font-black leading-none">Contact Leads</h1>
      <p className="mt-4 max-w-3xl leading-8 text-steel-300">General vehicle, fleet, finance and support enquiries from the contact page.</p>
      <div className="mt-8">
        <AdminLeadTable leads={leads} />
      </div>
    </AdminShell>
  );
}
