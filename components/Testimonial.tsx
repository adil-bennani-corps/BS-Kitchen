import {Testimonial as TestimonialType} from '@/types/projects';

export type TestimonialProps = {
  testimonial?: TestimonialType;
};

export function Testimonial({testimonial}: TestimonialProps) {
  if (!testimonial) {
    return null;
  }

  return (
    <section className="rounded-3xl border border-charcoal/10 bg-charcoal p-10 text-off-white shadow-soft">
      <h2 className="text-2xl font-semibold">Témoignage</h2>
      <blockquote className="mt-6 space-y-4 text-lg leading-relaxed">
        <p>“{testimonial.quote}”</p>
        <footer className="text-sm font-semibold uppercase tracking-[0.2em] text-off-white/70">
          {testimonial.author}
        </footer>
      </blockquote>
    </section>
  );
}
