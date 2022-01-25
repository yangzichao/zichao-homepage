import { Icon } from "@iconify/react";
import pieChart2Fill from "@iconify/icons-eva/pie-chart-2-fill";

// ----------------------------------------------------------------------

const getIcon = (name) => <Icon icon={name} width={22} height={22} />;

const sidebarConfig = [
  {
    title: "dashboard",
    path: "/dashboard",
    icon: getIcon(pieChart2Fill),
  },
];

export default sidebarConfig;

// const sidebarConfig = [
//   {
//     title: "dashboard",
//     path: "/dashboard",
//     icon: getIcon(pieChart2Fill),
//   },
//   {
//     title: "user",
//     path: "/dashboard/user",
//     icon: getIcon(peopleFill),
//   },
//   {
//     title: "product",
//     path: "/dashboard/products",
//     icon: getIcon(shoppingBagFill),
//   },
//   {
//     title: "blog",
//     path: "/dashboard/blog",
//     icon: getIcon(fileTextFill),
//   },
//   {
//     title: "Not found",
//     path: "/404",
//     icon: getIcon(alertTriangleFill),
//   },
// ];
