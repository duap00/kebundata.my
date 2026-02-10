import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../../config/supabaseClient';

const BlogEditor = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  
  // State for all database columns
  const [formData, setFormData] = useState({
    title: '',
    excerpt: '',
    content: '',
    category: 'Technology',
    featured_image: '',
    published: true
  });

  const handlePublish = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Generate a URL-friendly slug automatically
    const slug = formData.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)+/g, '');

    const { error } = await supabase
      .from('posts')
      .insert([{ 
        ...formData, 
        slug,
        author: 'Robot People Industries' 
      }]);

    if (error) {
      alert("Error publishing: " + error.message);
      setLoading(false);
    } else {
      alert("🚀 Article Published to KebunData.my!");
      navigate('/blog');
    }
  };

  return (
    <div className="max-w-5xl mx-auto py-10 px-4">
      <div className="bg-white rounded-[2.5rem] border border-slate-100 shadow-2xl shadow-slate-200/50 overflow-hidden">
        
        {/* Header Bar */}
        <div className="bg-slate-900 p-8 flex justify-between items-center text-white">
          <div>
            <p className="text-green-400 text-[10px] font-black uppercase tracking-[0.2em] mb-1">Content Management</p>
            <h1 className="text-2xl font-black italic tracking-tighter">New Greenhouse Update.</h1>
          </div>
          <button 
            onClick={handlePublish}
            disabled={loading || !formData.title}
            className="bg-green-500 hover:bg-green-400 disabled:bg-slate-700 text-slate-900 px-10 py-4 rounded-2xl font-black text-sm tracking-widest transition-all active:scale-95"
          >
            {loading ? 'UPLOADING...' : 'PUBLISH LIVE'}
          </button>
        </div>

        <form className="p-8 md:p-12 space-y-8">
          {/* Title Input */}
          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest ml-2">Article Headline</label>
            <input 
              className="w-full text-4xl md:text-5xl font-black text-slate-800 border-none focus:ring-0 placeholder:text-slate-100"
              placeholder="Enter title here..."
              onChange={(e) => setFormData({...formData, title: e.target.value})}
            />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Category Select */}
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest ml-2">Category</label>
              <select 
                className="w-full p-5 bg-slate-50 border-none rounded-2xl font-bold text-slate-600 focus:ring-2 ring-green-500/20"
                onChange={(e) => setFormData({...formData, category: e.target.value})}
              >
                <option value="Technology">Technology</option>
                <option value="Tutorial">Tutorial</option>
                <option value="Harvest">Harvest Report</option>
                <option value="Business">Business</option>
              </select>
            </div>

            {/* Image URL */}
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest ml-2">Cover Image URL (Unsplash)</label>
              <input 
                className="w-full p-5 bg-slate-50 border-none rounded-2xl font-medium text-slate-600 focus:ring-2 ring-green-500/20"
                placeholder="https://images.unsplash.com/..."
                onChange={(e) => setFormData({...formData, featured_image: e.target.value})}
              />
            </div>
          </div>

          {/* Excerpt */}
          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest ml-2">Short Preview (Excerpt)</label>
            <textarea 
              rows="2"
              className="w-full p-5 bg-slate-50 border-none rounded-2xl font-medium text-slate-600 focus:ring-2 ring-green-500/20 resize-none"
              placeholder="What is this post about? (Shows on the blog card)"
              onChange={(e) => setFormData({...formData, excerpt: e.target.value})}
            />
          </div>

          {/* Main Content */}
          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest ml-2">Article Body (Markdown Supported)</label>
            <textarea 
              className="w-full h-[500px] p-8 bg-slate-50 border-none rounded-[2.5rem] font-mono text-lg text-slate-700 focus:ring-2 ring-green-500/20 leading-relaxed"
              placeholder="Begin your story..."
              onChange={(e) => setFormData({...formData, content: e.target.value})}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default BlogEditor;