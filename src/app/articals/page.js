import Link from 'next/link';
import React from 'react';

const ArticalsPage = () => {
    return (
        <div>
            <h1>articals page</h1>
            <Link href={"/posts"}>
            <button>click me to posts page</button>
            </Link>
            
        </div>
    );
}

export default ArticalsPage;
