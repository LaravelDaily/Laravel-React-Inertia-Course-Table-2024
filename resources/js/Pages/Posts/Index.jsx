import AppLayout from '../../Layouts/AppLayout.jsx';
import { Head, Link, router, usePage } from '@inertiajs/react';

export default function PostsIndex({ posts, permissions }) {
    const destroy = (id) => {
        if (confirm('Are you sure?')) {
            router.delete(route('posts.destroy', { id }));
        }
    }

    return (
        <AppLayout>
            <Head>
                <title>Posts</title>
            </Head>

            <div>
                { permissions.posts_manage && (
                    <Link href={route('posts.create')} className="mb-4 inline-block rounded-md bg-blue-500 px-4 py-3 text-xs font-semibold uppercase tracking-widest text-white shadow-sm">
                        Add new post
                    </Link>
                )}

                <table className="min-w-full divide-y divide-gray-200 border">
                    <thead>
                        <tr>
                            <th className="px-6 py-3 bg-gray-50 text-left">
                                <span className="text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">ID</span>
                            </th>
                            <th className="px-6 py-3 bg-gray-50 text-left">
                                <span className="text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Title</span>
                            </th>
                            <th className="px-6 py-3 bg-gray-50 text-left">
                                <span className="text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Content</span>
                            </th>
                            <th className="px-6 py-3 bg-gray-50 text-left">
                                <span className="text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Created At</span>
                            </th>
                            <th className="px-6 py-3 bg-gray-50 text-left">
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200 divide-solid">
                        {posts && posts && posts.map((post) => (
                            <tr key={post.id}>
                                <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-900">
                                    {post.id}
                                </td>
                                <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-900">
                                    {post.title}
                                </td>
                                <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-900">
                                    {post.content}
                                </td>
                                <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-900">
                                    {post.created_at}
                                </td>
                                <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-900">
                                    { permissions.posts_manage && (
                                        <Link href={route('posts.edit', post.id)} className="mr-2 inline-block rounded-md bg-blue-500 px-3 py-2 text-xs font-semibold uppercase tracking-widest text-white shadow-sm">
                                            Edit
                                        </Link>
                                    )}
                                    { permissions.posts_manage && (
                                        <button onClick={() => destroy(post.id)} type="button" className="rounded-md bg-red-600 px-3 py-2 text-xs font-semibold uppercase tracking-widest text-white shadow-sm">
                                            Delete
                                        </button>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </AppLayout>
    );
};
