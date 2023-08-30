import Link from 'next/link';

import Cookies from 'js-cookie';

import { useRouter } from 'next/router';

 

const Sidebar = () => {

  const router = useRouter();

 

  const handleLogout = () => {

    // Perform logout actions

    // For example, clear cookies, state, and redirect to the login page

    Cookies.remove('isLoggedIn'); // Remove the isLoggedIn cookie

    router.push('/login'); // Redirect to the login page

  };

 

  return (

    <nav className="bg-gray-800 text-white w-48 px-2 py-6 fixed inset-y-0">

      <div className="text-white text-xl font-bold mb-8">Dashboard</div>

      <ul className="text-white"><br></br><br></br><br></br>

        {/* Menu items */}

        {/* <li className="mb-4">

          <Link href="/dashboard/profile">

            <span className="block hover:text-gray-200">Profile</span>

          </Link>

        </li> */}

        <li className="mb-4">

          <Link href="/dashboard/admin_list">

            <span className="block hover:text-gray-200">Admin List</span>

          </Link>

        </li>

        <li className="mb-4">

          <Link href="/dashboard/user_list">

            <span className="block hover:text-gray-200">Employeer List</span>

          </Link>

        </li>

        <li className="mb-4">

          <Link href="/dashboard/user_add">

            <span className="block hover:text-gray-200">Employeer Add</span>

          </Link>

        </li>

        <li className="mb-4">

          <Link href="/dashboard/user_update">

            <span className="block hover:text-gray-200">Employeer Update</span>

          </Link>

        </li>

        <li className="mb-4">

          <Link href="/dashboard/user_delete">

            <span className="block hover:text-gray-200">Employeer Delete</span>

          </Link>

        </li>

        <li className="mb-4">

          <Link href="/dashboard/products">

            <span className="block hover:text-gray-200">Image Upload & Description</span>

          </Link>

        </li><br></br><br></br><br></br>

        <li className="mb-4">

          <Link href="/dashboard/email">

            <span className="block hover:text-gray-200">Sent Email</span>

          </Link>

        </li><br></br><br></br><br></br>

 

        {/* Logout button */}

        <li className="mt-auto">

          <h3><button

            onClick={handleLogout}

            className="block text-red-500 hover:text-red-700"

          >

            Logout

          </button></h3>

        </li>

      </ul>

    </nav>

  );

};

 

export default Sidebar;