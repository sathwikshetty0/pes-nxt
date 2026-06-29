const BADGES = [
  "Idea to Prototype",
  "Mentoring",
  "Co-Working Space",
  "Networking",
  "Funding",
  "IPR Support",
];

const CARDS = [
  {
    title: "Lab & Workspace Access",
    description:
      "At our Innovation Centre, state-of-the-art facilities for product development are made available so entrepreneurs can turn ideas into products. Includes Intel HP AI Lab, EV Centre of Excellence, Apple Education Centre, and Prototyping Facilities.",
  },
  {
    title: "Funding Opportunities",
    description:
      "Founders receive milestone-based seed funding and intensive coaching to assemble all components that qualify them for grants and make them investor-ready.",
  },
  {
    title: "Dedicated Mentors",
    description:
      "Guidance committed to the founder and the business journey, provided by mentors from InUnity Private Limited, industry experts, faculty, and alumni practitioners.",
  },
  {
    title: "Networking Sessions",
    description:
      "Access our growing network of peers, investors, and ecosystem partners committed to building from Mandya. Includes Startup India alignment and regional government program access.",
  },
];

export function Services() {
  return (
    <section id="services" className="bg-surface-alt dark:bg-[#0f0f0f] py-20">
      <div className="max-w-content mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary dark:text-white mb-4">
            Our Great Services
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            We are a support system for establishing and growing startups that use
            entrepreneurship and innovation as a tool for creating significant
            social impact.
          </p>
        </div>

        {/* Badges */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {BADGES.map((badge) => (
            <span
              key={badge}
              className="px-4 py-2 rounded-full bg-white dark:bg-[#1a1a1a] dark:text-gray-300 dark:border-[#333] text-primary text-sm font-medium shadow-sm border border-gray-100"
            >
              {badge}
            </span>
          ))}
        </div>

        {/* Service cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {CARDS.map((card) => (
            <div
              key={card.title}
              className="bg-white dark:bg-[#1a1a1a] rounded-lg shadow-sm p-9 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <h3 className="text-xl font-bold text-primary dark:text-white mb-3">
                {card.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
