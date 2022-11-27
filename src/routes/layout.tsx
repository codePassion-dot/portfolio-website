import { component$, Slot } from "@builder.io/qwik";
import Logo from "~/components/icons/Logo";
import Header from "../components/header/header";

export default component$(() => {
  const pages = ["home", "portfolio", "contact me"];
  const icons = ["github.svg", "twitter.svg", "linkedin.svg"];

  return (
    <>
      <main class="flex flex-col p-8">
        <Header />
        <section>
          <Slot />
        </section>
      </main>
      <footer className="flex flex-col items-center justify-center bg-grayish-dark-blue py-14">
        <Logo classes="fill-white" />
        <section class="mb-10 gap-8">
          {pages.map((page) => (
            <p class="mt-8 text-center text-xs font-normal uppercase tracking-widest text-white">
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
