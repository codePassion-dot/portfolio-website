import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import DownArrows from "~/components/icons/DownArrows";

export default component$(() => {
  return (
    <>
      <div class="flex flex-col md:relative">
        <div class="mb-6 h-[271px] w-full bg-[url('/homepage/mobile/image-homepage-hero.jpg')] bg-contain bg-no-repeat md:mb-0 md:h-[700px] md:bg-[url('/homepage/tablet/image-homepage-hero.jpg')] xl:h-[700px] xl:bg-[url('/homepage/desktop/image-homepage-hero.jpg')] 2xl:h-[1000px] 2xl:bg-[url('/homepage/desktop/image-homepage-hero@2x.jpg')]" />
        <div class="flex flex-col bg-center md:absolute md:bottom-0 md:z-10 md:w-3/5 md:bg-white md:pt-14 md:pr-14 xl:bottom-16 xl:w-1/3 2xl:bottom-44 2xl:w-1/4">
          <h1 class="text-4xl font-bold tracking-tighter text-grayish-dark-blue md:bg-white">
            Hey, I'm Jacobo Jaramillo and I love building responsive, efficient,
            and beautiful websites
          </h1>
          <button class="mt-8 flex w-fit flex-row items-center bg-dark-blue">
            <div className="flex flex-1 items-center justify-center bg-blue-whale py-4 px-4  mix-blend-normal">
              <DownArrows classes="stroke-slightly-desaturated-cyan" />
            </div>{" "}
            <p class="mx-4 text-center text-xs font-normal uppercase tracking-widest text-white md:mx-7">
              about me
            </p>
          </button>
        </div>
      </div>

      <div class="mt-24 flex flex-col items-center justify-between gap-8 md:h-fit md:flex-row md:items-stretch xl:gap-32 2xl:mr-32">
        <div class="h-[346px] w-full bg-[url('/homepage/mobile/image-homepage-profile.jpg')] bg-contain bg-no-repeat md:mt-0 md:h-auto md:w-[281px] md:bg-[url('/homepage/tablet/image-homepage-profile.jpg')] xl:w-[700px] xl:bg-[url('/homepage/desktop/image-homepage-profile.jpg')] 2xl:h-[700px] 2xl:bg-[url('/homepage/desktop/image-homepage-profile@2x.jpg')]" />
        <section class="2xl:1/2 border-t-2 border-b-2 border-grayish-dark-blue border-opacity-10 pt-8 pb-12 md:basis-1/2 xl:basis-2/3 2xl:basis-1/2">
          <h2 class="text-4xl font-bold text-grayish-dark-blue"> About me</h2>
          <p class="mt-7 text-lg font-normal text-grayish-dark-blue opacity-80 mix-blend-normal">
            I'm a junior front-end developer looking for a new role in an
            exciting company. I focus on writing accessible HTML, using modern
            CSS practices and writing clean Typescript. When writing Typescript
            code, I mostly use React (but new frameworks like qwik or solidjs
            are taking me on), but I can adapt to whatever tools are required.
            I'm based in Manizales, CO, but I'm happy working remotely and have
            experience in remote teams. When I'm not coding, you'll find me
            having fun with my friends playing videogames or watching anime
            series or series in general. I love having time with my famili
            mostly in our farm (which is another thing I love). I'd love you to
            check out my work.
          </p>
          <button class="mt-6  border border-solid border-grayish-dark-blue py-4 px-8 text-center uppercase">
            go to portfolio
          </button>
        </section>
      </div>

      <section className="mt-36 mb-20 flex flex-col items-center justify-center gap-10 md:flex-row md:justify-between">
        <h3 class="text-center text-4xl font-bold -tracking-wide text-grayish-dark-blue md:basis-2/5 md:text-start xl:basis-1/2">
          Interested in doing a project together?
        </h3>
        <div class="md:flex md:flex-row md:items-center md:gap-8 xl:w-full">
          <div class="hidden md:block md:h-1 md:w-28 md:bg-grayish-dark-blue md:opacity-10 md:mix-blend-normal xl:w-full" />
          <button class="mt-6 border border-solid border-grayish-dark-blue py-4 px-8 text-center uppercase md:mt-0 xl:basis-2/5">
            contact me
          </button>
        </div>
      </section>
    </>
  );
});

export const head: DocumentHead = {
  title: "Juan Jacobo Jaramillo",
  meta: [
    {
      name: "main page",
      content: "A little bit about me",
    },
  ],
};
