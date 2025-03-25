import React, { useEffect, useState } from 'react';
import axios from 'axios';

const LeadsList = () => {
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/leads/')
      .then(response => {
        setLeads(response.data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading leads...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Leads List</h2>
      {leads.map((lead) => (
        <div key={lead.id} className="border p-3 rounded mb-2 shadow-sm">
          <h4 className="font-semibold">{lead.name}</h4>
          <p>Email: {lead.email}</p>
          <p>Message: {lead.message}</p>
        </div>
      ))}
    </div>
  );
};

export default LeadsList;
