"use client";
import Link from 'next/link';

export default function Library() {
  const matieres = [
    { id: "litterature-francaise", nom: "Littérature Française", couleur: "#c0392b", icone: "📕" },
    { id: "semiotique", nom: "Sémiotique", couleur: "#16a085", icone: "📚" },
    { id: "latin", nom: "Latin / Grec", couleur: "#d4ac0d", icone: "📒" },
    { id: "litterature-comparee", nom: "Littérature Comparée", couleur: "#8e44ad", icone: "📗" },
    { id: "dramaturgie", nom: "Dramaturgie", couleur: "#00ff00", icone: "📙" },
    { id: "exercice-professionnels", nom: "Exercice Professionnel", couleur: "#8e44ad", icone: "📚" },
    { id: "analyse-discours", nom: "Analyse du discours", couleur: "#2e15ff", icone: "📕" },
    { id: "courants", nom: "Les Courants Littéraires", couleur: "#9b59b6", icone: "📗" },
  ];

  return (
    <div style={{ 
      height: '100vh', // On force la hauteur à 100% de l'écran
      width: '100%',
      backgroundColor: '#f0f0f0', 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center',
      overflow: 'hidden', // EMPECHE LE DEFILEMENT
      padding: '40px 20px'
    }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '5px', color: '#2c3e50', fontWeight: '800' }}>MA BIBLIOTHÈQUE</h1>
      <p style={{ color: '#7f8c8d', marginBottom: '30px', fontSize: '0.9rem' }}>Cliquez sur un ouvrage pour étudier.</p>

      {/* GRILLE COMPACTE : 4 COLONNES x 2 LIGNES */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(4, 1fr)', 
        gap: '20px', 
        width: '100%', 
        maxWidth: '900px' // On resserre la largeur
      }}>
        {matieres.map((m) => (
          <Link key={m.id} href={`/workspace/${m.id}`} style={{ textDecoration: 'none' }}>
            <div className="book" style={{ 
              backgroundColor: m.couleur, 
              height: '190px', // TAILLE RÉDUITE : pour tenir sur l'écran
              borderRadius: '3px 12px 12px 3px',
              boxShadow: '0 6px 12px rgba(0,0,0,0.15)',
              display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
              color: 'white', cursor: 'pointer', transition: 'all 0.3s ease', position: 'relative'
            }}>
              {/* Tranche de livre */}
              <div style={{ position: 'absolute', left: '8px', width: '2px', height: '80%', backgroundColor: 'rgba(255,255,255,0.2)' }}></div>
              
              <span style={{ fontSize: '2.2rem', marginBottom: '10px' }}>{m.icone}</span>
              
              <h3 style={{ 
                padding: '0 10px', fontSize: '0.75rem', textAlign: 'center', 
                textTransform: 'uppercase', fontWeight: 'bold' 
              }}>
                {m.nom}
              </h3>
            </div>
          </Link>
        ))}
      </div>

      <style jsx>{`
        .book:hover { 
          transform: scale(1.05); 
          box-shadow: 0 10px 20px rgba(0,0,0,0.2);
        }
      `}</style>
    </div>
  );
}