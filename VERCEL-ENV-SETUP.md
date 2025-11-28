# Vercel Environment Variables Setup

## ⚠️ Fix the Deployment Error

The error you're seeing is because `vercel.json` was trying to reference secrets that don't exist. I've fixed the `vercel.json` file - now you need to set environment variables directly in Vercel.

## ✅ Step-by-Step: Set Environment Variables in Vercel

### 1. Go to Vercel Dashboard
- Navigate to your project: **tinytummy**
- Click on **Settings** (top navigation)

### 2. Add Environment Variables
- Click **Environment Variables** in the left sidebar
- Click **"Add New"** button

### 3. Add STRIPE_SECRET_KEY
- **Name:** `STRIPE_SECRET_KEY`
- **Value:** `sk_live_YOUR_SECRET_KEY` (paste your actual secret key)
- **Environment:** Select **Production** (and **Preview** if you want)
- Click **"Save"**

### 4. Add STRIPE_WEBHOOK_SECRET (Optional - for webhooks)
- Click **"Add New"** again
- **Name:** `STRIPE_WEBHOOK_SECRET`
- **Value:** `whsec_YOUR_WEBHOOK_SECRET` (from Stripe webhook setup)
- **Environment:** Select **Production**
- Click **"Save"**

### 5. Redeploy
After adding environment variables:
- Go to **Deployments** tab
- Click the **"..."** menu on the latest deployment
- Click **"Redeploy"**
- OR just push a new commit to trigger auto-deploy

## ✅ That's It!

Once you add the environment variables and redeploy, the error will be gone and Stripe checkout will work!

## 🔍 How to Verify

1. Check deployment logs - should show no errors
2. Test checkout on your site
3. Check Vercel function logs for `api/create-checkout-session`

## 📝 Note

The `vercel.json` file no longer references secrets - environment variables are set directly in the Vercel dashboard, which is the correct way to do it.

