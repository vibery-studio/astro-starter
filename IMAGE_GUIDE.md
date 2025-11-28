# Image Guide - Cà Phê Phin Coffee Shop

Guide for images used in the coffee shop website + prompts for generating custom images.

---

## 📸 Current Unsplash Images (Free to Use)

### Hero Banner
- **URL**: `https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=1920&q=80`
- **Description**: Vietnamese coffee with phin filter close-up
- **Photographer**: Quang Nguyen Vinh
- **Source**: [Unsplash](https://unsplash.com/photos/vietnamese-coffee-phin-filter-cDfG3xfUCZ8)
- **Size**: 1920x1080 (hero banner)

### Story Section
- **URL**: `https://images.unsplash.com/photo-1497935586351-b67a49e012bf?w=800&q=80`
- **Description**: Traditional Vietnamese phin coffee brewing process
- **Photographer**: Nathan Dumlao
- **Source**: [Unsplash](https://unsplash.com/photos/coffee-cup-on-table-5Hl5reICevY)
- **Size**: 800x600 (side image)

### Gallery - Image 1 (Coffee Cup)
- **URL**: `https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=600&q=80`
- **Description**: Coffee cup close-up with warm lighting
- **Photographer**: Daiga Ellaby
- **Source**: [Unsplash](https://unsplash.com/photos/white-ceramic-mug-filled-with-brown-liquid-N6HTCyN2aJ4)
- **Size**: 600x400 (gallery grid)

### Gallery - Image 2 (Interior)
- **URL**: `https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=600&q=80`
- **Description**: Cozy coffee shop interior
- **Photographer**: Yutaka Suzuki
- **Source**: [Unsplash](https://unsplash.com/photos/brown-wooden-table-with-chairs-GkScIvUd5ec)
- **Size**: 600x400 (gallery grid)

### Gallery - Image 3 (Phin Filter)
- **URL**: `https://images.unsplash.com/photo-1511920170033-f8396924c348?w=600&q=80`
- **Description**: Traditional phin filter equipment
- **Photographer**: Nathan Dumlao
- **Source**: [Unsplash](https://unsplash.com/photos/silver-spoon-on-black-ceramic-bowl-71u2fOofI-U)
- **Size**: 600x400 (gallery grid)

### Gallery - Image 4 (Ambiance)
- **URL**: `https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&q=80`
- **Description**: Morning coffee ambiance
- **Photographer**: Crew
- **Source**: [Unsplash](https://unsplash.com/photos/white-ceramic-teacup-on-saucer-on-table-pURXH8mz5x4)
- **Size**: 600x400 (gallery grid)

---

## 🎨 AI Image Generation Prompts

Use these prompts with Midjourney, DALL-E, Stable Diffusion, or Imagen to generate custom Vietnamese coffee shop images:

### Hero Banner (1920x1080)
```
A cinematic close-up of Vietnamese phin coffee filter dripping dark coffee into a glass cup filled with condensed milk, warm morning sunlight streaming through, wooden table, traditional Vietnamese café atmosphere, shallow depth of field, professional food photography, warm brown tones, photorealistic, 8k resolution
```

**Alternative:**
```
Overhead view of traditional Vietnamese coffee setup, phin filter on ceramic cup, condensed milk bottle, wooden spoon, rustic café table, natural lighting, warm earthy tones, artisanal aesthetic, high-end food photography style
```

### Story Section (800x600)
```
Hands pouring hot water into Vietnamese phin coffee filter, traditional brewing process, wooden café table, ceramic cup below, warm natural light, cultural authenticity, documentary style photography, shallow focus on phin filter, brown and cream color palette
```

### Gallery Images (600x400 each)

**Coffee Cup Close-up:**
```
A beautifully crafted cà phê sữa đá (Vietnamese iced coffee with condensed milk) in a tall glass, layered brown and white, ice cubes, condensed water droplets on glass, wooden table, soft afternoon light, warm color grading, food photography
```

**Interior Ambiance:**
```
Cozy Vietnamese coffee shop interior, wooden furniture, hanging plants, warm edison bulb lighting, customers chatting, traditional décor elements, inviting atmosphere, wide angle shot, natural warm tones, lifestyle photography
```

**Phin Filter Detail:**
```
Traditional Vietnamese phin coffee filter (stainless steel), disassembled to show all parts (chamber, filter plate, gravity press, lid), clean white background or wooden surface, product photography style, soft shadows, detailed macro shot
```

**Morning Ambiance:**
```
Vietnamese café at sunrise, warm golden hour light streaming through windows, steam rising from fresh coffee, customer silhouette, peaceful morning vibe, cinematic composition, warm orange and brown tones, atmospheric photography
```

---

## 📝 Image Specifications

### File Requirements
- **Format**: JPG or WebP (for performance)
- **Quality**: 80% compression (good balance)
- **Optimization**: Use services like TinyPNG before uploading

### Recommended Sizes
- **Hero Banner**: 1920x1080px (16:9 ratio)
- **Story Section**: 800x600px (4:3 ratio)
- **Gallery Images**: 600x400px (3:2 ratio)
- **Mobile**: Responsive scaling handled by CSS

### Color Guidelines
- **Warm tones**: Browns (#4A3428, #6B4E3D, #A0714D)
- **Cream accents**: Beige (#E6D5C3, #D4C1AC)
- **Avoid**: Cool blues, harsh whites, neon colors
- **Lighting**: Natural, warm, golden hour preferred

---

## 🔄 How to Replace Images

### Using Unsplash (Free)
1. Visit [unsplash.com](https://unsplash.com)
2. Search: "vietnamese coffee", "coffee shop", "phin filter"
3. Download image → Get URL
4. Replace in `src/pages/index.astro`:
   ```html
   <img src="NEW_UNSPLASH_URL?w=800&q=80" alt="Description" />
   ```

### Using AI Generated Images
1. Generate image with prompts above
2. Save to `/public/images/`
3. Update image src:
   ```html
   <img src="/images/your-image.jpg" alt="Description" />
   ```

### Using Your Own Photos
1. Take photos of your actual coffee shop
2. Resize to recommended dimensions
3. Compress with TinyPNG
4. Upload to `/public/images/`
5. Update image paths in HTML

---

## 🌐 Additional Free Stock Photo Sources

- **Unsplash**: https://unsplash.com/s/photos/vietnamese-coffee
- **Pexels**: https://www.pexels.com/search/vietnamese%20coffee/
- **Pixabay**: https://pixabay.com/images/search/coffee%20shop/

---

## ⚠️ Attribution (If Required)

Unsplash images are free for commercial use with no attribution required, but it's good practice to credit photographers:

```html
<!-- Add to footer or credits page -->
Photos by:
- Quang Nguyen Vinh (Hero)
- Nathan Dumlao (Story, Phin)
- Daiga Ellaby (Coffee Cup)
- Yutaka Suzuki (Interior)
- Crew (Ambiance)

All photos from Unsplash.com
```

---

**Need help with images?** Contact photographers on Unsplash or generate custom images with AI tools using the prompts provided above.
