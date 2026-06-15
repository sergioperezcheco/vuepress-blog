---
cover: https://picgo.checo.cc/DSC_0180.jpg
icon: star
date: 2024-05-20
category:
  - Blog
tag:
  - About
  - Notes
star: true
sticky: 60
---

# Afterword

This blog mainly serves two types of content: one is technical tinkering and troubleshooting records, and the other is life, photography, and personal interests. Many articles are not standard tutorials but post-mortems I put together after encountering problems in real environments.

<!-- more -->

For me, blogging isn't about packaging everything neatly — it's about preserving "how I judged the situation at the time, what pitfalls I hit, and how it was ultimately resolved." Next time I encounter a similar problem, I can take fewer detours; when others find it through search, they can quickly judge whether this approach suits them.

## AI

The AI category mainly records experiences with large language models and related tools.

Currently planned topics:

- Local LLM deployment, e.g., LM Studio, Ollama.
- Tool chains like DeepSeek, Cherry Studio, SiliconFlow.
- API calls, model integration, and some low-cost usage methods.
- Practical uses of AI tools in daily work.

Articles in this section will be practice-oriented, not just theory. It's only worth recording if it can be run locally, integrated with a client, and solve real problems.

## AWS

AWS currently has the most content on the blog. This section mainly covers cloud service troubleshooting, EC2 operations, Windows/Linux system issues, S3, ALB, IAM, FSx, SSM, CloudWatch, and similar cases.

These articles typically follow this structure:

1. Problem symptoms
2. Key logs
3. Investigation path
4. Root cause diagnosis
5. Solution
6. Follow-up recommendations

Many AWS problems look like cloud platform issues, but the root cause may end up being in the operating system, certificate chain, KMS permissions, Windows Update, AD ports, Kerberos tickets, or third-party security software. I write these down as a reminder: troubleshoot in layers, don't attribute the problem to a specific component right from the start.

## DevOps

The DevOps category covers more general server, container, and service migration records.

For example:

- 1Panel server maintenance
- Docker networking and iptables/nftables issues
- Migrating new-api from SQLite to MySQL
- Blue-green production service switching
- Reverse proxy and database connection issues

The emphasis in this type of content is reproducibility and rollback capability. Operations in production environments can't just aim for "it works" — you also need to consider backups, verification, traffic switching, and failure rollback.

## VPS

The VPS category records servers, networking, domains, and common scripts.

Planned additions:

- Common Linux scripts
- VPS benchmarking and network testing
- Domain, DNS, and certificate configuration
- Nezha Probe, triple-network IPs, proxy and network connectivity

This section will be relatively miscellaneous, but all centered around personal server and network asset management.

## macOS

The macOS category mainly records my own Mac usage, troubleshooting, and hardware inspection.

For example:

- Hardware inspection after receiving the Mac mini M4
- VS Code auto-update failure on external APFS volume
- External drives, app migration, system log investigation

These articles lean toward personal experience, but many pitfalls are common. Especially on macOS, issues with cross-volume operations, permissions, temporary directories, and app auto-updates are usually not obvious — until something goes wrong, and then they're hard to pinpoint.

## Windows and Security

The Windows category currently covers WSL, Kali, and Windows environment-related content.

Planned additions:

- WSL migration and tinkering
- Kali tool environment
- Windows Server operations experience
- Security testing environment setup

This differs from the Windows troubleshooting in the AWS category: the AWS category focuses more on cloud cases, while the Windows category is more about local environments and personal use.

## Photography

Photography is another long-term section.

This section won't focus much on gear specs — it's more about the photos themselves and shooting scenes, like the Southern Anhui Sichuan-Tibet Highway, birds, and football matches. Tech blogs tend to get drier over time; photography keeps this site from being just a problem list and preserves a bit of life.

## Writing Principles

I'll try to follow several principles for future articles:

- Don't include sensitive information — accounts, instance IDs, internal IPs, domains, and keys should all be generalized.
- Write less vague conclusions, more reasoning behind decisions.
- Commands should be directly copyable, but risk warnings must be included.
- Explain root causes, not just steps.
- Production operations must include backup and rollback reminders.
- Unfinished drafts shouldn't be pinned; placeholder content shouldn't be treated as published articles.

## Future Plans

Short-term: clean up existing notes, especially AWS, DevOps, and VPS-related content. Medium-term: further organize the blog's visual design and navigation to make categories clearer and article lists more browsable.

This blog isn't very extensive yet, but it's already developing its own direction: technical problems don't just record "how to do it" but more importantly "why it was done this way." With long-term accumulation, it will become increasingly valuable.
