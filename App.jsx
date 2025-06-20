import { useState } from "react";
import BankInvestmentPage from "./BankInvestmentPage";
import LoginPage from "./LoginPage";
import DashboardPage from "./DashboardPage";

export default function App() {
  const [user, setUser] = useState(null);

  if (!user) {
    return <LoginPage onLogin={() => setUser({ name: "Kossi" })} />;
  }

  return (
    <>
      <BankInvestmentPage />
      <DashboardPage onLogout={() => setUser(null)} />
    </>
  );
}