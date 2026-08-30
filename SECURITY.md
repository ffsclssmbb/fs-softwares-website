# Security Policy

## Reporting Security Issues

**Do not** open public issues for security vulnerabilities.

Instead, please email security concerns to: **security@fssoftwares.ph**

Please include:
- Description of the vulnerability
- Steps to reproduce
- Potential impact
- Your recommendations for fixing it

We will acknowledge receipt within 24 hours and work with you to resolve the issue.

## Security Best Practices

### Application Security
- All data transmission uses HTTPS/TLS
- Input validation on all forms
- CSRF protection enabled
- XSS prevention measures in place
- SQL injection protection (if applicable)

### Data Protection
- GDPR compliant
- Philippine Data Privacy Act compliant
- Secure cookie handling
- No sensitive data in URLs
- Regular security audits

### Dependencies
- Regular dependency updates
- Security scanning with npm audit
- Use of trusted, maintained packages
- Removal of unused dependencies

### Infrastructure
- SSL/TLS certificates valid and current
- Security headers configured (CSP, X-Frame-Options, etc.)
- Regular backups
- Disaster recovery plan in place

## Responsible Disclosure

We appreciate responsible disclosure and will:
- Acknowledge your report promptly
- Work with you to understand and verify the issue
- Develop and test a fix
- Release a patched version
- Credit you (unless you prefer anonymity)

## Vulnerability Disclosure Timeline

- 24 hours: Initial acknowledgment
- 7 days: Security assessment
- 14 days: Fix development
- 21 days: Public disclosure (unless otherwise negotiated)

Thank you for helping keep FS Softwares secure.
