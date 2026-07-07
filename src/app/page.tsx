'use client';
import { ChevronRight, Youtube, Instagram, Twitch } from 'lucide-react';
import { Button } from '@/app/components/button';
import NavBar from '@/app/components/navbar';
import { motion } from 'framer-motion';

const BUNNY_VIDEO_EMBED_URL =
    'https://iframe.mediadelivery.net/embed/699191/782ef2fc-1ffe-4099-a3c7-e5b5a3f4e16a?autoplay=false&preload=true';

const MELENITAS_POSE = '/melenitasdev.png';

const TikTokIcon = () => (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
    </svg>
);

const SOCIAL_LINKS = [
    {
        label: 'YouTube',
        url: 'https://youtube.com/@melenitasdev',
        icon: <Youtube className="h-5 w-5" />,
    },
    {
        label: 'Instagram',
        url: 'https://instagram.com/melenitasdev',
        icon: <Instagram className="h-5 w-5" />,
    },
    {
        label: 'TikTok',
        url: 'https://www.tiktok.com/@melenitasdev',
        icon: <TikTokIcon />,
    },
    {
        label: 'Twitch',
        url: 'https://www.twitch.tv/melenitasdev',
        icon: <Twitch className="h-5 w-5" />,
    },
];

const FADE_UP = {
    hidden: { opacity: 0, y: 24 },
    show: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.12, duration: 0.55, ease: 'easeOut' },
    }),
};

export default function LeadMagnetPage() {
    return (
        <div className="min-h-screen bg-ink text-bone selection:bg-primary/30 font-sans">
            <NavBar />

            {/* ── HERO ─────────────────────────────────────────────── */}
            <section className="relative pt-32 pb-20 px-6 overflow-hidden">
                {/* Grid background */}
                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(229,76,76,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(229,76,76,0.06)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_70%_70%_at_50%_20%,#000_50%,transparent_100%)]" />
                {/* Glow */}
                <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-primary/10 rounded-full blur-3xl" />
                {/* Corner glyphs */}
                <div className="pointer-events-none hidden md:block absolute top-24 left-8 font-mono text-primary/20 text-sm select-none">
                    {'>_ { } //'}
                </div>
                <div className="pointer-events-none hidden md:block absolute bottom-8 right-8 font-mono text-primary/20 text-sm select-none">
                    {'( ) => [ ]'}
                </div>

                <div className="relative max-w-4xl mx-auto text-center space-y-8 z-10">
                    {/* Badge */}
                    <motion.div
                        variants={FADE_UP}
                        initial="hidden"
                        animate="show"
                        custom={0}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-primary/10 border border-primary/30 text-primary text-xs font-mono uppercase tracking-widest backdrop-blur-sm"
                    >
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
                        </span>
                        {'// vídeo gratuito · 15 min'}
                    </motion.div>

                    <motion.h1
                        variants={FADE_UP}
                        initial="hidden"
                        animate="show"
                        custom={1}
                        className="text-4xl md:text-6xl font-bold leading-tight tracking-tight"
                    >
                        5 señales de que tu código{' '}
                        <span className="text-primary">se va a convertir en un infierno</span>
                        <span className="cursor-blink text-primary">_</span>
                    </motion.h1>

                    <motion.p
                        variants={FADE_UP}
                        initial="hidden"
                        animate="show"
                        custom={2}
                        className="text-xl text-bone/60 max-w-2xl mx-auto leading-relaxed"
                    >
                        Si te suena familiar alguna de estas 5 señales, tu código necesita ayuda urgente.
                        En esta clase aprenderás a detectarlas y solucionarlas con código limpio
                        antes de que tu proyecto de videojuegos crezca — y esto te ayudará a programar
                        más rápido, con más seguridad y a abrirte puertas en el sector profesional.
                    </motion.p>

                    {/* CTA */}
                    <motion.div
                        variants={FADE_UP}
                        initial="hidden"
                        animate="show"
                        custom={3}
                        className="flex flex-col items-center sm:flex-row gap-4 justify-center pt-2"
                    >
                        <Button
                            variant="primary"
                            size="xl"
                            buttonType="navigation"
                            navigationUrl="#video"
                            placeHolder="Ver el vídeo ahora"
                            icon={<ChevronRight />}
                            className="shadow-primary/20 shadow-[0px_0px_20px_1px]"
                        />
                        {/* <Button
                            variant="secondary"
                            size="xl"
                            buttonType="navigation"
                            navigationUrl="http://localhost:3000"
                            placeHolder="Ir a la academia"
                            external
                        /> */}
                    </motion.div>
                </div>
            </section>

            {/* ── VIDEO ────────────────────────────────────────────── */}
            <section id="video" className="py-20 px-6 bg-black/40 border-y border-[#27272a]">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-10 space-y-3"
                    >
                        <p className="font-mono text-xs uppercase tracking-widest text-primary">
                            {'> video'}
                        </p>
                        <h2 className="text-3xl md:text-4xl font-bold">
                            Detecta y soluciona las señales antes de que sea tarde
                        </h2>
                        <p className="text-bone/60 text-lg max-w-2xl mx-auto">
                            En 15 minutos aprenderás a identificar las 5 señales de código problemático
                            y a solucionarlas con código limpio — antes de que destruyan tu proyecto
                            de videojuegos.
                        </p>
                    </motion.div>

                    {/* Video embed — Bunny Stream */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.97 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="relative rounded-lg overflow-hidden border border-primary/20 shadow-2xl shadow-primary/10"
                    >
                        {/* Terminal-style title bar */}
                        <div className="flex items-center gap-2 px-4 py-2.5 bg-[#151515] border-b border-primary/20">
                            <span className="h-2.5 w-2.5 rounded-full bg-primary/70" />
                            <span className="h-2.5 w-2.5 rounded-full bg-bone/20" />
                            <span className="h-2.5 w-2.5 rounded-full bg-bone/20" />
                            <span className="ml-2 font-mono text-xs text-bone/40 truncate">
                                video.mp4 — melenitasdev
                            </span>
                        </div>
                        <div className="relative aspect-video">
                            <iframe
                                className="absolute inset-0 w-full h-full"
                                src={BUNNY_VIDEO_EMBED_URL}
                                title="5 señales de que tu código se va a convertir en un infierno — Melenitas Dev"
                                loading="lazy"
                                allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture"
                                allowFullScreen
                            />
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ── SOCIAL / CEO ─────────────────────────────────────── */}
            <section id="redes" className="py-20 px-6">
                <div className="max-w-3xl mx-auto text-center space-y-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="space-y-4"
                    >
                        <p className="font-mono text-xs uppercase tracking-widest text-primary">
                            {'// redes'}
                        </p>
                        <h2 className="text-3xl md:text-4xl font-bold">Sígueme en redes</h2>
                        <p className="text-bone/60 text-lg">
                            Sigue aprendiendo programación de videojuegos, buenas prácticas y cómo impulsar tu carrera profesional.
                        </p>
                    </motion.div>

                    {/* CEO card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="flex flex-col items-center gap-4"
                    >
                        <div className="relative">
                            <div className="absolute inset-0 rounded-full bg-primary/30 blur-xl scale-110" />
                            <div className="relative w-52 h-72 flex items-end justify-center">
                                <img
                                    src={MELENITAS_POSE}
                                    alt="Melenitas Dev"
                                    className="h-full w-auto object-contain object-bottom drop-shadow-[0_0_24px_rgba(229,76,76,0.35)]"
                                />
                            </div>
                        </div>
                        <div>
                            <p className="font-bold text-xl">melenitasdev</p>
                        </div>
                    </motion.div>

                    {/* Social links grid */}
                    <div className="flex justify-center gap-3 flex-wrap">
                        {SOCIAL_LINKS.map((s, i) => (
                            <motion.a
                                key={s.label}
                                href={s.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                variants={FADE_UP}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true }}
                                custom={i}
                                className="flex flex-col items-center gap-2 p-4 w-32 rounded-md border border-[#27272a] bg-black/30 text-bone/50 transition-all duration-300 hover:text-primary hover:border-primary/40 hover:-translate-y-0.5"
                            >
                                {s.icon}
                                <span className="text-xs font-mono uppercase">{s.label}</span>
                            </motion.a>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── FOOTER ───────────────────────────────────────────── */}
            <footer className="py-10 border-t border-[#27272a] px-6 font-mono">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-bone/40 text-sm">
                    <span className="font-bold tracking-tighter text-bone/70">
                        <span className="text-primary">{'>_'}</span> Melenitas Dev
                    </span>
                    <p>© 2026 Melenitas Dev. Todos los derechos reservados.</p>
                    {/* <a
                        href="http://localhost:3000"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-primary transition-colors"
                    >
                        melenitasdev.com
                    </a> */}
                </div>
            </footer>
        </div>
    );
}
