import { describe, it, expect } from "vitest";
import { blogPosts } from "../data/blogPosts";
import { services } from "../data/services";

describe("Blog Data & Content Compliance", () => {
  it("contains exactly 25 specialized non-redundant articles", () => {
    expect(blogPosts).toHaveLength(25);
  });

  it("organizes articles into exactly 8 well-defined categories", () => {
    const categories = Array.from(new Set(blogPosts.map((p) => p.category)));
    expect(categories).toHaveLength(8);
    expect(categories).toEqual(
      expect.arrayContaining([
        "Plataformas LMS Moodle",
        "SCORM & Normas EdTech",
        "Produção de Conteúdos",
        "Gamificação & Microlearning",
        "Inteligência Artificial & Inovação",
        "Desenho Instrucional & Metodologia",
        "Certificação & Qualidade DGERT",
        "Consultoria & Estratégia Digital",
      ])
    );
  });

  it("strictly avoids mentioning 'Moodle Workplace' in any article or metadata", () => {
    const serialized = JSON.stringify(blogPosts);
    expect(serialized).not.toContain("Moodle Workplace");
    expect(serialized).not.toContain("moodle-workplace");
  });

  it("includes independent analytical coverage of major authoring tools", () => {
    const toolPost = blogPosts.find(
      (p) => p.slug === "ferramentas-autoria-conteudos-scorm-analise-comparativa"
    );
    expect(toolPost).toBeDefined();
    expect(toolPost?.title).toContain("Articulate");
    expect(toolPost?.title).toContain("iSpring");
    expect(toolPost?.title).toContain("Adobe Captivate");
    expect(toolPost?.title).toContain("H5P");
  });

  it("ensures articles are strategic, analytical, and avoid DIY tutorial/passo-a-passo phrasing", () => {
    blogPosts.forEach((post) => {
      expect(post.title).not.toMatch(/passo a passo/i);
      expect(post.title).not.toMatch(/guia técnico:/i);
      expect(post.title).not.toMatch(/do zero:/i);
      expect(post.content.intro).not.toMatch(/explicamos o processo passo a passo/i);
    });
  });

  it("ensures all 25 blog posts have solutionNote, non-empty titles, sections and takeaways", () => {
    blogPosts.forEach((post) => {
      expect(post.slug).toBeTruthy();
      expect(post.title).toBeTruthy();
      expect(post.content.intro).toBeTruthy();
      expect(post.content.sections.length).toBeGreaterThan(0);
      expect(post.content.takeaways.length).toBeGreaterThan(0);
      expect(post.content.solutionNote).toBeTruthy();
      expect(post.readTime).toMatch(/min de leitura/);
    });
  });
});

describe("Services and SEO integrity", () => {
  it("contains 6 core service definitions", () => {
    expect(services).toHaveLength(6);
  });

  it("does not mention 'Moodle Workplace' in service definitions or keywords", () => {
    const serialized = JSON.stringify(services);
    expect(serialized).not.toContain("Moodle Workplace");
  });

  it("ensures benefits and items in each service have unique titles", () => {
    services.forEach((service) => {
      const titles = service.benefits.map((b) => b.title);
      const uniqueTitles = new Set(titles);
      expect(uniqueTitles.size).toBe(titles.length);
    });
  });
});
