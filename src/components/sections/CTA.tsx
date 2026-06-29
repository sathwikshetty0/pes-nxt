export function CTA() {
  return (
    <section className="bg-primary dark:bg-[#111] py-20">
      <div className="max-w-content mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          India needs entrepreneurs to solve real-world problems.
        </h2>
        <p className="text-white/80 mb-8 max-w-xl mx-auto">
          Start your entrepreneurial journey today with PES NEXT.
        </p>
        <a
          href="/apply"
          className="inline-block bg-accent hover:bg-accent-light text-white font-semibold rounded-full px-8 py-4 transition-colors"
        >
          Apply Now
        </a>
      </div>
    </section>
  );
}
