// pages/index.tsx
import { useEffect, useState } from 'react';

interface Tea {
  name: string;
}

const Home = () => {
  const [rankings, setRankings] = useState<Tea[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch('/api/tea')
      .then((res) => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then((data: Tea[]) => {
        setRankings(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="container mx-auto">
      <h1 className="text-4xl font-bold">Tea Rankings</h1>
      <ul>
        {rankings.map((tea, index) => (
          <li key={index} className="p-4 border-b">{tea.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
