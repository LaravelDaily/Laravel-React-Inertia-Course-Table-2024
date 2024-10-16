import { Link } from '@inertiajs/react';

export default function AppLayout({ children }) {
    return (
        <div>
            <div className="mb-4">
                <Link href={route('posts.index')}>Posts</Link>
                <Link href={route('about')}>About</Link>
                <Link className={`mr-2 ${route().current('posts.index') ? 'font-bond underline' : ''}`} href={route('posts.index')}>Posts</Link>
                <Link className={route().current('about') ? 'font-bond underline' : ''} href={route('about')}>About</Link>
            </div>

            <main>{children}</main>
        </div>
    );
}
