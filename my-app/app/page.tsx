import HeroSection from "../components/hero";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";

/* ===== DATA ===== */
const statsData = [
  { value: "50K+", label: "Active Users" },
  { value: "₹2 Crore", label: "Transactions Tracked" },
  { value: "99.9%", label: "Uptime" },
  { value: "4.9/5", label: "User Rating" },
];

const featuresData = [
  { icon: "📊", title: "Advanced Analytics", desc: "AI powered insights for better decisions" },
  { icon: "🧾", title: "Receipt Scanner", desc: "Scan & auto-track expenses instantly" },
  { icon: "🥧", title: "Budget Planning", desc: "Smart budgeting suggestions" },
  { icon: "💳", title: "Multi-Account", desc: "All accounts in one dashboard" },
  { icon: "🌍", title: "Multi-Currency", desc: "Real-time currency conversion" },
  { icon: "⚡", title: "Auto Insights", desc: "Daily financial recommendations" },
];

const howItWorksData = [
  { icon: "📝", title: "Create Account", desc: "Quick and secure signup" },
  { icon: "📈", title: "Track Spending", desc: "Automatic transaction tracking" },
  { icon: "🤖", title: "AI Insights", desc: "Improve money habits using AI" },
];

const testimonialsData = [
  { name: "Sarah Johnson", role: "Business Owner", img: "https://randomuser.me/api/portraits/women/75.jpg", quote: "Changed how I manage money." },
  { name: "Michael Chen", role: "Freelancer", img: "https://randomuser.me/api/portraits/men/32.jpg", quote: "Saves me hours every month." },
  { name: "Emily Rodriguez", role: "Advisor", img: "https://randomuser.me/api/portraits/women/68.jpg", quote: "Highly recommended platform." },
];

export default function Home() {
  return (
    <div className="mt-40 flex flex-col gap-32 overflow-hidden">

      {/* HERO */}
      <div className="animate-float">
        <HeroSection />
      </div>

      {/* STATS */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-blue-100">
        <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-10">
          {statsData.map((s, i) => (
            <div
              key={i}
              className="text-center bg-white rounded-xl p-6 shadow hover:scale-105 transition duration-300"
            >
              <h3 className="text-3xl font-bold text-blue-600">{s.value}</h3>
              <p className="text-gray-600 mt-2">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-20">
        <h2 className="text-4xl font-bold text-center mb-16">
          Powerful Features
        </h2>

        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          {featuresData.map((f, i) => (
            <Card
              key={i}
              className="hover:-translate-y-4 hover:shadow-2xl transition-all duration-300"
            >
              <CardContent className="p-8 text-center">
                <div className="text-5xl mb-4">{f.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
                <p className="text-gray-600">{f.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-20 bg-blue-50">
        <h2 className="text-4xl font-bold text-center mb-20">How It Works</h2>

        <div className="container mx-auto grid md:grid-cols-3 gap-12">
          {howItWorksData.map((s, i) => (
            <div
              key={i}
              className="bg-white p-8 rounded-xl shadow text-center hover:scale-105 transition"
            >
              <div className="text-5xl mb-4">{s.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
              <p className="text-gray-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20">
        <h2 className="text-4xl font-bold text-center mb-16">
          Loved by Users
        </h2>

        <div className="container mx-auto grid md:grid-cols-3 gap-10">
          {testimonialsData.map((t, i) => (
            <div
              key={i}
              className="bg-white p-8 rounded-xl text-center shadow animate-glow"
            >
              <img
                src={t.img}
                className="w-20 h-20 rounded-full mx-auto mb-4"
              />
              <h3 className="font-semibold">{t.name}</h3>
              <p className="text-sm text-gray-500">{t.role}</p>
              <p className="italic text-gray-600 mt-4">“{t.quote}”</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-blue-600 text-center text-white">
        <h2 className="text-4xl font-bold mb-6">
          Take Control of Your Finances Today
        </h2>
        <p className="max-w-xl mx-auto mb-10 text-blue-100">
          Smart money management powered by AI
        </p>

        <Link href="/dashboard">
          <button className="bg-white text-blue-600 px-10 py-4 rounded-xl font-bold text-lg hover:scale-110 transition animate-bounce">
            Get Started Free
          </button>
        </Link>
      </section>

    </div>
  );
}
