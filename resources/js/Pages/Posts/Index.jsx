import { Link } from '@inertiajs/react';

export default function PostsIndex({ posts }) {
    return (
        <div>
            <div className="mb-4">
                <Link className="mr-2" href={route('posts.index')}>Posts</Link>
                <Link href={route('about')}>About</Link>
            </div>

            <table className="min-w-full divide-y divide-gray-200 border">
                <thead>
                    <tr>
                        <th className="px-6 py-3 bg-gray-50 text-left">
                            <div className="flex flex-row items-center justify-between cursor-pointer">
                                <div className="leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                    ID
                                </div>
                            </div>
                        </th>
                        <th className="px-6 py-3 bg-gray-50 text-left">
                            <div className="flex flex-row items-center justify-between cursor-pointer">
                                <div className="leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                    Title
                                </div>
                            </div>
                        </th>
                        <th className="px-6 py-3 bg-gray-50 text-left">
                            <span className="text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Content</span>
                        </th>
                        <th className="px-6 py-3 bg-gray-50 text-left">
                            <span className="text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Created At</span>
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
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
