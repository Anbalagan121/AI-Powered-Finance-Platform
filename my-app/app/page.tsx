import HeroSection from "../components/hero";
import { Card, CardContent } from "@/components/ui/card";

/* ===== STATS DATA ===== */
const statsData = [
  { value: "50K+", label: "Active Users" },
  { value: "₹2 Crore", label: "Transactions Tracked" },
  { value: "99.9%", label: "Uptime" },
  { value: "4.9/5", label: "User Rating" },
];

/* ===== FEATURES DATA ===== */
const featuresData = [
  {
    icon: "📊",
    title: "Advanced Analytics",
    description:
      "Get detailed insights into your spending patterns with AI-powered analytics",
  },
  {
    icon: "🧾",
    title: "Smart Receipt Scanner",
    description:
      "Extract data automatically from receipts using advanced AI technology",
  },
  {
    icon: "🥧",
    title: "Budget Planning",
    description:
      "Create and manage budgets with intelligent recommendations",
  },
  {
    icon: "💳",
    title: "Multi-Account Support",
    description:
      "Manage multiple accounts and credit cards in one place",
  },
  {
    icon: "🌍",
    title: "Multi-Currency",
    description:
      "Support for multiple currencies with real-time conversion",
  },
  {
    icon: "⚡",
    title: "Automated Insights",
    description:
      "Get automated financial insights and recommendations",
  },
];

/* ===== HOW IT WORKS DATA ===== */
const howItWorksData = [
  {
    icon: "📝",
    title: "1. Create Your Account",
    description:
      "Sign up easily with a simple and secure registration process",
  },
  {
    icon: "📈",
    title: "2. Track Your Spending",
    description:
      "Automatically track and categorize your daily transactions",
  },
  {
    icon: "🤖",
    title: "3. Get Smart Insights",
    description:
      "Receive AI-powered insights to improve your financial decisions",
  },
];

/* ===== TESTIMONIALS DATA (REALISTIC IMAGES) ===== */
const testimonialsData = [
  {
    name: "Sarah Johnson",
    role: "Small Business Owner",
    image: "https://randomuser.me/api/portraits/women/75.jpg",
    quote:
      "This platform completely changed how I manage my finances. The insights are incredibly accurate and helpful.",
  },
  {
    name: "Michael Chen",
    role: "Freelancer",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    quote:
      "Expense tracking is now effortless. I save hours every month thanks to automated reports.",
  },
  {
    name: "Emily Rodriguez",
    role: "Financial Advisor",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    quote:
      "I recommend this app to all my clients. Clean UI, powerful analytics, and reliable performance.",
  },
];

export default function Home() {
  return (
    <div className="mt-40 flex flex-col items-center gap-24">
      <HeroSection />

      {/* ===== Stats Section ===== */}
      <section className="py-20 bg-blue-50 w-full">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {statsData.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Features Section ===== */}
      <section className="py-20 w-full">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Everything you need to manage your finances
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuresData.map((feature, index) => (
              <Card key={index} className="p-6 text-center">
                <CardContent>
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ===== How It Works ===== */}
      <section className="py-20 bg-blue-50 w-full">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">
            How It Works
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {howItWorksData.map((step, index) => (
              <div
                key={index}
                className="text-center bg-white p-6 rounded-lg shadow"
              >
                <div className="text-4xl mb-4">{step.icon}</div>
                <h3 className="text-xl font-semibold mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Testimonials ===== */}
      <section className="py-20 w-full">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">
            What Our Users Say
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonialsData.map((user, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow text-center"
              >
                <img
                  src={user.image}
                  alt={user.name}
                  className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-lg font-semibold">{user.name}</h3>
                <p className="text-sm text-gray-500 mb-3">{user.role}</p>
                <p className="text-gray-600 italic">
                  “{user.quote}”
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
