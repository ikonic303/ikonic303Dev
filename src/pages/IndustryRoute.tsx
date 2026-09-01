import { useParams } from 'react-router-dom';
import ContentPage from '../components/ContentPage';
import NotFound from './NotFound';
import { PAGE_BY_SLUG } from '../content';

// One route for the four industry pages — /industries/:slug.
export default function IndustryRoute() {
  const { slug } = useParams();
  const page = slug ? PAGE_BY_SLUG[`/industries/${slug}`] : undefined;
  if (!page) return <NotFound />;
  return <ContentPage page={page} />;
}
