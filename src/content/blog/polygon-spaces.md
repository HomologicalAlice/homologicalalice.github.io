---
title: Notes on the cohomology of polygon spaces
pubDate: 2026-03-29
---

These are the beginning of my notes on polygon spaces. I want to understand the integral cohomology ring of the moduli space of polygons in $\mathbb{R}^3$ with prescribed edge lengths, using the Kirwan map from equivariant Morse theory.

Let $\mathbf{r} = (r_1, \ldots, r_n)$ be a generic length vector. The polygon space $M(\mathbf{r})$ parametrises closed $n$-gons in $\mathbb{R}^3$ whose $i$-th edge has length $r_i$, up to rotation. It arises as a symplectic reduction

$$M(\mathbf{r}) \;=\; \prod_{i=1}^{n} S^2(r_i) \mathbin{/\mkern-6mu/} \mathrm{SO}(3),$$

and the Kirwan map $\kappa \colon H^*_{\mathrm{SO}(3)}(\prod S^2) \to H^*(M(\mathbf{r}))$ gives us a concrete way to describe the cohomology ring.

Most of the existing literature works over $\mathbb{Q}$, where the rational cohomology ring is well understood. The integral picture is more delicate: there is torsion to account for, and the surjectivity of the Kirwan map is no longer automatic. I am interested in understanding exactly when and how this fails.

This post is only a starting point. I plan to write more as I work through the details.
