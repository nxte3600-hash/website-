type AdminLead = {
  _id?: string;
  collection?: string;
  name?: string;
  phone?: string;
  email?: string;
  city?: string;
  status?: string;
  priority?: string;
  createdAt?: string | Date;
  message?: string;
  [key: string]: unknown;
};

export function AdminLeadTable({ leads }: { leads: AdminLead[] }) {
  if (!leads.length) {
    return (
      <div className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-8 text-steel-300">
        <h2 className="text-2xl font-black text-white">No leads yet</h2>
        <p className="mt-3 leading-7">New contact, dealer, and test ride submissions will appear here as soon as users submit the website forms.</p>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto rounded-[2rem] border border-white/10 bg-white/[0.06]">
      <table className="min-w-[1040px] w-full text-left text-sm">
        <thead className="bg-electric-cyan/10 text-xs uppercase tracking-[0.16em] text-electric-cyan">
          <tr>
            <th className="p-4">Lead</th>
            <th className="p-4">Contact</th>
            <th className="p-4">Pipeline</th>
            <th className="p-4">Source</th>
            <th className="p-4">Details</th>
            <th className="p-4">Message</th>
          </tr>
        </thead>
        <tbody>
          {leads.map((lead, index) => {
            const extras = Object.entries(lead).filter(([key, value]) => {
              const hidden = ["_id", "collection", "name", "phone", "email", "city", "status", "priority", "createdAt", "updatedAt", "message", "source", "notes", "followUpDone"];
              return !hidden.includes(key) && value !== undefined && value !== null && String(value).trim() !== "";
            });

            return (
              <tr key={lead._id ?? `${lead.name}-${index}`} className="border-t border-white/10">
                <td className="p-4">
                  <strong className="block text-white">{lead.name ?? "Unknown lead"}</strong>
                  <span className="text-steel-400">{lead.city ?? "City pending"}</span>
                </td>
                <td className="p-4 text-steel-300">
                  <span className="block">{lead.phone ?? "No phone"}</span>
                  <span>{lead.email ?? "No email"}</span>
                </td>
                <td className="p-4">
                  <span className="rounded-full bg-electric-cyan/12 px-3 py-2 font-black text-electric-cyan">{lead.status ?? "New"}</span>
                </td>
                <td className="p-4 text-steel-300">
                  <span className="block">{lead.collection ?? "lead"}</span>
                  <span className="text-steel-500">{lead.source ? String(lead.source) : ""}</span>
                </td>
                <td className="max-w-xs p-4 text-steel-300">
                  {extras.length ? extras.map(([key, value]) => (
                    <span key={key} className="mb-1 block">
                      <strong className="text-white">{key}:</strong> {String(value)}
                    </span>
                  )) : "No extra fields"}
                </td>
                <td className="max-w-xs p-4 text-steel-300">{lead.message ?? "No note yet"}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
