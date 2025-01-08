import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { WelcomeForm } from './components/WelcomeForm';
import { AssessmentTool } from './components/AssessmentTool';
import { BlogSection } from './components/BlogSection';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<WelcomeForm />} />
              <Route path="/assessment" element={<AssessmentTool />} />
            </Routes>
            <BlogSection />
          </main>
          <Footer />
        </div>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;