"use client";

import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

export default function ThreeDCardDemo() {
    return (
        <CardContainer containerClassName="w-full" className="w-full max-w-[640px]">
            <CardBody className="group/card relative h-[480px] w-full overflow-hidden rounded-[2rem] bg-transparent p-0 shadow-none md:h-[560px]">
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    className="absolute inset-0 h-full w-full rounded-[2rem] object-fill opacity-100 ring-1 ring-white/10 shadow-[0_30px_100px_rgba(12,18,30,0.45)]"
                >
                    <source src="/videos/desktop_hero_background.mp4" type="video/mp4" />
                </video>

                <div className="absolute inset-0 rounded-[2rem] bg-[radial-gradient(circle_at_top,_rgba(37,99,235,0.22),_transparent_28%),radial-gradient(circle_at_bottom,_rgba(168,85,247,0.18),_transparent_30%)]" />
                <div className="absolute inset-0 rounded-[2rem] opacity-60 [background-image:linear-gradient(rgba(148,163,184,0.10)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.10)_1px,transparent_1px)] [background-size:32px_32px]" />

                <div className="absolute inset-x-0 top-0 z-20 flex items-center justify-between p-4 md:p-5">
                    <CardItem
                        as="div"
                        translateZ={30}
                        className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-2.5 py-1.5 backdrop-blur-sm"
                    >
                        <span className="h-2 w-2 rounded-full bg-[#f4c77a]" />
                        <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-white/70">Design</span>
                    </CardItem>

                    <CardItem
                        as="div"
                        translateZ={30}
                        className="flex items-center gap-2 rounded-full border border-white/10 bg-[#0f172a]/70 px-2.5 py-1.5 text-white/80 backdrop-blur-sm"
                    >
                        <span className="text-sm">✦</span>
                        <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-white/70">Automation

                        </span>
                    </CardItem>
                </div>

                <div className="absolute inset-x-0 bottom-0 z-20 p-4 md:p-5">
                    <CardItem
                        as="div"
                        translateZ={40}
                        className="rounded-[1.2rem] border border-white/10 bg-[#0a1526]/80 px-3 py-3 backdrop-blur-md md:px-4"
                    >
                        <div className="flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.24em] text-white/60">
                            <span className="inline-flex h-2 w-2 rounded-full bg-[#92c5ff]" />
                            Strategy
                        </div>
                    </CardItem>
                </div>
            </CardBody>
        </CardContainer>
    );
}
