import Navbar from "./components/navbar";
import Slider from "./components/slider";
import Services from "./components/services";
import Footer from "./components/footer";
import Managestate from "./components/usestates";
import ProductAmaount from "./components/products";


function App() {
    let manuItems = ['home', 'about', 'services', 'blog', 'contact'];


    return (
        <div>
            <Navbar manuItems={manuItems} />
            <Slider />
            <Services />
            <Managestate />
            < ProductAmaount />
            <Footer manuItems={manuItems} />
        </div>
    )
}

export default App;