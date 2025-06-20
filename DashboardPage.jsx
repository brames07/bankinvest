import { Button } from "./components/ui/button";

export default function DashboardPage({ onLogout }) {
  return (
    <main className="min-h-screen bg-white p-6">
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Mon tableau d’investissement</h1>
        <Button
          onClick={onLogout}
          className="bg-red-600 text-white px-4 py-2 rounded-lg"
        >
          Déconnexion
        </Button>
      </header>
      <section className="grid lg:grid-cols-3 gap-6">
        {/* Exemple de carte */}
        <div className="bg-blue-100 p-4 rounded-xl shadow-sm">
          <h3 className="text-xl font-semibold">Plan Épargne</h3>
          <p className="text-sm mt-2 text-gray-700">
            Rendement prévu : +8% par an.
          </p>
        </div>
      </section>
    </main>
  );
}