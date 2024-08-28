import type { IVisibleContent } from "$lib/interfaces/visibleContent";
import type { Writable } from "svelte/store";

import { writable } from "svelte/store";

const visibleContent: Writable<IVisibleContent> = writable({
  home: false,
  purpose: false,
  about: false,
  services: false,
  contact: false,
});

export default visibleContent;
