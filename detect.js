// detect.js
export default function detect(url, type) {
  const lowerUrl = url.toLowerCase();

  let result = {
    url,
    type,
    isScam: false,
    issues: []
  };

  // Check each category
  if (type === "fake job") {
    if (lowerUrl.includes("job") || lowerUrl.includes("career")) {
      result.isScam = true;
      result.issues.push("URL contains suspicious job keywords");
    }
  }

  if (type === "fake freelancing") {
    if (lowerUrl.includes("freelance") || lowerUrl.includes("work-from-home")) {
      result.isScam = true;
      result.issues.push("URL contains suspicious freelancing keywords");
    }
  }

  if (type === "fake scholarship") {
    if (lowerUrl.includes("scholarship") || lowerUrl.includes("grant")) {
      result.isScam = true;
      result.issues.push("URL contains suspicious scholarship keywords");
    }
  }

  if (type === "fake insurance") {
    if (lowerUrl.includes("insurance") || lowerUrl.includes("policy")) {
      result.isScam = true;
      result.issues.push("URL contains suspicious insurance keywords");
    }
  }

  if (type === "online shopping") {
    if (lowerUrl.includes("buy") || lowerUrl.includes("cheap")) {
      result.isScam = true;
      result.issues.push("URL contains suspicious shopping keywords");
    }
  }

  if (!result.isScam) {
    result.issues.push("No obvious scam indicators detected");
  }

  return result;
}
