import { BrowserRouter, Route, Routes } from "react-router";
import Layout from "@/components/Common/Layout";
import DashboardPage from "@/pages/DashboardPage";
import ExpensesPage from "@/pages/ExpensesPage";
import SummaryPage from "@/pages/SummaryPage";
import NotFoundPage from "@/pages/NotFoundPage";
import { ExpensesProvider } from "@/contexts/expenses/ExpensesProvider";

function App() {
  return (
    <BrowserRouter>
      <ExpensesProvider>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<DashboardPage />} />
            <Route path="expenses" element={<ExpensesPage />} />
            <Route path="summary" element={<SummaryPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </ExpensesProvider>
    </BrowserRouter>
  );
}

export default App;
