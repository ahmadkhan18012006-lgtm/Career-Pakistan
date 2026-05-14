export default function StickySidebar({ children }) {
  return (
    <aside className="glass-card h-fit p-5 lg:sticky lg:top-28">
      {children}
    </aside>
  );
}
