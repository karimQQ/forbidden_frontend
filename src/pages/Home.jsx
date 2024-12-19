import {Link} from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import BookInfo from "../components/BookInfo";

const Home = () => {
    return (
        <div>
            <Navbar/>
            <main>
                <h3>Белый учебник по физике Мякишев (это самое полезное)</h3>
                <BookInfo book={{
                    cover: {url: "/attachments/images/covers/000/104/693/0000/fizika-10-klass-mehanika-myakishev-g-ya-uglublennyy-uroven.jpg"},
                    url: "/reshebnik-po-fizike/10-klass/mechanika-uglublennij-uroven-myakishev",
                    title: "Физика 10 класс Механика Мякишев Г.Я. (углублённый уровень)"
                }}/>
                <BookInfo book={{
                    cover: {url: "/attachments/images/covers/000/104/813/0000/fizika-10-klass-molekulyarnaya-fizika-termodinamika-myakishev-g-ya-uglublennyy-uroven.jpg"},
                    url: "/reshebnik-po-fizike/10-klass/termodinamika-uglublennij-uroven-myakishev",
                    title: "Физика 10 класс Молекулярная физика. Термодинамика Мякишев Г.Я. (углублённый уровень)"
                }}/>
                <BookInfo book={{
                    cover: {url: "/attachments/images/covers/000/104/853/0000/fizika-10-11-klassy-elektrodinamika-myakishev-g-ya-uglublennyy-uroven.jpg"},
                    url: "/reshebnik-po-fizike/10-klass/electrodinamika-uglublennij-uroven-myakishev",
                    title: "Физика 10-11 классы Электродинамика Мякишев Г.Я. (углублённый уровень)"
                }}/>
                <BookInfo book={{
                    cover: {url: "/attachments/images/covers/000/104/653/0000/fizika-11-klass-kolebaniya-i-volny-myakishev-g-ya-uglublennyy-uroven.jpg"},
                    url: "/reshebnik-po-fizike/11-klass/kolebaniya-i-volni-uglublennij-uroven-myakishev",
                    title: "Физика 11 класс Колебания и волны Мякишев Г.Я. (углублённый уровень)"
                }}/>
                <BookInfo book={{
                    cover: {url: "/attachments/images/covers/000/065/253/0000/fizika-11-klass-optika-kvantovaya-fizika-myakishev-g-ya-uglublennyy-uroven.jpg"},
                    url: "/reshebnik-po-fizike/11-klass/myakishev-sinyakov",
                    title: "Физика 11 класс Оптика. Квантовая физика Мякишев Г.Я. (углублённый уровень)"
                }}/>
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