export function fetchFakeResponse(prompt) {
  if (prompt.toLowerCase().includes('homepage')) {
    return [
      { type: 'frontend', title: 'Hero Section', content: 'Welcome to Our Homepage!' },
      { type: 'frontend', title: 'About Us', content: 'We are the future of AI-driven websites.' },
      { type: 'frontend', title: 'Contact Section', content: 'Contact us at contact@example.com' },
    ];
  }

  if (prompt.toLowerCase().includes('pricing')) {
    return [
      { type: 'frontend', title: 'Pricing Table', content: 'Basic, Pro, and Enterprise Plans' },
    ];
  }

  if (prompt.toLowerCase().includes('faq')) {
    return [
      { type: 'frontend', title: 'FAQ Section', content: 'Q: What is this?\nA: It’s awesome!' },
    ];
  }

  if (prompt.toLowerCase().includes('gallery')) {
    return [
      { type: 'frontend', title: 'Gallery Section', content: 'Images of our best moments.' },
    ];
  }

  if (prompt.toLowerCase().includes('testimonials')) {
    return [
      { type: 'frontend', title: 'Testimonials', content: 'What our happy users say.' },
    ];
  }

  if (prompt.toLowerCase().includes('blog')) {
    return [
      { type: 'frontend', title: 'Blog Section', content: 'Latest updates and stories.' },
    ];
  }

  if (prompt.toLowerCase().includes('api')) {
    return [
      { type: 'backend', title: 'API Endpoint', content: '/api/submitForm - handles form submissions' },
    ];
  }

  return [
    { type: 'frontend', title: 'Custom Section', content: `Generated section for: ${prompt}` },
  ];
}
