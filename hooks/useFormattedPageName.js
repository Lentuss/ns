import { useRouter } from 'next/router';

export const useFormattedPageName = () => {
    const { pathname } = useRouter();

    let page = pathname !== '/' ? pathname.slice(1) : 'home';
    if (page.includes('-')) {
        const words = page.split('-');
        const wordFormated = words
            .slice(1)
            .map((word) => word.replace(word[0], word[0].toUpperCase()));
        page = [words[0], ...wordFormated].join('');
    }
    return page
}
