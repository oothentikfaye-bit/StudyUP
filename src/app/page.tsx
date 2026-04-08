import Link from 'next/link';

export default function Home() {
  return (
    <div style={{ 
      height: '100vh', display: 'flex', flexDirection: 'column', 
      alignItems: 'center', justifyContent: 'center', fontFamily: 'sans-serif' 
    }}>
      <h1 style={{ fontSize: '4rem', color: '#1c589c', marginBottom: '10px' }}>StudyUP 📚</h1>
      <p style={{ fontSize: '1.5rem', color: '#f1ebeb', marginBottom: '30px' }}>
        De la litterature pour un monde humaniser.
      </p>

      {/* Le bouton pour aller à l'autre page */}
      <Link href="/workspace">
        <button style={{ 
          backgroundColor: '#0070f3', color: 'white', padding: '15px 40px', 
          fontSize: '1.2rem', border: 'none', borderRadius: '50px', 
          cursor: 'pointer', fontWeight: 'bold', boxShadow: '0 4px 15px rgba(0,112,243,0.3)'
        }}>
          C'est parti ! 🚀
        </button>
      </Link>
    </div>
  );
}