import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config

export default defineConfig({
    title: "Backstack ~ v-0.9.1",
    description: "Backend resources for your codebase.",
    head: [
        ['link', { rel: 'icon', href: '/favicon.svg', type: 'image/svg+xml' }]
    ],
    ignoreDeadLinks: true,
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config

        logo: { src: '/favicon.svg', width: 24, height: 24 },
        nav: [
            { text: 'Guide', link: '/guide/introduction', activeMatch: '/guide/' },
            { text: 'Demo', link: '/demo/introduction' },
            { text: 'Pricing', link: '/pricing', activeMatch: '/pricing' }
        ],

        sidebar: {
            '/guide/': { base: '/guide/', items: guideSidebar() },
            '/demo/': { base: '/demo/', items: demoSidebar() }
        },

        // socialLinks: [
        //     { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
        // ]
    }
})

function guideSidebar() {
    return [

        {
            text: 'Getting Started',
            items: [
                { text: 'Introduction', link: 'introduction' },
                { text: 'Quick Start', link: 'quick-start' },
                { text: 'The Architecture', link: 'architecture' },
            ]
        },
        {
            text: 'Core Concepts',
            items: [
                { text: 'Sessions', link: 'sessions' },
                { text: 'Accounts', link: 'account' },
                { text: 'Users', link: 'user' },
                { text: 'Features', link: 'features' },
                { text: 'Roles', link: 'roles' },
                { text: 'Versions', link: 'versions' },
                { text: 'Access Control', link: 'access-control' },
                { text: 'Monetization', link: 'monetization' },
                { text: 'Pagination', link: 'pagination' },
                { text: 'Errors', link: 'errors' },
            ]
        },
        {
            text: 'Workflows',
            items: [
                { text: 'Account Users', link: 'account-users' },
                { text: 'Invoicing Accounts', link: 'invoicing-accounts' },
                { text: 'Logging In', link: '/login' },
                { text: 'Managing Resource Usage', link: 'managing-resources' },
                { text: 'Networks', link: 'networks' },
                { text: 'Optional Features', link: 'optional-features' },
                { text: 'Resetting Passwords', link: 'reset-passwords' },
                { text: 'Signing Up', link: 'signup' },
                { text: 'Version Assignment', link: 'version-assignment' },
            ]
        },
        {
            text: 'Resources',
            items: [
                { text: 'Counters', link: 'counters' },
                { text: 'Countries', link: 'countries' },
                { text: 'Timezones', link: 'timezones' },

            ]
        }

    ]
}

function demoSidebar() {
    return [
        {
            text: 'Getting Started',
            items: [
                { text: 'Introduction', link: 'introduction' },
                { text: 'Quick Start', link: 'quick-start' },
            ]
        },
        {
            text: 'Components',
            items: [ 
                { text: 'ActionDropdown', link: 'components/action-dropdown' },
                { text: 'AxiosError', link: 'components/axios-error' },
                { text: 'BarChart', link: 'components/bar-chart' },
                { text: 'Button', link: 'components/button' },
                { text: 'Error404', link: 'components/error-404' },
                { text: 'Error500', link: 'components/error-500' },
                { text: 'ExternalLink', link: 'components/external-link' },
                { text: 'FormInput', link: 'components/form-input' },
                { text: 'FormSelect', link: 'components/form-select' },
                { text: 'Indicator', link: 'components/indicator' },
                { text: 'LineChart', link: 'components/line-chart' },
                { text: 'Modal', link: 'components/modal' },
                { text: 'PageHeading', link: 'components/page-heading' },
                { text: 'RadioButtonGroup', link: 'components/radio-button-group' },
                { text: 'Setting', link: 'components/setting' },
                { text: 'SettingButton', link: 'components/setting-button' },
                { text: 'Spinner', link: 'components/spinner' },
                { text: 'TableToolbar', link: 'components/table-toolbar' },
                { text: 'Tip', link: 'components/tip' },
                { text: 'Toast', link: 'components/toast' },
                { text: 'Tooltip', link: 'components/tooltip' },

            ]
        }
    ]
}