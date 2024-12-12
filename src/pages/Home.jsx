import {Link} from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";

const Home = () => {
    return (
        <div>
            <Navbar/>
            <main>
                <h3>Белый учебник по физике Мякишев (это самое полезное)</h3>
                <p>
                    <Link to="/reshebnik-po-fizike/10-klass/mechanika-uglublennij-uroven-myakishev">Механика</Link>
                </p>
                <p>
                    <Link to="/reshebnik-po-fizike/10-klass/termodinamika-uglublennij-uroven-myakishev">Молекулярная
                        физика.
                        Термодинамика</Link>
                </p>
                <p>
                    <Link
                        to="/reshebnik-po-fizike/10-klass/electrodinamika-uglublennij-uroven-myakishev">Электродинамика</Link>
                </p>
                <p>
                    <Link to="/reshebnik-po-fizike/11-klass/kolebaniya-i-volni-uglublennij-uroven-myakishev">Колебания и
                        волны</Link>
                </p>
                <p>
                    <Link to="/reshebnik-po-fizike/11-klass/myakishev-sinyakov">Оптика. Квантовая физика</Link>
                </p>
                <h3>Выберите класс</h3>
                <p><Link to="/1-klass">1</Link></p>
                <p><Link to="/2-klass">2</Link></p>
                <p><Link to="/3-klass">3</Link></p>
                <p><Link to="/4-klass">4</Link></p>
                <p><Link to="/5-klass">5</Link></p>
                <p><Link to="/6-klass">6</Link></p>
                <p><Link to="/7-klass">7</Link></p>
                <p><Link to="/8-klass">8</Link></p>
                <p><Link to="/9-klass">9</Link></p>
                <p><Link to="/10-klass">10</Link></p>
                <p><Link to="/11-klass">11</Link></p>
            </main>
        </div>
    );
};

export default Home;