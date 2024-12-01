import {Link} from "react-router-dom";

const Home = () => {
    return (
        <div>
            <h1>Hello</h1>
            <p><Link to="https://t.me/gdz_forbidden" target="_blank">telegram</Link></p>
            <p><Link to="/reshebnik-po-fizike/10-klass/electrodinamika-uglublennij-uroven-myakishev">Электродинамика</Link></p>
            <p><Link to="/reshebnik-po-fizike/11-klass/kolebaniya-i-volni-uglublennij-uroven-myakishev">Колебания и волны</Link></p>
            <p><Link to="/reshebnik-po-fizike/11-klass/myakishev-sinyakov">Оптика. Квантовая физика</Link></p>
            <p><Link to="/games">Игры</Link></p>
        </div>
    );
};

export default Home;