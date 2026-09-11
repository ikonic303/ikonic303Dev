import { useParams } from 'react-router-dom';
import ContentPage from '../components/ContentPage';
import NotFound from './NotFound';
import { PAGE_BY_SLUG } from '../content';

// One route for the 7 marketing depth pages — /marketing/:slug.
export default function MarketingRoute() {
  const { slug } = useParams();
  const page = slug ? PAGE_BY_SLUG[`/marketing/${slug}`] : undefined;
  if (!page) return <NotFound />;
  return <ContentPage page={page} />;
}
