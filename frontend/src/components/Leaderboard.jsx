import React from 'react';

const medals = ['gold', 'silver', 'bronze'];

export default function Leaderboard({ entries, highlightId, title = 'Таблица лидеров' }) {
  return (
    <div>
      <h3 style={{ marginBottom: 16, textAlign: 'center' }}>{title}</h3>
      {entries.length === 0 && (
        <p style={{ textAlign: 'center', color: 'var(--text-secondary)' }}>Нет участников</p>
      )}
      {entries.map((e, i) => (
        <div
          key={e.id}
          className="leaderboard-item"
          style={
            e.id === highlightId
              ? { background: 'var(--primary-light)', border: '1.5px solid var(--primary)' }
              : {}
          }
        >
          <div className={`leaderboard-rank ${medals[i] || ''}`}>
            {i < 3 ? ['🥇', '🥈', '🥉'][i] : i + 1}
          </div>
          <div style={{ flex: 1, fontWeight: e.id === highlightId ? 600 : 400 }}>
            {e.username}
            {e.id === highlightId && (
              <span style={{ marginLeft: 6, fontSize: 12, color: 'var(--primary)' }}>
                (вы)
              </span>
            )}
          </div>
          <div style={{ fontWeight: 700, color: 'var(--primary)', fontSize: 18 }}>
            {e.score}
          </div>
        </div>
      ))}
    </div>
  );
}
