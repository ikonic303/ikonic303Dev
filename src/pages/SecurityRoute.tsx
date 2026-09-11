import { useParams } from 'react-router-dom';
import ContentPage from '../components/ContentPage';
import NotFound from './NotFound';
import { PAGE_BY_SLUG } from '../content';

// One route for the 6 security lane pages — /security/:slug.
export default function SecurityRoute() {
  const { slug } = useParams();
  const page = slug ? PAGE_BY_SLUG[`/security/${slug}`] : undefined;
  if (!page) return <NotFound />;
  return <ContentPage page={page} />;
}
