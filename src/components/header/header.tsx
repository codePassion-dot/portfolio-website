import { component$, $ } from "@builder.io/qwik";
import Logo from "../icons/Logo";

export default component$(() => {
  const handleMenuOnClick = $(() => {
    console.log("clicking navbar mobile menu");
  });
  const pages = ["home", "portfolio", "contact me"];
  return (
    <header class="mb-10 flex flex-row justify-between">
      <Logo classes="fill-grayish-dark-blue" />
      <button class="md:hidden" onClick$={handleMenuOnClick}>
        <img src="/icons/hamburger.svg" alt="mobile hamburger menu" />
      </button>
      <div class="hidden md:flex md:flex-row md:items-center md:justify-center md:gap-10">
        {pages.map((page) => (
          <p class="text-xs uppercase tracking-widest text-grayish-dark-blue">
            {page}
          </p>
        ))}
      </div>
    </header>
  );
});
