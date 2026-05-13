const paths = {
  route: "M4 6h5a3 3 0 0 1 0 6H7a3 3 0 0 0 0 6h13M18 16l2 2-2 2M6 4 4 8 6 4Z",
  menu: "M4 6h16M4 12h16M4 18h16",
  close: "M6 6l12 12M18 6 6 18",
  chart: "M4 19V5M4 19h16M8 16v-5M12 16V8M16 16v-8",
  spark: "M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3Z",
  map: "M9 18l-6 3V6l6-3 6 3 6-3v15l-6 3-6-3ZM9 3v15M15 6v15",
  shield: "M12 3l7 3v5c0 5-3 8-7 10-4-2-7-5-7-10V6l7-3Z",
  code: "M8 9l-4 3 4 3M16 9l4 3-4 3M14 5l-4 14",
  brain: "M9 4a3 3 0 0 0-3 3v1a3 3 0 0 0 0 6v1a3 3 0 0 0 5 2.2M15 4a3 3 0 0 1 3 3v1a3 3 0 0 1 0 6v1a3 3 0 0 1-5 2.2M12 6v12",
  cloud: "M7 18h10a4 4 0 0 0 0-8 6 6 0 0 0-11.5 2A3 3 0 0 0 7 18Z",
  arrow: "M5 12h14M13 5l7 7-7 7",
  check: "M5 12l4 4L19 6",
  target: "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18ZM12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10ZM12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z",
  briefcase: "M9 6V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1M4 8h16v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8ZM4 12h16",
  rocket: "M5 19c2-1 3-3 3-5M15 4c3 1 5 3 5 6 0 5-5 8-9 9-2-4-1-9 4-15ZM9 15l-4 4M14 9h.01",
  graduation: "M3 8l9-4 9 4-9 4-9-4ZM7 10v5c3 2 7 2 10 0v-5M21 8v6",
  layers: "M12 3l9 5-9 5-9-5 9-5ZM5 12l7 4 7-4M5 16l7 4 7-4"
};

export default function Icon({ name, className = "h-5 w-5" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d={paths[name] || paths.spark} />
    </svg>
  );
}
