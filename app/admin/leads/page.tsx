import { AdminLeadTable } from "@/components/AdminLeadTable";
import { AdminShell } from "@/components/AdminShell";
import { listLeads } from "@/lib/leadStore";

const sample = [
  { name: "Sample contact", phone: "+91 XXXXX XXXXX", email: "buyer@example.com", city: "Delhi NCR", status: "New", collection: "contactLeads", message: "Asked about range and finance." },
  { name: "Sample dealer", phone: "+91 XXXXX XXXXX", email: "dealer@example.com", city: "Lucknow", status: "Contacted", collection: "dealerLeads", message: "Dealer investment conversation." }
];

export default async function AdminLeadsPage() {
  const leads = await listLeads();
  return (
    <AdminShell>
      <h1 className="text-5xl font-black leading-none">All Leads</h1>
      <p className="mt-4 max-w-3xl leading-8 text-steel-300">Unified view for contact, dealer and test ride leads. Status updates and notes are supported through the API layer.</p>
      <div className="mt-8">
        <AdminLeadTable leads={leads.length ? leads : sample} />
      </div>
    </AdminShell>
  );
}
