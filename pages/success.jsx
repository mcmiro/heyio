import NavigationDark from '../components/layout/NavigationDark';
import HeadlineMd from '../components/HeadlineMd';
import HeadlineMdShadow from '../components/HeadlineMdShadow';

export default function Wer() {
  return (
    <div className="bg-[#161515] w-full h-full min-h-screen dark-bg pb-16">
      <div className="container mx-auto px-4">
        <NavigationDark />
      </div>
      <div className="container mx-auto text-white px-4">
        <div className="mt-16 relative">
          <HeadlineMd attr={'h2'} title={'danke!'} />
          <HeadlineMdShadow attr={'h2'} title={'danke!'} />
        </div>
        <div className="pt-4">
          <p className="text-2xl ">
            deine nachricht ist erfolgreich abgeschickt!
          </p>
          <p className="text-2xl ">
            wir werden uns so bald wie möglich bei dir melden.
          </p>
        </div>
      </div>
    </div>
  );
}
