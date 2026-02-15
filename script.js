// script.js

// Expanded keyword lists per category (~200 words each)
const keywords = {
  job: [
    "job","career","hiring","apply","resume","interview","vacancy","position","employment","recruitment",
    "work-from-home","remote","opportunity","candidate","offer","salary","bonus","staffing","placement",
    "employment-agency","temp-job","freelance-job","career-growth","job-alert","job-opening","walk-in",
    "career-opportunity","job-notification","job-portal","internship","part-time","full-time","job-seeker",
    "work","career-fair","recruiter","headhunt","application","profession","job-board","headhunter",
    "employment-service","job-market","job-hunt","career-advice","online-job","job-offer","job-fraud",
    "fake-employment","work-at-home","job-scam","job-apply","job-fake","work-offer","career-fake","job-online",
    "job-fraudulent","career-scam","job-link","fake-job","job-portal-scam","work-scam","job-website","employment-scam",
    "job-hunting","career-path","hiring-scam","job-finding","fake-employer","job-apply-online","career-online",
    "work-scam-alert","job-advert","fake-interview","job-fake-alert","remote-job-scam","job-opportunity-scam",
    "fake-recruiter","job-application-scam","career-fraud","employment-link","work-fraud","job-email","job-fake-link",
    "career-alert","job-opportunity-fake","fake-employment-offer","job-ad-fraud","job-online-fraud","fake-career-link",
    "apply-job-fraud","job-scam-online","career-email-scam","employment-online-fraud","fake-job-site","work-from-home-fraud",
    "remote-work-fake","job-fake-alert","career-fake-offer","employment-fraudulent","job-fake-portal","job-scam-link",
    "job-fraud-alert","fake-hiring","career-fake-notice","job-online-alert","employment-fake-offer","work-online-fake",
    "career-fake-job","job-portal-fake","job-online-scam","employment-fake","work-fake","remote-job-fake","career-opportunity-fake",
    "job-hiring-fake","job-apply-fake","employment-scam-alert","job-fraudulent-link","fake-job-email","career-scam-alert",
    "job-ad-fake","job-portal-alert","job-online-fake","work-email-scam","employment-online-scam","career-fake-email",
    "job-offer-fake","job-fraudulent-email","fake-job-website","career-scam-link","job-scam-email","employment-scam-link",
    "remote-fake-job","fake-employment-link","job-alert-fake","career-alert-fake","job-online-fraudulent","work-scam-link",
    "job-apply-scam","job-fraudulent-portal","career-fraud-link","job-online-alert-fake","fake-job-offer-link","job-hunting-fake",
    "employment-alert-fake","job-scam-portal","fake-career-email","job-fake-online","career-fake-portal","job-apply-email-fake",
    "job-online-scam-link","work-from-home-scam","job-fraud-alert-online","career-opportunity-scam","employment-scam-email",
    "job-fake-alert-portal","job-online-fraud-alert","fake-job-portal-link","career-online-scam","job-scam-email-alert",
    "job-fake-email-alert","employment-online-alert","job-apply-fraud","job-online-fraudulent-alert","fake-job-link",
    "job-portal-fraudulent","career-fake-alert","job-fraudulent-website","job-apply-online-fraud","job-email-fraud",
    "job-fake-email","employment-fake-alert","career-online-fraud","job-offer-online-fake","job-alert-online-fake",
    "remote-work-fraud","work-from-home-fake","job-fake-link-alert","job-online-fraudulent-link","career-fake-email-alert",
    "job-fraudulent-online","job-portal-scam-alert","fake-job-email-alert","job-scam-online-alert","career-fraudulent",
    "employment-online-fraudulent","job-fake-website-alert","job-apply-fake-link","job-online-fake-alert","career-fake-portal-alert",
    "job-scam-portal-alert","job-online-fake-email","job-fraudulent-alert-online","job-online-scam-email","job-fake-portal-alert",
    "career-online-fake","job-apply-fake-email","job-scam-alert-online","job-fake-online-alert","career-fake-email-online"
  ],
  shopping: [
    "buy","cheap","discount","sale","deal","order","shop","purchase","bargain","limited-offer",
    "free","coupon","promo","clearance","flash-sale","offer","best-price","cheap-price","lowest-price",
    "buy-now","click-here","add-to-cart","checkout","shopping","online-shopping","fake-shop","discount-code",
    "sale-alert","promo-code","exclusive-offer","limited-stock","sale-now","buy-online","order-now",
    "free-shipping","deal-alert","purchase-online","shopping-deal","fake-shopping","shop-now","discount-link",
    "cheap-deal","flash-deal","bargain-alert","limited-offer-online","buy-fast","promo-offer","sale-link",
    "discount-alert","fake-online-shop","best-deal","sale-fake","shop-fake","shopping-scam","online-deal",
    "offer-fake","deal-online-fake","cheap-buy","order-fake","shopping-online-fake","limited-offer-fake",
    "purchase-fake","discount-fake","promo-fake","shop-online-fake","buy-online-fake","shopping-alert",
    "sale-fraud","deal-fraud","fake-shop-online","online-sale-fake","bargain-fake","discount-fraud",
    "shopping-fraudulent","purchase-alert-fake","checkout-fake","promo-online-fake","offer-online-fake",
    "buy-now-fake","shopping-site-fake","flash-sale-fake","limited-stock-fake","discount-link-fake",
    "coupon-fake","deal-alert-fake","buy-fast-fake","shop-now-fake","order-now-fake","shopping-scam-alert",
    "online-shopping-fraud","promo-code-fake","discount-alert-fake","sale-online-fake","deal-online-alert",
    "cheap-online-fake","fake-shopping-site","shop-fake-alert","offer-fake-alert","purchase-online-fake",
    "online-shop-fraud","limited-offer-alert","checkout-fraud","buy-fake-link","promo-online-alert","sale-fake-link",
    "deal-fake-online","discount-fake-link","coupon-alert-fake","shopping-online-alert","shop-online-alert",
    "buy-online-alert","fake-deal-online","sale-fraudulent","shopping-alert-online","order-fake-online","checkout-online-fake",
    "promo-code-alert","buy-online-scam","deal-fraudulent-online","discount-online-fake","offer-fake-online",
    "shopping-link-fake","shop-online-fraud","purchase-online-fraud","flash-sale-online-fake","sale-alert-online-fake",
    "coupon-online-fake","promo-alert-online","deal-online-scam","cheap-online-alert","shopping-online-scam"
  ],
  freelance: [
    "freelance","gig","remote-work","contract","payment","hire","job","work-from-home","freelancer",
    "project","task","online-work","offer","application","fake-freelance","work-online","freelance-job",
    "fake-gig","remote-fake","freelance-fraud","work-offer","online-gig","freelance-scam","remote-gig",
    "payment-fake","job-fraud","hire-fake","freelancer-fake","task-fake","project-fake","application-fake",
    "online-task","gig-fake","freelance-alert","job-online-fake","work-fraud","freelance-fake-alert",
    "remote-fake-job","freelancer-alert","project-online-fake","task-online-fake","hire-online-fake","payment-online-fake",
    "gig-online-fake","online-freelance-fake","job-offer-fake","work-fake-alert","freelance-online-fake",
    "fake-remote-job","gig-fraudulent","freelance-scam-alert","project-fake-alert","task-fake-alert",
    "hire-fake-online","payment-fraud-alert","remote-job-fake","freelance-online-scam","fake-freelance-job",
    "freelancer-fraud","work-from-home-fake","freelance-online-fraud","gig-fake-online","project-online-fraud",
    "task-online-fraud","hire-online-fraud","payment-online-fraud","remote-work-fake","freelance-alert-online",
    "freelancer-fake-email","gig-online-alert","job-online-fraudulent","freelance-fake-website","task-fake-portal",
    "project-fake-portal","work-from-home-scam","freelance-online-alert","remote-job-alert","payment-fake-alert",
    "hire-fake-alert","freelancer-online-fake","gig-fake-alert","job-fake-alert","project-fake-email","task-fake-email",
    "freelance-portal-fake","online-freelance-alert","remote-work-scam","freelance-website-fake","job-fraudulent-online",
    "work-online-alert","freelance-online-scam-alert","gig-online-fake-alert","freelance-fake-link"
  ],
  scholarship: [
    "scholarship","grant","financial-aid","funding","award","application","student","study","stipend","education",
    "scholarship-fake","grant-fake","financial-aid-fake","funding-fake","award-fake","application-fake",
    "student-fake","study-fake","stipend-fake","education-fake","scholarship-online-fake","grant-online-fake",
    "financial-aid-online-fake","funding-online-fake","award-online-fake","application-online-fake","student-online-fake",
    "study-online-fake","stipend-online-fake","education-online-fake","scholarship-alert","grant-alert",
    "financial-aid-alert","funding-alert","award-alert","application-alert","student-alert","study-alert",
    "stipend-alert","education-alert","scholarship-portal","grant-portal","financial-aid-portal","funding-portal",
    "award-portal","application-portal","student-portal","study-portal","stipend-portal","education-portal",
    "scholarship-fraud","grant-fraud","financial-aid-fraud","funding-fraud","award-fraud","application-fraud",
    "student-fraud","study-fraud","stipend-fraud","education-fraud","scholarship-scam","grant-scam","financial-aid-scam",
    "funding-scam","award-scam","application-scam","student-scam","study-scam","stipend-scam","education-scam"
  ],
  insurance: [
    "insurance","policy","claim","premium","coverage","risk","life-insurance","health-insurance","auto-insurance",
    "benefit","insurance-fake","policy-fake","claim-fake","premium-fake","coverage-fake","risk-fake",
    "life-insurance-fake","health-insurance-fake","auto-insurance-fake","benefit-fake","insurance-online-fake",
    "policy-online-fake","claim-online-fake","premium-online-fake","coverage-online-fake","risk-online-fake",
    "life-insurance-online-fake","health-insurance-online-fake","auto-insurance-online-fake","benefit-online-fake",
    "insurance-alert","policy-alert","claim-alert","premium-alert","coverage-alert","risk-alert","life-insurance-alert",
    "health-insurance-alert","auto-insurance-alert","benefit-alert","insurance-scam","policy-scam","claim-scam",
    "premium-scam","coverage-scam","risk-scam","life-insurance-scam","health-insurance-scam","auto-insurance-scam",
    "benefit-scam","insurance-fraud","policy-fraud","claim-fraud","premium-fraud","coverage-fraud","risk-fraud",
    "life-insurance-fraud","health-insurance-fraud","auto-insurance-fraud","benefit-fraud"
  ]
};

// Determine risk level based on match count
// Determine risk level based on match count
function getRisk(count) {
  if (count >= 5) return "High";
  if (count >= 2) return "Moderate";
  return "Low";
}

// Animate Detecting
function animateDetecting(element) {
  let dots = 0;
  const interval = setInterval(() => {
    element.innerText = "Detecting" + ".".repeat(dots % 4);
    dots++;
  }, 500);
  return interval;
}

// Scan function
function scanURL() {
  const urlInput = document.getElementById("url").value.trim().toLowerCase();
  const typeInput = document.getElementById("type").value;
  const resultDiv = document.getElementById("result");

  if (!urlInput) {
    alert("Please enter a URL!");
    return;
  }

  // Show detecting animation
  resultDiv.style.display = "block";
  resultDiv.style.fontSize = "16px"; // bigger font
  const interval = animateDetecting(resultDiv);

  setTimeout(() => {
    clearInterval(interval);

    // Count keyword matches
    const matched = keywords[typeInput].filter(word => urlInput.includes(word));
    const risk = getRisk(matched.length);

    // Build result HTML with styling based on risk
    let riskColor, riskMessage, riskEmoji;

    if (risk === "High" || risk === "Moderate") {
      riskColor = "red";
      riskEmoji = "❌";
      riskMessage = "Warning! This link is risky. Do not use or open it.";
    } else {
      riskColor = "blue";
      riskEmoji = "✅";
      riskMessage = "No risk detected. This link appears safe.";
    }

    resultDiv.innerHTML = `
      <div style="font-size:14px; margin-bottom:10px;"><b>URL:</b> ${urlInput}</div>
      <div style="font-size:16px; margin-bottom:10px;"><b>Category:</b> ${typeInput.charAt(0).toUpperCase() + typeInput.slice(1)}</div>
      <div style="font-size:20px; font-weight:bold; color:${riskColor}; margin-bottom:10px;">
        ${riskEmoji} Risk Level: ${risk}
      </div>
      <div style="font-size:16px; color:${riskColor}; margin-bottom:20px;">
        ${riskMessage}
      </div>
     
    `;



  }, 5000);
}

