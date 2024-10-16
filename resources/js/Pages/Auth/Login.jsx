import GuestLayout from '../../Layouts/GuestLayout.jsx'
import { Head, useForm } from '@inertiajs/react'

export default function Login() {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('login'), {
            onFinish: () => reset('password'),
        });
    };

    return (
        <GuestLayout>
            <Head title="Log in" />

            <form onSubmit={submit}>
                <div>
                    <label htmlFor="email" className="block font-medium text-sm text-gray-700">Email</label>
                    <input onChange={(e) => setData('email', e.target.value)} id="email" type="email" className="block mt-1 w-full rounded-md shadow-sm border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" required autoFocus />
                    {errors.email && (<p className="mt-2 text-sm text-red-600">{errors.email}</p>)}
                </div>
                <div className="mt-4">
                    <label htmlFor="password" className="block font-medium text-sm text-gray-700">Password</label>
                    <input onChange={(e) => setData('password', e.target.value)} id="password" type="password" className="block mt-1 w-full rounded-md shadow-sm border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" required />
                    {errors.password && (<p className="mt-2 text-sm text-red-600">{errors.password}</p>)}
                </div>
                <div className="block mt-4">
                    <label className="flex items-center">
                        <input checked={data.remember} onChange={(e) => setData('remember', e.target.checked)} type="checkbox" name="remember" className="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                        <span className="ml-2 text-sm text-gray-600">Remember me</span>
                    </label>
                </div>
                <div className="flex items-center justify-end mt-4">
                    <button className="inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:shadow-outline-gray transition ease-in-out duration-150 ml-4">
                        Log in
                    </button>
                </div>
            </form>
        </GuestLayout>
    );
}
