"use client";

import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from "react";
import { bookingEmbedUrl, bookingUrl, phoneDisplay, phoneHref } from "@/lib/site";
import { CloseIcon } from "./icons";

type Ctx = { open: () => void };
const BookingContext = createContext<Ctx>({ open: () => {} });

/**
 * Wraps the page so any BookButton can open the Calendly booking modal,
 * the same booking flow the live funnel used.
 */
export function BookingProvider({ children }: { children: ReactNode }) {
  const [isOpen, setOpen] = useState(false);
  const open = useCallback(() => setOpen(true), []);
  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && close();
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [isOpen, close]);

  return (
    <BookingContext.Provider value={{ open }}>
      {children}
      {isOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-end justify-center bg-ink/70 p-0 backdrop-blur-sm sm:items-center sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-label="Book your free strategy call"
          onClick={(e) => e.target === e.currentTarget && close()}
        >
          <div className="relative flex h-[92dvh] w-full max-w-3xl flex-col overflow-hidden rounded-t-3xl bg-white shadow-2xl sm:h-[min(760px,90dvh)] sm:rounded-3xl">
            <div className="flex items-center justify-between gap-4 border-b border-line px-5 py-3">
              <div>
                <p className="text-base font-medium text-ink">Book your free 15-minute strategy call</p>
                <p className="text-xs text-meta">
                  Prefer to talk now?{" "}
                  <a className="font-semibold text-brand underline-offset-2 hover:underline" href={phoneHref}>
                    {phoneDisplay}
                  </a>
                </p>
              </div>
              <button
                type="button"
                onClick={close}
                className="inline-flex size-10 shrink-0 items-center justify-center rounded-full text-ink hover:bg-paper"
                aria-label="Close"
              >
                <CloseIcon className="size-5" />
              </button>
            </div>
            <iframe
              src={bookingEmbedUrl}
              title="Calendly: book a dental strategy call"
              className="h-full w-full flex-1"
              loading="eager"
            />
            <p className="border-t border-line px-5 py-2 text-center text-xs text-meta">
              Calendar not loading?{" "}
              <a className="font-semibold text-brand underline-offset-2 hover:underline" href={bookingUrl} target="_blank" rel="noopener">
                Open it in a new tab
              </a>
              .
            </p>
          </div>
        </div>
      )}
    </BookingContext.Provider>
  );
}

type BtnProps = {
  children: ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "white" | "outline-white";
};

/** A pill button that opens the booking modal. Falls back to the Calendly link without JS. */
export function BookButton({ children, className = "", variant = "primary" }: BtnProps) {
  const { open } = useContext(BookingContext);
  return (
    <a
      href={bookingUrl}
      target="_blank"
      rel="noopener"
      onClick={(e) => {
        e.preventDefault();
        open();
      }}
      className={`btn btn-${variant} ${className}`}
      data-track="book_call_click"
    >
      {children}
    </a>
  );
}
