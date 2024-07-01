// pages/index.js
'use client';

import Head from 'next/head';
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function Home() {
  // State untuk menyimpan data posts dan hasil filter
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  // Mengambil data dari API saat komponen dimuat
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/albums');
        setPosts(response.data);
        setFilteredPosts(response.data); // Menetapkan data yang tidak difilter pada awalnya
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, []); // useEffect hanya dijalankan sekali karena dependency array kosong

  // Fungsi untuk memfilter data berdasarkan kata kunci nama
  const handleSearch = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    setSearchTerm(searchTerm);

    // Menyaring data berdasarkan judul post yang mengandung kata kunci
    const filteredData = posts.filter(post =>
      post.title.toLowerCase().includes(searchTerm)
    );

    setFilteredPosts(filteredData); // Menyimpan data yang sudah difilter ke dalam state
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Head>
        <title>Home Page</title>
        <meta name="description" content="Home page with API integration and search functionality" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="text-center text-black">
        {/* Judul halaman */}
        <h1 className="text-4xl font-bold mb-4">Selamat Datang di Website Kami </h1>
        
        {/* Input pencarian dan tombol Clear */}
        <div className="search-bar mt-6">
          <input 
            type="text" 
            placeholder="Cari kata kunci.." 
            className="px-4 py-2 w-80 border border-gray-300 rounded-l-lg focus:outline-none"
            onChange={handleSearch} // Memanggil handleSearch saat nilai input berubah
          />
          <button 
            type="button" 
            className="px-6 py-2 bg-blue-500 text-white border-l-0 rounded-r-lg cursor-pointer hover:bg-blue-600"
            onClick={() => setSearchTerm('')} // Menghapus kata kunci pencarian saat tombol 'Clear' ditekan
          >
            Hapus
          </button>
        </div>

        {/* Menampilkan daftar post yang sudah difilter */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Albums</h2>
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            {filteredPosts.map(post => (
              <div key={post.id} className="bg-white rounded-lg p-4 shadow-md">
                <h3 className="text-lg font-semibold mb-2">{post.title}</h3>
                <p className="text-gray-600">{post.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
