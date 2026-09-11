export const blogPosts = [
  {
    id: 1,
    userId: 100,
    slug: "demystifying-the-modern-full-stack",
    title: "Demystifying the Modern Full-Stack Web Architecture",
    content:
      "The landscape of full-stack development has evolved dramatically over the last decade. Moving beyond the traditional LAMP stack, modern applications leverage single-page applications (SPAs) or server-rendered frameworks on the front end, alongside scalable serverless or microservice architectures on the back end. Understanding how client hydration, API gateways, and database caching fit together is essential for building fast, reliable applications.",
    imageUrl:
      "https://images.unsplash.com/photo-1619410283995-43d9134e7656?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    userId: 101,
    slug: "choosing-between-sql-and-nosql",
    title: "Choosing Between SQL and NoSQL for Your Application",
    content:
      "One of the first critical database decisions a full-stack developer faces is choosing between relational (SQL) and non-relational (NoSQL) databases. SQL databases like PostgreSQL excel at handling structured data and complex relationships with ACID compliance. On the other hand, NoSQL options like MongoDB offer flexible schemas and fast horizontal scaling, making them well-suited for rapidly changing document structures.",
    imageUrl:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    userId: 102,
    slug: "rest-vs-graphql-api-design",
    title: "REST vs. GraphQL: Designing Efficient APIs",
    content:
      "When connecting your front end to back-end services, the API design pattern you choose impacts network efficiency and developer experience. REST remains the industry standard due to its simplicity and robust caching mechanisms. However, GraphQL allows front-end applications to request exactly the data they need in a single query, eliminating issues with over-fetching and under-fetching.",
    imageUrl:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    userId: 101,
    slug: "mastering-state-management-across-the-stack",
    title: "Mastering State Management Across the Stack",
    content:
      "Managing application state effectively requires balancing local UI state, global front-end state, and server state. Tools like React Query and Redux Toolkit help streamline client-side caching and data synchronization, while server-side sessions and web sockets handle real-time state. Keeping client state seamlessly synchronized with the database remains one of full-stack development's core challenges.",
    imageUrl:
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 5,
    userId: 102,
    slug: "design-systems-for-full-stack-teams",
    title: "Scaling UI Development with Design Systems and Component Libraries",
    content:
      "A unified design system bridges the gap between designers and full-stack developers. By standardizing design tokens, color palettes, and reusable UI components in tools like Storybook, teams maintain brand consistency across applications and significantly reduce time-to-market for new feature releases.",
    imageUrl:
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80",
  },
];
