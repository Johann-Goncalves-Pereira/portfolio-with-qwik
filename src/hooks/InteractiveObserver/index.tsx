import { OnRenderFn, Slot } from "@builder.io/qwik";
import {
  component$,
  useClientEffect$,
  useSignal,
  useStore,
} from "@builder.io/qwik";

export default component$(() => {
  const options = {
    root: document.getElementById("some-id"),
    rootMargin: "0px",
    threshold: 1.0,
  };

  const observer = new IntersectionObserver(callback, options);

  const signal = useSignal<Element>();

  observer.observe(signal.value);

  return <Slot ref={signal} />;
});
