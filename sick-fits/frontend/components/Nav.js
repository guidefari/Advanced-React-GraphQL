import Link from 'next/link';
import NavStles from './styles/NavStyles';

export default function Nav() {
  return (
    <NavStles>
      <Link href="/products">Products</Link>
      <Link href="/sell">Sell</Link>
      <Link href="/orders">Orders</Link>
      <Link href="/account">Account</Link>
    </NavStles>
  );
}
