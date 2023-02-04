import Features from './features';
import Header from './Header';
import Pricing from './Pricing';

export default function Page() {
  return (
    <div className='App'>
      <Header />
      <Pricing />
      <Features />
    </div>
  );
}
