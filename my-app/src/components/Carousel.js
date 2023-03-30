
import './Carousel.css'

function Carousel () {
    
    return (
      
        <div className="card-carousel" >
                <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="d-block w-100" src="https://www.miamiherald.com/latest-news/yz4s7c/picture263693833/alternates/FREE_1140/Dragonfly%20Thrift%20Shop.jpg" alt="First slide"/>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src="https://di-uploads-pod14.dealerinspire.com/billluketempe/uploads/2018/10/800x418.jpg" alt="Second slide"/>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src="..." alt="Third slide"/>
                    </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
                </div>
           
        </div>
    )
}

export default Carousel