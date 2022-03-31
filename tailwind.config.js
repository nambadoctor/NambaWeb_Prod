const colors = require('tailwindcss/colors');
const plugin = require('tailwindcss/plugin');

const COLOR_PALETTE = {
    external: {
        polygon: 'hsl(258, 68%, 58%)',
        graph: 'hsl(252, 82%, 60%)',
    },
    neutral: {
        10: '#161616',
        20: '#262626',
        30: '#393939',
        40: '#525252',
        50: '#8D8D8D',
        60: '#A8A8A8',
        70: '#C6C6C6',
        80: '#C6C6C6',
        90: '#E0E0E0',
        100: '#F4F4F4',
    },
    purple: {
        10: '#161230',
        20: '#20175E',
        30: '#34278B',
        40: '#523EC2',
        50: '#755AFA',
        60: '#9180FF',
        70: '#B2A6FF',
        80: '#CEC4FF',
        90: '#EAE5FF',
        100: '#F3F2FF',
    },
    red: {
        10: '#301215',
        20: '#421015',
        30: '#611B22',
        40: '#802932',
        50: '#A83D47',
        60: '#C7636D',
        70: '#DB8E96',
        80: '#E8B2B8',
        90: '#F2DADC',
        100: '#FFF2F3',
    },
    green: {
        10: '#133012',
        20: '#104216',
        30: '#1B6127',
        40: '#298037',
        50: '#3DA84F',
        60: '#52A35E',
        70: '#77B881',
        80: '#A2D4A9',
        90: '#D1E8D4',
        100: '#EDFAEF',
    },
    copper: {
        10: '#260E11',
        20: '#3B271E',
        30: '#52362A',
        40: '#6E4B3B',
        50: '#8F6B5A',
        60: '#AD8676',
        70: '#C9A291',
        80: '#DBBAA9',
        90: '#EBDBD3',
        100: '#FFF3EB',
    },
    teal: {
        10: '#0E2226',
        20: '#0D3138',
        30: '#15434A',
        40: '#216066',
        50: '#307F84',
        60: '#529CA3',
        70: '#77B2B8',
        80: '#A2D0D4',
        90: '#D1E6E8',
        100: '#EDF9FA',
    },
    grey: {
        10: '#E5E7F0',
        20: '#CBD1E0',
        30: '#B4B9D1',
        40: '#8C95BA',
        50: '#737DAB',
        60: '#545E8B',
        70: '#454D73',
        80: '#2A2F46',
        90: '#171A26',
        100: '#10111B',
    },
};

module.exports = {
    mode: 'jit',
    content: [
        './src/constants/**/*.{js,ts,jsx,tsx}',
        './src/pages/**/*.{js,ts,jsx,tsx}',
        './src/components/**/*.{js,ts,jsx,tsx}',
    ],
    darkMode: 'class',
    theme: {
        extend: {
            fontFamily: {
                body: ['Satoshi-Variable', 'sans-serif'],
            },
            boxShadow: {
                card: '0 0 1px 0 rgba(9, 30, 66, 0.15), 0 3px 5px 0 rgba(9, 30, 66, 0.1)',
                'card-default':
                    '0 0 1px 0 rgba(9, 30, 66, 0.31), 0 3px 5px 0 rgba(9, 30, 66, 0.2)',
                'card-hover':
                    '0 0 1px 0 rgba(9, 30, 66, 0.31), 0 10px 18px 0 rgba(9, 30, 66, 0.15)',
                toast: '0 0 1px 0 rgba(9, 30, 66, 0.30), 0 8px 12px 0 rgba(9, 30, 66, 0.15)',
                'card-lg':
                    '0 0 1px 0 rgba(9, 30, 66, 0.31), 0 8px 12px 0 rgba(9, 30, 66, 0.15)',
                'card-action':
                    '0 0 1px 0 rgba(9, 30, 66, 0.31), 0 18px 28px 0 rgba(9, 30, 66, 0.15)',
            },
            colors: {
                main: COLOR_PALETTE.purple,
                ...COLOR_PALETTE,
            },
        },
    },
    plugins: [
        plugin(({ addComponents }) => {
            const typography = {
                '.c__title': {
                    color: COLOR_PALETTE.neutral[20],
                },
                '.dark .c__title': {
                    color: COLOR_PALETTE.neutral[80],
                },
                '.c__caption': {
                    color: COLOR_PALETTE.neutral[50],
                },
                '.dark .c__caption': {
                    color: COLOR_PALETTE.neutral[50],
                },

                '.t__body--b1': {
                    letterSpacing: '0.15px',
                    lineHeight: '28px',
                    fontSize: '20px',
                    fontWeight: 400,
                },
                '.t__body--b2': {
                    letterSpacing: '0.5px',
                    lineHeight: '24px',
                    fontSize: '16px',
                    fontWeight: 400,
                },
                '.t__body--b3': {
                    letterSpacing: '0.25px',
                    lineHeight: '24px',
                    fontSize: '14px',
                    fontWeight: 400,
                },
                '.t__button--u1': {
                    lineHeight: '16px',
                    fontSize: '16px',
                    fontWeight: 500,
                },
                '.t__button--u2': {
                    lineHeight: '14px',
                    fontSize: '14px',
                    fontWeight: 500,
                },
                '.t__caption--c1': {
                    letterSpacing: '0.4px',
                    lineHeight: '16px',
                    fontSize: '12px',
                    fontWeight: 500,
                },
                '.t__heading--h1': {
                    letterSpacing: '-1.5px',
                    lineHeight: '104px',
                    fontSize: '96px',
                    fontWeight: 900,
                },
                '.t__heading--h2': {
                    letterSpacing: '-0.5px',
                    lineHeight: '64px',
                    fontSize: '60px',
                    fontWeight: 900,
                },
                '.t__heading--h3': {
                    lineHeight: '56px',
                    fontSize: '48px',
                    fontWeight: 700,
                },
                '.t__heading--h4': {
                    letterSpacing: '0.25px',
                    lineHeight: '42px',
                    fontSize: '34px',
                    fontWeight: 700,
                },
                '.t__heading--h5': {
                    lineHeight: '28px',
                    fontSize: '24px',
                    fontWeight: 700,
                },
                '.t__heading--h6': {
                    letterSpacing: '0.15px',
                    lineHeight: '22px',
                    fontSize: '18px',
                    fontWeight: 700,
                },
                '.t__overline--o1': {
                    letterSpacing: '1.5px',
                    lineHeight: '16px',
                    fontSize: '10px',
                    fontWeight: 700,
                },
                '.t__quote--q1': {
                    lineHeight: '32px',
                    fontSize: '20px',
                    fontWeight: 700,
                },
                '.t__subtitle--s1': {
                    lineHeight: '32px',
                    fontSize: '24px',
                    fontWeight: 500,
                },
            };
            addComponents(typography);
        }),
    ],
};
