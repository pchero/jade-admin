import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Dashboard',
    icon: 'nb-home',
    link: '/pages/dashboard',
    home: true,
  },
  {
    title: 'FEATURES',
    group: true,
  },
  {
    title: 'Core',
    icon: 'fa fa-asterisk',
    children: [
      {
        title: 'System',
        link: '/pages/core/system',
      },
      {
        title: 'Channel',
        link: '/pages/core/channel',
      },
      {
        title: 'Module',
        link: '/pages/core/module',
      },
    ],
  },
  {
    title: 'Agent',
    icon: 'fa fa-male',
    children: [
      {
        title: 'Agent',
        link: '/pages/agent/agent',
      },
      {
        title: 'Setting',
        link: '/pages/agent/setting',
      },
      {
        title: 'Backup settings',
        link: '/pages/agent/backup_settings',
      },
    ],
  },
  {
    title: 'Outbound',
    icon: 'fa fa-bullhorn',
    children: [
      {
        title: 'Campaign',
        link: '/pages/outbound/campaign',
      },
      {
        title: 'Destination',
        link: '/pages/outbound/destination',
      },
      {
        title: 'Dialing',
        link: '/pages/outbound/dialing',
      },
      {
        title: 'Dial list',
        link: '/pages/outbound/diallist',
      },
      {
        title: 'Dial list master',
        link: '/pages/outbound/dlma',
      },
      {
        title: 'Plan',
        link: '/pages/outbound/plan',
      },
    ],
  },
  {
    title: 'Park',
    icon: 'fa fa-car',
    children: [
      {
        title: 'Parking lot',
        link: '/pages/park/parkinglot',
      },
      {
        title: 'Parked call',
        link: '/pages/park/parkedcall',
      },
      {
        title: 'Setting',
        link: '/pages/park/setting',
      },
      {
        title: 'Backup settings',
        link: '/pages/park/backupsettings',
      },
    ],
  },
  {
    title: 'Phone-PJSip',
    icon: 'fa fa-phone',
    children: [
      {
        title: 'Auth',
        link: '/pages/phone-pjsip/auth',
      },
      {
        title: 'AOR',
        link: '/pages/phone-pjsip/aor',
      },
      {
        title: 'Contact',
        link: '/pages/phone-pjsip/contact',
      },
      {
        title: 'Endpoint',
        link: '/pages/phone-pjsip/endpoint',
      },
      {
        title: 'Transport',
        link: '/pages/phone-pjsip/transport',
      },
      {
        title: 'Setting',
        link: '/pages/phone-pjsip/setting',
      },
      {
        title: 'Backup settings',
        link: '/pages/phone-pjsip/backup_settings',
      },
    ],
  },
  {
    title: 'Phone-Sip',
    icon: 'fa fa-phone',
    children: [
      {
        title: 'Peer',
        link: '/pages/phone-sip/peer',
      },
      {
        title: 'Registry',
        link: '/pages/phone-sip/registry',
      },
      {
        title: 'Setting',
        link: '/pages/phone-sip/setting',
      },
      {
        title: 'Backup settings',
        link: '/pages/phone-sip/backup_settings',
      },
    ],
  },
  {
    title: 'Queue',
    icon: 'fa fa-sun-o',
    children: [
      {
        title: 'Entry',
        link: '/pages/queue/entry',
      },
      {
        title: 'Member',
        link: '/pages/queue/member',
      },
      {
        title: 'Queue',
        link: '/pages/queue/queue',
      },
      {
        title: 'Setting',
        link: '/pages/queue/setting',
      },
      {
        title: 'Backup settings',
        link: '/pages/queue/backup_settings',
      },
    ],
  },
  {
    title: 'Voicemail',
    icon: 'fa fa-envelope',
    children: [
      {
        title: 'User',
        link: '/pages/voicemail/user',
      },
      {
        title: 'Message',
        link: '/pages/voicemail/message',
      },
      {
        title: 'Setting',
        link: '/pages/voicemail/setting',
      },
      {
        title: 'Backup settings',
        link: '/pages/voicemail/backup_settings',
      },
    ],
  },

  {
    title: 'UI Features',
    icon: 'nb-keypad',
    link: '/pages/ui-features',
    children: [
      {
        title: 'Buttons',
        link: '/pages/ui-features/buttons',
      },
      {
        title: 'Grid',
        link: '/pages/ui-features/grid',
      },
      {
        title: 'Icons',
        link: '/pages/ui-features/icons',
      },
      {
        title: 'Modals',
        link: '/pages/ui-features/modals',
      },
      {
        title: 'Typography',
        link: '/pages/ui-features/typography',
      },
      {
        title: 'Animated Searches',
        link: '/pages/ui-features/search-fields',
      },
      {
        title: 'Tabs',
        link: '/pages/ui-features/tabs',
      },
    ],
  },
  {
    title: 'Forms',
    icon: 'nb-compose',
    children: [
      {
        title: 'Form Inputs',
        link: '/pages/forms/inputs',
      },
      {
        title: 'Form Layouts',
        link: '/pages/forms/layouts',
      },
    ],
  },
  {
    title: 'Components',
    icon: 'nb-gear',
    children: [
      {
        title: 'Tree',
        link: '/pages/components/tree',
      }, {
        title: 'Notifications',
        link: '/pages/components/notifications',
      },
    ],
  },
  {
    title: 'Maps',
    icon: 'nb-location',
    children: [
      {
        title: 'Google Maps',
        link: '/pages/maps/gmaps',
      },
      {
        title: 'Leaflet Maps',
        link: '/pages/maps/leaflet',
      },
      {
        title: 'Bubble Maps',
        link: '/pages/maps/bubble',
      },
    ],
  },
  {
    title: 'Charts',
    icon: 'nb-bar-chart',
    children: [
      {
        title: 'Echarts',
        link: '/pages/charts/echarts',
      },
      {
        title: 'Charts.js',
        link: '/pages/charts/chartjs',
      },
      {
        title: 'D3',
        link: '/pages/charts/d3',
      },
    ],
  },
  {
    title: 'Editors',
    icon: 'nb-title',
    children: [
      {
        title: 'TinyMCE',
        link: '/pages/editors/tinymce',
      },
      {
        title: 'CKEditor',
        link: '/pages/editors/ckeditor',
      },
    ],
  },
  {
    title: 'Tables',
    icon: 'nb-tables',
    children: [
      {
        title: 'Smart Table',
        link: '/pages/tables/smart-table',
      },
    ],
  },
  {
    title: 'Auth',
    icon: 'nb-locked',
    children: [
      {
        title: 'Login',
        link: '/auth/login',
      },
      {
        title: 'Register',
        link: '/auth/register',
      },
      {
        title: 'Request Password',
        link: '/auth/request-password',
      },
      {
        title: 'Reset Password',
        link: '/auth/reset-password',
      },
    ],
  },
];
