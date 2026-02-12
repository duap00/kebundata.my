import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { supabase } from '../../config/supabaseClient';
import ReactMarkdown from 'react-markdown';
import SEO from "../../components/SEO";

const BlogPost = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      const { data, error } = await supabase
        .from('posts')
        .select('*')
        .eq('slug', slug)
        .single();
      
      if (!error) setPost(data);
      setLoading(false);
    };
    fetchPost();
  }, [slug]);

  if (loading) return <div className="pt-32 text-center font-bold text-slate-400">Loading Article...</div>;
  if (!post) return <div className="pt-32 text-center">Post not found. <Link to="/blog" className="text-green-600">Return to Blog</Link></div>;

  return (
    <article className="min-h-screen bg-white pt-32 pb-20 px-6">
      <div className="max-w-3xl mx-auto">
        {/* SEO & Category */}
        <div className="flex items-center gap-4 mb-6">
          <Link to="/blog" className="text-sm font-bold text-green-600 hover:underline">← BACK TO BLOG</Link>
          <span className="text-slate-300">|</span>
          <span className="text-sm font-bold text-slate-400 uppercase tracking-widest">{post.category}</span>
        </div>

        {/* Header */}
        <h1 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight mb-8">
          {post.title}
        </h1>
        
        <div className="flex items-center gap-3 mb-12 pb-8 border-b border-slate-100">
          <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-700 font-bold">R</div>
          <div>
            <p className="text-sm font-bold text-slate-800">Robot People Industries</p>
            <p className="text-xs text-slate-400">{new Date(post.published_at).toLocaleDateString('en-MY', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
          </div>
        </div>

        {/* Content Render - Markdown Support */}
        <div className="prose prose-slate prose-lg max-w-none prose-headings:font-black prose-headings:text-slate-900 prose-p:text-slate-600 prose-p:leading-relaxed">
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </div>
        
        {/* Footer Call to Action */}
        <div className="mt-20 p-10 bg-slate-50 rounded-3xl border border-slate-100 text-center">
          <h3 className="text-xl font-bold text-slate-900 mb-2">Ready to automate your farm?</h3>
          <p className="text-slate-500 mb-6">Join the Agroprenuer Muda 2026 movement with KebunData.</p>
          <Link to="/login" className="inline-block bg-green-600 text-white px-8 py-3 rounded-full font-bold hover:scale-105 transition">GET STARTED</Link>
        </div>
      </div>
    </article>
  );
};

export default BlogPost;