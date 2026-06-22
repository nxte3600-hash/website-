import { AdminLeadTable } from "@/components/AdminLeadTable";
import { AdminShell } from "@/components/AdminShell";
import { listLeads } from "@/lib/leadStore";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export default async function AdminDealersPage() {
  const leads = await listLeads("dealerLeads");
  return (
    <AdminShell>
      <h1 className="text-5xl font-black leading-none">Dealer Enquiries</h1>
      <p className="mt-4 max-w-3xl leading-8 text-steel-300">Track territory, investment range, priority and follow-up status for dealership prospects.</p>
      <div className="mt-8">
        <AdminLeadTable leads={leads} />
      </div>
    </AdminShell>
  );
}
