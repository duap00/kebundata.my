import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '../../config/supabaseClient';

const BlogList = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      // Fetching your 3-4 monthly updates from the Supabase 'posts' table
      const { data, error } = await supabase
        .from('posts')
        .select('*')
        .order('published_at', { ascending: false });

      if (!error) {
        setPosts(data || []);
      }
      setLoading(false);
    };

    fetchPosts();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#fdfdfd]">
        <p className="text-slate-400 font-bold animate-pulse text-xs tracking-widest uppercase">Fetching Insights...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#fdfdfd] pt-32 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Blog Header */}
        <header className="mb-20 text-center lg:text-left">
          <Link to="/" className="text-xs font-black text-green-600 tracking-widest uppercase mb-4 block hover:underline">
            ← Back to Home
          </Link>
          <h1 className="text-5xl md:text-7xl font-black text-slate-900 leading-tight tracking-tighter">
            The <span className="text-green-600">Harvest</span> Blog.
          </h1>
          <p className="mt-6 text-xl text-slate-500 max-w-2xl font-medium">
            Strategic insights on ZipGrow technology, Odoo 18 automation, and the journey of Robot People Industries.
          </p>
        </header>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.length > 0 ? (
            posts.map((post) => (
              <Link 
                key={post.id} 
                to={`/blog/${post.slug}`} 
                className="group bg-white border border-slate-100 p-8 rounded-[2.5rem] hover:shadow-2xl hover:shadow-green-100 transition-all hover:-translate-y-2"
              >
                <div className="flex flex-col h-full">
                  <div className="mb-6">
                    <span className="px-3 py-1 bg-green-100 text-green-700 text-[10px] font-black uppercase tracking-widest rounded-full">
                      {post.category || 'Agrotech'}
                    </span>
                  </div>
                  <h2 className="text-2xl font-black text-slate-800 leading-tight group-hover:text-green-600 transition">
                    {post.title}
                  </h2>
                  <p className="mt-4 text-slate-500 text-sm leading-relaxed line-clamp-3 font-medium">
                    {post.excerpt || 'Read our latest update from the farm in Siliau...'}
                  </p>
                  <div className="mt-auto pt-8 flex items-center gap-2 text-xs font-black text-slate-300 group-hover:text-green-600 transition">
                    READ ARTICLE <span className="text-xl">→</span>
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <div className="col-span-full py-20 text-center bg-slate-50 rounded-[2.5rem] border border-dashed border-slate-200">
              <p className="text-slate-400 font-bold italic">Our first field notes are being prepared. Stay tuned.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// --- THIS LINE FIXES YOUR ERROR ---
export default BlogList;