import Link from 'next/link';

const Styleguide = () => {
  return (
    <div>
      <h1>Styleguide</h1>
      <ul>
        <li><Link href="/styleguide/buttons">Buttons</Link></li>
        <li><Link href="/styleguide/companylist">Company List</Link></li>
        <li><Link href="/styleguide/icons">Icons</Link></li>
        <li><Link href="/styleguide/inputfield">Inputfield</Link></li>
        <li><Link href="/styleguide/pagination">Pagination</Link></li>
        <li><Link href="/styleguide/personlist">Person List</Link></li>
        <li><Link href="/styleguide/profilepictures">Profile pictures</Link></li>
        <li><Link href="/styleguide/sidebar">Sidebar</Link></li>
      </ul>
    </div>
  );
}

export default Styleguide;
