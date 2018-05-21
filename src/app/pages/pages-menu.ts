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
    title: 'User',
    icon: 'fa fa-user',
    children: [
      {
        title: 'Contact',
        link: '/pages/user/contact',
      },
      {
        title: 'Permission',
        link: '/pages/user/permission',
      },
      {
        title: 'User',
        link: '/pages/user/user',
      },
    ],
  },
  {
    title: 'Asterisk FEATURES',
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
    title: 'Dialplan',
    icon: 'fa fa-book',
    children: [
      {
        title: 'Dynamic dialplan',
        link: '/pages/dialplan/dialplan',
      },
      {
        title: 'Dynamic master',
        link: '/pages/dialplan/dpma',
      },
      {
        title: 'Static dialplan',
        link: '/pages/dialplan/sdp',
      },
      {
        title: 'Configuration',
        link: '/pages/dialplan/config',
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
        title: 'Config Parking Lot',
        link: '/pages/park/cfgparkinglot',
      },
      {
        title: 'Configuration',
        link: '/pages/park/config',
      },
    ],
  },
  {
    title: 'Phone-PJSip',
    icon: 'fa fa-phone',
    children: [
      {
        title: 'AOR',
        link: '/pages/phone-pjsip/aor',
      },
      {
        title: 'Auth',
        link: '/pages/phone-pjsip/auth',
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
        title: 'Configuration',
        link: '/pages/phone-pjsip/config',
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
        title: 'Config Queue',
        link: '/pages/queue/cfgqueue',
      },
      {
        title: 'Configuration',
        link: '/pages/queue/config',
      },
    ],
  },
  // {
  //   title: 'Voicemail',
  //   icon: 'fa fa-envelope',
  //   children: [
  //     {
  //       title: 'User',
  //       link: '/pages/voicemail/user',
  //     },
  //     {
  //       title: 'Message',
  //       link: '/pages/voicemail/message',
  //     },
  //     // {
  //     //   title: 'Current Setting',
  //     //   link: '/pages/voicemail/setting',
  //     // },
  //     {
  //       title: 'Configuration',
  //       link: '/pages/voicemail/config',
  //     },      // {
  //     //   title: 'Backup settings',
  //     //   link: '/pages/voicemail/backup_settings',
  //     // },
  //   ],
  // },
];
