'use client'
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Container from "@/app/_component/shared";
import { articles } from "@/app/constant";
import { recentPosts } from "@/app/constant";
import { featuredPost } from "@/app/constant";
import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";

// Slugify function to match the one in the blog listing page
function slugify(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

// Function to find article by slug
function findArticleBySlug(slug: string) {
  return articles.find(article => slugify(article.title) === slug);
}
function findRecentPostBySlug(slug: string) {
  return recentPosts.find(recentPost => slugify(recentPost.title) === slug);
}

function findFeaturedBySlug(slug: string) {
  if (Array.isArray(featuredPost)) {
    const arr = featuredPost as unknown as Array<{ title?: string; slug?: string }>;
    return arr.find((f) => slugify((f.title ?? f.slug) as string) === slug);
  }
  // featuredPost may be an object in older code
  const single = featuredPost as unknown as { title?: string; slug?: string };
  if (single && slugify((single.title ?? single.slug) as string) === slug) {
    return single;
  }
  return undefined;
}

export default function BlogPostPage() {
  const params = useParams<{ slug: string }>();
  const router = useRouter();
  const slug = params?.slug as string;
  const article = findArticleBySlug(slug);
  const recentPost = findRecentPostBySlug(slug);
  const featuredFound = findFeaturedBySlug(slug);

  // Determine which post to use (articles, recentPosts, or featured)
  const post = (article || recentPost || featuredFound) as {
    title?: string;
    description?: string;
    content?: string;
    imgSrc?: string | StaticImageData;
    id?: string | number;
    author?: string;
    date?: string;
  };

  // If neither article nor recentPost found, redirect
  useEffect(() => {
    if (!post) {
      router.replace("/whoweare/blog");
    }
  }, [post, router]);

  if (!post) {
    return null;
  }

  // Get related articles (exclude current article if it's an article)
  const relatedArticles = article ? articles
    .filter(a => a.id !== article.id)
    .slice(0, 3) : [];

  // Use appropriate image source
    const defaultImage = "/images/default-hero.jpg";
    const recentImage = (recentPost as unknown as { image?: string | StaticImageData } | undefined)?.image;
    const featuredImage = (featuredFound as unknown as { Image?: string | StaticImageData } | undefined)?.Image;
    const imageSrc: string | StaticImageData = article?.imgSrc ?? recentImage ?? featuredImage ?? defaultImage;

  return (
    <main className="bg-[#F4F4F4] py-10">
      <Container>
        <Link href="/whoweare/blog" className="text-[#FFB400] hover:underline font-medium mb-6 inline-block">
          ← Back to Blog
        </Link>

        <motion.article
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}

        >
          {/* Hero Section with Flexed Image and Title */}
          <div className="flex flex-col lg:flex-row gap-8 mb-8">
            <div className="relative w-full lg:w-2/5 h-[300px] lg:h-[400px] rounded-xl overflow-hidden">
              <Image
                src={imageSrc}
                alt={post.title ?? "Article image"}
                fill
                className="object-cover"
                style={{ transform: 'scale(0.9)' }}
                priority
              />
            </div>
            <div className="flex-1 flex flex-col justify-center">
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                {post.title}
              </h1>
              <p className="text-xl text-gray-700 leading-relaxed font-medium">
                {post.description}
              </p>
            </div>
          </div>

          {/* Article Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="prose prose-lg max-w-none mb-12"
          >
            {/* Main Content */}
            <div
              className="text-gray-800 leading-relaxed space-y-6"
              dangerouslySetInnerHTML={{ __html: post.content ?? "" }}
            />
          </motion.div>
          {/* Main Content */}

          {/* Highlight Quote */}
          <div className="bg-[#FFE8A3] text-[#232323] rounded-lg p-8 mb-12 relative">
            <div className="absolute -top-4 left-6 text-[#FFB400] text-5xl">
              &ldquo;
            </div>
            <p className="text-center italic max-w-3xl mx-auto">
              {post.description}
            </p>
          </div>

          {/* Visual Grid Placeholder */}
          {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
            <div className="h-40 bg-gray-200 rounded" />
            <div className="h-40 bg-gray-200 rounded" />
            <div className="h-40 bg-gray-200 rounded" />
          </div> */}

          {/* Tags */}
          <div className="flex flex-wrap items-center gap-2 mb-6">
            {["Back to School", "Children", "Outreach"].map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-[#FFE8A3] text-[#232323] rounded-full text-sm"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Share Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="border-t border-b border-gray-200 py-6 mb-12"
          >
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-900">
              Share this post
              </h3>

              <div className="flex items-center space-x-4 text-gray-700">
              {/* Native Web Share (mobile / supported browsers) */}
              <button
                onClick={async () => {
                const url = typeof window !== "undefined" ? window.location.href : "";
                try {
                  // Use a typed navigator with optional share to avoid 'any'
                  const nav = navigator as Navigator & { share?: (data: ShareData) => Promise<void> };
                  if (typeof nav.share === "function") {
                    await nav.share({
                      title: post.title ?? "Article",
                      text: post.description ?? "",
                      url,
                    });
                    return;
                  }
                  // Fallback to copying link if Web Share not available
                  await navigator.clipboard.writeText(url);
                  alert("Link copied to clipboard");
                } catch (err) {
                  console.error(err);
                  // fallback
                  try {
                    await navigator.clipboard.writeText(url);
                    alert("Link copied to clipboard");
                  } catch {
                    alert("Unable to share. Please copy the link manually.");
                  }
                }
                }}
                aria-label="Share"
                title="Share"
                className="hover:text-black transition-colors"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18 8a3 3 0 10-2.83-4H10a2 2 0 00-2 2v10a2 2 0 002 2h5.17A3 3 0 1018 8z" />
                </svg>
              </button>

              {/* Twitter */}
              <button
                onClick={() => {
                const url = typeof window !== "undefined" ? window.location.href : "";
                const text = post.title ?? "";
                const shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`;
                window.open(shareUrl, "_blank", "noopener,noreferrer");
                }}
                aria-label="Share on Twitter"
                title="Share on Twitter"
                className="hover:text-black transition-colors"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </button>

              {/* Facebook */}
              <button
                onClick={() => {
                const url = typeof window !== "undefined" ? window.location.href : "";
                const shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
                window.open(shareUrl, "_blank", "noopener,noreferrer");
                }}
                aria-label="Share on Facebook"
                title="Share on Facebook"
                className="hover:text-black transition-colors"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </button>

              {/* LinkedIn */}
              <button
                onClick={() => {
                const url = typeof window !== "undefined" ? window.location.href : "";
                const shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
                window.open(shareUrl, "_blank", "noopener,noreferrer");
                }}
                aria-label="Share on LinkedIn"
                title="Share on LinkedIn"
                className="hover:text-black transition-colors"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </button>

              {/* Copy link */}
              <button
                onClick={async () => {
                const url = typeof window !== "undefined" ? window.location.href : "";
                try {
                  await navigator.clipboard.writeText(url);
                  alert("Link copied to clipboard");
                } catch {
                  prompt("Copy this link", url);
                }
                }}
                aria-label="Copy link"
                title="Copy link"
                className="hover:text-black transition-colors"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M10.59 13.41a1 1 0 011.42 0L15 16.41V13a1 1 0 112 0v6a1 1 0 01-1 1h-6a1 1 0 110-2h3.59l-2.99-2.99a1 1 0 010-1.42zM20 8h-3V6a5 5 0 00-5-5H8a5 5 0 00-5 5v6a5 5 0 005 5h2v2H8a7 7 0 01-7-7V6a7 7 0 017-7h4a7 7 0 017 7v2h1a1 1 0 010 2z" />
                </svg>
              </button>
              </div>
            </div>
          </motion.div>
        </motion.article>

        {/* Related Articles */}
        {relatedArticles.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-16"
          >
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
                Related Articles
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {relatedArticles.map((relatedArticle) => (
                  <motion.div
                    key={relatedArticle.id}
                    className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Link
                      href={`/whoweare/blog/${slugify(relatedArticle.title)}`}
                    >
                      <div className="relative h-48">
                        <Image
                          src={relatedArticle.imgSrc}
                          alt={relatedArticle.title}
                          fill
                          className="object-cover hover:opacity-90 transition-opacity duration-300"
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2 hover:text-[#FFB400] transition-colors duration-300">
                          {relatedArticle.title}
                        </h3>
                        <p className="text-sm text-gray-600 mb-3">
                          {relatedArticle.author && relatedArticle.date ? `${relatedArticle.author} • ${relatedArticle.date}` : 'The Destiny Trust'}
                        </p>
                        <p className="text-gray-700 text-sm line-clamp-3">
                          {relatedArticle.description}
                        </p>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.section>
        )}

        {/* Back to Blog */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="mt-12 text-center"
        >
          <Link
            href="/whoweare/blog"
            className="inline-flex items-center px-6 py-3 bg-[#FFB400] text-black font-medium rounded-lg hover:bg-[#e6a200] transition-colors duration-300"
          >
            <svg
              className="w-4 h-4 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Back to Blog
          </Link>
        </motion.div>
      </Container>
    </main>
  );
};
