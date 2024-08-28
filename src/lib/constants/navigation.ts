import type { INavigation } from "$lib/interfaces/navigation.interface";
import smoothScroll from "$lib/utils/smoothScroll";

const navigation: INavigation[] = [
  {
    name: "navbar.home",
    onClick: () => smoothScroll("home"),
  },
  {
    name: "navbar.purpose",
    onClick: () => smoothScroll("purpose"),
  },
  {
    name: "navbar.about",
    onClick: () => smoothScroll("about"),
  },
  {
    name: "navbar.services",
    onClick: () => smoothScroll("services"),
  },
  {
    name: "navbar.contact",
    onClick: () => smoothScroll("contact"),
  },
] as const;

export default navigation;
