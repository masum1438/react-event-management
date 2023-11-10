


const Slide =() => {
    return (
        <div>
            <div className="carousel w-full">
  <div id="slide1" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/T4zWP1c/e22.png" className="w-full h-80" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-40">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <p className="font-medium text-2xl text-orange-700">Educational Events by BOOK PVT.LTD</p>
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/RDt7tj4/e44.png" className="w-full h-80" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-40">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <p className="font-medium text-2xl text-orange-700">Educational Events by BOOK PVT.LTD</p>
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/64DPsj1/e11.png" className="w-full h-80" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-40">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <p className="font-medium text-2xl text-orange-700">Educational Events by BOOK PVT.LTD</p>
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/mXS877M/e3.png" className="w-full h-80" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-40">
      <a href="#slide3" className="btn btn-circle">❮</a> 
       <p className="font-medium text-2xl text-orange-700">Educational Events by BOOK PVT.LTD</p>
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
        </div>
    );
};
export default Slide;