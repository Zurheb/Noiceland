export const Hero = () => {
  return (
    <section id="Home" className="container py-10 lg:py-14 flex flex-col lg:flex-row justify-between items-center">
      <div className="mb-5 lg:mb-0 lg:mr-10">
        <img src="https://noiceland-project.netlify.app/image/home__img.webp" alt="maintance" className="max-w-full" />
      </div>
      <div className="flex flex-col justify-center items-center lg:items-start max-w-lg gap-5 lg:gap-10">
        <span className="text-gray-400 text-sm">ILLUSTRATION</span>
        <h1 className="text-2xl lg:text-4xl text-center lg:text-left">JAPAN HOUSE OPENS IN MOUNTAINSIDE TO FOSTER PEAK CREATIVITY.</h1>
        <p className="text-sm lg:text-base text-gray-500 text-center lg:text-left">Enim omittam qui id, ex quo atqui dictas complectitur. Nec ad timeam accusata, hinc justo falli id eum, ferri novum molestie eos cu.</p>
        <span className="font-bold text-sm">BY RETA TORPHY</span>
      </div>
    </section>
  )
}
