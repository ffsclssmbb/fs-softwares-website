# Contributing to FS Softwares Website

## Getting Started

1. Fork the repository
2. Clone your fork: `git clone https://github.com/YOUR_USERNAME/fs-softwares-website.git`
3. Create a branch: `git checkout -b feature/your-feature`
4. Make changes and commit: `git commit -m 'Add feature'`
5. Push to your fork: `git push origin feature/your-feature`
6. Open a Pull Request

## Code Standards

### TypeScript
- Use strict mode (`strict: true` in tsconfig.json)
- Define types for all function parameters and returns
- Use interfaces for object types
- Avoid `any` type

### React Components
- Use functional components with hooks
- Follow naming conventions (PascalCase for components)
- Keep components focused and composable
- Add prop types using TypeScript interfaces

### Styling
- Use TailwindCSS utility classes
- Follow the design system colors and spacing
- Keep inline styles to a minimum
- Use custom CSS only when necessary

### Performance
- Use `dynamic()` for code splitting
- Optimize images (use Next.js Image component)
- Lazy load components when appropriate
- Minimize bundle size

## Commit Messages

Follow conventional commits:

```
feat: add new feature
fix: fix a bug
docs: update documentation
style: format code
refactor: refactor code
test: add tests
chore: update dependencies
```

## Pull Request Process

1. Update README.md with any new features
2. Ensure all tests pass: `npm run test`
3. Run linter: `npm run lint`
4. Test build: `npm run build`
5. Provide clear PR description and screenshots if UI changes

## Code Review

- Be respectful and constructive
- Focus on the code, not the person
- Ask questions to understand the approach
- Suggest improvements, don't demand changes

## Issues

- Use clear, descriptive titles
- Provide steps to reproduce bugs
- Include relevant error messages or logs
- Suggest fixes or workarounds if known

## Questions?

Reach out to the team:
- 📧 hello@fssoftwares.ph
- 🔗 https://fssoftwares.ph/contact

---

Thank you for contributing! 🎉
