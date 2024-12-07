import Link from 'next/link';

const NavLink = ({title, link}) => {
    return (
      <li className='group'>
        <Link
          className="text-base text-gray-600 py-2 mx-8 lg:mx-3 flex group-hover:text-primary"
          href={link}
        >
          {title}
        </Link>
      </li>
    );
}

export default NavLink;