import { Card3 } from "./card3/Card3"

export const Post = () => {
    return (
      <section id="Post" className="container py-10 lg:py-20">
        <h4 className="text-sm text-gray-400 text-center">FEATURED POSTS</h4>
        <div className="flex flex-col lg:flex-row lg:flex-wrap items-center justify-between py-10 gap-5">
          <Card3 url="https://noiceland-project.netlify.app/image/featured__img1.webp" type="GRAPHIC DESIGN" text="A BRIEF HISTORY OF THE FIFA WORLD CUP LOGO" author="BY CLEM ONOJEGHUO"/>
          <Card3 url="https://noiceland-project.netlify.app/image/featured__img2.webp" type="GRAPHIC DESIGN" text="A BRIEF HISTORY OF THE FIFA WORLD CUP LOGO" author="BY CLEM ONOJEGHUO"/>
          <Card3 url="https://noiceland-project.netlify.app/image/featured__img3.webp" type="GRAPHIC DESIGN" text="A BRIEF HISTORY OF THE FIFA WORLD CUP LOGO" author="BY CLEM ONOJEGHUO"/>
          <Card3 url="https://noiceland-project.netlify.app/image/featured__img4.webp" type="GRAPHIC DESIGN" text="A BRIEF HISTORY OF THE FIFA WORLD CUP LOGO" author="BY CLEM ONOJEGHUO"/>
        </div>
      </section>
    )
  }
  