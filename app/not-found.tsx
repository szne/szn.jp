import styles from "./page.module.scss";
import not_found from "./not-found.module.scss";

const RandomMessage: React.FC = () => {
    const randomMessages: string[] = [
        "Oops! The page you're looking for is not here.",
        "Page not found. Maybe it's on vacation?",
        "Lost in the digital wilderness. Seek and you shall find!",
        "Sorry, the page is on coffee break. ☕️",
        "The Parked Domain Girl you want to meet isn't here, sorry ;)",
    ];

    const randomIndex: number = Math.floor(Math.random() * randomMessages.length);
    const message: string = randomMessages[randomIndex];

    return <p>{message}</p>;
};

const Page = () => {
    return (
        <main className={styles.main}>
            <section className={not_found.msg}>
                <h1>404</h1><RandomMessage />
            </section>
        </main>
    );
};

export default Page;