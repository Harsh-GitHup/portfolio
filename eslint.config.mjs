import next from 'eslint-config-next'

export default [
    next({
        extends: ['next/core-web-vitals'],
    }),
    {
        files: ['**/__tests__/**/*.{js,ts,jsx,tsx}'],
        rules: {
            '@typescript-eslint/no-explicit-any': 'off',
        },
    },
]