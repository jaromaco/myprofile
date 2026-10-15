import { brandPinSvg } from '../components/brandPin.js';
import { socialIconMarkup } from '../components/socialIcons.js';
import { PAGE_URL } from './site.js';

function esc(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function steps(items) {
  return items
    .map(
      (step, index) => `            <li>
              <span class="process__num">${String(index + 1).padStart(2, '0')}</span>
              <div>
                <h3>${esc(step.title)}</h3>
                <p>${esc(step.text)}</p>
              </div>
            </li>`
    )
    .join('\n');
}

export function renderStatic(t, lang) {
  const year = new Date().getFullYear();
  const services = t.services.items
    .map(
      (item) => `            <li class="services__card">
              <h3>${esc(item.title)}</h3>
              <p>${esc(item.forWhom)}</p>
              <p class="services__deliverable">${esc(item.deliverable)}</p>
              <p class="services__tools">${esc(item.tools)}</p>
            </li>`
    )
    .join('\n');
  const toolGroups = t.tools.groups
    .map(
      (group) => `            <div class="tools__group">
              <h3>${esc(group.label)}</h3>
              <ul>
${group.items.map((item) => `                <li>${esc(item)}</li>`).join('\n')}
              </ul>
            </div>`
    )
    .join('\n');
  const roles = t.path.roles
    .map(
      (item) => `            <li>
              <div>
                <h3>${esc(item.role)}</h3>
                <p class="path__org">${esc(item.org)}</p>
              </div>
              ${item.note ? `<span class="path__note">${esc(item.note)}</span>` : ''}
            </li>`
    )
    .join('\n');
  const contactLinks = t.contact.links
    .map(
      (link) => `            <li><a href="${esc(link.url)}" rel="${esc(link.rel || 'noopener noreferrer')}">${socialIconMarkup(link.icon)}<span class="${link.icon ? 'visually-hidden' : ''}">${esc(link.label)}</span></a></li>`
    )
    .join('\n');

  return `<div id="static-fallback">
      <header class="site-header">
        <div class="site-header__inner">
          <a class="site-header__brand" href="#inicio" aria-label="${esc(t.nav.home)}">
            <span class="site-header__word"><span class="site-header__name">Oikos</span><span class="site-header__craft">GIS</span></span>
          </a>
          <nav class="site-nav" aria-label="${lang === 'en' ? 'Sections' : 'Secciones'}">
            <ul>
              <li><a href="#${esc(t.services.id)}">${esc(t.nav.services)}</a></li>
              <li><a href="#${esc(t.projects.id)}">${esc(t.nav.projects)}</a></li>
              <li><a href="#${esc(t.process.id)}">${esc(t.nav.process)}</a></li>
              <li><a href="#${esc(t.tools.id)}">${esc(t.nav.tools)}</a></li>
              <li><a href="#${esc(t.path.id)}">${esc(t.nav.path)}</a></li>
              <li><a href="#${esc(t.contact.id)}">${esc(t.nav.contact)}</a></li>
            </ul>
            <div class="lang-switch">
              <a href="${PAGE_URL.es}" hreflang="es" lang="es"${lang === 'es' ? ' class="is-active" aria-current="true"' : ''}>${esc(t.lang.es)}</a>
              <a href="${PAGE_URL.en}" hreflang="en" lang="en"${lang === 'en' ? ' class="is-active" aria-current="true"' : ''}>${esc(t.lang.en)}</a>
            </div>
          </nav>
        </div>
      </header>
      <main>
        <section class="hero" id="inicio">
          <div class="hero__content">
            <p class="hero__role">${esc(t.hero.eyebrow)}</p>
            <h1 class="hero__heading">${esc(t.hero.title)}</h1>
            <p class="hero__lead">${esc(t.hero.lead)}</p>
            <p class="hero__person">${esc(t.hero.name)}</p>
            <div class="hero__actions">
              <a class="btn btn--primary" href="#${esc(t.contact.id)}">${esc(t.hero.cta)}</a>
              <a class="btn btn--ghost" href="#${esc(t.projects.id)}">${esc(t.hero.projectCta)}</a>
            </div>
          </div>
        </section>
        <section class="section services" id="${esc(t.services.id)}">
          <div class="section__inner">
            <header class="section__header"><h2>${esc(t.services.title)}</h2></header>
            <ul class="services__list">
${services}
            </ul>
            <p class="services__note">${esc(t.services.note)}</p>
          </div>
        </section>
        <section class="section projects" id="${esc(t.projects.id)}">
          <div class="section__inner">
            <header class="section__header"><h2>${esc(t.projects.title)}</h2></header>
            <article class="projects__card">
              <div class="projects__body">
                <h3>${esc(t.projects.name)}</h3>
                <p>${esc(t.projects.text)}</p>
                <p class="projects__facts">${esc(t.projects.facts)}</p>
                <a class="btn btn--ghost" href="${esc(t.projects.linkUrl)}">${esc(t.projects.linkLabel)}</a>
              </div>
            </article>
          </div>
        </section>
        <section class="section process" id="${esc(t.process.id)}">
          <div class="section__inner">
            <header class="section__header"><h2>${esc(t.process.title)}</h2></header>
            <ol class="process__steps">
${steps(t.process.steps)}
            </ol>
          </div>
        </section>
        <section class="section tools" id="${esc(t.tools.id)}">
          <div class="section__inner">
            <header class="section__header">
              <h2>${esc(t.tools.title)}</h2>
              <p>${esc(t.tools.intro)}</p>
            </header>
            <div class="tools__grid">
${toolGroups}
            </div>
          </div>
        </section>
        <section class="section path" id="${esc(t.path.id)}">
          <div class="section__inner">
            <header class="section__header">
              <h2>${esc(t.path.title)}</h2>
              <p>${esc(t.path.intro)}</p>
            </header>
            <ul class="path__roles">
${roles}
            </ul>
            <p class="path__meta">${esc(t.path.education)}</p>
          </div>
        </section>
        <section class="section contact" id="${esc(t.contact.id)}">
          <div class="section__inner contact__inner">
            <header class="section__header">
              <h2>${esc(t.contact.title)}</h2>
              <p>${esc(t.contact.intro)}</p>
            </header>
            <ul class="contact__links">
${contactLinks}
            </ul>
            <p>${esc(t.contact.formNote)}</p>
          </div>
        </section>
      </main>
      <footer class="site-footer">
        <div class="site-footer__inner">
          <p>${esc(t.footer.copy.replace('{year}', String(year)))}</p>
          <p>${esc(t.footer.location)}</p>
        </div>
      </footer>
    </div>`;
}
