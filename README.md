# LIV2ROB E-Commerce Store

Premium hip hop inspired streetwear store built with Next.js 14.

## Features

✅ Product catalog with filtering
✅ Shopping cart management
✅ Stripe & PayPal payment integration
✅ Responsive design (mobile-friendly)
✅ Hip hop aesthetic with gold/red/black theme
✅ Admin-ready product management

## Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/uncoolstoner15-crypto/liv2rob-store.git
cd liv2rob-store
```

### 2. Install dependencies
```bash
npm install
```

### 3. Set up environment variables
```bash
cp .env.local.example .env.local
```

Add your Stripe and PayPal keys:
```
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
STRIPE_SECRET_KEY=sk_test_...
NEXT_PUBLIC_PAYPAL_CLIENT_ID=...
PAYPAL_SECRET=...
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

### 4. Run development server
```bash
npm run dev
```

Visit `http://localhost:3000`

## Project Structure

```
src/
├── app/                 # Next.js pages & layouts
├── components/          # Reusable components
├── store/              # Zustand state management
├── data/               # Product data
└── app/api/            # API routes (Stripe, PayPal)
```

## Payment Integration

### Stripe Setup
1. Create account at [stripe.com](https://stripe.com)
2. Get test keys from Dashboard
3. Add to `.env.local`

### PayPal Setup
1. Create account at [developer.paypal.com](https://developer.paypal.com)
2. Create app to get Client ID & Secret
3. Add to `.env.local`

## Deployment

### Vercel (Recommended)
```bash
npm i -g vercel
vercel
```

### Netlify
Connect your GitHub repo to Netlify

## Customization

- **Colors**: Edit `tailwind.config.js`
- **Products**: Edit `src/data/products.ts`
- **Branding**: Update logo and images in `public/`

## Support

For issues or questions, open a GitHub issue.

## License

MIT License - feel free to use this project!
