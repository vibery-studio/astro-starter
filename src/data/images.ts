/**
 * Image configuration for the website
 * Vietnamese alt text and image metadata
 *
 * To replace placeholders with real images:
 * 1. Add images to src/assets/images/
 * 2. Update the import paths below
 *
 * For Unsplash/Pexels integration:
 * - Use direct URLs (hotlinking allowed by Unsplash)
 * - Or download images locally for full control
 */

// Blog post hero images - using existing placeholders
import blogPlaceholder1 from '../assets/blog-placeholder-1.jpg';
import blogPlaceholder2 from '../assets/blog-placeholder-2.jpg';
import blogPlaceholder3 from '../assets/blog-placeholder-3.jpg';
import blogPlaceholder4 from '../assets/blog-placeholder-4.jpg';
import blogPlaceholder5 from '../assets/blog-placeholder-5.jpg';
import blogPlaceholderAbout from '../assets/blog-placeholder-about.jpg';

// Image metadata with Vietnamese alt text
export const images = {
	// Hero section images
	hero: {
		home: {
			src: blogPlaceholder1,
			alt: 'Không gian làm việc công nghệ hiện đại',
			credit: 'Unsplash'
		}
	},

	// Service card images
	services: {
		ai: {
			src: blogPlaceholder2,
			alt: 'Phát triển sản phẩm với trí tuệ nhân tạo',
			credit: 'Unsplash'
		},
		consulting: {
			src: blogPlaceholder3,
			alt: 'Tư vấn công nghệ và quy trình phát triển',
			credit: 'Unsplash'
		},
		prototype: {
			src: blogPlaceholder4,
			alt: 'Thiết kế và phát triển prototype nhanh',
			credit: 'Unsplash'
		}
	},

	// About page images
	about: {
		team: {
			src: blogPlaceholderAbout,
			alt: 'Đội ngũ Vibe Coding Product Studio',
			credit: 'Unsplash'
		},
		office: {
			src: blogPlaceholder1,
			alt: 'Văn phòng làm việc sáng tạo',
			credit: 'Unsplash'
		}
	},

	// Blog post hero images
	blog: {
		'vibe-coding-la-gi': {
			src: blogPlaceholder1,
			alt: 'Lập trình viên làm việc với vibe coding',
			credit: 'Unsplash'
		},
		'cong-cu-vibe-coding': {
			src: blogPlaceholder2,
			alt: 'Các công cụ vibe coding phổ biến',
			credit: 'Unsplash'
		},
		'thuc-hanh-vibe-coding': {
			src: blogPlaceholder3,
			alt: 'Thực hành vibe coding hiệu quả',
			credit: 'Unsplash'
		},
		'du-an-thanh-cong': {
			src: blogPlaceholder4,
			alt: 'Dự án thành công với vibe coding',
			credit: 'Unsplash'
		},
		'tuong-lai-vietnam': {
			src: blogPlaceholder5,
			alt: 'Tương lai công nghệ Việt Nam',
			credit: 'Unsplash'
		}
	}
} as const;

// Helper to get image by key
export function getImage(category: keyof typeof images, key: string) {
	const categoryImages = images[category] as Record<string, typeof images.hero.home>;
	return categoryImages[key] || null;
}

// Unsplash URLs for future use (when ready to integrate)
// These are example curated URLs - replace with your own selections
export const unsplashUrls = {
	// Tech/workspace images
	'tech-workspace': 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200',
	'coding-laptop': 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200',
	'team-meeting': 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200',
	'ai-concept': 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200',
	'vietnam-city': 'https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=1200',
} as const;
