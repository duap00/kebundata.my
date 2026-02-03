import React, { useState } from 'react';
import { supabase } from '../../config/supabaseClient';

const BlogEditor = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handlePublish = async () => {
    const slug = title.toLowerCase().replace(/ /g, '-');
    const { data, error } = await supabase
      .from('posts')
      .insert([{ title, content, slug, author: 'Robot People Industries' }]);

    if (!error) alert("Post Published Successfully!");
  };

  return (
    <div className="p-8 max-w-4xl mx-auto bg-white rounded-2xl shadow-sm">
      <h2 className="text-2xl font-bold mb-6">Create New Article</h2>
      <input 
        className="w-full text-4xl font-bold border-none focus:ring-0 mb-4"
        placeholder="Article Title..."
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea 
        className="w-full h-96 p-4 border rounded-xl font-mono text-sm mb-4"
        placeholder="Write your story in Markdown..."
        onChange={(e) => setContent(e.target.value)}
      />
      <button 
        onClick={handlePublish}
        className="bg-green-600 text-white px-8 py-3 rounded-full font-bold"
      >
        PUBLISH TO KEBUNDATA.MY
      </button>
    </div>
  );
};
export default BlogEditor;