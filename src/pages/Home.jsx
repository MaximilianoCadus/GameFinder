import HeaderContainer from "../components/home/header/HeaderContainer";
import Subheader from "../components/home/subheader/Subheader";
import Cards from "../components/home/cards/Cards";
import SidebarContainer from "../components/home/sidebar/SidebarContainer";
import "../css/home/home.css";
import "../css/home/media-queries.css";
import Footer from "../components/home/footer/Footer.jsx";
import { fetchPlatforms } from "../services/GameServices";
import { useState, useEffect } from "react";
import { CardsContextProvider } from "../contexts/CardsContext";
import { HamburContextProvider } from "../contexts/HamburContext";
import { SnackbarProvider } from "../contexts/SnackbarContext";
import { useNavigate } from "react-router-dom";
import BurguerButton from "../components/home/header/BurguerButton";

const Home = () => {
    const [cards, setCards] = useState([]);
    const [platforms, setPlatforms] = useState([]);
    const [selected, setSelected] = useState(false);
    const [lastSearches, setLastSearches] = useState([]);
    const [deleteFirst, setDeleteFirst] = useState(false);
    const [oneCardOnly, setOneCardOnly] = useState(false);
    const [filters, setFilters] = useState({
        query: "",
        page: 1,
        platformId: null,
        fetch: true,
    });

    const accessToken = JSON.parse(localStorage.getItem("jwt"));
    const id = localStorage.getItem("id");
    const URL = `http://localhost:3000/600/users/${id}`;
    const navigate = useNavigate();

    const validateToken = () => {
        fetch(URL, {
            headers: {
                Authorization: "Bearer " + accessToken,
            },
        }).then((response) => {
            if (response.status !== 200) {
                navigate("/");
                localStorage.removeItem("jwt");
            }
        });
    };

    const getPlatforms = () => {
        fetchPlatforms().then((data) => setPlatforms(data));
    };

    useEffect(() => {
        validateToken();
        getPlatforms();
    }, []);

    return (
        <>
            <HamburContextProvider>
                <BurguerButton />
                <HeaderContainer
                    cards={cards}
                    setCards={setCards}
                    platforms={platforms}
                    setFilters={setFilters}
                    filters={filters}
                    selected={selected}
                    setSelected={setSelected}
                    lastSearches={lastSearches}
                    setLastSearches={setLastSearches}
                    deleteFirst={deleteFirst}
                    setDeleteFirst={setDeleteFirst}
                    oneCardOnly={oneCardOnly}
                    setOneCardOnly={setOneCardOnly}
                />
                <SnackbarProvider>
                    <CardsContextProvider>
                        <main>
                            <Subheader />
                            <SidebarContainer
                                selected={selected}
                                setSelected={setSelected}
                                setFilters={setFilters}
                                cards={cards}
                                setCards={setCards}
                                lastSearches={lastSearches}
                                setLastSearches={setLastSearches}
                                setDeleteFirst={setDeleteFirst}
                            />
                            <Cards
                                cards={cards}
                                setCards={setCards}
                                filters={filters}
                                setFilters={setFilters}
                                selected={selected}
                                lastSearches={lastSearches}
                            />
                        </main>
                    </CardsContextProvider>
                </SnackbarProvider>
            </HamburContextProvider>
            <Footer />
        </>
    );
};

export default Home;
