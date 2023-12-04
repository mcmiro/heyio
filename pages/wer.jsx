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
          <HeadlineMd attr={'h3'} title={'wer wir sind'} />
          <HeadlineMdShadow attr={'h3'} title={'wer wir sind'} />
        </div>
        <div className="pt-4">
          <p className="text-2xl ">
            heyio ist eine agentur, die das digitale mit den user verbindet, die
            neue technologie entwickelt, sich schnell bewegt und immer bereit
            ist, neues zu lernen. dAs ist etwas was uns spaß macht, unser
            treibstoff. wir verstehen dich, weil wir du sind. Wir sind user,
            entwickler, designer, suchmaschinenoptimierer und analysten. wir
            sind kunden und verkäufer, wir sind kindlich und erwachsen, wir sind
            kreativ und strukturiert. unsere agentur besteht aus einem kleinen
            team, das ständig wächst und sich entwickelt. sie wurde in wien im
            jahr 2017 gegründet. wir erstellen und verwalten effiziente,
            kreative und innovative websites optimiert durch seo, dazu gehören
            auch webflow development, branding, web-desktop apps, “no-code”
            development, fotografie, illustration und vieles mehr. Durch unsere
            transparenz bekommst, du einen einlick in den ganzen
            entwicklungsprozess. unser focus liegt auf strategie, weil mit guter
            recherche und zufriedenen nutzern kommen wir zur bestmöglichen
            interaktion, die perfekt an deine bedürfnisse, angepasst ist. wir
            sind mit leidenschaft dabei und happy, wenn du happy bist!
          </p>
        </div>
      </div>
    </div>
  );
}
