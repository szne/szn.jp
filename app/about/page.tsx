import styles from "./page.module.scss";

export const metadata = {
    title: 'About',
};

export default async function Page() {
    return (
        <>
            <h1>About me</h1>
            <section>
                <h3>szne</h3>
                <p>あんまり書くことないよな</p>
                <p></p>
            </section>
            <section>
                <h2>ロゴについて</h2>
            </section>
        </>
    );
};