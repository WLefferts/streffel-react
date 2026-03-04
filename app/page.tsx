import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="w-full max-w-6xl px-4 py-8 bg-white dark:bg-black">
        {/* intro section */}
        <section className="mb-12 text-center border border-gray-300 dark:border-zinc-600 rounded-lg p-6">
          <h1 className="text-3xl font-bold text-black dark:text-zinc-50">
            Welcome to Streffel's Space Blog
          </h1>
          <p className="mt-2 text-lg text-zinc-600 dark:text-zinc-400">
            Here, you'll find stunning images of space — captured through a telescope — showcasing
            the wonders that float above us.
          </p>
          <p className="mt-1 text-lg text-zinc-600 dark:text-zinc-400">
            Take a moment to explore and enjoy the beauty of the cosmos.
          </p>
        </section>

        {/* partial solar eclipse */}
        <section className="mb-12 border border-gray-300 dark:border-zinc-600 rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-black dark:text-zinc-50 text-center">
            Partial Solar Eclipse
          </h2>
          <p className="mt-2 text-zinc-600 dark:text-zinc-400">
            On March 29, 2025, a partial solar eclipse graced the skies, visible across parts of the
            Northern Hemisphere. During this event, the Moon passed between the Earth and the Sun, but
            the alignment wasn’t perfect, leaving only part of the Sun obscured.
          </p>
          <p className="text-zinc-600 dark:text-zinc-400">
            The eclipse was most prominent in Europe, with the deepest coverage in the northwest. From
            my location, about 25% of the Sun was obscured, peaking around noon.
          </p>
          <p className="text-zinc-600 dark:text-zinc-400">
            This eclipse was part of Saros cycle 149, a series of eclipses with similar
            characteristics. It occurred just 0.8 days before the Moon reached perigee — its closest point
            to Earth — making the Moon appear slightly larger in the sky.
          </p>
          <p className="text-zinc-600 dark:text-zinc-400">
            I'm thrilled to have witnessed this phenomenon under clear skies, using a solar filter on my
            telescope to capture these moments. Notice the sunspot on the bottom-right side of the Sun in
            the images below.
          </p>
          <div className="mt-4 grid grid-cols-2 gap-4">
            <img src="/placeholder.jpg" alt="solar eclipse 1" className="w-full" />
            <img src="/placeholder.jpg" alt="solar eclipse 2" className="w-full" />
            <img src="/placeholder.jpg" alt="solar eclipse 3" className="w-full" />
            <img src="/placeholder.jpg" alt="solar eclipse 4" className="w-full" />
          </div>
        </section>

        {/* full moon and moon phases side-by-side */}
        <section className="mb-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border border-gray-300 dark:border-zinc-600 rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-black dark:text-zinc-50 text-center">
              Full Moon
            </h2>
            <p className="mt-2 text-zinc-600 dark:text-zinc-400">
              The full moon is breathtaking through a telescope. Although it's very bright it is
              incredibly detailed. The contrast between the bright highlands and darker areas of the
              Moon is striking.
            </p>
            <p className="text-zinc-600 dark:text-zinc-400">
              The highlands are made of anorthosite, a material that reflects more light. The darker
              regions, called lunar maria (Latin for "seas"), are smooth plains formed by ancient
              volcanic activity.
            </p>
            <img src="/placeholder.jpg" alt="full moon" className="mt-4 w-full" />
          </div>
          <div className="border border-gray-300 dark:border-zinc-600 rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-black dark:text-zinc-50 text-center">
              When and Why You See the Moon
            </h2>
            <p className="mt-2 text-zinc-600 dark:text-zinc-400">
              Here are some images of the Moon in different phases. These phases occur as the Earth
              casts its shadow on the Moon (but you probably already knew that!).
            </p>
            <p className="text-zinc-600 dark:text-zinc-400">
              Because the Moon reflects sunlight and isn’t always directly opposite the Sun, its
              position shifts daily. That’s why you sometimes see the Moon during the day—especially
              during crescent and quarter phases.
            </p>
            <p className="text-zinc-600 dark:text-zinc-400">
              Because the Moon reflects sunlight and orbits the Earth, it’s not always directly
              opposite the Sun. As a result, the part of the Moon we see illuminated—and the time it
              appears in the sky—changes a little each day. This is why you can often spot the Moon
              during the daytime, especially during the crescent and quarter phases.
            </p>
            <div className="mt-4 grid grid-cols-2 gap-4">
              <img src="/placeholder.jpg" alt="three quarter moon" className="w-full" />
              <img src="/placeholder.jpg" alt="half moon" className="w-full" />
            </div>
          </div>
        </section>

        {/* astrophotography section */}
        <section className="mb-12 border border-gray-300 dark:border-zinc-600 rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-black dark:text-zinc-50 text-center">
            Astrophotography
          </h2>
          <p className="mt-2 text-zinc-600 dark:text-zinc-400">
            These are my first attempts at astrophotography. Note the Galilean moons of Jupiter,
            they're small but visible.
          </p>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
            <img src="/placeholder.jpg" alt="moon photography" className="w-full" />
            <img src="/placeholder.jpg" alt="plane" className="w-full" />
            <img src="/placeholder.jpg" alt="jupiter" className="w-full" />
          </div>
        </section>

        {/* supermoon section */}
        <section className="mb-12 border border-gray-300 dark:border-zinc-600 rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-black dark:text-zinc-50 text-center">
            5-11-25 Supermoon
          </h2>
          <p className="mt-2 text-zinc-600 dark:text-zinc-400">
            On 5-11-25, I captured the supermoon in all its glory. I'm still learning the
            intricacies of astrophotography, but I'm pleased with the results so far.
          </p>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            <img src="/placeholder.jpg" alt="supermoon north" className="w-full" />
            <img src="/placeholder.jpg" alt="supermoon south" className="w-full" />
          </div>
        </section>
      </main>
    </div>
  );
}
