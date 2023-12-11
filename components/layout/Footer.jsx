import CtaButton from '../CtaButton';
import SocialIcons from '../SocialIcons';

export default function Footer() {
  return (
    <footer>
      <div className="container mx-auto pb-16 px-4">
        <div className="w-full lg:w-8/12 font-montserrat font-headline-bold">
          <h3 className="text-5xl md:text-6xl pt-48 tracking-wide">
            hast du eine idee?
          </h3>
          <h3 className="text-5xl md:text-6xl py-16 tracking-wide">
            lass uns deine vision in die realität umsetzen!
          </h3>
        </div>
        <div className="flex md:justify-end py-8">
          <CtaButton title="let’s talk" href="/kontakt" />
        </div>
        <SocialIcons />
        <p className="text-[#847D7D] mt-16 font-light">
          &copy; 2022 heyio <br></br> seo & digital agency - alle rechte
          vorbehalten
        </p>
      </div>
    </footer>
  );
}
