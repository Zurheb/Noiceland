import { Card2 } from "./card2/Card2"


export const LatestPhoto = () => {
    return (
      <section id="ltPhoto" className="container py-10 lg:py-20 border-b-2 pb-10 lg:pb-20">
        <h4 className="text-sm text-gray-400 text-center ">LATEST POSTS</h4>
        <div className="flex flex-col lg:flex-row lg:flex-wrap items-center justify-between py-10 gap-5">
          <Card2 url="https://noiceland-project.netlify.app/image/latest__img1.webp" type="ILLUSTRATION" text="JAPAN HOUSE OPENS IN MOUNTAINSIDE TO FOSTER PEAK CREATIVITY." author="BY RETA TORPHY"/>
          <Card2 url="https://noiceland-project.netlify.app/image/latest__img1.webp" type="ILLUSTRATION" text="JAPAN HOUSE OPENS IN MOUNTAINSIDE TO FOSTER PEAK CREATIVITY." author="BY RETA TORPHY"/>
          <Card2 url="https://noiceland-project.netlify.app/image/latest__img1.webp" type="ILLUSTRATION" text="JAPAN HOUSE OPENS IN MOUNTAINSIDE TO FOSTER PEAK CREATIVITY." author="BY RETA TORPHY"/>
          <Card2 url="https://noiceland-project.netlify.app/image/latest__img1.webp" type="ILLUSTRATION" text="JAPAN HOUSE OPENS IN MOUNTAINSIDE TO FOSTER PEAK CREATIVITY." author="BY RETA TORPHY"/>
          <Card2 url="https://noiceland-project.netlify.app/image/latest__img1.webp" type="ILLUSTRATION" text="JAPAN HOUSE OPENS IN MOUNTAINSIDE TO FOSTER PEAK CREATIVITY." author="BY RETA TORPHY"/>
          <Card2 url="https://noiceland-project.netlify.app/image/latest__img1.webp" type="ILLUSTRATION" text="JAPAN HOUSE OPENS IN MOUNTAINSIDE TO FOSTER PEAK CREATIVITY." author="BY RETA TORPHY"/>
          <Card2 url="https://noiceland-project.netlify.app/image/latest__img1.webp" type="ILLUSTRATION" text="JAPAN HOUSE OPENS IN MOUNTAINSIDE TO FOSTER PEAK CREATIVITY." author="BY RETA TORPHY"/>
          <Card2 url="https://noiceland-project.netlify.app/image/latest__img1.webp" type="ILLUSTRATION" text="JAPAN HOUSE OPENS IN MOUNTAINSIDE TO FOSTER PEAK CREATIVITY." author="BY RETA TORPHY"/>
          
        </div>
        <div className="flex justify-center items-center">
          <button className="w-60 h-20 border-2 border-black hover:bg-black hover:text-white">
            <a href="#ltPhoto">VIEW ALL LATEST POSTS</a>
          </button>
        </div>
      </section>
    )
  }
  
