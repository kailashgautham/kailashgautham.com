import Head from 'next/head';
import styles from './layout.module.css';

export const siteTitle = 'Kailash Gautham';

export default function Layout({ children, home }) {
    return (
        <div>
            <Head>
                <title>{siteTitle}</title>
                <link rel="icon" href="/favicon.ico" />
                <meta
                    property="og:image"
                    content={`https://og-image.vercel.app/${encodeURI(
                        siteTitle,
                    )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
                />
                <meta name="og:title" content={siteTitle} />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="description" content="Portfolio of Kailash Gautham – software engineer, developer, and tech enthusiast." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />

            </Head>
            <header className={styles.header}>
            </header>
            <main>{children}</main>
        </div>
    );
}