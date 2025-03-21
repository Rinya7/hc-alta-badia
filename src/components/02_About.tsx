import Carousel from "./common/Carousel"

 

function About() {
  return (
    <section className="py-16 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row gap-10 items-center">
          {/* ЛІВИЙ БЛОК — ТЕКСТ */}
          <div className="md:w-1/2">
          <h2 className="text-3xl font-semibold mb-6 text-center md:text-left">Benvenuti nel nostro Hockey Club</h2>
          <p className="text-lg leading-relaxed text-justify">
          L'Hockey Club è una comunità che condivide la passione per l'hockey su ghiaccio.  
  Siamo atleti uniti in un mondo pieno di passione ed emozione sul ghiaccio.  
  Invitiamo tutti coloro che vogliono vivere l'energia unica e lo spirito di squadra dell'hockey a unirsi al nostro club.<br /><br />
  
  Non siamo solo un club sportivo, ma anche una famiglia.  
  Crediamo che ogni membro sia prezioso e che possiamo ottenere grandi successi lavorando insieme.  
  Sotto la guida dei nostri allenatori professionisti, sperimenterai la forza dello spirito di squadra mentre migliori le tue capacità tecniche.
  </p>
        </div>

        {/* ПРАВИЙ БЛОК — СЛАЙДЕР */}
        <Carousel />
          
      </div>
    </section>
  )
}

export default About