import Navigation from './Navigation';
import CtaButton from '../CtaButton';
import HeadlineLg from '../HeadlineLg';
import SubHeadline from '../SubHeadline';
import SocialIcons from '../SocialIcons';
import Separator from '../Separator';
import HeaderBackground from '../../public/elements/bg.svg';

export default function Header(props) {
  return (
    <header className="w-full min-h-screen relative">
      <div className="container mx-auto relative z-10 px-4">
        <Navigation />
        <div className="md:flex relative z-10 pt-24 md:pt-36">
          <div className="md:w-6/12 flex md:justify-end">
            <div>
              <HeadlineLg
                attr={props.content.headline.attr}
                title={props.content.headline.title}
              />
              <div className="hidden md:block mt-8 ml-2">
                <CtaButton title="let’s talk" href="/kontakt" />
              </div>
              <div className="hidden md:block mt-32 ml-6">
                <SocialIcons />
              </div>
            </div>
          </div>
          <div className="md:w-6/12 md:mx-4 md:px-4 mt-16 md:mt-0 xl:mt-10">
            <p className="text-5xl font-montserrat relative md:-left-12">
              with us
            </p>
            <SubHeadline
              attr={props.content.subtitle.attr}
              title={props.content.subtitle.title}
            />
            <p className="mt-8 md:mt-16 text-lg md:text-3xl font-extralight md:leading-[1.5] ">
              {props.content.copy}
            </p>
            <div className="md:hidden mt-16 ml-2">
              <CtaButton title="let’s talk" />
            </div>
            <div className="md:hidden mt-16">
              <SocialIcons />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute z-0 w-[200vw] lg:w-full h-[110vh] md:h-[150vh] top-0 right-0 header-bg">
        <img
          src={HeaderBackground.src}
          alt="Hintergrund - Heyio SEO Agentur"
          className="relative w-full h-[80%] right-[-45%] md:right-[-15%] top-0"
        />
      </div>
      <div>
        <Separator />
      </div>
    </header>
  );
}
