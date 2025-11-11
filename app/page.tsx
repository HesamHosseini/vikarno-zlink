"use client";

import Link from "next/link";
import { ExternalLink, FileText, Play, Camera } from "lucide-react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

export default function Home() {
    const projects = [
        {
            id: 1,
            title: " صفحه ViraSign",
            description: "پلتفرم مدیریت قرارداد دیجیتالی ViraSign را با پیگیری بی‌درنگ و بایگانی ایمن کاوش کنید",
            icon: Camera,
            href: "https://virasign.com",
            type: "screenshot",
            image: "/viraSign.png",
        },
        {
            id: 2,
            title: "ویدیو پروژه ViraSign",
            description:
                "ویدیو نمایشی پلتفرم ViraSign را تماشا کنید که ویژگی‌های امضای دیجیتالی، احراز هویت و مدیریت قراردادها را نشان می‌دهد",
            icon: Play,
            href: "https://virasign.com",
            type: "video",
            image: "/video.mp4",
        },
        {
            id: 3,
            title: "رزومه شرکت",
            description: "پروفایل کامل شرکت، خلاصه خدمات و توانایی‌های فنی را دانلود کنید",
            icon: FileText,
            href: "/vikarno-persian.pdf",
            type: "resume",
            image: "/vikarno.png",
        },
    ];

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2,
            },
        },
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1], // cubic-bezier for easeOut
            },
        },
    };

    const logoVariants: Variants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1], // cubic-bezier for easeOut
            },
        },
    };

    const headerVariants: Variants = {
        hidden: { opacity: 0, y: -20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                delay: 0.1,
            },
        },
    };

    return (
        <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50/20 dark:from-slate-950 dark:via-slate-900 dark:to-emerald-950/10">
            {/* Hero Section */}
            <div className="flex flex-col items-center justify-center px-4 py-20 text-center">
                <motion.div
                    variants={logoVariants}
                    initial="hidden"
                    animate="visible"
                    className="mb-8 h-24 w-24 rounded-2xl p-4 shadow-2xl dark:from-cyan-500 "
                >
                    <svg viewBox="0 0 17 15" fill="none" className="size-full">
                        <path d="M4.26868 4.76837e-05L8.5336 7.32275L12.7318 4.73138e-05L4.26868 4.76837e-05Z" fill="#00A7B8"></path>
                        <path
                            d="M2.06058 3.75386L8.4631 14.6455L4.26835 14.6455L-3.21682e-07 7.28629L2.06058 3.75386Z"
                            fill="#00B7C9"
                        ></path>
                        <path d="M14.9394 3.75386L8.5369 14.6455L12.7317 14.6455L17 7.28629L14.9394 3.75386Z" fill="#00A9BA"></path>
                        <path d="M12.7314 14.6454L8.5336 7.32275L4.26834 14.6454L12.7314 14.6454Z" fill="#4ECDD6" fillOpacity="0.3"></path>
                    </svg>
                </motion.div>

                <motion.div variants={headerVariants} initial="hidden" animate="visible">
                    <h1 className="mb-3 text-5xl font-bold text-slate-900 dark:text-white md:text-6xl">ویکارنو</h1>
                </motion.div>

                <motion.div variants={headerVariants} initial="hidden" animate="visible" transition={{ delay: 0.2 }} className="mb-8">
                    <p className="mb-4 text-lg font-semibold text-transparent bg-gradient-to-r from-cyan-600 to-emerald-600 dark:from-cyan-400 dark:to-emerald-400 bg-clip-text">
                        vikarno.com
                    </p>
                </motion.div>

                <motion.p
                    variants={headerVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: 0.3 }}
                    className="mx-auto mb-12 max-w-2xl text-base leading-relaxed text-slate-600 dark:text-slate-400"
                >
                    راهکارهای نرم‌افزاری نوآورانه برای رشد تجارت. ما در توسعه وب‌سایت‌ها، برنامه‌ها و پلتفرم‌های دیجیتالی تخصص داریم تا به
                    شما کمک کنیم اهداف تجاری خود را دستیابی کنید.
                </motion.p>

                <motion.div variants={headerVariants} initial="hidden" animate="visible" transition={{ delay: 0.4 }} className="mb-16">
                    <Link href="https://vikarno.com">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-600 to-emerald-600 px-8 py-3 font-semibold text-white shadow-lg transition-all hover:shadow-xl dark:from-cyan-500 dark:to-emerald-500"
                        >
                            بازدید وب‌سایت
                            <ExternalLink className="h-5 w-5" />
                        </motion.button>
                    </Link>
                </motion.div>
            </div>

            {/* Projects Section */}
            <div className="mx-auto max-w-6xl px-4 pb-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center"
                >
                    <h2 className="mb-4 text-3xl font-bold text-slate-900 dark:text-white">پروژه‌های برتر و منابع</h2>
                    <div className="h-1 w-16 mx-auto bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-full"></div>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid gap-8 md:grid-cols-1 lg:grid-cols-3"
                >
                    {projects.map((project) => {
                        const Icon = project.icon;

                        return (
                            <motion.div key={project.id} variants={itemVariants} whileHover={{ y: -8 }}>
                                {project.type === "resume" ? (
                                    <a
                                        href={project.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group relative flex h-full flex-col rounded-2xl border border-slate-200 bg-white overflow-hidden transition-all shadow-md hover:shadow-2xl dark:border-slate-700 dark:bg-slate-800/50 hover:dark:border-emerald-500/30"
                                    >
                                        <div className="relative h-48 w-full overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-700 dark:to-slate-800">
                                            <Image
                                                src={project.image || "/placeholder.svg"}
                                                alt={project.title}
                                                fill
                                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                        </div>

                                        <div className="flex flex-1 flex-col p-6">
                                            <div className="mb-3 inline-flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-100 to-emerald-100 dark:from-cyan-900 dark:to-emerald-900">
                                                <Icon className="h-5 w-5 text-cyan-600 dark:text-cyan-400" />
                                            </div>
                                            <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">{project.title}</h3>
                                            <p className="mb-4 flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                                                {project.description}
                                            </p>

                                            <div className="flex items-center gap-2 text-sm font-medium text-cyan-600 dark:text-cyan-400 transition-all group-hover:gap-3">
                                                مشاهده رزومه
                                                <motion.div initial={{ x: 0 }} whileHover={{ x: -4 }}>
                                                    <ExternalLink className="h-4 w-4" />
                                                </motion.div>
                                            </div>
                                        </div>
                                    </a>
                                ) : (
                                    <Link href={project.href}>
                                        <div className="group relative flex h-full flex-col rounded-2xl border border-slate-200 bg-white overflow-hidden transition-all shadow-md hover:shadow-2xl dark:border-slate-700 dark:bg-slate-800/50 hover:dark:border-emerald-500/30">
                                            <div className="relative h-48 w-full overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-700 dark:to-slate-800">
                                                {project.type === "video" ? (
                                                    <video controls className="h-full w-full object-cover" poster={project.image}>
                                                        <source src={project.image} type="video/mp4" />
                                                        Your browser does not support the video tag.
                                                    </video>
                                                ) : (
                                                    <>
                                                        <Image
                                                            src={project.image || "/placeholder.svg"}
                                                            alt={project.title}
                                                            fill
                                                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                                                        />
                                                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                                    </>
                                                )}
                                            </div>

                                            <div className="flex flex-1 flex-col p-6">
                                                <div className="mb-3 inline-flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-100 to-emerald-100 dark:from-cyan-900 dark:to-emerald-900">
                                                    <Icon className="h-5 w-5 text-cyan-600 dark:text-cyan-400" />
                                                </div>
                                                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                                                    {project.title}
                                                </h3>
                                                <p className="mb-4 flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                                                    {project.description}
                                                </p>

                                                <div className="flex items-center gap-2 text-sm font-medium text-cyan-600 dark:text-cyan-400 transition-all group-hover:gap-3">
                                                    بیشتر بدانید
                                                    <motion.div initial={{ x: 0 }} whileHover={{ x: -4 }}>
                                                        <ExternalLink className="h-4 w-4" />
                                                    </motion.div>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                )}
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>

            <motion.footer
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="border-t border-slate-200 bg-gradient-to-b from-white to-emerald-50/30 py-8 text-center dark:border-slate-700 dark:from-slate-900 dark:to-emerald-950/10"
            >
                <p className="text-sm font-medium text-slate-600 dark:text-slate-400">© ۲۰۲۵ ویکارنو. تمام حقوق محفوظ است.</p>
            </motion.footer>
        </main>
    );
}
