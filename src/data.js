import {
    MdHomeFilled,
    MdFolder,
    MdEditCalendar,
    MdNotifications,
    MdMail,
    MdSettings,
    MdPerson,
  } from "react-icons/md";
  
  import Slack from "./assets/Slack.svg";
  import Jira from "./assets/Jira.png";
  import Teams from "./assets/Teams.svg";

export const sidebarItems = [
    {
        name: "Dashboard",
        link: "#",
        icon: MdHomeFilled,
    },
    {
        name: 'My Projects',
        link: "#",
        icon: MdFolder,
    },
    {
        name: 'Calendar',
        link: "#",
        icon: MdEditCalendar,
    },
    {
        name: 'Notifications',
        link: "#",
        icon: MdNotifications,
    },
    {
        name: 'Messages',
        link: "#",
        icon: MdMail,
    },
];

export const softwareItems = [
    {
        name: "Slack Channel",
        link: "#",
        image: Slack,
    },
    {
        name: 'Jira Software',
        link: "#",
        image: Jira,
    },
    {
        name: 'Teams',
        link: "#",
        image: Teams,
    },
];

export const settingsItems = [
    {
        name: "Main Settings",
        link: "#",
        icon: MdSettings,
    },
    {
        name: 'My Folders',
        link: "#",
        icon: MdFolder,
    },
    {
        name: 'My Profile',
        link: "#",
        icon: MdPerson,
    },
    {
        name: 'Notifications',
        link: "#",
        icon: MdNotifications,
    },
];
