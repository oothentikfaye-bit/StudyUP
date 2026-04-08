"use client";
import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';

export default function SubjectPage() {
  const params = useParams();
  const subject = params.subject as string;

  // --- 1. CONFIGURATION DES THÈMES (DÉGRADÉS) ---
  const themes: { [key: string]: any } = {
    "litterature-francaise": { bg: "linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)", accent: "#c0392b", text: "#2c1e1a" },
    "stylistique": { bg: "linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%)", accent: "#2980b9", text: "#1a2a3a" },
    "latin": { bg: "linear-gradient(135deg, #f6d365 0%, #fda085 100%)", accent: "#d4ac0d", text: "#3e2723" },
    "comparee": { bg: "linear-gradient(135deg, #cd9cf2 0%, #f6f3ff 100%)", accent: "#8e44ad", text: "#2d132c" },
    "semiotique": { bg: "linear-gradient(135deg, #66a6ff 0%, #89f7fe 100%)", accent: "#16a085", text: "#002b24" },
    "analyse-discours": { bg: "linear-gradient(135deg, #fccb90 0%, #d57eeb 100%)", accent: "#d35400", text: "#4a2311" }
  };

  const theme = themes[subject] || { bg: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)", accent: "#333", text: "#000000" };

  // --- 2. ÉTATS (STATES) ---
  const [notes, setNotes] = useState("");
  const [aiResult, setAiResult] = useState("");
  const [loading, setLoading] = useState(false);

  // --- 3. SAUVEGARDE AUTO ---
  useEffect(() => {
    const saved = localStorage.getItem(`studyup_data_${subject}`);
    if (saved) setNotes(saved);
  }, [subject]);

  useEffect(() => {
    localStorage.setItem(`studyup_data_${subject}`, notes);
  }, [notes, subject]);

  // --- 4. FONCTIONS ---
  const appelerIA = async () => {
    if (!notes.trim()) return alert("Écrivez d'abord vos notes !");
    setLoading(true);
    setTimeout(() => {
      setAiResult(`ANALYSE IA POUR ${subject.toUpperCase()} :\nCe texte est bien rédigé. L'IA suggère d'approfondir l'analyse stylistique des extraits choisis.`);
      setLoading(false);
    }, 1500);
  };

  const rechercherGoogle = () => {
    const requete = encodeURIComponent(notes.substring(0, 30) + " " + subject);
    window.open(`https://www.google.com/search?q=${requete}+site:persee.fr+OR+site:gallica.bnf.fr`, '_blank');
  };

  const copierDansNotes = () => {
    setNotes(prev => prev + "\n\n--- IA ---\n" + aiResult);
    setAiResult("");
  };

  return (
    <div style={{ 
      minHeight: '100vh', padding: '40px', transition: 'all 0.5s ease',
      background: theme.bg, color: theme.text, backgroundAttachment: 'fixed'
    }}>
      
      {/* TITRE DE LA MATIÈRE */}
      <header style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h1 style={{ 
          fontSize: '2.5rem', textTransform: 'uppercase', letterSpacing: '4px', margin: 0, 
          background: 'rgba(255,255,255,0.2)', padding: '10px 30px', borderRadius: '50px',
          backdropFilter: 'blur(5px)', display: 'inline-block', border: '1px solid rgba(255,255,255,0.3)'
        }}>
          {subject.replace('-', ' ')}
        </h1>
      </header>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 380px', gap: '30px', maxWidth: '1250px', margin: 'auto' }}>
        
        {/* COLONNE GAUCHE : NOTES (STYLE VERRE) */}
        <section style={{ 
          backgroundColor: 'rgba(255, 255, 255, 0.85)', padding: '40px', borderRadius: '20px', 
          boxShadow: '0 15px 35px rgba(0,0,0,0.1)', backdropFilter: 'blur(10px)'
        }}>
          <h2 style={{ fontSize: '0.9rem', color: theme.accent, marginBottom: '20px', fontWeight: 'bold' }}>ESPACE DE RÉDACTION</h2>
          <textarea 
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="Écrivez ici vos notes..."
            style={{ width: '100%', height: '550px', border: 'none', outline: 'none', fontSize: '1.2rem', lineHeight: '1.9', fontFamily: 'serif', color: '#1a1a1a', background: 'transparent' }}
          />
        </section>

        {/* COLONNE DROITE : TRANSPARENTE ET COURTE */}
        <aside style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          
          <div style={{ 
            backgroundColor: 'rgba(0, 0, 0, 0.4)', // Noir transparent
            backdropFilter: 'blur(15px)', color: 'white', padding: '25px', 
            borderRadius: '24px', boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
            border: '1px solid rgba(255,255,255,0.1)',
            height: 'fit-content' // Ne s'étire pas jusqu'en bas
          }}>
            <h3 style={{ color: theme.accent, marginTop: 0, fontSize: '0.8rem', letterSpacing: '1px' }}>✨ ASSISTANT STUDYUP</h3>

            <div style={{ marginBottom: '20px', minHeight: '50px' }}>
              {loading ? (
                <p style={{ fontSize: '0.8rem', color: theme.accent }}>Analyse... ⏳</p>
              ) : aiResult ? (
                <p style={{ fontSize: '0.85rem', fontStyle: 'italic', color: '#eee' }}>{aiResult}</p>
              ) : (
                <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.8rem' }}>En attente de texte.</p>
              )}
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <button onClick={appelerIA} style={{ width: '100%', padding: '12px', backgroundColor: theme.accent, color: 'white', border: 'none', borderRadius: '12px', fontWeight: 'bold', cursor: 'pointer' }}>
                🚀 Analyser le texte
              </button>
              <button onClick={rechercherGoogle} style={{ width: '100%', padding: '10px', backgroundColor: 'rgba(255,255,255,0.1)', color: 'white', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '10px', cursor: 'pointer', fontSize: '0.75rem' }}>
                🔍 Sources Google
              </button>
              {aiResult && (
                <button onClick={copierDansNotes} style={{ width: '100%', padding: '10px', backgroundColor: 'transparent', border: `1px solid ${theme.accent}`, color: theme.accent, borderRadius: '10px', cursor: 'pointer', fontSize: '0.75rem' }}>
                  📥 Fusionner avec mes notes
                </button>
              )}
            </div>
          </div>

          <Link href="/workspace" style={{ textAlign: 'center', color: 'rgba(0,0,0,0.5)', textDecoration: 'none', fontSize: '0.8rem', fontWeight: 'bold' }}>
            ← Retour Bibliothèque
          </Link>
        </aside>

      </div>
    </div>
  );
}