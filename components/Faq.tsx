import { getContent } from "@/lib/content";
import { Reveal } from "./Reveal";
import { PlusIcon } from "./icons";

export async function Faq() {
  const { faqs } = await getContent();
  return (
    <section id="faq" className="container-x py-16 sm:py-24">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <h2 className="text-center text-3xl sm:text-[2.75rem]">Frequently asked questions</h2>
        </Reveal>
        <div className="mt-10 border-t border-line">
          {faqs.map((f) => (
            <details key={f.q} className="group border-b border-line py-5">
              <summary className="flex cursor-pointer items-center justify-between gap-6 text-left text-lg font-medium text-ink">
                {f.q}
                <span className="faq-icon inline-flex size-8 shrink-0 items-center justify-center rounded-full bg-paper text-ink" aria-hidden="true">
                  <PlusIcon className="size-4" />
                </span>
              </summary>
              <p className="mt-3 max-w-2xl leading-relaxed text-body">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
