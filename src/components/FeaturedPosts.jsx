import React from "react";
import { Clock, MessageSquare } from "lucide-react";
import unsplash1 from "../assets/images/unsplash1.png";
import unsplash2 from "../assets/images/unsplash2.png";
import unsplash3 from "../assets/images/unsplash3.png";


const posts = [
  {
    id: 1,
    title: "Loudest à la Madison #1 (L'intégral)",
    category: "Google",
    image: unsplash1,
    description: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
    date: "22 April 2021",
    comments: "10 comments",
  },
  {
    id: 2,
    title: "The Future of Minimalism",
    category: "Design",
    image: unsplash2,
    description: "Explore how minimalism is reshaping modern design.",
    date: "15 March 2021",
    comments: "8 comments",
  },
  {
    id: 3,
    title: "Street Style Guide 2025",
    category: "Lifestyle",
    image: unsplash3,
    description: "A complete guide to mastering street style fashion.",
    date: "5 May 2021",
    comments: "12 comments",
  },
];

const FeaturedPosts = () => {
  return (
    <div className="py-16 px-4 md:px-20">
      <h2 className="text-2xl md:text-3xl font-bold mb-2 text-center">Featured Posts</h2>
      <p className="text-center text-gray-500 mb-10 text-sm md:text-base">
        Problems trying to resolve the conflict between the two major realms of classical physics.
      </p>

      <div className="flex flex-wrap justify-center gap-6">
        {posts.map((post) => (
          <div
            key={post.id}
            className="relative flex flex-col items-start p-[25px] pb-[35px] gap-[10px] w-[348px] h-[606px] bg-white rounded shadow-md"
          >
            {/* Görsel + NEW Badge */}
            <div className="relative w-full h-[300px] overflow-hidden rounded">
              <img 
              src={post.image}
               alt={post.title} 
               className=" absolute w-full h-full object-cover" 
               style={{ backgroundImage: `url(${post.image})` }}

               />
              <span className="absolute top-5 left-5 bg-[#E74040] text-white text-xs font-bold px-2 py-[2px] rounded shadow-sm">
                NEW
              </span>
            </div>

            {/* Etiket satırı */}
            <div className="flex gap-2 text-sm text-gray-400">
              <span className="text-[#8EC2F2]">{post.category}</span>
              <span>Trending</span>
              <span>New</span>
            </div>

            {/* Başlık */}
            <h3 className="text-lg font-bold text-[#252B42] leading-snug">{post.title}</h3>

            {/* Açıklama */}
            <p className="text-sm text-gray-500 leading-snug">{post.description}</p>

            {/* Alt Bilgiler */}
            <div className="flex items-center text-xs text-gray-500 gap-4 mt-2">
            <span className="flex items-center gap-1">
  <Clock className="w-4 h-4" />
  {post.date}
</span>
<span className="flex items-center gap-1">
  <MessageSquare className="w-4 h-4" />
  {post.comments}
</span>
            </div>

            {/* Learn More */}
            <button className="text-[#2DC071] text-sm font-semibold flex items-center gap-1">

              Learn More →
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedPosts;