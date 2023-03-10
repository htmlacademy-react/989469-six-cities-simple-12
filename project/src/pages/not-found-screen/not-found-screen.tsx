import {Link} from 'react-router-dom';

function NotFoundScreen(): JSX.Element {
  return (
    <div className='container'>
      <h1>404 Error. The page you&apos;re looking for doesn&apos;t exist.</h1>
      <Link className='button' to='/'>Back Home</Link>
    </div>
  );
}

export default NotFoundScreen;
