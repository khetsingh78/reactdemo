import Navbar from "./components/navbar";
import Slider from "./components/slider";
import Services from "./components/services";
import Footer from "./components/footer";

function App() {
    let manuItems = ['home', 'about', 'services', 'blog', 'contact'];
    

    return (
        <div>
            <Navbar manuItems={manuItems} />
            <Slider />
            <Services />
            <Footer manuItems={manuItems} />
        </div>
    )
}

export default App;