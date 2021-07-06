import Link from 'next/link';
import SignOut from './SignOut';
import NavStles from './styles/NavStyles';
import { useUser } from './User';

export default function Nav() {
  const user = useUser();

  return (
    <NavStles>
      <Link href="/products">Products</Link>
      {user && (
        <>
          <Link href="/sell">Sell</Link>
          <Link href="/orders">Orders</Link>
          <Link href="/account">Account</Link>
          <SignOut />
        </>
      )}
      {!user && (
        <>
          <Link href="/signin">Sign In</Link>
        </>
      )}
    </NavStles>
  );
}
