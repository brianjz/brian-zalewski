<script setup lang="ts">
</script>

<template>
    <section id="about-me" class="max-w-6xl mx-auto px-6 py-8 [&_a]:text-emerald-400 [&_a]:transition-colors [&_a:hover]:text-emerald-300 [&_a:hover]:underline">
        <!-- Section Heading -->
        <div class="flex items-center gap-4 mb-10">
            <h2 class="text-2xl font-bold text-slate-100 flex items-center gap-2">
                <span class="font-mono text-emerald-400 text-lg">01.</span> About Me
            </h2>
            <div class="h-[1px] bg-slate-800 flex-grow max-w-xs"></div>
        </div>

        <div class="overflow-hidden">
            <!-- Avatar: Centered block on mobile, floated right on desktop -->
            <div class="relative w-48 h-48 sm:w-56 sm:h-56 float-none mx-auto mb-8 md:float-right md:ml-8 md:mb-4 md:mr-0">
                <!-- Glow Accent -->
                <div class="absolute -inset-1 rounded-full bg-emerald-400/20 blur-md"></div>
                
                <img 
                    src="/images/Brian-Zalewski.jpg" 
                    alt="Brian Zalewski" 
                    class="relative w-full h-full rounded-full object-cover border-2 border-emerald-400/80 p-1 bg-slate-950 shadow-xl"
                />
            </div>

            <div class="space-y-4 text-slate-400 leading-relaxed text-base">
                <p class="text-slate-400 leading-relaxed mb-8 text-base">
                    Besides full-stack development, there are other things in my life that I really enjoy doing.
                </p>

                <p class="text-slate-400 leading-relaxed mb-8 text-base">
                    <strong>The year 2010 marked a pivotal turning point in my life</strong> when the arrival of my daughter
                    brought boundless joy and immeasurable changes. In December 2012, my son joined our family. Parenthood has been an extraordinary mix of challenges and
                    blessings, encompassing moments of both stress and pure amazement. This incredible journey has shaped me in ways I never imagined, and I wholeheartedly
                    embrace every step of it.
                </p>

                <p class="text-slate-400 leading-relaxed mb-8 text-base">
                    In 1999, a convergence of events — a thought-provoking news article and the loss of my beloved grandfather —
                    propelled me into the vast realm of <a class="text-emerald-400" href="https://www.zalewskifamily.net/">family history and genealogy</a>. <strong>It's an ongoing
                    exploration</strong> that continues to teach me valuable lessons about my roots and personal identity. I love to share this knowledge with my children, and
                    my fascination with genealogy fuels my ongoing quest for discovery and software engineering.
                </p>

                <p class="text-slate-400 leading-relaxed mb-8 text-base">
                    <strong>Gaming has been an integral part of my life since my early years.</strong> I remember my first
                    encounter with video games on my parents' Texas Instruments TI-99/4A, where Space Invaders became my go-to entertainment. However, it was when my brother brought home the
                    Nintendo Entertainment System that my early obsession truly took flight. While my gaming time has dwindled since becoming a parent and taking on adult responsibilities, I still
                    manage to carve out moments to get lost in this beloved hobby. My interests and priorities have shifted over time, but gaming continues to provide me with a much-needed
                    escape.
                </p>
                <p class="text-slate-400 leading-relaxed mb-8 text-base">
                    The pivotal moment when I laid my hands on my brother's <a href="https://www.youtube.com/watch?v=6xjJ2XIbGRk" title="YouTube">Metallica "Master of Puppets"</a>
                    cassette tape forever changed my musical journey (probably known to most now as that song from Stranger Things.)
                    Since that day, I've remained a devoted fan of heavy metal and hard rock music. While I also appreciate and enjoy a diverse range of genres, there's something about heavy
                    metal that evokes a special kind of passion and connection, you know by how your favorite music affects your own soul.
                </p>
                <p class="text-slate-400 leading-relaxed mb-1 text-base">
                    In addition to my passion for software engineering, I have a keen interest in varying concepts like big
                    data, gamification, and the intriguing world of logistics. On a lighter note, my interests also include cheering for American football teams like the Green
                    Bay Packers and the Buffalo Bills and, recently, English football teams like Liverpool, unraveling the tapestry of history, diving into
                    documentaries, comedy movies, and contemplating the wonders of the space.
                </p>
            </div>
        </div>
    </section>
</template>