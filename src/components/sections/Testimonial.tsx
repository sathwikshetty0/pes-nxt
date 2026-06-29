export function Testimonial() {
  return (
    <section className="py-16 bg-surface-alt dark:bg-[#0f0f0f]">
      <div className="max-w-content mx-auto px-6 text-center">
        <blockquote className="max-w-3xl mx-auto">
          <p className="text-xl md:text-2xl font-medium text-gray-700 dark:text-gray-200 italic leading-relaxed">
            &ldquo;PES NEXT gave us the mentorship, workspace, and funding to go from a raw idea to a working product in just 8 weeks.&rdquo;
          </p>
          <footer className="mt-6">
            <p className="text-sm font-semibold text-primary dark:text-white">
              — Ignite Cohort 1 Founder
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
              [Name to be added]
            </p>
          </footer>
        </blockquote>
      </div>
    </section>
  );
}
