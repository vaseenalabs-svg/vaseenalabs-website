'use client'

import { AnimatedTestimonials } from '@/components/ui/animated-testimonials'

const testimonials = [
  {
    id: 'vasundhara',
    name: 'Vasundhara Palace',
    company: 'Vasundhara Palace Bangalore',
    website: 'https://www.vasundharapalacebangalore.com/',
    industry: 'Restaurant',
    service: 'Web Development',
    rating: 5,
    src: '/images/Vasundhara.png',
    quote:
      'Vaseena Labs built us a website that truly reflects our restaurant. The design is sophisticated, the menu presentation looks stunning, and our online visibility has improved dramatically since launch. Guests frequently compliment us on how professional and beautiful the website looks before they even walk through our doors. The team was responsive, understood exactly what we wanted, and delivered on time. Highly recommended.',
    highlight: 'Guests compliment us on the website before they even walk through our doors.',
  },
  {
    id: 'seaplate',
    name: 'SeaPlate Bangalore',
    company: 'SeaPlate Bangalore',
    website: 'https://seaplatebangalore.in/',
    industry: 'Restaurant',
    service: 'Web Development',
    rating: 5,
    src: '/images/seaplate.png',
    quote:
      'We needed our seafood restaurant to stand out online and Vaseena Labs did exactly that. The website looks incredible — every section makes you want to come in and eat. Our reservation enquiries have gone up noticeably after the launch. The mobile experience is especially smooth, which matters a lot since most of our customers browse on their phones. Very professional team throughout the entire process.',
    highlight: 'Reservation enquiries have gone up noticeably after launch.',
  },
  {
    id: 'akik',
    name: 'Akik Creations by HY',
    company: 'Akik Creations by HY',
    website: 'https://www.akikcreationsbyhy.com/',
    industry: 'Clothing & Fashion',
    service: 'E-Commerce Development',
    rating: 5,
    src: '/images/akik.png',
    quote:
      'Our kurti collections finally have the online store they deserve. Vaseena Labs built us a beautiful, easy-to-shop website where customers can browse our full range, place orders smoothly, and even reach us directly on WhatsApp. Orders started coming in within days of the launch. The design perfectly matches our brand — elegant, clean, and feminine. I could not be happier with the result.',
    highlight: 'Orders started coming in within days of the launch.',
  },
  {
    id: 'shenme',
    name: 'Shenme Salon',
    company: 'Shenme',
    website: 'https://shenme.vercel.app',
    industry: 'Salon & Beauty',
    service: 'Web Development',
    rating: 5,
    src: '/images/shenme.png',
    quote:
      'Vaseena Labs gave our salon a digital presence we are genuinely proud of. The website is sleek, modern, and showcases our services in a way that builds instant trust with new clients. We have seen a clear increase in appointment enquiries through the website since it went live. The team was easy to work with, communicated clearly at every step, and delivered a product that exceeded what we imagined.',
    highlight: 'Clear increase in appointment enquiries since going live.',
  },
]

export default function TestimonialsSection() {
  return <AnimatedTestimonials testimonials={testimonials} autoplay />
}
