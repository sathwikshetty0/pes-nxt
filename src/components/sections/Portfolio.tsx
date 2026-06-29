"use client";

const STARTUPS = [
  { name: "Amritava", sector: "Sustainable Products", description: "Biodegradable cutlery from agricultural waste — circular economy model supporting rural livelihoods.", img: "photo-1542601906990-b4d3fb778b09" },
  { name: "Syncally", sector: "AI & Productivity", description: "Unified platform integrating code repos, meeting transcripts, and task tools for intelligent knowledge retrieval.", img: "photo-1551434678-e076c223a692" },
  { name: "bloomin.", sector: "Healthcare / MedTech", description: "AI tool converting spoken or handwritten clinical inputs into structured digital medical records.", img: "photo-1576091160399-112ba8d25d1d" },
  { name: "Snapmeet", sector: "Event Technology", description: "Zero-commission event platform with QR-based entry, automated registrations, and secure payments.", img: "photo-1540575467063-178a50c2df87" },
];

export function Portfolio() {
  return (
    <section id="portfolio" className="py-20">
      <div className="max-w-content mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary dark:text-white mb-4">
            Our Startups
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Meet the high-potential teams building from Mandya.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {STARTUPS.map((startup) => (
            <div
              key={startup.name}
              className="group h-56"
              style={{ perspective: "1000px" }}
            >
              <div
                className="relative w-full h-full transition-transform duration-500 group-hover:[transform:rotateY(180deg)]"
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* FRONT */}
                <div
                  className="absolute inset-0 rounded-xl overflow-hidden"
                  style={{ backfaceVisibility: "hidden" }}
                >
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                      backgroundImage: `url('https://images.unsplash.com/${startup.img}?w=600&h=400&fit=crop&q=75')`,
                    }}
                  />
                  <div className="absolute inset-0 bg-black/35" />
                  <div className="relative h-full flex items-center justify-center p-6">
                    <h3 className="text-2xl font-bold text-white text-center drop-shadow-lg">
                      {startup.name}
                    </h3>
                  </div>
                </div>

                {/* BACK */}
                <div
                  className="absolute inset-0 rounded-xl bg-white dark:bg-[#1a1a1a] border border-gray-100 dark:border-[#333] shadow-lg flex flex-col items-center justify-center p-6 text-center"
                  style={{
                    backfaceVisibility: "hidden",
                    transform: "rotateY(180deg)",
                  }}
                >
                  <span className="inline-block text-xs font-medium bg-accent/10 text-accent px-3 py-1 rounded-full mb-3">
                    {startup.sector}
                  </span>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                    {startup.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
