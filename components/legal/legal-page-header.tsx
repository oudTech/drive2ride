export function LegalPageHeader({ title }: { title: string }) {
  return (
    <section id="home" className="bg-black pt-40 pb-16 sm:pt-44 sm:pb-20">
      <div className="text-center">
        <h1 className="text-4xl font-extrabold text-white sm:text-5xl">
          {title}
        </h1>
      </div>
    </section>
  );
}
