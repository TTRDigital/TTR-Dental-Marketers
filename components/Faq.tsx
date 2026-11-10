import { faqs } from "@/lib/content";
import { Reveal } from "./Reveal";
import { PlusIcon } from "./icons";

export function Faq() {
  return (
    <section id="faq" className="py-16 sm:py-24">
      <div className="container-x max-w-3xl">
        <Reveal>
          <h2 className="text-center text-3xl font-bold sm:text-4xl">Frequently Asked Questions</h2>
        </Reveal>
        <div className="mt-10 divide-y divide-line rounded-3xl border border-line bg-white px-6 sm:px-8">
          {faqs.map((f) => (
            <details key={f.q} className="group py-5">
              <summary className="flex cursor-pointer items-center justify-between gap-4 text-left font-heading text-lg font-bold text-ink">
                {f.q}
                <span className="faq-icon inline-flex size-8 shrink-0 items-center justify-center rounded-full bg-brand-light text-brand" aria-hidden="true">
                  <PlusIcon className="size-4" />
                </span>
              </summary>
              <p className="mt-3 pr-12 leading-relaxed text-body">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
