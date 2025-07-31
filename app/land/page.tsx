import LandConsulting from "@/components/Land/LandConsulting";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";

export default function LandPage() {
  return (
    <div
      className="w-full h-full min-h-screen"
      style={{
        background:
          "linear-gradient(to right, var(--main-slate-light) 0%, var(--main-gray) 80%, var(--main-slate-dark) 100%)",
        fontFamily:
          "Montserrat, system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
        overflow: "hidden",
      }}
    >
      <DashboardSidebar />
      <div className="ml-0 md:ml-[280px]">
        <LandConsulting />
      </div>
    </div>
  );
}
