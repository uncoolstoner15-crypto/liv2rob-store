# 🚀 LIV2ROB Store - Complete Setup Guide

Follow this guide to get your store live in 15 minutes!

---

## **Part 1: Get Stripe Keys (5 minutes)**

### Step 1: Open Stripe
Go to: **https://stripe.com**

### Step 2: Click "Sign Up"
- Enter your email
- Create a password
- Confirm your email

### Step 3: Fill in Info
- Business name: `LIV2ROB`
- Country: Select yours
- Click Continue

### Step 4: Get Your Keys
1. In the Dashboard, click **Developers** (left sidebar, bottom)
2. Click **API Keys**
3. You'll see:
   - **Publishable Key** (starts with `pk_test_`)
   - **Secret Key** (starts with `sk_test_`)

### Step 5: Save Your Keys
**Copy and paste into a notepad:**
```
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_YOUR_KEY_HERE
STRIPE_SECRET_KEY=sk_test_YOUR_KEY_HERE
```

✅ **Stripe Done!**

---

## **Part 2: Get PayPal Keys (5 minutes)**

### Step 1: Open PayPal Developer
Go to: **https://developer.paypal.com/**

### Step 2: Click "Sign Up"
- Enter your email
- Create a password
- Select your country
- Click Sign Up

### Step 3: Confirm Email
- Check your email inbox
- Click the confirmation link
- Done!

### Step 4: Log In
- Go back to https://developer.paypal.com/
- Click Log In
- Enter your credentials

### Step 5: Go to Dashboard
- Click **Dashboard** (top left)

### Step 6: Get Your Keys
1. Click **Apps & Credentials** (left sidebar)
2. Make sure **Sandbox** tab is selected (not Production!)
3. Look for **Default Application**
4. Copy:
   - **Client ID**
   - **Secret** (click Show to reveal)

### Step 7: Save Your Keys
**Copy and paste into your notepad:**
```
NEXT_PUBLIC_PAYPAL_CLIENT_ID=YOUR_CLIENT_ID_HERE
PAYPAL_SECRET=YOUR_SECRET_HERE
```

✅ **PayPal Done!**

---

## **Part 3: Deploy to Vercel (5 minutes)**

### Step 1: Go to Vercel
Go to: **https://vercel.com**

### Step 2: Sign Up / Log In
- Click Sign Up (or Log In if you have account)
- You can sign up with GitHub (easiest!)

### Step 3: Import Your Repo
1. Click **New Project**
2. Click **Import Git Repository**
3. Paste: `https://github.com/uncoolstoner15-crypto/liv2rob-store`
4. Click **Import**

### Step 4: Configure Project
1. Make sure **Next.js** is selected as framework
2. Scroll down to **Environment Variables**
3. Add these 4 variables (from your notepad):
   ```
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY = pk_test_...
   STRIPE_SECRET_KEY = sk_test_...
   NEXT_PUBLIC_PAYPAL_CLIENT_ID = ...
   PAYPAL_SECRET = ...
   ```
4. Click **Deploy**

### Step 5: Wait & Go Live
- Vercel will deploy your site (2-3 minutes)
- You'll get a URL like: `https://liv2rob-store.vercel.app`
- **Your site is LIVE!** 🎉

---

## **🎉 You're Done!**

Your LIV2ROB store is now live with:
- ✅ Full product catalog
- ✅ Shopping cart
- ✅ Stripe payments
- ✅ PayPal payments
- ✅ Professional design

---

## **Next Steps**

1. **Test your store** - add products to cart, test checkout
2. **Customize products** - edit `src/data/products.ts` to add your real products
3. **Update branding** - change colors, add your logo
4. **Go production** - upgrade Stripe/PayPal from test mode

---

## **Troubleshooting**

**Site not working?**
- Check environment variables in Vercel
- Make sure keys are correct (copy/paste carefully)
- Restart the deployment

**Payments not working?**
- Make sure you're using TEST keys (pk_test_, sk_test_)
- Verify all 4 environment variables are added
- Check Vercel logs for errors

---

## **Need Help?**

- Stripe support: https://support.stripe.com
- PayPal support: https://developer.paypal.com/docs/
- Vercel support: https://vercel.com/help

**You've got this! 💪**
