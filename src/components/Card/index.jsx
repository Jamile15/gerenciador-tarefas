import style from './Card.module.scss';

export default function Card() {
    return (
        <section className={style.card}>
        <header className= {style.headerCard}>
            <span className={style.marcadorSpan}  ></span>
        </header>
        <p>Fazer a migração completa de servidor</p>
        <img src="https://api.dicebear.com/6.x/bottts-neutral/svg?seed=Harley" alt="" />

        </section>

    );
}