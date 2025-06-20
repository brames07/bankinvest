import { motion } from "framer-motion";
import { Button } from "./components/ui/button";

export default function LoginPage({ onLogin }) {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="bg-white p-8 rounded-xl shadow-lg w-full max-w-sm"
      >
        <h2 className="text-2xl font-bold mb-6">Connexion</h2>
        <input
          type="email"
          placeholder="Email"
          className="mb-4 w-full border rounded px-3 py-2"
        />
        <input
          type="password"
          placeholder="Mot de passe"
          className="mb-6 w-full border rounded px-3 py-2"
        />
        <Button
          onClick={onLogin}
          className="w-full bg-blue-700 text-white py-2 rounded-xl"
        >
          Se connecter
        </Button>
      </motion.div>
    </main>
  );
}