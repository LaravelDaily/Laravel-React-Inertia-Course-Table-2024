import AppLayout from '../../Layouts/AppLayout.jsx';
import { Head, Link, useForm } from '@inertiajs/react';

export default function CreatePost() {
    const { data, setData, post, processing, errors, reset } = useForm({
        title: '',
        content: '',
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('posts.store'));
    };

    return (
        <AppLayout>
            <Head title="New Post" />

            <div>
                <form onSubmit={submit}>
                    <div>
                        <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
                        <input onChange={(e) => setData('title', e.target.value)} type="text" id="title" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                        { errors.title && (<p className="mt-2 text-sm text-red-600">{errors.title}</p>)}
                    </div>
                    <div className="mt-4">
                        <label htmlFor="content" className="block text-sm font-medium text-gray-700">Content</label>
                        <textarea onChange={(e) => setData('content', e.target.value)} type="text" id="content" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"></textarea>
                        { errors.content && (<p className="mt-2 text-sm text-red-600">{errors.content}</p>)}
                    </div>
                    <div className="mt-4 py-4 space-x-2">
                        <button disabled={processing} type="submit" className="inline-block rounded-md bg-blue-500 px-4 py-3 text-xs font-semibold uppercase tracking-widest text-white shadow-sm disabled:opacity-25">
                            Save post
                        </button>
                        <Link href={route('posts.index')} className="inline-block rounded-md border border-gray-300 px-4 py-3 text-xs font-semibold uppercase tracking-widest shadow-sm"> Cancel </Link>
                    </div>
                </form>
            </div>
        </AppLayout>
    );
}
