import styles from './Header.module.css'
import { Link } from "react-router-dom"
export default function Header(){

    return(

        <div className={styles.headerlateral}>
            <ul>
                <li>
                <Link to="/todolist"> Todolist</Link>

                </li>
                <li>
                <Link to="/testando"> Testando</Link>

                </li>
                
                </ul>
        </div>
    )
}