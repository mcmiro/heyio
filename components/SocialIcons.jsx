import Instagram from '../public/icons/instagram.svg';
import Behance from '../public/icons/behance.svg';
import Linkedin from '../public/icons/linkedin.svg';

export default function SocialIcons() {
  return (
    <div className="flex gap-8 mt-8">
      {/* Instagram */}
      <a href="#instagram">
        <img src={Instagram.src} className="w-10" alt="heyio instagram" />
      </a>
      {/* Linkedin */}
      <a href="#linkedin">
        <img src={Linkedin.src} className="w-10" alt="heyio linkedin" />
      </a>
      {/* Behance */}
      <a href="#behance">
        <img src={Behance.src} className="w-10" alt="heyio behance" />
      </a>
    </div>
  );
}
