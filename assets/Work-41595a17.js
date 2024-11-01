import { j as e, s as o } from './index-30b3ec0c.js';
import { p as d } from './index-a6761604.js';
import { T as m } from './index-29778f7d.js';
import { m as l } from './motion-9b2b190c.js';

const x = (s, a, i, t) => ({
    hidden: {
        x: s === 'left' ? 100 : s === 'right' ? -100 : 0,
        y: s === 'up' ? 100 : s === 'down' ? -100 : 0,
        opacity: 0,
    },
    show: {
        x: 0,
        y: 0,
        opacity: 1,
        transition: { type: a, delay: i, duration: t, ease: 'easeOut' },
    },
});

const h = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

const p = ({
    index: s,
    name: a,
    description: i,
    tags: t,
    image: r,
    source_code_link: n,
    link: c, // Add link to the destructuring assignment
}) => {
    console.log('Rendering project:', { name: a, link: c, tags: t, source_code_link: n }); // Debug log

    return e.jsx(l.div, {
        variants: x('up', 'spring', s * 0.5, 0.75),
        className: 'xs:w-[300px] w-full',
        children: e.jsxs(m, {
            options: { max: 45, scale: 1, speed: 450 },
            className: 'bg-tertiary p-5 rounded-2xl w-full',
            children: [
                e.jsxs('div', {
                    className: 'relative w-full h-[230px]',
                    children: [
                        e.jsx('img', {
                            src: r,
                            alt: 'project_image',
                            className: 'w-full h-full object-cover rounded-2xl',
                        }),
                        e.jsx('div', {
                            className:
                                'absolute inset-0 flex flex-col justify-end m-3 card-img_hover',
                            children: e.jsxs('div', {
                                onClick: () => window.open(n, '_blank'),
                                className:
                                    'black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer',
                                children: [
                                    e.jsx('img', {
                                        src: 'https://i.ibb.co/Mh222r5/icons8-github-384.png',
                                        alt: 'source code',
                                        className: ' object-contain',
                                    }),
                                ],
                            }),
                        }),
                    ],
                }),
                e.jsxs('div', {
                    className: 'mt-5 inline',
                    children: [
                        e.jsx('h3', {
                            className: 'text-white font-bold text-[24px]',
                            children: a,
                        }),
                        e.jsx('p', {
                            className: 'mt-2 text-secondary text-[14px]',
                            children: i,
                        }),
                        e.jsx('a', {
                            href: c, // Use the link property here
                            target: '_blank',
                            rel: 'noopener noreferrer',
                            className: 'text-blue-500 mt-6 inline', // Add some styling to make it visible
                            children: c// Add link text
                        }),
                    ],
                }),
                e.jsx('div', {
                    className: 'mt-4 flex flex-wrap gap-2',
                    children: t.map((tag, index) =>
                        e.jsxs(
                            'p',
                            {
                                className: `${tag.color} bg-gray-200 rounded-full px-2 py-1 text-sm text-gray-700`,
                                children: tag.name,
                            },
                            index
                        )
                    ),
                }),
            ],
        }),
    });
};

const b = () => {
    console.log('Rendering projects list:', d); // Debug log

    return e.jsxs(e.Fragment, {
        children: [
            e.jsxs(l.div, {
                className: 'lg:w-[90%] md:w-[80%] w-[90%] mx-auto my-28',
                variants: h,
                initial: 'hidden',
                animate: 'visible',
                children: [
                    e.jsxs('div', {
                        children: [
                            e.jsx('p', {
                                className: `${o.sectionSubText} `,
                                children: 'My work',
                            }),
                            e.jsx('h2', {
                                className: `${o.sectionHeadText}`,
                                children: 'Current Projects',
                            }),
                        ],
                    }),
                    e.jsx('div', {
                        className: 'w-full flex',
                        children: e.jsx('p', {
                            className:
                                'mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]',
                            children:
                                'Following projects showcase my skills and experience through real-world examples of my work. Each project is briefly described with links to code repositories and/or live demo, depending on stage of development. It reflects my ability to design, build, and maintain full scale applications and manage projects effectively.',
                        }),
                    }),
                ],
            }),
            e.jsx('div', {
                className:
                    'grid w-[95%] mx-auto grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10',
                children: d.map((s, a) =>
                    e.jsx(
                        p,
                        {
                            description: s.description,
                            index: a,
                            source_code_link: s.source_code_link,
                            link: s.link,
                            tags: s.tags,
                            name: s.name,
                            image: s.image,
                        },
                        `project-${a}`,
                    ),
                ),
            }),
        ],
    });
};

export { b as default };