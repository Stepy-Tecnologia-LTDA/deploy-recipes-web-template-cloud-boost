import { Button } from "./Button";

export function Hero() {
  return (
    <div className="bg-[url('../assets/background-desktop.png')] bg-no-repeat bg-cover">
      <div className="flex flex-col items-center gap-3 px-6 pb-14 pt-24 md:pt-36 md:pb-24 lg:pt-60 lg:pb-52 lg:gap-4">
        <h1 className="text-white text-xl font-semibold leading-6 text-center md:text-3xl md:font-bold md:leading-10 lg:text-5xl lg:leading-[56px] lg:max-w-4xl md:max-w-xl">
          Unleash the unlimited power of the cloud with{" "}
          <span className="text-primary-500">CloudBoost</span>
        </h1>

        <p className="text-sm text-neutral-100 font-medium text-center md:text-lg md:leading-6 lg:text-2xl lg:max-w-2xl md:max-w-lg">
          From idea to realization, we transform your aspirations into digital
          reality.
        </p>

        <div className="mt-3 w-32 md:w-40 lg:mt-2">
          <Button className="md:hidden" size="small">
            Start free trial
          </Button>

          <Button className="hidden md:block">Start free trial</Button>
        </div>
      </div>
    </div>
  );
}
