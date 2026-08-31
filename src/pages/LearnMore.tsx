import ContentPage from '../components/ContentPage';
import { howWeWork } from '../content/pages/how-we-work';

// Route: /how-we-work  (filename kept as LearnMore for import stability; /learn-more
// still 301s here via vercel.json).
export default function HowWeWork() {
  return <ContentPage page={howWeWork} />;
}
