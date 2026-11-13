import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';
import HomePage from './pages/HomePage.jsx';
import ToolPage from './pages/ToolPage.jsx';
import PrivacyPage from './pages/PrivacyPage.jsx';
import TermsPage from './pages/TermsPage.jsx';
import NotFoundPage from './pages/NotFoundPage.jsx';

function ToolPageWrapper() {
  const { slug } = useParams();
  return <ToolPage slug={slug} />;
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/tools/:slug" element={<ToolPageWrapper />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}
