import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { useConsulting } from "../../context/ConsultingContext.jsx";

const dates = ["2026-05-16", "2026-05-17", "2026-05-18", "2026-05-19", "2026-05-20"];

export default function BookingModal({ mentor, onClose }) {
  const { bookSession, successMessage, setSuccessMessage } = useConsulting();
  const [date, setDate] = useState(dates[0]);
  const [slot, setSlot] = useState(mentor?.slots?.[0] || "");

  function confirm() {
    bookSession({ mentor, date, slot });
  }

  return (
    <AnimatePresence>
      {mentor && (
        <motion.div
          className="fixed inset-0 z-[80] grid place-items-center bg-slate-950/70 p-4 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="glass-card max-h-[92vh] w-full max-w-2xl overflow-y-auto p-6"
            initial={{ y: 24, scale: 0.96 }}
            animate={{ y: 0, scale: 1 }}
            exit={{ y: 24, scale: 0.96 }}
          >
            {successMessage ? (
              <div className="text-center">
                <span className="mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-green-100 text-2xl font-black text-green-700 dark:bg-green-400/10 dark:text-green-300">
                  ✓
                </span>
                <h2 className="mt-5 text-3xl font-black dark:text-white">{successMessage}</h2>
                <p className="mt-2 text-slate-500 dark:text-slate-400">Your session is now visible in My Sessions.</p>
                <button type="button" className="btn-primary mt-6" onClick={() => { setSuccessMessage(""); onClose(); }}>
                  Done
                </button>
              </div>
            ) : (
              <>
                <div className="flex flex-col gap-4 sm:flex-row">
                  <img src={mentor.image} alt={mentor.name} className="h-24 w-24 rounded-2xl object-cover" />
                  <div>
                    <p className="eyebrow">Book mentorship</p>
                    <h2 className="mt-3 text-3xl font-black dark:text-white">{mentor.name}</h2>
                    <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">{mentor.bio}</p>
                  </div>
                </div>

                <div className="mt-6">
                  <p className="mb-3 text-sm font-black dark:text-white">Select date</p>
                  <div className="grid gap-2 sm:grid-cols-5">
                    {dates.map((item) => (
                      <button
                        key={item}
                        type="button"
                        onClick={() => setDate(item)}
                        className={`rounded-2xl px-3 py-3 text-sm font-black transition ${
                          date === item ? "bg-primary text-white" : "bg-white text-slate-600 dark:bg-slate-950 dark:text-slate-300"
                        }`}
                      >
                        {item.slice(5)}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="mt-6">
                  <p className="mb-3 text-sm font-black dark:text-white">Select time slot</p>
                  <div className="grid gap-2 sm:grid-cols-3">
                    {mentor.slots.map((item) => (
                      <button
                        key={item}
                        type="button"
                        onClick={() => setSlot(item)}
                        className={`rounded-2xl px-4 py-3 text-sm font-black transition ${
                          slot === item ? "bg-green-500 text-white" : "bg-white text-slate-600 dark:bg-slate-950 dark:text-slate-300"
                        }`}
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <button type="button" className="btn-primary" onClick={confirm}>
                    Confirm Booking
                  </button>
                  <button type="button" className="btn-secondary" onClick={onClose}>
                    Cancel
                  </button>
                </div>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
