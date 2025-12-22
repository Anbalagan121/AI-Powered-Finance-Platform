import HeroSection from "../components/hero";

const statsData = [
  { value: "10K+", label: "Active Users" },
  { value: "₹2 Crore", label: "Transaction Tracked" },
  { value: "99.9%", label: "Uptime" },
  { value: "4.9/5", label: "User Rating" },
];

export default function Home() {
  return (
    <div className="mt-40 flex flex-col items-center gap-24">

      <HeroSection />

      <section className="py-20 bg-blue-50 w-full">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {statsData.map((statData, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">
                  {statData.value}
                </div>
                <div className="text-gray-600">
                  {statData.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
