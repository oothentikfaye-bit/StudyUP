"use client";
import Link from 'next/link';

export default function Library() {
  const matieres = [
    { id: "litterature-francaise", nom: "Littérature Française", couleur: "#e74c3c", icone: "📕" },
    { id: "Semiotique", nom: "Sémiotique", couleur: "#1abc9c", icone: "📚" },
    { id: "latin", nom: "Latin / Grec", couleur: "#f1c40f", icone: "📒" },
    { id: "Litterature-comparee", nom: "Littérature Comparée", couleur: "#9b59b6", icone: "📗" },
    { id: "Dramaturgie", nom: "Dramaturgie", couleur: "#05fa11", icone: "📙" }, 
    { id: "Exercice-professionnel", nom: "Exercice Professionnel", couleur: "#731abc", icone: "📚" },
    { id: "Analyse-du-discours", nom: "Analyse du Discours", couleur: "#350bee", icone: "📕" },
    { id: "Les-courants-litteraires", nom: "Les courants littéraires", couleur: "#9b59b6", icone: "📗" },
  ];

  return (
    <div style={{ 
      padding: '40px 20px', backgroundColor: '#f0f0f0', minHeight: '100vh', 
      display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' 
    }}>
      <h1 style={{ fontSize: '2.2rem', marginBottom: '10px', color: '#2c3e50', fontWeight: '800' }}>MA BIBLIOTHÈQUE</h1>
      <p style={{ color: '#7f8c8d', marginBottom: '40px', fontSize: '1rem' }}>Cliquez sur un ouvrage pour étudier.</p>

      {/* GRILLE COMPACTE */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', 
        gap: '20px', 
        width: '100%', 
        maxWidth: '950px' 
      }}>
        {matieres.map((m) => (
          <Link key={m.id} href={`/workspace/${m.id}`} style={{ textDecoration: 'none' }}>
            <div className="book" style={{ 
              backgroundColor: m.couleur, 
              height: '200px', // Taille réduite
              borderRadius: '4px 12px 12px 4px',
              boxShadow: '5px 5px 15px rgba(0,0,0,0.2)',
              display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
              color: 'white', cursor: 'pointer', transition: 'all 0.3s ease', position: 'relative'
            }}>
              {/* Effet de tranche de livre */}
              <div style={{ position: 'absolute', left: '8px', width: '2px', height: '80%', backgroundColor: 'rgba(255,255,255,0.3)' }}></div>
              <span style={{ fontSize: '2.5rem', marginBottom: '10px' }}>{m.icone}</span>
              <h3 style={{ padding: '0 10px', fontSize: '0.85rem', textAlign: 'center', textTransform: 'uppercase', fontWeight: 'bold' }}>
                {m.nom}
              </h3>
            </div>
          </Link>
        ))}
      </div>

      <style jsx>{`
        .book:hover { 
          transform: scale(1.05) rotate(-3deg); 
          box-shadow: 15px 15px 25px rgba(0,0,0,0.3);
        }
      `}</style>
    </div>
  );
}