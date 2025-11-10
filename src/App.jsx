import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Dumbbell, Flame, MapPin, Phone, Timer, Star, Instagram, Facebook, Mail, ChevronDown, Shield } from 'lucide-react'
import Spline from '@splinetool/react-spline'

const backendBase = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

function Navbar() {
  const [open, setOpen] = useState(false)
  useEffect(() => {
    const onScroll = () => {
      const nav = document.getElementById('navbar')
      if (!nav) return
      if (window.scrollY > 10) {
        nav.classList.add('bg-black/70', 'backdrop-blur')
      } else {
        nav.classList.remove('bg-black/70', 'backdrop-blur')
      }
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav id="navbar" className="fixed top-0 left-0 w-full z-50 text-white transition-colors">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-2">
            <Flame className="text-red-500" />
            <span className="font-extrabold tracking-widest text-lg">H2H GYM</span>
            <span className="text-xs text-gray-300 hidden sm:inline">King Mariout</span>
          </a>
          <div className="hidden md:flex items-center gap-8">
            <a href="#about" className="hover:text-red-400">About</a>
            <a href="#programs" className="hover:text-red-400">Programs</a>
            <a href="#trainers" className="hover:text-red-400">Trainers</a>
            <a href="#gallery" className="hover:text-red-400">Facilities</a>
            <a href="#plans" className="hover:text-red-400">Membership</a>
            <a href="#contact" className="hover:text-red-400">Contact</a>
            <a href="#trial" className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md font-semibold">Join Now</a>
          </div>
          <button onClick={() => setOpen(!open)} className="md:hidden p-2 rounded hover:bg-white/10">
            <ChevronDown className={`transition-transform ${open ? 'rotate-180' : ''}`} />
          </button>
        </div>
        {open && (
          <div className="md:hidden pb-4 space-y-2">
            {['About','Programs','Trainers','Facilities','Membership','Contact'].map((label, i) => (
              <a key={i} href={`#${label.toLowerCase()}`} className="block px-2 py-2 rounded hover:bg-white/10">{label}</a>
            ))}
            <a href="#trial" className="block bg-red-600 hover:bg-red-700 text-center text-white px-4 py-2 rounded-md font-semibold">Join Now</a>
          </div>
        )}
      </div>
    </nav>
  )
}

function Hero() {
  return (
    <section className="relative min-h-[92vh] w-full overflow-hidden bg-[#0a0a0a] text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/cEecEwR6Ehj4iT8T/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/90 pointer-events-none" />
      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-28 pb-24 flex items-center">
        <div className="max-w-2xl">
          <motion.h1 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight">
            H2H Gym – King Mariout
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.6 }} className="mt-4 text-xl text-gray-200">
            Train Hard. Transform Strong.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6 }} className="mt-8 flex gap-4">
            <a href="#trial" className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-md font-semibold">Join Now</a>
            <a href="#programs" className="border border-white/30 hover:bg-white/10 px-6 py-3 rounded-md">Explore Programs</a>
          </motion.div>
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm text-gray-300">
            {["24/7 Access", "Elite Trainers", "Pro Equipment", "Community"]
              .map((text, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 * i }} className="flex items-center gap-2 bg-white/5 rounded px-3 py-2">
                  <Shield className="text-red-500 w-4 h-4" />
                  <span>{text}</span>
                </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function Section({ id, title, subtitle, children }) {
  return (
    <section id={id} className="py-20 bg-[#0b0b0c] text-gray-100">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">{title}</h2>
          {subtitle && <p className="text-gray-400 mt-2">{subtitle}</p>}
        </div>
        {children}
      </div>
    </section>
  )
}

function About() {
  return (
    <Section id="about" title="About H2H Gym" subtitle="Power. Community. Results in King Mariout, Alexandria.">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div className="space-y-5 text-gray-300">
          <p>
            Built for beginners and serious lifters alike, H2H Gym blends a supportive community with
            elite equipment and results‑driven coaching. Our King Mariout location offers expansive
            training zones: strength, conditioning, functional, and boxing — all under one roof.
          </p>
          <ul className="grid sm:grid-cols-2 gap-3">
            {[
              ['Dumbbells up to 60kg', <Dumbbell key="d" className="text-red-500" />],
              ['Dedicated CrossFit rig', <Flame key="f" className="text-red-500" />],
              ['Boxing bags & ring area', <Star key="s" className="text-red-500" />],
              ['Turf & sled track', <Timer key="t" className="text-red-500" />],
            ].map(([label, icon], i) => (
              <li key={i} className="flex items-center gap-2 bg-white/5 rounded px-3 py-2">
                {icon}
                <span>{label}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-lg overflow-hidden border border-white/10">
          <img src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1600&auto=format&fit=crop" alt="Gym action" className="w-full h-full object-cover" />
        </div>
      </div>
    </Section>
  )
}

function Programs() {
  const items = [
    { title: 'Weight Training', desc: 'Progressive overload programs for strength and size.', icon: <Dumbbell className="text-red-500" /> },
    { title: 'CrossFit', desc: 'High-intensity functional training in a purpose-built zone.', icon: <Flame className="text-red-500" /> },
    { title: 'Boxing', desc: 'Pad work, bag sessions, and conditioning with coaches.', icon: <Star className="text-red-500" /> },
    { title: 'Personal Training', desc: 'One-on-one coaching tailored to your goals and schedule.', icon: <Shield className="text-red-500" /> },
    { title: 'Group Classes', desc: 'Motivating weekly classes for all levels.', icon: <Timer className="text-red-500" /> },
  ]
  return (
    <Section id="programs" title="Programs & Training" subtitle="Choose your path and we’ll guide you there.">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.05 }} className="bg-white/5 rounded-xl p-6 border border-white/10 hover:border-red-500/50 transition-colors">
            <div className="flex items-center gap-3 mb-3">{item.icon}<h3 className="text-xl font-bold">{item.title}</h3></div>
            <p className="text-gray-300">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}

function Trainers() {
  const trainers = [
    { name: 'Ahmed Khaled', spec: 'Strength & Hypertrophy', img: 'https://images.unsplash.com/photo-1599058917212-d750089bc07e?q=80&w=1200&auto=format&fit=crop' },
    { name: 'Sara Mostafa', spec: 'CrossFit & Conditioning', img: 'https://images.unsplash.com/photo-1540206276207-3af25c08abc4?q=80&w=1200&auto=format&fit=crop' },
    { name: 'Omar Hassan', spec: 'Boxing Coach', img: 'https://images.unsplash.com/photo-1521805103424-d8f8430e8931?q=80&w=1200&auto=format&fit=crop' },
  ]
  return (
    <Section id="trainers" title="Our Trainers" subtitle="Experienced coaches committed to your transformation.">
      <div className="grid md:grid-cols-3 gap-6">
        {trainers.map((t, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="group relative rounded-xl overflow-hidden border border-white/10 bg-white/5">
            <img src={t.img} alt={t.name} className="h-72 w-full object-cover group-hover:scale-105 transition-transform" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-0 p-4">
              <h3 className="text-xl font-bold">{t.name}</h3>
              <p className="text-red-400">{t.spec}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}

function Gallery() {
  const images = [
    'https://images.unsplash.com/photo-1558611848-73f7eb4001a1?q=80&w=1600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1507398941214-572c25f4b1dc?q=80&w=1600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1517344884500-c91e2962b854?q=80&w=1600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1605296867304-46d5465a13f1?q=80&w=1600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1571907480490-9b2706f2d8b6?q=80&w=1600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1594737625785-c6683fc4b7d7?q=80&w=1600&auto=format&fit=crop',
  ]
  return (
    <Section id="gallery" title="Facilities Gallery" subtitle="A space built to push your limits.">
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((src, i) => (
          <motion.div key={i} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5 }} className="aspect-video overflow-hidden rounded-lg border border-white/10">
            <img src={src} alt={`facility-${i}`} className="w-full h-full object-cover hover:scale-105 transition-transform" />
          </motion.div>
        ))}
      </div>
    </Section>
  )
}

function Plans() {
  const plans = [
    { name: 'Monthly', price: 'EGP 800', perks: ['All‑area access', 'Group classes', 'Locker room'] },
    { name: 'Quarterly', price: 'EGP 2100', perks: ['Save 12%', 'Priority class booking', '1 PT session'] },
    { name: 'Yearly', price: 'EGP 7500', perks: ['Best value', 'Free onboarding', 'Club events'] },
  ]
  return (
    <Section id="plans" title="Membership Plans" subtitle="Flexible options that fit your grind.">
      <div className="grid md:grid-cols-3 gap-6">
        {plans.map((p, i) => (
          <div key={i} className="rounded-xl border border-white/10 bg-gradient-to-b from-white/10 to-transparent p-6">
            <h3 className="text-2xl font-extrabold">{p.name}</h3>
            <p className="text-3xl mt-2 text-red-500 font-extrabold">{p.price}</p>
            <ul className="mt-4 space-y-2 text-gray-300">
              {p.perks.map((perk, j) => (
                <li key={j} className="flex items-center gap-2"><Star className="w-4 h-4 text-red-500" /> {perk}</li>
              ))}
            </ul>
            <a href="#trial" className="mt-6 inline-block w-full text-center bg-red-600 hover:bg-red-700 px-4 py-2 rounded-md font-semibold">Choose</a>
          </div>
        ))}
      </div>
    </Section>
  )
}

function Testimonials() {
  const items = [
    { name: 'Mahmoud', quote: 'Best gym atmosphere in Alexandria. The community keeps me accountable.' },
    { name: 'Nour', quote: 'I lost 9kg in 12 weeks with the transformation program. Coaches are amazing!' },
    { name: 'Karim', quote: 'Serious equipment, serious gains. Love the boxing zone too.' },
  ]
  return (
    <Section id="testimonials" title="Member Stories" subtitle="Real transformations. Real results.">
      <div className="grid md:grid-cols-3 gap-6">
        {items.map((t, i) => (
          <div key={i} className="rounded-xl border border-white/10 bg-white/5 p-6">
            <div className="flex items-center gap-2 text-yellow-400 mb-2">
              {Array.from({ length: 5 }).map((_, k) => <Star key={k} className="w-4 h-4 fill-yellow-400" />)}
            </div>
            <p className="text-gray-200">“{t.quote}”</p>
            <p className="mt-4 text-sm text-gray-400">— {t.name}</p>
          </div>
        ))}
      </div>
    </Section>
  )
}

function Contact() {
  return (
    <Section id="contact" title="Find Us" subtitle="Drop in, call, or message us on WhatsApp.">
      <div className="grid lg:grid-cols-2 gap-8">
        <div className="rounded-xl overflow-hidden border border-white/10">
          <iframe
            title="H2H Gym – King Mariout"
            src="https://www.google.com/maps?q=King%20Mariout%2C%20Alexandria%2C%20Egypt&output=embed"
            className="w-full h-80"
            loading="lazy"
          />
        </div>
        <div className="space-y-4">
          <div className="flex items-center gap-3"><MapPin className="text-red-500" /><span>King Mariout, Alexandria, Egypt</span></div>
          <div className="flex items-center gap-3"><Phone className="text-red-500" /><a href="tel:+201234567890" className="hover:text-red-400">+20 123 456 7890</a></div>
          <div className="flex items-center gap-3"><Mail className="text-red-500" /><a href="mailto:info@h2hgym.com" className="hover:text-red-400">info@h2hgym.com</a></div>
          <div className="flex items-center gap-3"><Instagram className="text-red-500" /><a href="https://instagram.com" target="_blank" className="hover:text-red-400">Instagram</a></div>
          <a href="https://wa.me/201234567890" target="_blank" className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 px-4 py-2 rounded-md font-semibold">WhatsApp Us</a>
          <div className="text-sm text-gray-400">Hours: Sat–Thu 6:00–24:00, Fri 12:00–22:00</div>
        </div>
      </div>
    </Section>
  )
}

function TrialForm() {
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const payload = {
      name: form.get('name'),
      email: form.get('email'),
      phone: form.get('phone'),
      goal: form.get('goal'),
    }
    setLoading(true)
    setStatus(null)
    try {
      const res = await fetch(`${backendBase}/trial`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) })
      const data = await res.json()
      if (res.ok) setStatus({ ok: true, message: 'Request received! We will contact you shortly.' })
      else setStatus({ ok: false, message: data.detail || 'Something went wrong' })
    } catch (e) {
      setStatus({ ok: false, message: e.message })
    } finally {
      setLoading(false)
    }
  }

  return (
    <Section id="trial" title="Book a Free Trial" subtitle="Start your transformation today.">
      <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6 bg-white/5 p-6 rounded-xl border border-white/10">
        <div className="space-y-4">
          <input name="name" required placeholder="Full name" className="w-full bg-black/40 border border-white/10 rounded px-4 py-3 focus:outline-none focus:border-red-500" />
          <input name="email" type="email" placeholder="Email (optional)" className="w-full bg-black/40 border border-white/10 rounded px-4 py-3 focus:outline-none focus:border-red-500" />
          <input name="phone" required placeholder="Phone / WhatsApp" className="w-full bg-black/40 border border-white/10 rounded px-4 py-3 focus:outline-none focus:border-red-500" />
        </div>
        <div className="flex flex-col">
          <textarea name="goal" placeholder="Your goal (fat loss, muscle gain, performance)" className="min-h-[120px] w-full bg-black/40 border border-white/10 rounded px-4 py-3 focus:outline-none focus:border-red-500" />
          <button disabled={loading} className="mt-4 bg-red-600 hover:bg-red-700 disabled:opacity-60 px-6 py-3 rounded-md font-semibold">{loading ? 'Sending...' : 'Request Free Trial'}</button>
          {status && (
            <div className={`mt-3 text-sm ${status.ok ? 'text-green-400' : 'text-red-400'}`}>{status.message}</div>
          )}
        </div>
      </form>
    </Section>
  )
}

function Footer() {
  return (
    <footer className="bg-black text-gray-300 py-10">
      <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-3 gap-6 items-center">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-white"><Flame className="text-red-500" /><span className="font-extrabold tracking-widest">H2H GYM</span></div>
          <p className="text-sm text-gray-400">© {new Date().getFullYear()} H2H Gym – King Mariout. All rights reserved.</p>
        </div>
        <div className="text-sm text-gray-400">Privacy Policy · Terms</div>
        <div className="flex gap-4 justify-start md:justify-end">
          <a href="#" className="hover:text-red-400"><Instagram /></a>
          <a href="#" className="hover:text-red-400"><Facebook /></a>
        </div>
      </div>
    </footer>
  )
}

function SEO() {
  // Basic SEO tags via JS for this demo
  useEffect(() => {
    document.title = 'H2H Gym – King Mariout | Alexandria Fitness Center'
    const metaDesc = document.createElement('meta')
    metaDesc.name = 'description'
    metaDesc.content = 'Gym in King Mariout. Alexandria fitness center with weight training, CrossFit, boxing, personal training, classes, and transformations.'
    document.head.appendChild(metaDesc)

    const metaKeywords = document.createElement('meta')
    metaKeywords.name = 'keywords'
    metaKeywords.content = 'Gym in King Mariout, Alexandria fitness center, H2H Gym, personal training Alexandria, CrossFit Alexandria, boxing gym Alexandria'
    document.head.appendChild(metaKeywords)

    const ogTitle = document.createElement('meta')
    ogTitle.setAttribute('property', 'og:title')
    ogTitle.content = 'H2H Gym – King Mariout'
    document.head.appendChild(ogTitle)

    return () => {
      document.head.removeChild(metaDesc)
      document.head.removeChild(metaKeywords)
      document.head.removeChild(ogTitle)
    }
  }, [])
  return null
}

export default function App() {
  return (
    <div className="bg-[#0a0a0a] text-white scroll-smooth">
      <SEO />
      <Navbar />
      <Hero />
      <About />
      <Programs />
      <Trainers />
      <Gallery />
      <Plans />
      <Testimonials />
      <TrialForm />
      <Contact />
      <Footer />
    </div>
  )
}
