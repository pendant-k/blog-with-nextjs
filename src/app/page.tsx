import Container from "@/app/_components/container";
import { HeroPost } from "@/app/_components/hero-post";
import { Intro } from "@/app/_components/intro";
import { MoreStories } from "@/app/_components/more-stories";
import { getAllPosts } from "@/lib/api";

export default function Index() {
    const allPosts = getAllPosts();

    const heroPost = allPosts[0];

    const morePosts = allPosts.slice(1);

    return (
        <main>
            <Container>
                <Intro />
                <div className="flex flex-col items-center gap-8 mb-32">
                    <div className="flex flex-wrap gap-2 w-full items-center justify-center">
                        <img src="https://img.shields.io/badge/C-A8B9CC?style=flat-square&logo=C&logoColor=FFFFFF" />
                        <img src="https://img.shields.io/badge/Python-3776AB?style=flat-square&logo=Python&logoColor=FFFFFF" />
                        <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=JavaScript&logoColor=000000" />
                        <img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=TypeScript&logoColor=FFFFFF" />
                        <img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=000000" />
                        <img src="https://img.shields.io/badge/Flutter-02569B?style=flat-square&logo=Flutter&logoColor=FFFFFF" />
                        <img src="https://img.shields.io/badge/Kotlin-7F52FF?style=flat-square&logo=Kotlin&logoColor=FFFFFF" />
                        <img src="https://img.shields.io/badge/Android-3DDC84?style=flat-square&logo=Android&logoColor=FFFFFF" />
                        <img src="https://img.shields.io/badge/Swift-fE4F2E?style=flat-square&logo=Swift&logoColor=FFFFFF" />
                        <img src="https://img.shields.io/badge/Firebase-FFCC35?style=flat-square&logo=Firebase&logoColor=000000" />
                    </div>

                    <div className="flex flex-col items-center gap-2">
                        <h2 className="text-2xl font-bold">📌 Overview 📌</h2>
                        <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=pendant-k&layout=compact&theme=tokyonight" />
                    </div>

                    <div className="flex flex-col items-center gap-2">
                        <h2 className="text-2xl font-bold">
                            Problem Solving 💻
                        </h2>
                        <a href="https://solved.ac/pendant0706/">
                            <img src="http://mazassumnida.wtf/api/v2/generate_badge?boj=pendant0706" />
                        </a>
                    </div>
                </div>
                <HeroPost
                    title={heroPost.title}
                    coverImage={heroPost.coverImage}
                    date={heroPost.date}
                    author={heroPost.author}
                    slug={heroPost.slug}
                    excerpt={heroPost.excerpt}
                />
                {morePosts.length > 0 && <MoreStories posts={morePosts} />}
            </Container>
        </main>
    );
}
