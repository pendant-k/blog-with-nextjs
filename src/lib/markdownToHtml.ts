import { remark } from "remark";
import html from "remark-html";

// markdown을 html로 변환, remark-html 활용
export default async function markdownToHtml(markdown: string) {
    const result = await remark().use(html).process(markdown);
    return result.toString();
}
