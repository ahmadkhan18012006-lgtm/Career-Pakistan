import PageShell from "../components/PageShell.jsx";
import SectionHeader from "../components/SectionHeader.jsx";
import FieldCard from "../components/FieldCard.jsx";
import { companies, fieldCategories } from "../data/fields.js";

export default function FieldsPage() {
  return (
    <PageShell>
      <section className="bg-gradient-to-b from-white to-background py-16">
        <div className="container-page">
          <SectionHeader
            eyebrow="Find your field"
            title="Explore every major tech career path"
            description="Grouped by category so BSCS, IT and Data Science students can compare skills, roles and Pakistani company signals quickly."
          />

          <div className="grid gap-12">
            {fieldCategories.map((category) => (
              <section key={category.title}>
                <div className="mb-5 flex flex-col justify-between gap-2 md:flex-row md:items-end">
                  <div>
                    <h2 className="text-2xl font-black tracking-tight text-secondary">{category.title}</h2>
                    <p className="mt-1 max-w-2xl text-sm leading-7 text-slate-600">{category.description}</p>
                  </div>
                  <span className="rounded-full bg-white px-4 py-2 text-sm font-black text-primary shadow-sm">
                    {category.fields.length} fields
                  </span>
                </div>
                <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                  {category.fields.map((field) => (
                    <FieldCard key={field.id} field={{ ...field, category: category.title, companies }} />
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
