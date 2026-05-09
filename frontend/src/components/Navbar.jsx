import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext.jsx';

const styles = {
  nav: {
    background: '#fff',
    borderBottom: '1px solid #E7E8EC',
    position: 'sticky', top: 0, zIndex: 100,
    boxShadow: '0 1px 8px rgba(0,0,0,.06)',
  },
  inner: {
    maxWidth: 1200, margin: '0 auto', padding: '0 16px',
    height: 56, display: 'flex', alignItems: 'center', justifyContent: 'space-between',
  },
  logo: {
    display: 'flex', alignItems: 'center', gap: 8,
    fontWeight: 700, fontSize: 20, color: '#0077FF', textDecoration: 'none',
  },
  logoIcon: {
    width: 32, height: 32, background: '#0077FF', borderRadius: 8,
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    color: '#fff', fontWeight: 800, fontSize: 16,
  },
  right: { display: 'flex', alignItems: 'center', gap: 12 },
  userInfo: { fontSize: 14, color: '#6D7885' },
  username: { fontWeight: 600, color: '#1C1C1E' },
};

export default function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  return (
    <nav style={styles.nav}>
      <div style={styles.inner}>
        <Link to={user ? '/dashboard' : '/'} style={styles.logo}>
          <div style={styles.logoIcon}>Q</div>
          VK Quiz
        </Link>
        <div style={styles.right}>
          {user ? (
            <>
              <span style={styles.userInfo}>
                Привет, <span style={styles.username}>{user.username}</span>
              </span>
              <Link to="/join" className="btn btn-secondary btn-sm">Войти в квиз</Link>
              <button
                className="btn btn-ghost btn-sm"
                onClick={() => { logout(); navigate('/login'); }}
              >
                Выйти
              </button>
            </>
          ) : (
            <>
              <Link to="/join" className="btn btn-secondary btn-sm">Войти в квиз</Link>
              <Link to="/login" className="btn btn-primary btn-sm">Войти</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
