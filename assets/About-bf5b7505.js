import { j as e, s } from './index-30b3ec0c.js';
import { T as n } from './index-29778f7d.js';
const a = ({ icon: t, title: i }) =>
  e.jsx(n, {
    className: 'xs:w-[250px] w-full',
    children: e.jsx('div', {
      className:
        'w-full green-pink-gradient-animated p-[2px] rounded-[20px] shadow-card',
      children: e.jsxs('div', {
        className:
          'bg-tertiary z-[1] relative rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col',
        children: [
          e.jsx('img', {
            src: t,
            alt: 'web-development',
            className: 'w-16 h-16 object-contain',
          }),
          e.jsx('h3', {
            className: 'text-white text-[20px] font-bold text-center',
            children: i,
          }),
        ],
      }),
    }),
  }),
  l = [
    {
      title: 'Frontend Developer',
      icon: 'https://i.ibb.co/4W2fVTd/icons8-front-end-512.png',
    },
    {
      title: 'Full Stack Developer',
      icon: 'https://i.ibb.co/zPRX9y5/icons8-web-developer-384.png',
    },
    {
      title: 'Microservices Developer',
      icon: 'assets/images/microforsite.png',
    },
    { title: 'Software Architect', icon: 'assets/images/softArch2.png' },
  ],
  o = () =>
    e.jsxs('div', {
      className: 'lg:w-[90%] md:w-[80%] w-[90%] mx-auto',
      children: [
        e.jsxs('div', {
          className: '',
          children: [
            e.jsx('p', {
              className: s.sectionSubText,
              children: 'Introduction',
            }),
            e.jsx('h2', { className: s.sectionHeadText, children: 'Overview' }),
          ],
        }),
        e.jsx('p', {
          className:
            'mt-4 animate__rubberBand text-secondary text-[17px] max-w-3xl leading-[30px]',
          children:
            "I am a passionate full stack developer with a strong foundation in JavaScript, NodeJS, and Java, paired with hands-on experience in front-end and back-end development. While my professional experience has sharpened my skills, my journey as a hobbyist and independent developer has been even more formative, giving me a robust grasp of data modeling and software architecture principles. This background allows me to design scalable, efficient applications from the ground up. I’m excited to bring both my technical expertise and my architectural insights to new challenges.",
        }),
        e.jsx('div', {
          className:
            'mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10',
          children: l.map((t, i) =>
            e.jsx(a, { icon: t.icon, title: t.title }, i),
          ),
        }),
      ],
    });
export { o as default };
