import Container from "@/app/_components/container";
import { EXAMPLE_PATH } from "@/lib/constants";

export function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="bg-neutral-50 border-t border-neutral-200 dark:bg-slate-800">
            <Container>
                <div className="flex flex-col items-center p-8">
                    <p className="text-sm text-gray-500">
                        &copy; {currentYear} pendant-k All rights reserved.
                    </p>
                </div>
            </Container>
        </footer>
    );
}

export default Footer;
