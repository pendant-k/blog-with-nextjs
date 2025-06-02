import { getAllPosts } from "@/lib/api";
import { PostPreview } from "@/app/_components/post-preview";
import Container from "../_components/container";

export default function Posts() {
    // TODO: 포스트 데이터 페이지네이션 추가
    const posts = getAllPosts();

    return (
        <main>
            <Container>
                <h1 className="text-5xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8 mb-8 border-b">
                    Posts
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32">
                    {posts.map((post) => (
                        <PostPreview
                            key={post.slug}
                            title={post.title}
                            coverImage={post.coverImage}
                            date={post.date}
                            author={post.author}
                            slug={post.slug}
                            excerpt={post.excerpt}
                        />
                    ))}
                </div>
            </Container>
        </main>
    );
}
