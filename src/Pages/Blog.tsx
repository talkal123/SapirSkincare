import Posts from "../Components/BlogPageComponents/Posts"
import WelcomeBlog from "../Components/BlogPageComponents/WelcomeBlog"
import BottomNav from "../Components/BottomNav"
import Footer from "../Components/Footer"
import Blog1 from "../assets/Blog1.avif";
import Blog2 from "../assets/Blog2.avif";
import Blog3 from "../assets/Blog3.avif";
import { IoMdMore } from "react-icons/io";
import { BiHeart } from "react-icons/bi";
import { useEffect, useState } from "react";


interface BlogPost {
  img: string;  // או סוג אחר אם יש לך סוג של תמונה
  date: string;
  icon: React.ReactNode;
  read: number;
  title: string;
  subtitle: string;
  views: number;
  comments: number;
  likes: number;
  heartIcon: React.ReactNode;
}


const Blog = () => {
  const arr: BlogPost[] = [
        {
            img:Blog1,
            date:"Sep 25, 2023",
            icon: <IoMdMore />,
            read:2,
            title:"Understanding the Importance of Your Skin Barrier: Tips for Healthy Skin As an expert esthetician",
            subtitle:"I cannot stress enough the vital role your skin barrier plays in maintaining overall skin health. The skin barrier, or stratum corneum,...",
            views: 16,
            comments:0,
            likes:3,
            heartIcon: <BiHeart className='w-4 h-4 text-red-400'/>,
        },
        {
            img:Blog2,
            date:"Sep 25, 2023",
            icon: <IoMdMore />,
            read:3,
            title:"The Power of Acids in Your Skincare Routine: What You Need to Know As an expert esthetician",
            subtitle:"I often emphasize the transformative effects that acids can have on your skin when used correctly. Acids like retinol, alpha hydroxy...",
            views: 6,
            comments:0,
            likes:3,
            heartIcon: <BiHeart className='w-4 h-4 text-red-400'/>,
        },
        {
            img:Blog3,
            date:"Sep 25, 2023",
            icon: <IoMdMore />,
            read:3,
            title:"Illuminate Your Skin: The Benefits of LED Light Therapy As an expert esthetician",
            subtitle:"I'm excited to share the transformative benefits of LED light therapy—a non-invasive treatment that uses varying wavelengths of light to...",
            views: 9,
            comments:0,
            likes:3,
            heartIcon: <BiHeart className='w-4 h-4 text-red-400'/>,
        },
    ]

  const [filter,setFilter] = useState(arr)
  const [value,setValue] = useState("all")


  useEffect (() => {
    if (value === "all") {
      setFilter(arr)
    } else if (value === "MostPopular") {
      const maxViews = Math.max(...arr.map(post => post.views))
      setFilter(arr.filter(post => post.views === maxViews));
    } 
  },[value])
console.log(value);


  
  return (
    <div style={{ backgroundColor: 'rgba(237, 235, 228, 1)'}}>
      <WelcomeBlog />
      <Posts arr={arr}/>
      <BottomNav />
      <Footer />
    </div>
  )
}

export default Blog
