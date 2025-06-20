import { motion } from "framer-motion";
import { Button } from "./components/ui/button";
import { Card, CardContent } from "./components/ui/card";
import { Banknote, CreditCard, Coins, ShieldCheck } from "lucide-react";

export default function BankInvestmentPage() {
  const features = [
    {
      icon: <CreditCard className="w-10 h-10 text-blue-600 mb-4" />,
      title: "Cartes de crédit sécurisées",
      desc: "Profitez de cartes intelligentes pour vos dépenses.",
    },
    {
      icon: <Coins className="w-10 h-10 text-green-600 mb-4" />,
      title: "Investissement intelligent",
      desc: "Faites croître votre capital avec nos plans bancaires.",
    },
    {
      icon: <Banknote className="w-10 h-10 text-yellow-600 mb-4" />,
      title: "Prêts flexibles",
      desc: "Accédez à des crédits selon vos besoins.",
    },
    {
      icon: <ShieldCheck className="w-10 h-10 text-purple-600 mb-4" />,
      title: "Sécurité renforcée",
      desc: "Toutes vos transactions sont protégées.",
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-white to-gray-100 font-sans text-gray-900">
      <section className="text-center py-20 px-6">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl font-bold mb-4"
        >
          Système d’investissement bancaire moderne
        </motion.h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Découvrez une plateforme qui combine technologie et finance pour vous
          offrir des services bancaires de nouvelle génération.
        </p>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-8"
        >
          <Button className="bg-blue-700 text-white px-6 py-3 rounded-xl text-lg hover:bg-blue-800">
            Commencer l’investissement
          </Button>
        </motion.div>
      </section>

      <section className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-6 px-6 pb-20">
        {features.map((f, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + i * 0.2 }}
          >
            <Card className="rounded-xl shadow-md hover:shadow-xl p-6 text-center">
              {f.icon}
              <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
              <p className="text-sm text-gray-600">{f.desc}</p>
            </Card>
          </motion.div>
        ))}
      </section>
    </main>
  );
}