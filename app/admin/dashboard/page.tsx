import { AdminShell } from "@/components/AdminShell";
import { listCmsBlogPosts } from "@/lib/blogStore";
import { listLeads } from "@/lib/leadStore";

const sampleLeads = [
  { name: "Dealer prospect", phone: "+91 XXXXX XXXXX", city: "Noida", status: "New", collection: "dealerLeads", message: "Interested in scooter and e-rickshaw territory." },
  { name: "Test ride request", phone: "+91 XXXXX XXXXX", city: "Bengaluru", status: "Follow-up", collection: "testRideLeads", message: "Wants PRINCE HS test ride." }
];

type DashboardLead = {
  status?: string;
};

export default async function AdminDashboardPage() {
  const leads = await listLeads();
  const posts = await listCmsBlogPosts();
  const data: DashboardLead[] = leads.length ? (leads as DashboardLead[]) : sampleLeads;
  const newLeads = data.filter((lead) => lead.status === "New").length;
  const followUps = data.filter((lead) => lead.status === "Follow-up").length;

  return (
    <AdminShell>
      <div>
        <p className="text-xs font-black uppercase tracking-[0.22em] text-electric-cyan">Lead command center</p>
        <h1 className="mt-3 text-5xl font-black leading-none">Admin Dashboard</h1>
        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {[
            ["Total leads", data.length],
            ["New leads", newLeads],
            ["Follow-ups", followUps],
            ["Blog posts", posts.length]
          ].map(([label, value]) => (
            <div key={label} className="rounded-2xl border border-white/10 bg-white/[0.06] p-6">
              <strong className="block text-4xl font-black text-white">{value}</strong>
              <span className="mt-2 block text-xs font-black uppercase tracking-[0.16em] text-electric-cyan">{label}</span>
            </div>
          ))}
        </div>
        <div className="mt-8 rounded-[2rem] border border-white/10 bg-white/[0.06] p-7">
          <h2 className="text-3xl font-black">Pipeline status</h2>
          <div className="mt-5 grid gap-3 sm:grid-cols-5">
            {["New", "Contacted", "Follow-up", "Converted", "Lost"].map((stage) => (
              <div key={stage} className="rounded-2xl bg-midnight/70 p-4">
                <span className="text-sm font-black text-white">{stage}</span>
                <div className="mt-3 h-2 rounded-full bg-white/10">
                  <div className="h-full rounded-full bg-gradient-to-r from-electric-cyan to-electric-green" style={{ width: stage === "New" ? "72%" : stage === "Follow-up" ? "48%" : "28%" }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AdminShell>
  );
}
