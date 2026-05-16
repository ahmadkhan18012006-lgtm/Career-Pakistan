import PageShell from "../components/PageShell.jsx";
import SectionHeader from "../components/SectionHeader.jsx";
import { useConsulting } from "../context/ConsultingContext.jsx";

export default function MySessionsPage() {
  const { bookings } = useConsulting();

  return (
    <PageShell>
      <section className="page-section">
        <div className="container-page">
          <SectionHeader
            eyebrow="My sessions"
            title="Confirmed mentorship bookings"
            description="Sessions booked through the marketplace are saved locally and shown here instantly."
          />

          {bookings.length ? (
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {bookings.map((booking) => (
                <article key={booking.id} className="glass-card p-6">
                  <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-black text-green-700 dark:bg-green-400/10 dark:text-green-300">
                    {booking.status}
                  </span>
                  <h2 className="mt-4 text-2xl font-black dark:text-white">{booking.mentorName}</h2>
                  <p className="mt-2 text-sm font-bold text-slate-500 dark:text-slate-400">{booking.expertise}</p>
                  <div className="mt-5 grid gap-3">
                    <Info label="Date" value={booking.date} />
                    <Info label="Time" value={booking.slot} />
                    <Info label="Fee" value={`PKR ${booking.price.toLocaleString("en-PK")}`} />
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="glass-card p-8 text-center">
              <h2 className="text-2xl font-black dark:text-white">No sessions booked yet</h2>
              <p className="mt-2 text-slate-500 dark:text-slate-400">Book a mentor session to see it here.</p>
            </div>
          )}
        </div>
      </section>
    </PageShell>
  );
}

function Info({ label, value }) {
  return (
    <div className="rounded-2xl bg-white p-4 shadow-sm dark:bg-slate-950">
      <p className="text-xs font-black uppercase tracking-wider text-slate-400">{label}</p>
      <p className="mt-1 text-sm font-black text-secondary dark:text-white">{value}</p>
    </div>
  );
}
