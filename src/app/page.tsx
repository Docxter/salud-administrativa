import { Build } from "./components/inicio";

export default function Home() {
  return (
    <div className="relative flex min-h-screen items-center justify-center bg-build bg-cover bg-center px-4 py-10">
      <div className="absolute inset-0 bg-slate-950/65 backdrop-blur-[2px]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(16,185,129,0.22),transparent_42%)]" />
      <Build />
    </div>
  );
}
