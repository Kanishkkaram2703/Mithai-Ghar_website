# Sweets Images Directory

Place your downloaded sweet photos in this directory (`/public/images/sweets/`). The application will automatically detect and display them in the Sweets Catalog, Home Page, Favorites, and Recipe Detail pages.

## Required Filenames (1 per Sweet)

| # | Sweet Name (Hinglish) | File Name to Save As | Region |
|---|---|---|---|
| 1 | **Besan Ladoo** | `besan-ladoo.jpg` | North |
| 2 | **Motichoor Ladoo** | `motichoor-ladoo.jpg` | North |
| 3 | **Kaju Katli** | `kaju-katli.jpg` | North |
| 4 | **Gulab Jamun** | `gulab-jamun.jpg` | North |
| 5 | **Rasgulla** | `rasgulla.jpg` | East |
| 6 | **Jalebi** | `jalebi.jpg` | North |
| 7 | **Soan Papdi** | `soan-papdi.jpg` | North |
| 8 | **Mysore Pak** | `mysore-pak.jpg` | South |
| 9 | **Coconut Barfi** | `coconut-barfi.jpg` | West |
| 10 | **Kalakand** | `kalakand.jpg` | North |
| 11 | **Shankarpali** | `shankarpali.jpg` | West |
| 12 | **Balushahi** | `balushahi.jpg` | North |
| 13 | **Rava Ladoo** | `rava-ladoo.jpg` | South |
| 14 | **Sandesh** | `sandesh.jpg` | East |

---

## Supported Formats & Tips

- **Formats:** `.jpg`, `.jpeg`, `.png`, or `.webp`. (If you use `.png` or `.webp`, update the file extension in `src/data/sweets.ts`).
- **Recommended Aspect Ratio:** `4:3` or `16:9` landscape orientation.
- **Recommended Resolution:** Around `800x600` or `1200x800` pixels.
- **Fallback Behavior:** If an image is missing or cannot be loaded, the app automatically falls back to the artisanal gradient rangoli watermark block with the sweet's name. There are no broken image icons.
