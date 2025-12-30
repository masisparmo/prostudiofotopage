import React from 'react';
import './index.css';

function App() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>🔥 PRO STUDIO FOTO</h1>
      <h2>Revolusi Foto Produk UMKM Indonesia</h2>
      <p>Ubah foto HP biasa menjadi aset visual kelas studio dengan AI.</p>
      
      <div style={{ marginTop: '30px', padding: '20px', backgroundColor: '#f5f5f5' }}>
        <h3>Fitur Utama:</h3>
        <ul>
          <li>Auto Fix & Retouch</li>
          <li>Smart Expand (Resize Otomatis)</li>
          <li>Flyer Prompt Generator</li>
          <li>Sekali Bayar, Seumur Hidup</li>
        </ul>
      </div>

      <div style={{ marginTop: '30px', padding: '20px', backgroundColor: '#e3f2fd', borderRadius: '8px' }}>
        <h3>Penawaran Terbatas</h3>
        <p><strong>50% DISKON</strong></p>
        <p>Rp 150.000 → Rp 75.000</p>
        <button style={{ padding: '10px 20px', backgroundColor: '#2196F3', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontSize: '16px' }}>
          Ambil Diskon Sekarang
        </button>
      </div>

      <div style={{ marginTop: '40px', paddingTop: '20px', borderTop: '1px solid #ccc', fontSize: '14px', color: '#666' }}>
        <p><strong>Pro Studio Foto</strong></p>
        <p>Aplikasi berbasis AI untuk membantu UMKM Indonesia meningkatkan penjualan melalui foto produk berkualitas.</p>
        <p>© 2025 Pro Studio Foto by ISPARMO. All rights reserved.</p>
      </div>
    </div>
  );
}

export default App;
