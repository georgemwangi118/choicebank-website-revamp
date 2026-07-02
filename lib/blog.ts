export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  coverImage: string;
  author: {
    name: string;
    role: string;
  };
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'how-logbook-loans-work-kenya',
    title: 'How Logbook Loans Work in Kenya: A Complete Guide',
    excerpt: 'If you own a vehicle, you may be sitting on a financial asset you haven\'t fully utilized. Logbook loans let you unlock cash using your car as collateral — while keeping the keys.',
    category: 'Loans',
    date: 'June 20, 2025',
    readTime: '5 min read',
    coverImage: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=1200&q=80&fit=crop',
    author: { name: 'Choice Bank Team', role: 'Financial Education' },
    content: `
A logbook loan is a type of secured loan where your vehicle registration certificate (logbook) is used as collateral. You retain full use of your vehicle throughout the loan period — you simply hand over the logbook document, not the car itself.

## How much can you borrow?

At Choice Microfinance Bank, you can borrow up to **60% of your vehicle's forced sale value**, with a maximum of **Ksh 5 million**. The exact amount depends on:

- Year of manufacture (YOM 2009 and above considered)
- Make, model, and current condition of the vehicle
- Your income and repayment capacity

## How fast is disbursement?

Our turnaround time (TAT) is between **6 and 12 hours** for straightforward applications with complete documents. This makes logbook loans one of the fastest financing options available in Kenya.

## What documents do you need?

- Original logbook (vehicle registration certificate)
- National ID or Passport
- KRA PIN Certificate
- Comprehensive motor insurance certificate
- Latest 3 months bank statements
- Proof of residence

## Can you transfer an existing logbook loan?

Yes. Our **Loan Buyoff** product allows qualifying customers to transfer their existing logbook loan from another MFI or bank to Choice Bank — provided they have paid at least 50% of the principal without default. Buyoff is available for vehicles from YOM 2014 and above.

## The application process

1. Submit your application online or visit a Choice Bank branch
2. Vehicle and document checks are conducted (external checks may apply)
3. Receive a formal loan offer within hours
4. Accept, sign the agreement, and receive funds directly in your account

Logbook loans are a practical solution for anyone who needs quick access to cash without selling their vehicle. Speak to a Choice Bank loan officer to find out how much you qualify for.
    `,
  },
  {
    slug: 'sme-financing-options-kenya-2025',
    title: 'SME Financing Options in Kenya: What Every Business Owner Should Know',
    excerpt: 'Small and medium enterprises are the backbone of Kenya\'s economy — but accessing the right financing can be the difference between growth and stagnation. Here\'s what\'s available.',
    category: 'Business Banking',
    date: 'June 10, 2025',
    readTime: '6 min read',
    coverImage: 'https://images.unsplash.com/photo-1664575602554-2087b04935a5?w=1200&q=80&fit=crop',
    author: { name: 'Choice Bank Team', role: 'Business Banking' },
    content: `
Access to credit remains one of the biggest challenges for Kenyan SMEs. Understanding your financing options — and what lenders actually look at — puts you in a much stronger position when applying.

## The Choice Business Loan

Choice Microfinance Bank offers an **unsecured business loan of up to Ksh 1 million net**, with a tenure of up to 12 months. This product is designed for:

- Business expansion
- Stock purchases
- Emergency working capital
- Equipment or technology upgrades

**Key eligibility requirement:** You must hold an active Choice Bank account for more than 6 months. Approval is guided by account transaction history, repayment capacity, and your overall customer profile.

## Asset Finance for Business

If your business requires vehicles, machinery, or other income-generating assets, asset finance is often a better fit than an unsecured loan. Choice Bank offers:

- Asset finance up to **Ksh 5M gross**
- Interest from **2.5% per month**
- Loan periods of up to **24 months**
- MOTI 80% financing for newer vehicles (YOM 2018+)

## Business Fixed Deposits

If your business holds surplus funds between operational cycles, a **Business Fixed Deposit** earns predictable returns over 3, 6, or 12 months — and can double as collateral for future credit facilities.

## What lenders look at

1. **Transaction history** — consistent deposits and withdrawals show a functioning business
2. **Repayment capacity** — income relative to existing obligations
3. **Business documentation** — registration, KRA PIN, 6-month statements
4. **Business visit** — for some products, a physical visit to your premises applies

## Practical advice

Open your Choice Bank business account early — even before you need financing. The account history you build becomes your strongest loan application asset.

Speak to our business banking team to understand which product fits your current stage of growth.
    `,
  },
  {
    slug: 'solar-financing-homes-businesses-kenya',
    title: 'Why Solar Financing Makes Sense for Kenyan Homes and Businesses in 2025',
    excerpt: 'With rising electricity costs and frequent outages, solar energy is no longer a luxury in Kenya — it\'s a strategic investment. Here\'s how to finance it without draining your savings.',
    category: 'Green Finance',
    date: 'May 28, 2025',
    readTime: '4 min read',
    coverImage: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1200&q=80&fit=crop',
    author: { name: 'Choice Bank Team', role: 'Lending' },
    content: `
Solar energy adoption in Kenya has accelerated significantly over the past five years — driven by falling panel costs, unreliable grid power, and the growing availability of financing options like the **Solari Loan** from Choice Microfinance Bank.

## What the Solari Loan covers

The Solari Loan is designed for complete solar installations for:

- Homes and residential properties
- Schools and churches
- Hotels, restaurants, and hospitality businesses
- SMEs and commercial premises

**Eligible solar packages range from Ksh 150,000 to Ksh 10 million**, with financing capped at Ksh 5 million. The minimum deposit required is 40% of the quoted reserve price.

## Loan terms

- **Interest rate:** 2% to 3% flat per month, depending on product and client profile
- **Loan term:** Up to 36 months
- **Usage:** Lighting systems, water heating, solar pumps, complete off-grid setups

## The financial case for solar

Consider a business spending Ksh 30,000 per month on electricity. A solar installation costing Ksh 800,000 — financed over 36 months — would cost approximately Ksh 25,000 per month in loan repayments while eliminating most of the electricity bill. The savings compound from month one.

For residential customers, the calculation is similar: lower recurring costs, protection from power outages, and a tangible asset that adds value to the property.

## How to apply

Contact Choice Bank and request a Solari Loan consultation. Our team will work with you on the installation quote, assess your profile, and structure a repayment plan that fits your cash flow.

Investing in solar is one of the few financial decisions that reduces costs while building long-term asset value. The Solari Loan makes it accessible without a large upfront capital outlay.
    `,
  },
  {
    slug: 'cny-express-kenya-china-payments',
    title: 'CNY Express: Faster Payments for Kenyan Importers Trading with China',
    excerpt: 'The Kenya-China trade corridor is one of the most active in East Africa. But paying Chinese suppliers has historically been slow and expensive. CNY Express changes that.',
    category: 'Remittance',
    date: 'May 15, 2025',
    readTime: '4 min read',
    coverImage: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=1200&q=80&fit=crop',
    author: { name: 'Choice Bank Team', role: 'Remittance' },
    content: `
Kenyan importers trading with Chinese suppliers face a common frustration: getting money to China quickly, reliably, and in the right currency. CNY Express from Choice Microfinance Bank is built specifically for this corridor.

## What is CNY Express?

CNY Express is a remittance product that allows Kenyan customers to pay Chinese suppliers **directly in CNY (Chinese Yuan/Renminbi)** — without going through multiple intermediary banks or currency conversions that add time and cost.

## Who is it for?

- Importers sourcing goods from China
- Traders with regular supplier payment cycles
- Businesses managing invoices in CNY or USD (we handle the conversion)
- Anyone needing to move funds between Kenya and China securely

## Why it matters

Traditional international transfers to China can take 3–5 business days and involve multiple correspondent banks, each taking a fee. CNY Express is designed for:

- **Speed** — faster settlement timelines
- **Traceability** — every transaction is logged and compliant
- **Clarity** — you know the rate and fees before you transact

## Guided FX support

Our team provides foreign exchange guidance so you understand the conversion from Kenyan Shillings to CNY before committing. There are no hidden charges — the rate and total cost are agreed upfront.

## How to get started

Visit any Choice Bank branch or contact our remittance team. You'll need:

- Your supplier's banking details in China
- The invoice or payment amount in CNY or equivalent
- Your KRA PIN and ID for verification

If you're trading with China and haven't explored CNY Express, it's worth a conversation with our team. Faster, cleaner payments mean better supplier relationships and smoother import cycles.
    `,
  },
  {
    slug: 'fixed-deposit-guide-kenya',
    title: 'Fixed Deposits in Kenya: How to Earn More from Money You\'re Not Using',
    excerpt: 'If your savings are sitting in a current account earning little to no interest, a fixed deposit could significantly improve your returns. Here\'s everything you need to know.',
    category: 'Savings',
    date: 'April 30, 2025',
    readTime: '5 min read',
    coverImage: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=1200&q=80&fit=crop',
    author: { name: 'Choice Bank Team', role: 'Personal Banking' },
    content: `
A fixed deposit (FD) is one of the most straightforward financial products available — yet many Kenyans leave money in current accounts that earn minimal returns when a fixed deposit could be working harder for them.

## How fixed deposits work

You place a lump sum with the bank for an agreed period (the tenure) at a fixed interest rate. The rate is locked in at placement — meaning you know exactly what you'll earn before you commit.

At Choice Microfinance Bank:

- **Minimum placement:** Ksh 100,000 or USD 1,000
- **Tenures available:** 3, 6, or 12 months
- **Rates:** Fixed and agreed at placement — no surprises

## Can you access the money before maturity?

Fixed deposits are designed to be held to maturity for maximum return. Breaking early may affect the interest earned. If you need flexibility, consider keeping an emergency fund in a savings account and placing only surplus funds in an FD.

## Using your FD as collateral

One underused feature: a Choice Bank fixed deposit can serve as **collateral for a loan**. The Fixed Deposit Loan allows you to borrow:

- 50% of the FD value for a 3-month deposit
- 70% for a 6-month deposit
- 90% for a 12-month deposit

The interest rate is 6% plus the FD rate. This means your savings continue earning while you access liquidity — a powerful tool for managing cash flow without breaking your investment.

## Who should consider an FD?

- Anyone with surplus funds not needed for 3+ months
- Businesses managing treasury between operational cycles
- Customers looking for a low-risk, predictable return
- Anyone saving toward a specific goal with a defined timeline

Talk to a Choice Bank personal banking officer to open your fixed deposit and lock in your rate.
    `,
  },
  {
    slug: 'api-banking-fintechs-kenya',
    title: 'API Banking: How Fintechs and Businesses Can Embed Financial Services',
    excerpt: 'The era of building financial products from scratch is over. API banking lets fintechs, merchants, and platforms embed payments, collections, and banking rails directly into their products.',
    category: 'API Banking',
    date: 'April 12, 2025',
    readTime: '5 min read',
    coverImage: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&q=80&fit=crop',
    author: { name: 'Choice Bank Team', role: 'Technology & Partnerships' },
    content: `
The financial services landscape in Kenya has changed dramatically in the past decade. The rise of mobile money, digital wallets, and embedded finance means that banking is no longer confined to branches or apps — it lives inside the products your customers already use.

## What is API banking?

API (Application Programming Interface) banking allows digital businesses to connect directly to a bank's infrastructure — accessing payment collections, disbursements, account services, and settlement capabilities through code rather than physical banking channels.

For a fintech or merchant, this means you can offer:

- **Payment collections** — accept customer payments through your own platform
- **Payouts and settlements** — disburse funds to merchants, agents, or users
- **Cross-border payments** — process international transactions at scale
- **Embedded account features** — let users transact within your product

## Why partner with a licensed bank?

Working through a CBK-regulated institution like Choice Microfinance Bank gives your platform:

- **Regulatory credibility** — transactions processed through a licensed entity
- **Security and traceability** — every transaction logged and compliant
- **Trust** — customers feel safer transacting on platforms backed by a bank

## Who should explore API banking?

- Fintechs building payment or lending products
- E-commerce platforms needing collection infrastructure
- Importers wanting China payment capability (CNY/RMB)
- Digital lenders or savings platforms needing banking rails
- Marketplaces managing payouts to multiple parties

## Getting started

Choice Bank's API banking conversations start with understanding your use case — the volume, the flow, and the regulatory context. Our partnership team works with you to define the integration scope and timeline.

If you're building a financial product and need a banking partner, start the conversation with our team.
    `,
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getAllSlugs(): string[] {
  return blogPosts.map((p) => p.slug);
}
