import { component$, $ } from "@builder.io/qwik";
import Logo from "../icons/Logo";

export default component$(() => {
  const handleMenuOnClick = $(() => {
    console.log("clicking navbar mobile menu");
  });
  return (
    <header class="mb-10 flex flex-row justify-between">
      <Logo classes="fill-grayish-dark-blue" />
      <button onClick$={handleMenuOnClick}>
        <img src="/icons/hamburger.svg" alt="mobile hamburger menu" />
      </button>
    </header>
  );
});
