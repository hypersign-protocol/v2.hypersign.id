import{d as g,c as r,x as f,a as e,F as i,f as n,o as s,n as x,t as a,z as h,A as y,g as b,m as v,e as u,y as p,b as w,k}from"./vue-D5J7BkSA.js";import{g as _,$ as S,P as A,a0 as P,a1 as C,a2 as I}from"./icons-TzliWJRJ.js";const D={class:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20"},T={class:"flex flex-wrap gap-2 justify-center mb-12"},z=["onClick"],B={class:"grid lg:grid-cols-2 gap-12 items-center"},W={class:"w-12 h-12 bg-secondary rounded-xl flex items-center justify-center mb-6 text-foreground"},H={class:"text-3xl font-extrabold text-foreground mb-4"},L={class:"text-muted-foreground text-lg mb-8 leading-relaxed"},V={class:"space-y-3 mb-8"},Z={href:"https://calendly.com/hypersign",target:"_blank",rel:"noopener noreferrer",class:"inline-flex items-center gap-2 bg-[#404462] text-white font-semibold px-6 py-3 rounded-xl hover:opacity-90 transition-opacity text-sm"},j={class:"bg-foreground rounded-2xl p-6 font-mono text-sm overflow-x-auto text-background/80"},E={class:"whitespace-pre-wrap leading-relaxed"},J={class:"mt-24 text-center"},N={class:"flex flex-wrap items-center justify-center gap-6 opacity-50 grayscale"},K=g({__name:"PlatformPage",setup(R){const l=k("api"),c=[{slug:"api",label:"Developer API",icon:_,title:"REST API & SDKs",description:"A clean, versioned REST API with official SDKs for JavaScript, Python, Go, and Ruby. Webhooks, idempotency keys, and sandbox mode included.",points:["OpenAPI 3.0 spec with auto-generated client libraries","Sandbox environment with test identities","Webhook delivery with automatic retries","99.9% uptime SLA with status page"],code:`// Verify a user in 3 lines
const result = await yourbrand.kyc.verify({
  userId: "usr_01HJ...",
  documentType: "passport",
  selfie: base64Image,
});

// result.status === "approved"
// result.confidence === 0.997
// result.completedAt === "2025-06-02T10:30:00Z"`},{slug:"dashboard",label:"Dashboard",icon:S,title:"Compliance Dashboard",description:"A real-time view of every verification, risk score, and audit event. Filter, export, and act on decisions without writing a single line of code.",points:["Real-time verification feed with risk signals","Manual review queue with side-by-side document view","Custom rules engine for auto-approve/reject thresholds","CSV & API export for audit reports"],code:`// Query verifications from the Dashboard API
GET /v1/verifications?status=pending&limit=50

{
  "data": [{
    "id": "ver_01HJ...",
    "userId": "usr_01HJ...",
    "status": "pending_review",
    "riskScore": 0.23,
    "flags": ["document_expired"],
    "createdAt": "2025-06-02T10:00:00Z"
  }]
}`},{slug:"integrations",label:"Integrations",icon:A,title:"Works with everything",description:"Pre-built integrations for the tools your team already uses. Data flows automatically no custom glue code required.",points:["Zapier, n8n, and Make.com connectors","Salesforce, HubSpot, and Intercom sync","AWS, GCP, and Azure deployment templates","SIEM connectors for Splunk and Datadog"],code:`// Zapier / webhook integration
POST https://your-app.com/webhooks/kyc

{
  "event": "verification.completed",
  "verification": {
    "userId": "usr_01HJ...",
    "status": "approved",
    "completedAt": "2025-06-02T10:30:00Z"
  },
  "signature": "sha256=abc123..."
}`},{slug:"white-label",label:"White-Label",icon:P,title:"Your brand, our infrastructure",description:"Fully white-labeled verification flows custom domain, logo, colors, and copy. Users never see YourBrand.",points:["Custom domain (verify.yourcompany.com)","Branded email notifications and SMS","Localized UI in 40+ languages","Custom rejection messages and retry flows"],code:`// White-label config
yourbrand.configure({
  branding: {
    companyName: "Acme Corp",
    logo: "https://acme.com/logo.svg",
    primaryColor: "#0f172a",
    domain: "verify.acme.com",
  },
  locale: "en-US",
  allowedDocuments: ["passport", "drivers_license"],
});`}],m=["Slack","Salesforce","HubSpot","Zapier","AWS","Stripe","Plaid","Twilio"];return(F,o)=>(s(),r("div",D,[o[3]||(o[3]=f('<div class="text-center mb-16"><p class="text-xs uppercase tracking-widest text-muted-foreground font-semibold mb-3">Platform</p><h1 class="text-4xl sm:text-5xl font-extrabold text-foreground tracking-tight mb-5"> Built for developers.<br class="hidden sm:block"> Loved by compliance teams. </h1><p class="text-lg text-muted-foreground max-w-2xl mx-auto"> A unified infrastructure layer for identity, verification, and reusable credentials with APIs, SDKs, and a dashboard that fits any workflow. </p></div>',1)),e("div",T,[(s(),r(i,null,n(c,t=>e("button",{key:t.slug,onClick:d=>l.value=t.slug,class:x(["px-5 py-2.5 rounded-full text-sm font-semibold transition-colors",l.value===t.slug?"bg-[#404462] text-white":"bg-secondary text-muted-foreground hover:text-foreground hover:bg-secondary/80"])},a(t.label),11,z)),64))]),(s(),r(i,null,n(c,t=>h(e("div",{key:t.slug},[e("div",B,[e("div",null,[e("div",W,[(s(),b(v(t.icon),{size:24}))]),e("h2",H,a(t.title),1),e("p",L,a(t.description),1),e("ul",V,[(s(!0),r(i,null,n(t.points,d=>(s(),r("li",{key:d,class:"flex items-start gap-3 text-sm text-muted-foreground"},[u(p(C),{size:16,class:"text-green-500 mt-0.5 flex-shrink-0"}),e("span",null,a(d),1)]))),128))]),e("a",Z,[o[0]||(o[0]=w(" Get started ",-1)),u(p(I),{size:16})])]),e("div",j,[o[1]||(o[1]=e("div",{class:"flex items-center gap-2 mb-4"},[e("div",{class:"w-3 h-3 rounded-full bg-red-400/50"}),e("div",{class:"w-3 h-3 rounded-full bg-yellow-400/50"}),e("div",{class:"w-3 h-3 rounded-full bg-green-400/50"})],-1)),e("pre",E,[e("code",null,a(t.code),1)])])])]),[[y,l.value===t.slug]])),64)),e("div",J,[o[2]||(o[2]=e("p",{class:"text-xs uppercase tracking-widest text-muted-foreground font-semibold mb-8"},"Integrates with your stack",-1)),e("div",N,[(s(),r(i,null,n(m,t=>e("span",{key:t,class:"text-sm font-bold tracking-wider text-foreground bg-secondary px-4 py-2 rounded-lg"},a(t),1)),64))])])]))}});export{K as default};
