function extractMatches(text, regex) {
    return text.match(regex) || [];
}

const sampleText = `
    Contact us at user@example.com or firstname.lastname@company.co.uk.
    Visit our website at https://www.example.com or https://subdomain.example.org/page.
    Call us at (123) 456-7890 or 123-456-7890.
    The total cost is $1,234.56 or $19.99.
`;

console.log("Emails:", extractMatches(sampleText, emailRegex));
console.log("URLs:", extractMatches(sampleText, urlRegex));
console.log("Phone Numbers:", extractMatches(sampleText, phoneRegex));
console.log("Currency Amounts:", extractMatches(sampleText, currencyRegex));
