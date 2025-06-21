import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import CurrentAccountsPage from './pages/CurrentAccountsPage';
import CreditCardsPage from './pages/CreditCardsPage';
import InsurancePage from './pages/InsurancePage';
import LoansPage from './pages/LoansPage';
import MortgagesPage from './pages/MortgagesPage';
import SavingsPage from './pages/SavingsPage';
import InvestmentsPage from './pages/InvestmentsPage';
import DigitalBankingPage from './pages/DigitalBankingPage';
import SupportPage from './pages/SupportPage';
import ChatBot from './components/ChatBot';
import PasswordReset from './components/PasswordReset';
import OTPVerification from './components/OTPVerification';
import AdminPanel from './components/AdminPanel';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/current-accounts" element={<CurrentAccountsPage />} />
          <Route path="/credit-cards" element={<CreditCardsPage />} />
          <Route path="/insurance" element={<InsurancePage />} />
          <Route path="/loans" element={<LoansPage />} />
          <Route path="/mortgages" element={<MortgagesPage />} />
          <Route path="/savings" element={<SavingsPage />} />
          <Route path="/investments" element={<InvestmentsPage />} />
          <Route path="/digital-banking" element={<DigitalBankingPage />} />
          <Route path="/support" element={<SupportPage />} />
          <Route path="/admin" element={<AdminPanel />} />
          <Route path="/reset-password" element={<PasswordReset />} />
          <Route path="/verify-otp" element={<OTPVerification />} />
        </Routes>
        <ChatBot />
      </Layout>
    </Router>
  );
}

export default App;