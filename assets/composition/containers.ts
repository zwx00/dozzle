import { ref, readonly, computed } from "vue";
import { base } from "./configuration"

const containers = ref([]);

const visibleContainers = computed(() => {
  const filter = false ? () => true : (c) => c.state === "running";
  return containers.value.filter(filter);
})

async function fetchContainers() {
  containers.value = await (await fetch(`${base}/api/containers.json`)).json();
}

const es = new EventSource(`${base}/api/events/stream`);
es.addEventListener("containers-changed", () => setTimeout(fetchContainers, 1000), false);

fetchContainers();

export function useContainers() {
  return {
    containers: readonly(containers),
    visibleContainers
  };
}


