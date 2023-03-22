import {Fragment} from 'react';
import Link from "next/link";

function News() {
    return <Fragment>
        <h1>News</h1>
        <ul>
            <li>
                <Link href='/news/great-start'>Great Start</Link>
            </li>
        </ul>

    </Fragment>
}

export default News;