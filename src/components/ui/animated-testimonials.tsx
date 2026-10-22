"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { useEffect, useState } from "react";

export type AnimatedTestimonial = {
  quote: string;
  name: string;
  company: string;
  industry: string;
  service: string;
  rating: number;
  highlight: string;
  src: string;
  website?: string;
};

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex items-center gap-1" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={16} className="fill-amber-400 text-amber-400" />
      ))}
    </div>
  );
}

export function AnimatedTestimonials({
  testimonials,
  autoplay = true,
}: {
  testimonials: AnimatedTestimonial[];
  autoplay?: boolean;
}) {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(1);

  const handleNext = () => {
    setDirection(1);
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    if (!autoplay || testimonials.length <= 1) return;
    const timer = window.setInterval(handleNext, 5000);
    return () => window.clearInterval(timer);
  }, [autoplay, testimonials.length]);

  const activeTestimonial = testimonials[active];

  return (
    <section className="relative w-full py-12 md:py-20">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mb-8 text-center md:mb-12">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[10px] font-medium uppercase tracking-[0.24em] text-neutral-200">
            Client stories
          </span>
          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.06em] text-white md:text-5xl">
            What our <span className="text-[#d7d0c6]">clients say</span>
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.1fr_1.3fr] lg:items-center">
          <div className="relative h-[340px] overflow-hidden rounded-[2rem] border border-white/10 bg-[#0b1020] shadow-[0_30px_80px_rgba(15,23,42,0.35)] md:h-[440px]">
            <AnimatePresence mode="wait">
              {testimonials.map((testimonial, index) => {
                const isActive = index === active;
                return (
                  <motion.div
                    key={`${testimonial.name}-${testimonial.company}`}
                    initial={{ opacity: 0, scale: 0.92, x: isActive ? 0 : direction * 26, rotateY: isActive ? 0 : direction * 14 }}
                    animate={{
                      opacity: isActive ? 1 : 0.38,
                      scale: isActive ? 1 : 0.92,
                      x: isActive ? 0 : direction * 18,
                      rotateY: isActive ? 0 : direction * 12,
                    }}
                    exit={{ opacity: 0, scale: 0.86 }}
                    transition={{ duration: 0.45, ease: "easeInOut" }}
                    className={`absolute inset-0 ${isActive ? "z-20" : "z-10 pointer-events-none"}`}
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    <img
                      src={testimonial.src}
                      alt={testimonial.name}
                      className={`h-full w-full object-cover transition-all duration-500 ${isActive ? "grayscale-0" : "grayscale-[0.2]"}`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#060b13]/88 via-[#060b13]/20 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 p-4 md:p-5">
                      <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/20 px-2.5 py-1.5 text-[10px] uppercase tracking-[0.22em] text-neutral-200 backdrop-blur-sm">
                        <span className="h-2 w-2 rounded-full bg-[#f4c77a]" />
                        {testimonial.industry}
                      </div>
                      <div className="mt-3 text-xl font-medium text-white md:text-2xl">{testimonial.company}</div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-[#111827]/70 p-5 shadow-[0_20px_70px_rgba(15,23,42,0.28)] backdrop-blur-xl md:p-7">
            <div className="mb-4 flex items-center gap-2">
              <StarRating count={activeTestimonial.rating} />
            </div>

            <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.24em] text-neutral-300">
              Client highlight
            </p>

            <blockquote className="text-2xl font-semibold leading-tight tracking-[-0.04em] text-white md:text-3xl">
              “{activeTestimonial.highlight}”
            </blockquote>

            <p className="mt-5 text-base leading-7 text-neutral-300 md:text-lg">
              “{activeTestimonial.quote}”
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              <span className="rounded-full border border-[#7dd3fc]/30 bg-[#7dd3fc]/10 px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-[#d7f3ff]">
                {activeTestimonial.industry}
              </span>
              <span className="rounded-full border border-[#c4b5fd]/30 bg-[#c4b5fd]/10 px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-[#ede9fe]">
                {activeTestimonial.service}
              </span>
            </div>

            <div className="mt-7 border-t border-white/10 pt-5">
              <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-neutral-400">Client</p>
                  <p className="mt-2 text-2xl font-semibold tracking-[-0.05em] text-white">{activeTestimonial.name}</p>
                  <p className="mt-1 text-base text-neutral-300">{activeTestimonial.company}</p>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={handlePrev}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-neutral-200 transition hover:bg-white/10"
                    aria-label="Previous testimonial"
                  >
                    <ChevronLeft size={18} />
                  </button>
                  <button
                    type="button"
                    onClick={handleNext}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-neutral-200 transition hover:bg-white/10"
                    aria-label="Next testimonial"
                  >
                    <ChevronRight size={18} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
