import { useEffect, useState, useRef } from "react";
import Card from "./Card";
import Skeleton from "../skeleton/Skeleton";
import { fetchGames } from "../../../services/GameServices";
import NotificationError from "../../global/NotificationError";

const Cards = ({ cards, setCards, filters, setFilters, selected }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [lastElement, setLastElement] = useState(null);
    const [error, setError] = useState(false);

    const getCards = () => {
        if (!filters.fetch) {
            return;
        }
        setIsLoading(true);
        fetchGames(filters.query, filters.page, filters.platformId)
            .then((games) => {
                if (cards.length > 0) {
                    setCards(cards.concat(games));
                } else {
                    setCards(games);
                }
            })
            .catch(() => {
                setError(true);
            })
            .finally(() => {
                setIsLoading(false);
            });
    };

    useEffect(() => {
        getCards();
    }, [filters]);

    const observer = useRef(
        new IntersectionObserver(
            (entries) => {
                const lastCard = entries[0];
                if (lastCard.isIntersecting) {
                    setFilters((filters) => ({
                        ...filters,
                        page: filters.page + 1,
                        fetch: true,
                    }));
                }
            },
            {
                threshold: 0.01,
            }
        )
    );

    useEffect(() => {
        const currentElement = lastElement;
        const currentObserver = observer.current;

        if (currentElement) {
            currentObserver.observe(currentElement);
        }

        return () => {
            if (currentElement) {
                currentObserver.unobserve(currentElement);
            }
        };
    }, [lastElement]);

    if (isLoading && cards.length === 0) {
        return (
            <div className="skeleton">
                <Skeleton />
                <Skeleton />
                <Skeleton />
                <Skeleton />
                <Skeleton />
                <Skeleton />
                <Skeleton />
                <Skeleton />
                <Skeleton />
            </div>
        );
    }

    return (
        <section className="container-cards">
            {cards.length > 1 ? (
                cards.map((card, index) => {
                    return (
                        <Card
                            game={card}
                            key={card.id}
                            index={index}
                            page={filters.page}
                            ref={selected ? null : setLastElement}
                        />
                    );
                })
            ) : cards.length === 0 ? (
                error ? (
                    <NotificationError />
                ) : (
                    <span className="searches-not-found">
                        {selected
                            ? "No last searches were found"
                            : "No matches found for your search"}
                    </span>
                )
            ) : (
                <Card
                    game={cards}
                    key={cards.id}
                    index={0}
                    page={filters.page}
                />
            )}
        </section>
    );
};

export default Cards;
