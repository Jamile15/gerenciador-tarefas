import style from './List.module.scss';
import {MdAdd} from 'react-icons/md';
import Card from '../Card';

export default function List ({data}) {
    return (
        <>
        <section className= {style.lista}>
        <header className= {style.headerColun}>
            <h2>{data.title}</h2>
           {data.creatable && (
            <button type='button'>
                <MdAdd size={24} color='#fff'/>
            </button>
           )}

        </header>
        <ul>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />

        </ul>
        </section>
        
        
        </>
);
}