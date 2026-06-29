const STARTUPS = [
  { name: "Amritava", sector: "Sustainable Products" },
  { name: "Syncally", sector: "AI & Productivity" },
  { name: "bloomin.", sector: "Healthcare AI" },
  { name: "Snapmeet", sector: "Event Technology" },
  { name: "Chaduranga", sector: "Sports Tech" },
  { name: "Udaan IQ", sector: "EdTech AI" },
  { name: "Atri Nexus", sector: "Elder Care" },
  { name: "Swap Karo", sector: "MSME Tools" },
  { name: "AuditEase", sector: "FinTech AI" },
  { name: "StartSafe", sector: "Student Safety" },
  { name: "Swaastya", sector: "HealthTech" },
  { name: "LawLite", sector: "LegalTech" },
  { name: "Reshme Siri", sector: "AgriTech" },
];

function StartupPill({ name, sector }: { name: string; sector: string }) {
  return (
    <div className="flex items-center gap-3 px-5 py-3 bg-white dark:bg-[#1a1a1a] rounded-full shadow-sm shrink-0">
      <span className="font-bold text-primary dark:text-white whitespace-nowrap">{name}</span>
      <span className="text-xs text-accent bg-accent/10 rounded-full px-3 py-1 whitespace-nowrap">
        {sector}
      </span>
    </div>
  );
}

export function Startups() {
  const items = [...STARTUPS, ...STARTUPS]; // duplicate for seamless loop

  return (
    <section className="py-20">
      <div className="max-w-content mx-auto px-6 text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-primary dark:text-white mb-4">
          This is our Family
        </h2>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          With startups across HealthTech, AgriTech, AI, EdTech and more — meet
          the teams building from Mandya.
        </p>
      </div>

      <div className="overflow-hidden">
        <div className="animate-marquee flex gap-4 w-max">
          {items.map((s, i) => (
            <StartupPill key={`${s.name}-${i}`} name={s.name} sector={s.sector} />
          ))}
        </div>
      </div>
    </section>
  );
}
