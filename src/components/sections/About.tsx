export function About() {
  return (
    <section id="about" className="bg-surface-alt dark:bg-[#0f0f0f] py-20">
      <div className="max-w-content mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Left column */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-primary dark:text-white mb-6">
            About PES NEXT
          </h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
            PES NEXT Innovation and Incubation Centre is a Section 8 company set
            up by P.E.S College of Engineering, Mandya, to emphasise Innovation and
            Entrepreneurship. Managed in association with InUnity Private Limited,
            the centre supports startups and entrepreneurs emerging from the Mandya
            region to drive community-based innovations for local and global growth.
          </p>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            The centre has supported 44+ startup teams through its incubation,
            with more than ₹1.09cr+ in seed grants disbursed and curently
            6 high-potential teams are incubated.
          </p>
        </div>

        {/* Right column — Vision & Mission cards */}
        <div className="flex flex-col gap-6">
          <div className="bg-white dark:bg-[#1a1a1a] rounded-lg shadow-sm p-8">
            <span className="text-4xl font-bold text-accent">01</span>
            <h3 className="text-xl font-bold text-primary dark:text-white mt-3 mb-2">
              Our Vision
            </h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              To enable, nurture, incubate and invest in innovators who focus on
              community-centric, inclusive innovation.
            </p>
          </div>
          <div className="bg-white dark:bg-[#1a1a1a] rounded-lg shadow-sm p-8">
            <span className="text-4xl font-bold text-accent">02</span>
            <h3 className="text-xl font-bold text-primary dark:text-white mt-3 mb-2">
              Our Mission
            </h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              To empower students, researchers, and entrepreneurs to solve regional
              problems by providing mentorship, infrastructure, funding, and
              ecosystem access.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
