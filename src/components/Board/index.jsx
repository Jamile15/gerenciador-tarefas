import style from './Board.module.scss';
import {loadLists} from '../../services/api'
import List from '../List';

const lists = loadLists();

export default function Board () {
    return (
        <section className={style.board}>
            {lists.map(list => <List key={list.title} data={list}/>)}
          
        </section>

    );
}