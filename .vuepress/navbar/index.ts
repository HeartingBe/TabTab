import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
    {
        text: "首页",
        icon: "home",
        link: "/home/"
    },
    {
        text: "命令",
        icon: "object",
        link: "/command_and_datapack/"
    },
    {
        text: "源码",
        icon: "code",
        link: "/source_code/"
    },
    {
        text: "模组",
        icon: "java",
        link: "/mod/"
    },
    {
        text: "杂货铺",
        icon: "support",
        link: "/other/"
    }
]);