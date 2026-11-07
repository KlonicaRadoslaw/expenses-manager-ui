import { BrowserRouter, Route, Routes } from "react-router";
import Layout from "@/components/Common/Layout";
import DashboardPage from "@/pages/DashboardPage";
import ExpensesPage from "@/pages/ExpensesPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<DashboardPage />} />
          <Route path="expenses" element={<ExpensesPage />} />
          <Route path="summary" element={<SummaryPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
