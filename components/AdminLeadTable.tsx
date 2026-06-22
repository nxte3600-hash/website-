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
};

export function AdminLeadTable({ leads }: { leads: AdminLead[] }) {
  return (
    <div className="overflow-x-auto rounded-[2rem] border border-white/10 bg-white/[0.06]">
      <table className="min-w-[860px] w-full text-left text-sm">
        <thead className="bg-electric-cyan/10 text-xs uppercase tracking-[0.16em] text-electric-cyan">
          <tr>
            <th className="p-4">Lead</th>
            <th className="p-4">Contact</th>
            <th className="p-4">Pipeline</th>
            <th className="p-4">Source</th>
            <th className="p-4">Message</th>
          </tr>
        </thead>
        <tbody>
          {leads.map((lead, index) => (
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
              <td className="p-4 text-steel-300">{lead.collection ?? "sample"}</td>
              <td className="max-w-xs p-4 text-steel-300">{lead.message ?? "No note yet"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
