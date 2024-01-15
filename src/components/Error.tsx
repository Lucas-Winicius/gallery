import Link from "next/link";

export default function Error() {
  return (
    <main className="flex-grow flex flex-col gap-3 items-center justify-center md:px-20 px-10 text-center select-none">
      <h1 className="font-bold text-3xl">
        Oops, something doesn&apos;t seem right
      </h1>
      <p className="text-sm">
        We&apos;re currently trying to figure out what caused this. In the
        meantime, please try reloading the page or coming back later. You can
        also check out my other gallery while you wait, or visit my flickr
        account.{" "}
        <Link
          href="https://photos.app.goo.gl/dqBr35vPeku17BoS8"
          target="_blank"
          className="text-blue-500 font-extrabold"
        >
          Click here
        </Link>
      </p>
    </main>
  );
}
