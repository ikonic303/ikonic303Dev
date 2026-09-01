import { useParams } from 'react-router-dom';
import ContentPage from '../components/ContentPage';
import NotFound from './NotFound';
import { PAGE_BY_SLUG } from '../content';

// One route for all 12 guides — /guides/:slug. Content is resolved from the
// shared content map; an unknown slug falls through to the 404 page.
export default function GuideRoute() {
  const { slug } = useParams();
  const page = slug ? PAGE_BY_SLUG[`/guides/${slug}`] : undefined;
  if (!page) return <NotFound />;
  return <ContentPage page={page} />;
}
