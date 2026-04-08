"use client";

export default function WorkspaceLayout({ children }: { children: React.ReactNode }) {
  return (
    // On retire le "display: flex" et la barre "aside"
    // On laisse juste un container qui prend toute la place
    <div style={{ minHeight: '100vh', width: '100%', backgroundColor: '#f0f0f0' }}>
      {children}
    </div>
  );
}