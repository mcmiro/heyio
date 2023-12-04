// Components
import { useState } from 'react';
import { useRouter } from 'next/router';
import NavigationDark from '../components/layout/NavigationDark';
import HeadlineMd from '../components/HeadlineMd';
import HeadlineMdShadow from '../components/HeadlineMdShadow';
import CtaButtonDark from '../components/CtaButtonDark';
import axios from 'axios';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

export default function Kontakt() {
  const router = useRouter();

  const [choosedService, setService] = useState([]);

  function pickService(val) {
    if (!choosedService.includes(val)) {
      setService([...choosedService, val]);
    } else {
      setService((prevState) =>
        prevState.filter((prevItem) => prevItem !== val)
      );
    }
  }

  const toggleHighlightClass = (event) => {
    const element = event.target;
    if (element.classList.contains('inactive-check')) {
      element.classList.remove('inactive-check');
      element.classList.add('active-check', 'text-black');
    } else {
      element.classList.remove('active-check', 'text-black');
      element.classList.add('inactive-check');
    }
  };

  const services = [
    'ui/ux',
    'branding',
    'copy',
    'seo',
    'dev',
    'app',
    'sonstiges',
  ];

  // YUP Validation Schema
  const contactSchema = Yup.object().shape({
    name: Yup.string().required('erforderlich'),
    email: Yup.string().email('hst du dich vertippt?').required('erforderlich'),
    confirmation: Yup.boolean().oneOf([true], 'nur noch die dsgvo akzeptieren'),
    phone: Yup.string(),
    website: Yup.string(),
    message: Yup.string(),
    recaptcha: Yup.string()
      .required('erforderlich')
      .matches(/([1-9][0-9]?|99)$/, 'eine nummer zwischen 1 und 99 eingeben'),
  });

  return (
    <div className="bg-[#161515] w-full h-full min-h-screen dark-bg pb-16">
      <div className="container mx-auto px-4">
        <NavigationDark />
      </div>
      <div className="container mx-auto text-white px-4">
        <div className="mt-16 relative">
          <HeadlineMd attr={'h3'} title={'say hi'} />
          <HeadlineMdShadow attr={'h3'} title={'say hi'} />
        </div>
        {/* Form START */}
        <Formik
          initialValues={{
            name: '',
            email: '',
            confirmation: false,
            phone: '',
            website: '',
            message: '',
            recaptcha: '',
          }}
          validationSchema={contactSchema}
          onSubmit={async (values) => {
            const data = {
              name: values.name,
              email: values.email,
              phone: values.phone,
              website: values.website,
              message: values.message,
              service: choosedService,
              recaptcha: values.recaptcha,
            };

            const response = await axios
              .post('https://www.heyio.at/mail-service/index.php', data)
              .then((result) => result.data);
            if (response.status === 200) {
              router.push('/success');
            }
          }}
        >
          {({ errors, touched }) => (
            <Form>
              <div className="grid md:grid-cols-2 gap-x-8 md:gap-y-24 gap-y-12 mt-16">
                {/* Name START */}
                <div className="relative z-0">
                  <Field
                    type="text"
                    id="name"
                    name="name"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-white peer"
                    placeholder=" "
                  />
                  <label
                    htmlFor="name"
                    className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    vor-, und nachname*
                  </label>
                  <div className="h-8 pt-2">
                    <ErrorMessage
                      name="name"
                      component="div"
                      className="text-red-500 text-sm"
                    />
                  </div>
                </div>
                {/* Name END */}
                {/* E-Mail START */}
                <div className="relative z-0">
                  <Field
                    type="email"
                    id="email"
                    name="email"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-white peer"
                    placeholder=" "
                  />
                  <label
                    htmlFor="email"
                    className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    email*
                  </label>
                  <div className="h-8 pt-2">
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="text-red-500 text-sm"
                    />
                  </div>
                </div>
                {/* E-Mail END */}
                {/* Phone START */}
                <div className="relative z-0">
                  <Field
                    type="text"
                    id="phone"
                    name="phone"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-white peer"
                    placeholder=" "
                  />
                  <label
                    htmlFor="phone"
                    className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    telefon
                  </label>
                </div>
                {/* Phone END */}
                {/* Website START */}
                <div className="relative z-0">
                  <Field
                    type="text"
                    id="website"
                    name="website"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-white peer"
                    placeholder=" "
                  />
                  <label
                    htmlFor="website"
                    className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    website
                  </label>
                </div>
                {/* Website END */}
              </div>
              {/* Projekt Typ START */}
              <div className="mt-12">projekttyp</div>
              <div className="mt-12">
                <div className="md:mt-16 flex flex-wrap md:gap-8 justify-center">
                  {services.map((el, index) => {
                    if (index < services.length / 2) {
                      return (
                        <div
                          onClick={(e) => {
                            pickService(el);
                            toggleHighlightClass(e);
                          }}
                          key={index}
                          className="my-2 mr-2 md:m-0 py-2 px-8 md:px-16 text-center inactive-check inline-block rounded-full font-bold cursor-pointer transition-all duration-300"
                        >
                          {el}
                        </div>
                      );
                    }
                  })}
                </div>
                <div className="md:mt-8 flex md:gap-8 justify-center">
                  {services.map((el, index) => {
                    if (index > services.length / 2) {
                      return (
                        <div
                          onClick={(e) => {
                            pickService(el);
                            toggleHighlightClass(e);
                          }}
                          key={index}
                          className="my-2 mr-2 md:m-0 py-2 px-8 md:px-16 text-center inactive-check inline-block rounded-full font-bold cursor-pointer transition-all duration-300"
                        >
                          {el}
                        </div>
                      );
                    }
                  })}
                </div>
              </div>
              {/* Projekt Typ End */}
              {/* More START */}
              <div className="mt-24">erzähl uns mehr über dein projekt</div>
              <div className="relative z-0 mt-16">
                <Field
                  type="text"
                  id="message"
                  name="message"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-white peer"
                  placeholder=" "
                />
                <label
                  htmlFor="message"
                  className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  nachricht
                </label>
              </div>
              {/* More END */}
              {/* Check Conditions START */}
              <div className="pt-16">
                <div className="flex items-center mb-2">
                  <Field
                    id="gpdr"
                    type="checkbox"
                    name="confirmation"
                    className="opacity-0 absolute h-8 w-8"
                  />
                  <div className="bg-white border-2 border-gray-300 w-8 h-8 flex flex-shrink-0 justify-center items-center mr-2 focus-within:border-gray-500">
                    <svg
                      className="fill-current hidden w-3 h-3 text-gray-600 pointer-events-none"
                      version="1.1"
                      viewBox="0 0 17 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g fill="none" fillRule="evenodd">
                        <g
                          transform="translate(-9 -11)"
                          fill="#626262"
                          fillRule="nonzero"
                        >
                          <path d="m25.576 11.414c0.56558 0.55188 0.56558 1.4439 0 1.9961l-9.404 9.176c-0.28213 0.27529-0.65247 0.41385-1.0228 0.41385-0.37034 0-0.74068-0.13855-1.0228-0.41385l-4.7019-4.588c-0.56584-0.55188-0.56584-1.4442 0-1.9961 0.56558-0.55214 1.4798-0.55214 2.0456 0l3.679 3.5899 8.3812-8.1779c0.56558-0.55214 1.4798-0.55214 2.0456 0z" />
                        </g>
                      </g>
                    </svg>
                  </div>
                  <label htmlFor="gpdr" className="select-none">
                    ich habe die datenschutzbestimmungen gelesen und
                    akzeptiert.*
                  </label>
                </div>
                <div className="h-8">
                  <ErrorMessage
                    name="confirmation"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>
              </div>
              {/* Check Conditions END */}
              {/* Recaptcha START */}
              <div className="w-full md:w-6/12 relative z-0">
                <Field
                  type="text"
                  id="name"
                  name="recaptcha"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-white peer"
                  placeholder=" "
                />
                <label
                  htmlFor="recaptcha"
                  className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  nummer zwischen 1-99
                </label>
                <div className="h-8 pt-2">
                  <ErrorMessage
                    name="recaptcha"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>
              </div>
              {/* Recaptcha END */}
              <div className="flex md:justify-end py-8 mt-12">
                <CtaButtonDark title="send" type="submit" />
              </div>
            </Form>
          )}
        </Formik>
        {/* Form END */}
      </div>
    </div>
  );
}
