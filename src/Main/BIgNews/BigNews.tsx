import { Card } from "./card/Card"

export const BigNews = () => {
  return (
    <section id="Photo" className="container border-b-2 pb-10 lg:pb-20">
      <h4 className="text-sm text-gray-400 text-center ">PHOTO</h4>
      <div className="flex flex-col lg:flex-row lg:flex-wrap items-center justify-between py-5 gap-5">
          <Card url="https://noicelandproject.netlify.app/img/content/01.png" type="PHOTOGRAPHY" text="HELMUT LANG CELEBRATES TAXI DRIVERS WORLDWIDE IN LATEST CAMPAIGN" author="BY ALESSANDRA ORTIZ"/>
            <Card url="https://noicelandproject.netlify.app/img/content/02.png" type="PHOTOGRAPHY" text="HELMUT LANG CELEBRATES TAXI DRIVERS WORLDWIDE IN LATEST CAMPAIGN" author="BY ALESSANDRA ORTIZ"/>
            <Card url="https://noicelandproject.netlify.app/img/content/03.png" type="PHOTOGRAPHY" text="HELMUT LANG CELEBRATES TAXI DRIVERS WORLDWIDE IN LATEST CAMPAIGN" author="BY ALESSANDRA ORTIZ"/>
            <Card url="https://noicelandproject.netlify.app/img/content/04.png" type="PHOTOGRAPHY" text="HELMUT LANG CELEBRATES TAXI DRIVERS WORLDWIDE IN LATEST CAMPAIGN" author="BY ALESSANDRA ORTIZ"/>
            <Card url="https://noicelandproject.netlify.app/img/content/05.png" type="PHOTOGRAPHY" text="HELMUT LANG CELEBRATES TAXI DRIVERS WORLDWIDE IN LATEST CAMPAIGN" author="BY ALESSANDRA ORTIZ"/>
            <Card url="https://noicelandproject.netlify.app/img/content/06.png" type="PHOTOGRAPHY" text="HELMUT LANG CELEBRATES TAXI DRIVERS WORLDWIDE IN LATEST CAMPAIGN" author="BY ALESSANDRA ORTIZ"/>
      </div>
    </section>
  )
}
