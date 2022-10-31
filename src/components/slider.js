
function Slider() {
    return (
        <div className="fluid-container ">
            <div className="row">
                <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active sliderbox" >
                            <img src="https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" className="imgslider" alt="..." />
                        </div>
                        <div className="carousel-item sliderbox">
                            <img src="https://images.unsplash.com/photo-1543087903-1ac2ec7aa8c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=898&q=80" className="imgslider" alt="..." />
                        </div>
                        <div className="carousel-item sliderbox" >
                            <img src="https://images.unsplash.com/photo-1544441893-675973e31985?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" className="imgslider" alt="..." />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Slider;