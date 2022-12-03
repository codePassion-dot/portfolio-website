import { component$, Slot } from "@builder.io/qwik";
import Logo from "~/components/icons/Logo";
import Header from "../components/header/header";

export default component$(() => {
  const pages = ["home", "portfolio", "contact me"];
  const icons = ["github.svg", "twitter.svg", "linkedin.svg"];

  return (
    <>
      <main class="flex flex-col p-8 lg:justify-center xl:px-24 2xl:px-52">
        <Header />
        <section>
          <Slot />
        </section>
      </main>
      <footer className="flex flex-col items-center justify-center bg-grayish-dark-blue py-14 md:flex-row md:justify-between md:px-9 md:py-6">
        <section class="mb-10 flex flex-col items-center gap-8 md:mb-0 md:mt-0 md:flex-row">
          <Logo classes="fill-white mb-2" />
          {pages.map((page) => (
            <p class="text-center text-xs font-normal uppercase tracking-widest text-white">
              {page}
            </p>
          ))}
        </section>

        <section className="flex flex-row gap-4">
          {icons.map((icon) => (
            <img src={`/icons/${icon}`} alt="social networks" />
          ))}
        </section>
      </footer>
    </>
  );
});
