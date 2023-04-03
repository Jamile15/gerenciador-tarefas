import style from './List.modules.scss';
import {MdAdd} from 'react-icons/md';
import Card from '../Card';

export default function List () {
    return (
        <>
        <header className={style.headerColun}>
            <h2>Tarefas</h2>
            <button type='button'>
                <MdAdd size={24} color='#fff' />
            </button>

        </header>
        <ul>
            <Card />
            <Card />
            <Card />
            <Card />
        </ul>
        </>
);
}