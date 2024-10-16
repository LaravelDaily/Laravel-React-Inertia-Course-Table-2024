import { Link } from '@inertiajs/react';

export default function About() {
    return (
        <div>
            <div className="mb-4">
                <Link className="mr-2" href={route('posts.index')}>Posts</Link>
                <Link href={route('about')}>About</Link>
            </div>

            About us
        </div>
    );
}
