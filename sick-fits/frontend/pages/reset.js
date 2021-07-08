import RequestReset from '../components/RequestReset';
import Reset from '../components/Reset';

export default function ResetPage({ query }) {
  if (!query?.token) {
    return (
      <div>
        <p>sorry you must supply token</p>
        <RequestReset />
      </div>
    );
  }

  return (
    <div>
      <p>RESET YOUR PASSWORD</p>
      <Reset token={query.token} />
    </div>
  );
}