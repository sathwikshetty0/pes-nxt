const PROGRAMS = [
  {
    title: "PES NEXT Ignite",
    subtitle: "From Idea to Prototype",
    content:
      "The flagship 8-week pre-incubation cohort. Structured weekly sessions covering problem definition, stakeholder research, Blue Ocean Strategy, prototype development, and investor pitch preparation. Cohort 1 ran Feb–Jun 2026 with 14 teams.",
  },
  {
    title: "PES NEXT Incubation",
    subtitle: "Launch Your Startup",
    content:
      "Full incubation support for early-stage startups ready to validate and scale. Includes dedicated workspace, seed funding, legal and IPR support, mentorship, and investor readiness. Standard tenure of 2 years.",
  },
  {
    title: "Innovation Events",
    subtitle: "Showcase Your Ideas",
    content:
      "Annual hackathons, ideathons, startup weekends, and skill certification programs open to all students and aspiring entrepreneurs from the region.",
  },
];

export function Programs() {
  return (
    <section id="programs" className="py-20 dark:bg-[#0f0f0f]">
      <div className="max-w-content mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary dark:text-white mb-4">
            Our Programs
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Are you a student, researcher, or entrepreneur with an idea? PES NEXT
            has a program for every stage of your journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {PROGRAMS.map((program) => (
            <div
              key={program.title}
              className="bg-surface-alt dark:bg-[#1a1a1a] rounded-lg shadow-sm p-9 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg flex flex-col"
            >
              <h3 className="text-xl font-bold text-primary dark:text-white mb-1">
                {program.title}
              </h3>
              <p className="text-accent font-medium text-sm mb-4">
                {program.subtitle}
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {program.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
