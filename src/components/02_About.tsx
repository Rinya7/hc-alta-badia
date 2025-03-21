import Carousel from "./common/Carousel"
 

 

function About() {
  return (
    <section className="container"> 
        <div className="items-center mb-[20px]"> 
            <div className="md:w-full mb-[20px]">
                <h2 className="text-3xl font-semibold   text-center mb-[40px]">Benvenuti nel nostro Hockey Club</h2>
                <p className="text-lg leading-relaxed text-justify">
                L&apos;Hockey Club è una comunità che condivide la passione per l&apos;hockey su ghiaccio.  
                Siamo atleti uniti in un mondo pieno di passione ed emozione sul ghiaccio.  
                Invitiamo tutti coloro che vogliono vivere l&apos;energia unica e lo spirito di squadra dell&apos;hockey a unirsi al nostro club.<br /><br />
                Non siamo solo un club sportivo, ma anche una famiglia.  
                Crediamo che ogni membro sia prezioso e che possiamo ottenere grandi successi lavorando insieme.  
                Sotto la guida dei nostri allenatori professionisti, sperimenterai la forza dello spirito di squadra mentre migliori le tue capacità tecniche.
                </p>
            </div> 
            <Carousel />
        </div>
    </section>
  )
}

export default About