import React from 'react';
import LeadsList from './components/LeadsList';

function App() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Leads Manager (React + Django)</h1>
      <LeadsList />
    </div>
  );
}

export default App;
