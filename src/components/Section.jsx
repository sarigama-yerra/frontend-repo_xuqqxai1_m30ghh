export default function Section({ id, title, subtitle, children }) {
  return (
    <section id={id} className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
      <div className="mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900">{title}</h2>
        {subtitle && (
          <p className="mt-2 text-gray-600 max-w-2xl">{subtitle}</p>
        )}
      </div>
      {children}
    </section>
  );
}
