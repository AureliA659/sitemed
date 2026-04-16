'use client';

export default function ServiceDetailPage({
  params,
}: {
  params: { serviceId: string };
}) {
  return (
    <main className="min-h-screen pt-24">
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-heading font-bold">Service: {params.serviceId}</h1>
          <p>Service detail page - Coming soon</p>
        </div>
      </section>
    </main>
  );
}
