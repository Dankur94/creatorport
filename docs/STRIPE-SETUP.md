# Stripe Payment Setup for CreatorPort HK

## Overview

CreatorPort uses **Stripe Payment Links** for accepting payments.
This works with the static GitHub Pages site — no backend needed.

Payment methods available automatically:
- **Apple Pay** (iPhone users — primary target)
- **Google Pay**
- **Credit/Debit Cards** (Visa, Mastercard, AMEX)
- **AlipayHK** (can be enabled in Stripe Dashboard)

---

## Step 1: Create Stripe Account

1. Go to [https://dashboard.stripe.com/register](https://dashboard.stripe.com/register)
2. Register with your business email (hello@creatorport.com.hk)
3. Complete business verification:
   - Business name: **Space of Possibilities Limited**
   - Country: **Hong Kong**
   - Company Reg: **79049548**
4. Add your bank account for payouts (HSBC)

---

## Step 2: Create Products

In Stripe Dashboard → **Products** → **Add product**:

### Product 1: Make Mars Green Summer Camp
- Name: `Make Mars Green — Summer Camp`
- Description: `5 days × 3 hours AI & Robotics camp for ages 6-14. All materials included.`
- Price: **HKD 3,000** (one-time)

### Product 2: Think. Learn. Present.
- Name: `Think. Learn. Present.`
- Description: `8 sessions × 60 min online learning module for ages 14+.`
- Price: **HKD 3,600** (one-time)

---

## Step 3: Create Payment Links

In Stripe Dashboard → **Payment Links** → **New**:

For each product:
1. Select the product created above
2. **After payment** → Redirect to: `https://creatorport.com.hk/success`
3. **Custom fields** → Add these fields:
   - `Child's Name` (required, text)
   - `Child's Age` (required, text)
   - `Preferred Language` (required, dropdown: English / Deutsch)
4. **Collect email** → Yes (for receipts)
5. **Collect phone** → Yes (for WhatsApp follow-up)
6. Click **Create link**

---

## Step 4: Enable Apple Pay

1. Go to **Settings** → **Payment methods**
2. Enable **Apple Pay** (should be on by default)
3. Enable **Google Pay**
4. Optionally enable **AlipayHK** (good for local HK customers)

### Apple Pay Domain Verification
1. Go to **Settings** → **Apple Pay** → **Add new domain**
2. Enter: `creatorport.com.hk`
3. Download the verification file
4. Place it at: `public/.well-known/apple-developer-merchantid-domain-association`
5. Deploy the site
6. Click **Verify** in Stripe

---

## Step 5: Update the Code

Replace the placeholder URLs in `src/pages/checkout.astro`:

```javascript
const STRIPE_LINKS = {
  camp: 'https://buy.stripe.com/YOUR_CAMP_LINK_HERE',
  tlp:  'https://buy.stripe.com/YOUR_TLP_LINK_HERE',
};
```

Get the URLs from:
Stripe Dashboard → Payment Links → Click on link → Copy URL

---

## Step 6: Test

1. Use Stripe **test mode** first (toggle in top-right of dashboard)
2. Create test Payment Links with test products
3. Use test card: `4242 4242 4242 4242` (any future date, any CVC)
4. Verify the success page redirect works
5. Switch to **live mode** when ready

---

## Fees

Stripe HK fees (as of 2026):
- Cards: **3.4% + HK$2.35** per transaction
- Apple Pay: same as cards
- AlipayHK: **2.5%** per transaction

For a $3,000 HKD camp booking:
- Card fee: ~$104 HKD (~3.5%)
- You receive: ~$2,896 HKD

---

## Payouts

- Stripe pays out to your HSBC account
- Default: 7 business days after payment
- Can be changed to 2 days once account is established

---

## Support

- Stripe HK Support: [https://support.stripe.com](https://support.stripe.com)
- Dashboard: [https://dashboard.stripe.com](https://dashboard.stripe.com)
