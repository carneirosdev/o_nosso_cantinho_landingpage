# Software Requirements Specification (SRS)
## Landing Page e Plataforma de Reservas para Restaurante, Lazer e Eventos

**Versão:** 1.0  
**Estado:** Draft / Baseline  
**Idioma:** Português  
**Público-alvo:** Engenheiros de Software, UI/UX Designers, QA, Product Owner e equipa de negócio

---

# 1. Introdução

## 1.1 Objetivo

Este documento especifica os requisitos para o desenvolvimento de uma plataforma web, inicialmente apresentada como uma landing page institucional e comercial, para um estabelecimento que combina:

- Restaurante;
- Pizzaria;
- Snack-bar;
- Piscina;
- Aluguer do espaço para eventos;
- Agendamento de casamentos, aniversários, festas privadas e outros eventos;
- Contacto e reservas através de canais digitais.

O objetivo principal é apresentar claramente a proposta de valor do estabelecimento, promover os seus produtos e serviços através de conteúdo visual e permitir que potenciais clientes realizem ações de conversão, como reservas, pedidos de informação e solicitações de eventos.

## 1.2 Objetivos do produto

O sistema deverá:

1. Apresentar o estabelecimento e a sua proposta de valor.
2. Divulgar os serviços de gastronomia, lazer e eventos.
3. Apresentar fotografias de alta qualidade do espaço, pratos, piscina e eventos.
4. Permitir acesso ao menu.
5. Permitir ao utilizador solicitar uma reserva ou pedido de contacto.
6. Permitir solicitar o aluguer do espaço para eventos.
7. Disponibilizar informações de localização, horários e contactos.
8. Facilitar o contacto através de WhatsApp, telefone, e-mail e redes sociais.
9. Ser responsivo e otimizado para dispositivos móveis.
10. Possibilitar evolução futura para um sistema completo de gestão de reservas.

---

# 2. Escopo

## 2.1 Escopo da versão inicial

A primeira versão (MVP) deverá incluir:

- Landing page responsiva;
- Navegação por secções;
- Hero section;
- Secção institucional;
- Serviços;
- Menu/gastronomia;
- Piscina;
- Eventos;
- Galeria de imagens;
- Reservas/contactos;
- Formulário para solicitação de eventos;
- Informações de localização;
- Links para redes sociais;
- Integração com WhatsApp;
- SEO básico;
- Analytics básico;
- Área administrativa/CMS ou mecanismo equivalente para atualização de conteúdo, quando definido no projeto técnico.

## 2.2 Fora do escopo do MVP

Os seguintes itens não fazem parte obrigatoriamente da primeira versão:

- Pagamento online;
- Gestão financeira;
- Emissão de faturas;
- Gestão de stock;
- POS;
- Delivery;
- Sistema completo de gestão de mesas;
- Gestão avançada de clientes;
- Programa de fidelização;
- Aplicação mobile nativa;
- Marketplace de eventos.

Estes itens poderão ser considerados em versões futuras.

---

# 3. Stakeholders

| Stakeholder | Responsabilidade / Interesse |
|---|---|
| Proprietário/Gestor | Validar conteúdo, preços, serviços e regras de negócio |
| Gestor de Eventos | Receber e gerir solicitações de eventos |
| Equipa do Restaurante | Receber reservas e pedidos |
| Cliente/Visitante | Consultar informações e realizar reservas |
| Engenheiro de Software | Desenvolver e manter a plataforma |
| UI/UX Designer | Definir experiência e interface |
| QA | Validar requisitos e qualidade |
| Marketing/Social Media | Gerir conteúdo e campanhas |

---

# 4. Personas

## 4.1 Cliente de Restaurante

Pessoa que pretende consultar o menu, conhecer o espaço e reservar uma mesa.

### Objetivos

- Ver pratos e preços;
- Conhecer o ambiente;
- Saber onde fica o restaurante;
- Fazer uma reserva rapidamente.

## 4.2 Cliente de Lazer

Pessoa interessada em utilizar a piscina.

### Objetivos

- Ver imagens da piscina;
- Consultar horários, preços e regras;
- Saber se precisa de reserva;
- Contactar o estabelecimento.

## 4.3 Cliente de Eventos

Pessoa interessada em organizar um casamento, aniversário ou outra celebração.

### Objetivos

- Conhecer o espaço;
- Visualizar eventos realizados;
- Avaliar a capacidade e estrutura;
- Solicitar orçamento;
- Consultar disponibilidade.

---

# 5. Visão Geral do Produto

A plataforma deverá ter uma experiência visual, comercial e orientada à conversão.

O fluxo principal esperado é:

```text
Visitante
   |
   v
Landing Page
   |
   +--> Conhecer o espaço
   |
   +--> Explorar serviços
   |       +--> Pizzaria
   |       +--> Snack-Bar
   |       +--> Piscina
   |       +--> Eventos
   |
   +--> Ver menu
   |
   +--> Ver galeria
   |
   +--> Reservar
   |
   +--> Agendar evento
   |
   +--> Contactar
   |
   v
Conversão
```

---

# 6. Arquitetura de Informação

A navegação principal deverá conter, no mínimo:

- Início;
- Sobre;
- Gastronomia/Menu;
- Piscina;
- Eventos;
- Galeria;
- Contacto;
- Reservar.

A ordem poderá ser ajustada com base no design final.

---

# 7. Requisitos Funcionais

## RF-001 — Hero Section

O sistema deverá apresentar uma secção Hero no topo da página.

### Deve conter

- Imagem principal ou vídeo curto do estabelecimento;
- Nome/logo;
- Headline;
- Descrição curta;
- CTA para reserva;
- CTA para eventos.

### Exemplo

**Headline:**  
> Um espaço para comer, relaxar e celebrar.

**CTAs:**
- Reservar;
- Agendar evento.

### Critérios de aceitação

- O Hero deverá ser visível sem necessidade de scroll em desktop.
- Os CTAs deverão estar acessíveis em mobile.
- A imagem deverá preservar boa legibilidade do texto.

---

## RF-002 — Secção Institucional

O sistema deverá apresentar uma descrição resumida do estabelecimento.

### Conteúdo

- História ou apresentação;
- Diferenciais;
- Fotografias;
- Texto institucional.

### Objetivo

Criar confiança e contextualizar o espaço antes da apresentação dos serviços.

---

## RF-003 — Secção de Serviços

O sistema deverá apresentar os principais serviços em cards ou blocos visuais.

### Serviços obrigatórios

1. Pizzaria;
2. Snack-Bar;
3. Piscina;
4. Eventos.

Cada serviço deverá possuir:

- Nome;
- Descrição;
- Imagem;
- CTA, quando aplicável.

### Exemplo de CTA

- Ver menu;
- Conhecer piscina;
- Agendar evento.

---

## RF-004 — Pizzaria

O sistema deverá divulgar a área de pizzaria.

### Conteúdo mínimo

- Imagem;
- Descrição;
- Produtos em destaque;
- Link para menu.

---

## RF-005 — Snack-Bar

O sistema deverá divulgar o snack-bar.

### Conteúdo mínimo

- Imagem;
- Descrição;
- Produtos em destaque;
- Link para menu.

---

## RF-006 — Piscina

O sistema deverá apresentar a piscina como uma experiência independente.

### Informações possíveis

- Horários;
- Preços;
- Regras;
- Capacidade;
- Serviços associados;
- Fotografias;
- Informações sobre reservas.

### Critérios de aceitação

O utilizador deverá conseguir compreender:

- Que a piscina existe;
- Como funciona o acesso;
- Como obter informações/reservar.

---

## RF-007 — Menu

O sistema deverá disponibilizar o menu de produtos.

### Estrutura sugerida

- Pizzas;
- Hambúrgueres;
- Snacks;
- Bebidas;
- Sobremesas;
- Outros.

Cada item poderá conter:

- Nome;
- Descrição;
- Preço;
- Imagem;
- Categoria.

### Requisito

A solução deverá permitir atualização dos itens sem necessidade de alterar diretamente o código-fonte, caso seja implementado CMS/admin.

---

## RF-008 — Galeria

O sistema deverá possuir uma galeria visual.

### Categorias sugeridas

- Restaurante;
- Pizzaria;
- Snack-Bar;
- Piscina;
- Eventos;
- Casamentos;
- Aniversários;
- Espaço exterior;
- Gastronomia.

### Funcionalidades

- Grid responsivo;
- Lightbox/modal;
- Navegação entre imagens;
- Alt text;
- Lazy loading.

### Requisito

As imagens deverão ser otimizadas para web.

---

## RF-009 — Secção de Eventos

O sistema deverá apresentar o espaço como opção para realização de eventos.

### Tipos de eventos

- Casamentos;
- Aniversários;
- Festas privadas;
- Eventos empresariais;
- Confraternizações;
- Outros.

### Conteúdo

- Fotografias;
- Descrição;
- Estrutura disponível;
- Capacidade, se aplicável;
- Tipos de decoração, se aplicável;
- CTA para solicitar orçamento.

---

## RF-010 — Solicitação de Evento

O sistema deverá disponibilizar um formulário específico para eventos.

### Campos obrigatórios

- Nome;
- Telefone;
- E-mail, se aplicável;
- Tipo de evento;
- Data pretendida;
- Número estimado de convidados;
- Horário pretendido;
- Mensagem.

### Campos opcionais

- Orçamento estimado;
- Serviços adicionais;
- Observações.

### Validação

O sistema deverá validar:

- Nome não vazio;
- Telefone válido;
- E-mail válido quando fornecido;
- Tipo de evento selecionado;
- Data válida;
- Número de convidados maior que zero.

### Resultado

Após submissão:

- Exibir mensagem de sucesso;
- Registar a solicitação no backend, caso exista;
- Enviar notificação para o responsável, caso esteja implementado;
- Disponibilizar contacto alternativo por WhatsApp.

---

## RF-011 — Reservas

O sistema deverá permitir ao utilizador iniciar um pedido de reserva.

### Tipos de reserva

- Mesa;
- Piscina;
- Evento.

A primeira versão poderá funcionar como **solicitação de reserva**, sem confirmação automática.

### Dados mínimos

- Nome;
- Telefone;
- Data;
- Hora;
- Número de pessoas;
- Tipo de reserva;
- Observação.

---

## RF-012 — WhatsApp

A plataforma deverá permitir contacto via WhatsApp.

### Comportamento

Ao clicar no CTA de WhatsApp:

- Abrir conversa no WhatsApp;
- Utilizar mensagem pré-preenchida contextualizada, quando possível.

### Exemplos

Reserva:

> Olá, gostaria de fazer uma reserva para [data] às [hora], para [número] pessoas.

Evento:

> Olá, gostaria de obter informações sobre o aluguer do espaço para um [tipo de evento].

---

## RF-013 — Contactos

Deverá existir uma secção de contacto com:

- Telefone;
- WhatsApp;
- E-mail;
- Endereço;
- Horário de funcionamento;
- Redes sociais.

---

## RF-014 — Localização

O sistema deverá apresentar a localização do estabelecimento.

### Requisitos

- Endereço em texto;
- Mapa;
- CTA para obter direções;
- Compatibilidade com mobile.

---

## RF-015 — Redes Sociais

A landing page deverá apresentar links para redes sociais oficiais.

### Possíveis canais

- Instagram;
- Facebook;
- TikTok;
- WhatsApp.

Os links deverão ser configuráveis.

---

## RF-016 — Depoimentos

A página poderá apresentar avaliações/testemunhos reais dos clientes.

Cada depoimento poderá possuir:

- Nome;
- Foto;
- Avaliação;
- Texto;
- Fonte da avaliação, quando aplicável.

Nenhuma avaliação deverá ser inventada.

---

## RF-017 — Footer

O rodapé deverá conter:

- Logo;
- Descrição;
- Links internos;
- Contactos;
- Redes sociais;
- Política de privacidade;
- Termos, quando aplicável;
- Copyright.

---

# 8. Requisitos do CMS / Administração

Caso seja adotado CMS ou backoffice, o administrador deverá conseguir gerir:

## Conteúdo

- Informações institucionais;
- Serviços;
- Menu;
- Produtos;
- Preços;
- Fotografias;
- Galeria;
- Eventos;
- Depoimentos;
- Contactos;
- Horários;
- Redes sociais.

## Reservas

O administrador poderá consultar:

- Solicitações;
- Data;
- Cliente;
- Tipo de serviço;
- Estado.

### Estados sugeridos

```text
Pendente
   |
   +--> Em análise
   |
   +--> Confirmada
   |
   +--> Rejeitada
   |
   +--> Cancelada
```

---

# 9. Requisitos Não Funcionais

## RNF-001 — Responsividade

A aplicação deverá funcionar corretamente em:

- Mobile;
- Tablet;
- Desktop;
- Ecrãs de alta resolução.

Breakpoints deverão ser definidos no design system.

---

## RNF-002 — Performance

A aplicação deverá priorizar carregamento rápido.

### Requisitos

- Imagens comprimidas;
- WebP/AVIF quando suportado;
- Lazy loading;
- Code splitting;
- Minificação;
- Cache;
- CDN para assets, quando disponível.

O objetivo deverá ser atingir pontuação elevada no Lighthouse, especialmente em:

- Performance;
- Accessibility;
- Best Practices;
- SEO.

---

## RNF-003 — SEO

A aplicação deverá possuir:

- Title específico;
- Meta description;
- Open Graph;
- URLs amigáveis;
- Sitemap;
- robots.txt;
- Heading hierarchy;
- Alt text;
- Structured Data para negócio local/restaurante, quando aplicável.

---

## RNF-004 — Acessibilidade

A aplicação deverá seguir boas práticas WCAG.

### Requisitos

- Contraste adequado;
- Navegação por teclado;
- Alt text;
- Labels em formulários;
- Estados de foco;
- Botões semanticamente corretos;
- HTML semântico.

---

## RNF-005 — Segurança

Caso exista backend:

- HTTPS;
- Validação server-side;
- Sanitização de inputs;
- Proteção contra CSRF;
- Rate limiting;
- Proteção contra spam;
- Gestão segura de secrets;
- Logs de erros sem exposição de informações sensíveis.

Os formulários públicos deverão possuir proteção contra submissões automatizadas, como CAPTCHA ou mecanismo equivalente, quando necessário.

---

## RNF-006 — Compatibilidade

Compatibilidade mínima esperada:

- Chrome;
- Edge;
- Firefox;
- Safari;
- Browsers mobile modernos.

---

## RNF-007 — Disponibilidade

A landing page deverá apresentar alta disponibilidade.

Caso seja utilizada infraestrutura cloud, o objetivo deverá ser minimizar pontos únicos de falha.

---

# 10. UX/UI

## 10.1 Princípios

A interface deverá transmitir:

- Qualidade;
- Conforto;
- Diversão;
- Gastronomia;
- Lazer;
- Elegância;
- Hospitalidade.

## 10.2 Direção visual

A identidade visual deverá utilizar:

- Fotografias grandes;
- Espaçamento generoso;
- Tipografia legível;
- CTAs destacados;
- Cards de serviço;
- Galeria visual;
- Secções com ritmo alternado.

## 10.3 CTAs prioritários

Os CTAs mais importantes são:

1. Reservar;
2. Agendar evento;
3. Contactar via WhatsApp.

Estes CTAs deverão permanecer facilmente acessíveis.

---

# 11. Fluxos de Utilizador

## 11.1 Fluxo — Reserva de mesa

```text
Home
 |
 v
Reservar
 |
 v
Selecionar "Mesa"
 |
 v
Preencher formulário
 |
 v
Validar dados
 |
 v
Enviar
 |
 v
Mensagem de sucesso
 |
 v
Restaurante recebe solicitação
```

## 11.2 Fluxo — Evento

```text
Home
 |
 v
Eventos
 |
 v
Explorar espaço
 |
 v
Solicitar orçamento
 |
 v
Preencher formulário
 |
 v
Enviar
 |
 v
Solicitação registada
 |
 v
Equipa contacta cliente
```

## 11.3 Fluxo — WhatsApp

```text
Home
 |
 v
WhatsApp
 |
 v
Abrir WhatsApp
 |
 v
Mensagem pré-preenchida
 |
 v
Cliente envia
```

---

# 12. Modelo de Dados Inicial

Caso seja implementado backend, uma estrutura inicial poderá ser:

## Restaurant

```text
id
name
description
address
phone
email
whatsapp
opening_hours
latitude
longitude
created_at
updated_at
```

## Service

```text
id
name
slug
description
image
is_active
sort_order
created_at
updated_at
```

## MenuCategory

```text
id
name
slug
sort_order
is_active
```

## MenuItem

```text
id
category_id
name
description
price
image
is_available
sort_order
created_at
updated_at
```

## GalleryImage

```text
id
title
description
image
category
sort_order
is_active
created_at
```

## EventType

```text
id
name
description
is_active
```

## EventRequest

```text
id
customer_name
phone
email
event_type_id
requested_date
requested_time
guest_count
message
status
created_at
updated_at
```

## Reservation

```text
id
customer_name
phone
email
reservation_type
reservation_date
reservation_time
guest_count
message
status
created_at
updated_at
```

## Testimonial

```text
id
customer_name
text
rating
image
source
is_active
created_at
```

---

# 13. API — Proposta Inicial

Caso a aplicação utilize API REST:

## Serviços

```http
GET /api/services
GET /api/services/{slug}
```

## Menu

```http
GET /api/menu/categories
GET /api/menu/items
GET /api/menu/items/{id}
```

## Galeria

```http
GET /api/gallery
GET /api/gallery/categories
```

## Eventos

```http
GET /api/events/types
POST /api/events/requests
```

## Reservas

```http
POST /api/reservations
GET /api/reservations/{id}
```

## Contactos

```http
GET /api/contact
```

Os endpoints e contratos finais deverão ser definidos durante o desenho técnico.

---

# 14. Integrações

## 14.1 WhatsApp

Uso para:

- Reservas;
- Solicitações de eventos;
- Contacto geral.

## 14.2 Google Maps / Mapbox

Uso para:

- Exibir localização;
- Direções;
- Contextualização geográfica.

## 14.3 Analytics

Possíveis eventos:

```text
page_view
click_reservation
click_whatsapp
click_event_request
submit_reservation
submit_event_request
view_menu
view_gallery
click_social
```

---

# 15. Requisitos de Conteúdo

O cliente deverá fornecer ou validar:

- Logo;
- Fotografias;
- Nome oficial;
- Descrição do restaurante;
- Menu;
- Preços;
- Horários;
- Localização;
- Telefone;
- WhatsApp;
- E-mail;
- Redes sociais;
- Regras da piscina;
- Preços da piscina;
- Tipos de eventos;
- Capacidade do espaço;
- Informações sobre aluguer;
- Políticas de reserva;
- Política de cancelamento.

O sistema deverá evitar conteúdo fictício na versão de produção.

---

# 16. Gestão de Imagens

As imagens representam um dos principais elementos de conversão do produto.

## Requisitos

- Formatos otimizados;
- Diferentes resoluções por viewport;
- Lazy loading abaixo da área inicial;
- Compressão sem perda visual significativa;
- Alt text;
- Nomes de ficheiros semanticamente relevantes;
- CDN/object storage recomendado para grande volume.

### Categorias

```text
hero/
restaurant/
pizza/
snack-bar/
pool/
events/
weddings/
birthdays/
gallery/
```

---

# 17. SEO Local

A plataforma deverá ser preparada para pesquisas relacionadas ao estabelecimento.

Exemplos:

- restaurante em [cidade];
- pizzaria em [cidade];
- snack-bar em [cidade];
- piscina em [cidade];
- espaço para festas em [cidade];
- espaço para casamento em [cidade].

Quando tecnicamente aplicável, deverá ser utilizado Schema.org com dados de negócio local/restaurante.

---

# 18. Critérios de Aceitação Global

A versão MVP será considerada aceite quando:

1. A página estiver funcional em mobile e desktop.
2. Todas as secções principais estiverem implementadas.
3. Os CTAs de reserva funcionarem.
4. O formulário de eventos funcionar.
5. O contacto via WhatsApp funcionar.
6. A galeria funcionar corretamente.
7. O menu estiver acessível.
8. A localização estiver apresentada.
9. Os links sociais funcionarem.
10. Não existirem erros críticos no browser.
11. A aplicação possuir validação de formulários.
12. A aplicação possuir tratamento de estados de loading, sucesso e erro.
13. Os requisitos básicos de SEO estiverem implementados.
14. Não existirem problemas críticos de acessibilidade.
15. A performance estiver otimizada para produção.

---

# 19. Estados de Interface

Todos os formulários e carregamentos deverão contemplar pelo menos:

## Loading

```text
A enviar...
```

## Sucesso

```text
Pedido enviado com sucesso.
A nossa equipa entrará em contacto consigo.
```

## Erro

```text
Não foi possível enviar o pedido.
Tente novamente ou entre em contacto via WhatsApp.
```

## Validação

Mensagens deverão indicar claramente o campo que necessita de correção.

---

# 20. Observabilidade e Manutenção

Caso exista backend, recomenda-se implementar:

- Logging;
- Monitorização de erros;
- Health check;
- Métricas básicas;
- Alertas para falhas críticas.

O código deverá seguir princípios de:

- Separation of Concerns;
- Single Responsibility;
- DRY;
- Código modular;
- Configuração por ambiente;
- Testes automatizados para regras críticas.

---

# 21. Testes

## 21.1 Testes funcionais

Deverão ser testados:

- Navegação;
- Links;
- Formulários;
- Validação;
- Reservas;
- Solicitações de eventos;
- WhatsApp;
- Galeria;
- Menu;
- Mapa.

## 21.2 Testes responsivos

Testar pelo menos:

- 320px;
- 375px;
- 390px;
- 768px;
- 1024px;
- 1280px;
- 1440px+.

## 21.3 Testes de acessibilidade

Verificar:

- Keyboard navigation;
- Screen reader basics;
- Contraste;
- Labels;
- Focus states;
- Semantic HTML.

---

# 22. Requisitos Técnicos Sugeridos

A stack final deverá ser definida pelo engenheiro responsável, mas recomenda-se:

## Frontend

- Next.js;
- TypeScript;
- React;
- Tailwind CSS ou equivalente;
- React Hook Form;
- Zod.

## Backend

Uma das opções:

- Django + Django REST Framework;
- Laravel;
- Node.js/NestJS;
- Backend serverless.

## Database

- PostgreSQL.

## Storage

- S3-compatible object storage ou serviço equivalente.

## Deploy

- Vercel/Cloudflare para frontend;
- VPS/Cloud Run/Render/AWS/Azure/GCP para backend, conforme arquitetura final.

A utilização destas tecnologias é recomendação, não requisito obrigatório, salvo decisão formal do projeto.

---

# 23. Arquitetura Recomendada

Uma arquitetura inicial poderá ser:

```text
                        ┌──────────────────┐
                        │      Cliente     │
                        │ Browser / Mobile │
                        └────────┬─────────┘
                                 |
                                 v
                        ┌──────────────────┐
                        │    Frontend      │
                        │ Next.js / React  │
                        └────────┬─────────┘
                                 |
                 ┌───────────────┼───────────────┐
                 |               |               |
                 v               v               v
              Content         API REST       Analytics
                 |               |
                 |               v
                 |        ┌─────────────┐
                 |        │  Backend    │
                 |        │ Django/...  │
                 |        └──────┬──────┘
                 |               |
                 |        ┌──────┴──────┐
                 |        v             v
                 |   PostgreSQL      Storage
                 |
                 v
                CMS
```

Para um MVP extremamente simples, a arquitetura poderá ser reduzida para frontend + CMS/headless CMS, sem backend customizado.

---

# 24. Evolução Futura

A arquitetura deverá permitir evolução para:

## V2

- Sistema de reservas em tempo real;
- Painel administrativo;
- Gestão de calendário;
- Confirmação automática;
- Notificações por WhatsApp;
- E-mail transacional;
- Gestão de disponibilidade;
- Gestão de capacidade.

## V3

- Pagamento online;
- Reserva com pagamento antecipado;
- Gestão completa de eventos;
- Faturas;
- Área do cliente;
- CRM;
- Promoções;
- Cupons;
- Programa de fidelização.

---

# 25. Priorização

## Must Have

- Landing page;
- Responsividade;
- Hero;
- Serviços;
- Menu;
- Piscina;
- Eventos;
- Galeria;
- Contactos;
- WhatsApp;
- Formulário de eventos;
- SEO básico;
- Performance.

## Should Have

- Sistema de reserva;
- CMS;
- Analytics;
- Depoimentos;
- Structured Data;
- Área administrativa.

## Could Have

- Login de clientes;
- Notificações;
- Disponibilidade em tempo real;
- Pagamentos;
- Promoções.

## Won't Have no MVP

- Delivery;
- POS;
- Gestão de stock;
- Contabilidade;
- Aplicação mobile nativa.

---

# 26. Definition of Done

Uma funcionalidade será considerada concluída quando:

- Requisitos funcionais estiverem implementados;
- UI estiver alinhada ao design aprovado;
- Desktop e mobile estiverem validados;
- Estados de loading/sucesso/erro estiverem implementados;
- Validações estiverem implementadas;
- Testes relevantes estiverem concluídos;
- Não existirem bugs críticos;
- SEO básico estiver implementado onde aplicável;
- Código estiver versionado e revisto;
- Documentação técnica estiver atualizada.

---

# 27. Checklist para Kick-off

Antes do início do desenvolvimento, deverão ser definidos:

- [ ] Nome oficial do estabelecimento;
- [ ] Logo;
- [ ] Identidade visual;
- [ ] Paleta de cores;
- [ ] Tipografia;
- [ ] Fotos;
- [ ] Menu;
- [ ] Preços;
- [ ] Horários;
- [ ] Preços da piscina;
- [ ] Regras da piscina;
- [ ] Tipos de eventos;
- [ ] Capacidade;
- [ ] Preços/condições de aluguer;
- [ ] Política de cancelamento;
- [ ] Telefone;
- [ ] WhatsApp;
- [ ] E-mail;
- [ ] Endereço;
- [ ] Coordenadas;
- [ ] Redes sociais;
- [ ] Método de gestão das reservas;
- [ ] Responsável por responder às solicitações;
- [ ] Stack tecnológica;
- [ ] Estratégia de deploy;
- [ ] Estratégia de CMS/backoffice.

---

# 28. Nota Final para a Equipa de Engenharia

A plataforma deverá ser concebida não apenas como uma página institucional, mas como o **ponto central de presença digital e conversão comercial do estabelecimento**.

A arquitetura e o código devem permitir que a solução evolua de uma landing page para uma plataforma de:

- reservas;
- gestão de eventos;
- comunicação com clientes;
- gestão de conteúdo;
- promoção de produtos;
- gestão de disponibilidade.

O MVP deve, contudo, manter simplicidade operacional e foco em três ações principais do utilizador:

```text
EXPLORAR
   ↓
CONFIAR
   ↓
RESERVAR / CONTACTAR / AGENDAR
```
