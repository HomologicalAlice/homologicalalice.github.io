---
title: "The Adams Spectral Sequence for ko"
pubDate: 2026-03-29
updatedDate: 2026-03-31
description: "A learning-oriented overview of the Adams spectral sequence and the computation of the E_2-page for ko."
---

## Abstract

This note gives an overview of the Adams spectral sequence, one of the central tools in algebraic topology for computing stable homotopy groups of spectra. I begin with spectra and the Steenrod algebra, then discuss Adams resolutions, the description of the $E_2$-page in terms of $\operatorname{Ext}$ groups, convergence, and multiplicative structures. The note ends with the computation of the $E_2$-page for the real connective $K$-theory spectrum $ko$, together with the resulting description of $\pi_*(ko)^{\wedge}_2$.

## 1. Introduction

This note is meant as a learning-oriented exposition. I have tried to preserve the main ideas and constructions while keeping the discussion readable. Some categorical and convergence issues are only touched on briefly, but I have kept the mathematical content of the original report intact as much as possible.

As a starting point, let me explain why one needs the category of spectra. If we take the objects to be merely based spaces, for example $\mathbf{Top}_*$, then one cannot give a fully satisfactory definition of morphisms: when invoking the Freudenthal suspension theorem, one of the spaces must be a finite-dimensional CW complex. On the other hand, if we restrict our objects to finite CW complexes, then even the Spanier–Whitehead stable homotopy category fails to admit all coproducts. For these reasons, passing to spectra is natural: spectra form a well-behaved *stable* homotopy category in which these problems are resolved.

> **Definition.**
> A **spectrum** is a sequence of based spaces $\{X_n\}_{n\geq 0}$ equipped with structure maps
> $$
> \sigma_n:\Sigma X_n\longrightarrow X_{n+1},
> $$
> adjoint to maps
> $$
> \bar{\sigma}_n:X_n\longrightarrow \Omega X_{n+1}.
> $$

Every based space $X$ can be naturally promoted to a spectrum, called the **suspension spectrum** $\Sigma^\infty X$, defined by
$$
(\Sigma^\infty X)_n:=\Sigma^n X
$$
with structure maps given by the identity. From now on I will often abuse notation by writing $X$ to denote $\Sigma^\infty X$; this is natural and standard in stable homotopy theory.

> **Definition.**
> For each integer $n\in\mathbb Z$, the **$n$-sphere spectrum** $S^n$ is defined as follows:
>
> - For $n\geq 0$, $S^n$ is the suspension spectrum of the based space $S^n$, with $S^n$ placed in degree $0$.
> - For $n<0$, $S^n$ is the desuspension of $S^0$, i.e.
>   $$
>   S^n=\Sigma^n S^0,
>   $$
>   with $S^0$ placed in degree $-n$.

> **Remark.**
> When I write $S$, I always mean the sphere spectrum $\Sigma^\infty S^0$, not the suspension spectrum of $S^1$. These are different objects in the category of spectra.

One can define maps between spectra, as well as their homotopy classes, in order to obtain stable morphism groups between spectra. I will not develop those definitions in detail here.

> **Definition.**
> The homotopy groups of a spectrum $X$ are defined by
> $$
> \pi_n(X):=[S^n,X].
> $$

In particular,
$$
\pi_n(\Sigma^\infty X)=\pi_n^s(X)
$$
for $X$ a based space.

As usual, one may define the wedge sum and the smash product. The wedge sum admits a fully general construction and poses no serious difficulties. However, when attempting to give a *strict* definition of the smash product within this framework, one encounters real limitations. In fact, the smash product can only be defined coherently in a closed symmetric monoidal stable model category.

I will therefore proceed informally, working within a modern framework such as the category of symmetric spectra, in which the smash product and related monoidal structures are already rigorously established.

Once the smash product is available, we may similarly define the suspension of a spectrum.

> **Definition.**
> Given a spectrum $X$, its $n$-fold suspension is defined by
> $$
> \Sigma^nX:=S^n\wedge X,
> $$
> where $S^n$ denotes the $n$-sphere spectrum.

It is important to observe that, once the smash product is available, the sphere spectrum $S$ becomes the unit object for the monoidal structure:
$$
S\wedge X\cong X\cong X\wedge S.
$$
Moreover, suspension and smash product interact compatibly. In particular, there are natural isomorphisms
$$
\Sigma(X\wedge Y)\cong (\Sigma X)\wedge Y\cong X\wedge (\Sigma Y).
$$

## 2. Steenrod algebra

### 2.1. Steenrod operations

In all that follows, unless otherwise noted, I work mod $2$. Thus
$$
H^*(X)=H^*(X;\mathbb Z/2),
\qquad
H_*(X)=H_*(X;\mathbb Z/2).
$$

> **Definition.**
> The Steenrod operations
> $$
> \operatorname{Sq}^n:H^m(X)\longrightarrow H^{m+n}(X)
> $$
> are characterized by the following five axioms:
>
> 1. **Naturality.** For every map $f:X\to Y$,
>    $$
>    f^*(\operatorname{Sq}^n(x))=\operatorname{Sq}^n(f^*(x)).
>    $$
> 2. $\operatorname{Sq}^0=\mathrm{id}:H^m(X)\to H^m(X)$.
> 3. For $x\in H^n(X)$,
>    $$
>    \operatorname{Sq}^n(x)=x\smile x.
>    $$
> 4. If $n>\deg(x)$ then $\operatorname{Sq}^n(x)=0$.
> 5. **Cartan formula.** For all $x,y\in H^*(X)$,
>    $$
>    \operatorname{Sq}^n(x\smile y)
>    =
>    \sum_{i+j=n}\operatorname{Sq}^i(x)\smile \operatorname{Sq}^j(y).
>    $$

I will not give the topological construction of these operations here. I only note that $\operatorname{Sq}^1$ is the Bockstein homomorphism and that it commutes with suspension. The algebraic heart of the Steenrod algebra lies in the following Adem relations.

> **Proposition.**
> If $i<2j$, then
> $$
> \operatorname{Sq}^i\operatorname{Sq}^j
> =
> \sum_{k=0}^{\lfloor i/2\rfloor}
> \binom{j-k-1}{i-2k}\,
> \operatorname{Sq}^{i+j-k}\operatorname{Sq}^k.
> $$

This relation provides a mechanism for simplification: whenever a product $\operatorname{Sq}^i\operatorname{Sq}^j$ with $i<2j$ appears, we may use the Adem relation to rewrite it in terms of admissible monomials. We adopt the convention that $\binom{n}{k}=0$ if $k<0$ or $k>n$.

> **Example.**
> $$
> \operatorname{Sq}^1\operatorname{Sq}^1=0,
> \qquad
> \operatorname{Sq}^1\operatorname{Sq}^2=\operatorname{Sq}^3,
> \qquad
> \operatorname{Sq}^2\operatorname{Sq}^3=\operatorname{Sq}^5+\operatorname{Sq}^4\operatorname{Sq}^1.
> $$

> **Definition.**
> The mod-$2$ Steenrod algebra $\mathcal A$ is the graded, unital, associative algebra over $\mathbb F_2$ generated by $\operatorname{Sq}^i$ for $i\ge 0$, subject to
> $$
> \operatorname{Sq}^0=1
> $$
> and the Adem relations.

For any based space $X$, the reduced cohomology $\widetilde H^*(X)$ is a left $\mathcal A$-module via
$$
\operatorname{Sq}^I(x):=\operatorname{Sq}^{i_1}\cdots \operatorname{Sq}^{i_\ell}(x),
\qquad
\lambda:\mathcal A\otimes \widetilde H^*(X)\to \widetilde H^*(X).
$$

> **Definition.**
> A sequence $I=(i_1,\dots,i_\ell)$ of non-negative integers defines a product
> $$
> \operatorname{Sq}^I:=\operatorname{Sq}^{i_1}\cdots \operatorname{Sq}^{i_\ell}\in\mathcal A.
> $$
> We say $I$ is **admissible** if $i_s\ge 2i_{s+1}$ for all $1\le s<\ell$, with $i_\ell\ge 1$. The empty sequence $I=()$ is admissible by convention, with length $\ell=0$ and $\operatorname{Sq}^{()}=1$.

I record the following two standard results.

> **Theorem (Milnor basis theorem).**
> The admissible monomials form an $\mathbb F_2$-vector space basis of the Steenrod algebra:
> $$
> \mathcal A=\mathbb F_2\{\operatorname{Sq}^I\mid I\text{ admissible}\}.
> $$

> **Theorem.**
> The operation $\operatorname{Sq}^k$ is decomposable if and only if $k$ is not a power of $2$. Hence
> $$
> \operatorname{Sq}^{2^i},\qquad i\ge 0,
> $$
> for example $\operatorname{Sq}^1,\operatorname{Sq}^2,\operatorname{Sq}^4,\operatorname{Sq}^8,\dots$, generate $\mathcal A$ as an algebra.

A particular subalgebra of the Steenrod algebra will play a special role later:
$$
\mathcal A(1):=\langle \operatorname{Sq}^1,\operatorname{Sq}^2\rangle\subset \mathcal A.
$$

The subalgebra $\mathcal A(1)$ has additive basis
$$
1,\quad
\operatorname{Sq}^1,\quad
\operatorname{Sq}^2,\quad
\operatorname{Sq}^2\operatorname{Sq}^1,\quad
\operatorname{Sq}^3,\quad
\operatorname{Sq}^3\operatorname{Sq}^1,\quad
\operatorname{Sq}^2\operatorname{Sq}^3,\quad
\operatorname{Sq}^1\operatorname{Sq}^5.
$$

The actions of $\Sq^1$ (vertical) and $\Sq^2$ (horizontal) on this basis are shown below:

$$
\begin{CD}
1 @>{\Sq^2}>> \Sq^2 @>{\Sq^1}>> \Sq^3 @>{\Sq^2}>> \Sq^2\Sq^3 \\
@V{\Sq^1}VV @. @. @VV{\Sq^1}V \\
\Sq^1 @>>{\Sq^2}> \Sq^2\Sq^1 @>>{\Sq^1}> \Sq^3\Sq^1 @>>{\Sq^2}> \Sq^1\Sq^5
\end{CD}
$$

There are also diagonal actions $\Sq^2 \xrightarrow{\Sq^1} \Sq^3\Sq^1$ and $\Sq^2\Sq^3 \xrightarrow{\Sq^1} \Sq^1\Sq^5$ not shown in the grid above.

The Steenrod algebra is closely related, as an algebraic structure, to the cohomology of the mod-$2$ Eilenberg–Mac Lane spectrum.

### 2.2. Eilenberg–Mac Lane spectrum

> **Definition.**
> Let $H=\{n\mapsto H_n:=K(\mathbb F_2,n)\}$ be the mod-$2$ Eilenberg–Mac Lane spectrum. The structure maps $\Sigma H_n\to H_{n+1}$ are adjoint to homotopy equivalences
> $$
> H_n\simeq \Omega H_{n+1},
> \qquad\text{for all }n\ge 0.
> $$

We may define homology and cohomology of spectra by:

> **Definition.**
> For any spectrum $Y$ and integer $n$, set
> $$
> H_n(Y):=\pi_n(H\wedge Y)=[S^n,H\wedge Y],
> \qquad
> H^n(Y):=[Y,\Sigma^nH].
> $$

> **Proposition.**
> There is a canonical isomorphism of graded $\mathbb F_2$-algebras
> $$
> \mathcal A\cong H^*(H),
> $$
> sending each Steenrod square $\operatorname{Sq}^i$ to its representing map $H\to \Sigma^iH$.

The main reason for introducing $H$ is that, for $Y$ a spectrum bounded below and with homology of finite type, smashing with $H$ yields a decomposition.

> **Proposition (Splitting of $H\wedge Y$).**
> Let $Y$ be bounded below with
> $$
> H_*(Y)=\mathbb F_2\{\alpha_u\}
> $$
> of finite type, and let $\{a_u\}$ be the dual basis of $H^*(Y)$, where $|a_u|=|\alpha_u|=n_u$. Denote by
> $$
> \alpha_u:S^{n_u}\longrightarrow H\wedge Y,
> \qquad
> a_u:Y\longrightarrow \Sigma^{n_u}H
> $$
> the representing maps. Then the canonical maps
> $$
> \bigvee_u\Sigma^{n_u}H\xrightarrow{\simeq} H\wedge Y
> \qquad\text{and}\qquad
> H\wedge Y\xrightarrow{\simeq}\prod_u\Sigma^{n_u}H
> $$
> are stable equivalences.

In particular, in most situations of interest,
$$
H\wedge Y\simeq \bigvee_u\Sigma^{n_u}H,
$$
so that on cohomology
$$
H^*(H\wedge Y)\cong \bigoplus_u H^*(\Sigma^{n_u}H)\cong \bigoplus_u \Sigma^{n_u}\mathcal A
$$
acquires a natural $\mathcal A$-module structure. This splitting is essential in the construction of the Adams resolution.

## 3. The Adams spectral sequence

### 3.1. Adams resolutions

In this section, unless otherwise stated, all spectra are assumed to be bounded below and to have homology of finite type.

> **Definition.**
> An **Adams resolution** of a spectrum $Y$ is a diagram of spectra
>
> $$
> \begin{CD}
> \cdots @>{i}>> Y^2 @>{i}>> Y^1 @>{i}>> Y^0 @>{\simeq}>> Y \\
> @. @V{j}VV @V{j}VV @V{j}VV \\
> @. K^2 @. K^1 @. K^0
> \end{CD}
> $$
>
> with boundary maps $\partial\colon K^s\to \Sigma Y^{s+1}$, such that for each $s\ge 0$,
> $$
> Y^{s+1}\xrightarrow{i}Y^s\xrightarrow{j}K^s\xrightarrow{\partial}\Sigma Y^{s+1}
> $$
> is a cofiber sequence, and moreover:
>
> 1. Each $K^s$ has the form
>    $$
>    K^s\simeq \bigvee_u \Sigma^{n_u}H.
>    $$
> 2. The induced map
>    $$
>    j^*:H^*(K^s)\longrightarrow H^*(Y^s)
>    $$
>    is surjective.

One can always construct a **canonical Adams resolution** of a spectrum $Y$. Recall that in the stable homotopy category, the sphere spectrum $S$ is the unit object. Let $f:S\to H$ be the unit map, and consider the cofiber sequence
$$
\Sigma^{-1}\overline H\longrightarrow S\xrightarrow{f}H\longrightarrow \overline H,
$$
where
$$
\overline H:=\operatorname{cofiber}(f).
$$
Set
$$
Y^0=Y,
\qquad
Y^{s+1}=\Sigma^{-1}\overline H\wedge Y^s,
\qquad
K^s=H\wedge Y^s.
$$
Then smashing with $Y^s$ yields cofiber sequences
$$
Y^{s+1}\xrightarrow{i}Y^s\xrightarrow{j}K^s\xrightarrow{\partial}\Sigma Y^{s+1}
$$
which assemble into the canonical Adams resolution:

$$
\begin{CD}
\cdots @>{i}>> (\Sigma^{-1}\overline H)^{\wedge 2}\wedge Y @>{i}>> \Sigma^{-1}\overline H\wedge Y @>{i}>> Y^0 @>{\simeq}>> Y \\
@. @V{j}VV @V{j}VV @V{j}VV \\
@. H\wedge(\Sigma^{-1}\overline H)^{\wedge 2}\wedge Y @. H\wedge\Sigma^{-1}\overline H\wedge Y @. H\wedge Y
\end{CD}
$$

with boundary maps $\partial$ completing the cofiber triangles.

Starting from the cofiber sequence above and suspending by $s$, we obtain
$$
\Sigma^sY^{s+1}\xrightarrow{\Sigma^si}\Sigma^sY^s\xrightarrow{\Sigma^sj}\Sigma^sK^s\xrightarrow{\Sigma^s\partial}\Sigma^{s+1}Y^{s+1}.
$$
Applying $H^*(-)$ yields a long exact sequence
$$
\cdots \to H^{n-1}(\Sigma^sK^s)
\xrightarrow{(\Sigma^sj)^*}
H^{n-1}(\Sigma^sY^s)
\xrightarrow{(\Sigma^si)^*}
H^{n-1}(\Sigma^sY^{s+1})
\xrightarrow{(\Sigma^s\partial)^*}
H^n(\Sigma^sK^s)
\to \cdots
$$
and in particular the three-term exact sequence
$$
H^n(\Sigma^{s+1}Y^{s+1})
\xrightarrow{\partial^*}
H^n(\Sigma^sK^s)
\xrightarrow{j^*}
H^n(\Sigma^sY^s).
$$

From this process one obtains a resolution
$$
\cdots \longrightarrow P_s
\xrightarrow{\partial_s} P_{s-1}
\longrightarrow \cdots
\xrightarrow{\partial_1} P_0
\xrightarrow{\epsilon} H^*(Y)
\longrightarrow 0,
$$
where each $P_s$ is a free $\mathcal A$-module, bounded below and of finite type, and
$$
P_s:=H^*(\Sigma^sK^s),
\qquad
\partial_s:=\partial^*\circ j^*:H^*(\Sigma^sK^s)\to H^*(\Sigma^{s-1}K^{s-1}),
\qquad
\epsilon:=j^*:H^*(K^0)\to H^*(Y).
$$

The freeness follows from the splitting $K^s=H\wedge Y^s$ together with the finite-type hypothesis.

Since we have constructed a free resolution, it is natural to consider the $\operatorname{Ext}$ functor.

### 3.2. The Adams spectral sequence and the $E_2$-page

I begin by recalling the basic definitions.

> **Definition.**
> A **spectral sequence of Adams type** is a sequence of bigraded abelian groups
> $$
> E_r^{*,*}=\{E_r^{s,t}\}_{s,t},
> $$
> together with differentials
> $$
> d_r:E_r^{*,*}\to E_r^{*,*}
> $$
> of bidegree $(r,r-1)$, and isomorphisms between pages
> $$
> E_{r+1}^{s,t}\cong H^{s,t}(E_r^{*,*},d_r)
> \qquad\text{for all }r\ge 1.
> $$
> We call $E_r^{*,*}$ the $E_r$-term, $d_r$ the $d_r$-differential, $s$ the filtration degree, and $t-s$ the total degree.

> **Definition.**
> An **unrolled exact couple of Adams type** is a diagram of graded abelian groups and homomorphisms:
>
> $$
> \begin{CD}
> \cdots @>{i}>> A^{s+2} @>{i}>> A^{s+1} @>{i}>> A^s @>{i}>> \cdots \\
> @. @V{j}VV @V{j}VV @V{j}VV \\
> \cdots @. E^{s+2} @. E^{s+1} @. E^s @. \cdots
> \end{CD}
> $$
>
> with boundary maps $\partial\colon E^s\to A^{s+1}$, such that each sequence
> $$
> \cdots \longrightarrow A^{s+1}\xrightarrow{i}A^s\xrightarrow{j}E^s\xrightarrow{\partial}A^{s+1}\longrightarrow \cdots
> $$
> is a long exact sequence. In the Adams case, the bidegrees of the maps $i$, $j$, and $\partial$ are
> $$
> (-1,-1),\qquad (0,0),\qquad (1,0).
> $$

> **Definition.**
> The $r$-th cocycle subgroup of $E^s$ is
> $$
> Z_r^s:=\partial^{-1}\bigl(\operatorname{im}(i^{r-1}:A^{s+r}\to A^{s+1})\bigr).
> $$

To see this, consider the relevant portion of the exact couple:

$$
\begin{CD}
\cdots @>{i}>> A^{s+r} @>{i\cdots i}>> A^{s+1} @>{i}>> A^s @>{i}>> \cdots \\
@. @V{j}VV @V{j}VV @V{j}VV \\
\cdots @. E^{s+r} @. E^{s+1} @. E^s @. \cdots
\end{CD}
$$

with the boundary map $\partial\colon E^s\to A^{s+1}$. An element $x\in E^s$ lies in $Z_r^s$ precisely when $\partial(x)$ is in the image of the composite $i^{r-1}\colon A^{s+r}\to A^{s+1}$.

> **Definition.**
> The $r$-th boundary subgroup of $E^s$ is
> $$
> B_r^s:=j\bigl(\ker(i^{r-1}:A^s\to A^{s-r+1})\bigr).
> $$

> **Definition.**
> The filtration degree $s$ component of the $E_r$-term is
> $$
> E_r^s:=Z_r^s/B_r^s.
> $$

> **Remark.**
> Clearly
> $$
> Z_1^s=E^s,\qquad B_1^s=0,
> $$
> so
> $$
> E_1^s=E^s.
> $$

From here one defines the $r$-th differential
$$
d_r^s:E_r^s\longrightarrow E_r^{s+r}
$$
by
$$
d_r^s([x])=[j(y)],
$$
where $x\in Z_r^s$, $y\in A^{s+r}$, and
$$
\partial(x)=i^{r-1}(y).
$$
One checks that $d_r$ is well-defined and that
$$
\ker d_r^s \cong Z_{r+1}^s/B_r^s,
\qquad
\operatorname{im} d_r^s \cong B_{r+1}^s/B_r^s,
$$
so
$$
H^s(E_r^{*,*},d_r)\cong E_{r+1}^s.
$$
Hence $\{E_r,d_r\}_r$ is indeed a spectral sequence of Adams type, and in this situation $d_r$ has bidegree $(r,r-1)$.

> **Proposition.**
> Consider a tower of spectra of the form
>
> $$
> \begin{CD}
> \cdots @>{i}>> Y^{s+1} @>{i}>> Y^s @>{i}>> \cdots @>{i}>> Y^1 @>{i}>> Y^0 @= Y \\
> @. @V{j}VV @V{j}VV @. @V{j}VV @V{j}VV \\
> @. K^{s+1} @. K^s @. \cdots @. K^1 @. K^0
> \end{CD}
> $$
>
> where $K^s$ is the mapping cone of $i:Y^{s+1}\to Y^s$, and $\partial:K^s\to \Sigma Y^{s+1}$ is the cofiber map. Applying homotopy yields an unrolled exact couple of Adams type, giving rise to a spectral sequence of Adams type with
> $$
> E_1^{s,t}=\pi_{t-s}(K^s).
> $$
> For $s\ge 0$, the $d_1^{s,t}$-differential
> $$
> d_1^{s,t}:E_1^{s,t}\longrightarrow E_1^{s+1,t}
> $$
> is given by the composite
> $$
> \pi_{t-s}(K^s)
> \xrightarrow{\partial}
> \pi_{t-s-1}(Y^{s+1})
> \xrightarrow{j_*}
> \pi_{t-s-1}(K^{s+1}).
> $$

Here one sees explicitly why the bidegrees of the maps $i$, $j$, and $\partial$ are $(-1,-1)$, $(0,0)$, and $(1,0)$ respectively, by examining the following square:

$$
\begin{CD}
\pi_{t-s}(Y^s) @>{i}>> \pi_{(t-1)-(s-1)}(Y^{s-1}) \\
@. @VV{j}V \\
\pi_{(t-1)-s}(Y^s) @<<{\partial}< \pi_{(t-1)-(s-1)}(K^{s-1})
\end{CD}
$$

Applying this proposition to the Adams resolution of $Y$, we obtain the $E_1$-term
$$
E_1^{s,t}=\pi_{t-s}(K^s),
$$
and hence the chain complex
$$
\cdots
\xleftarrow{(j\partial)_*}\pi_*(\Sigma^2K^2)
\xleftarrow{(j\partial)_*}\pi_*(\Sigma K^1)
\xleftarrow{(j\partial)_*}\pi_*(K^0)
\xleftarrow{}0,
$$
where we use the suspension identification
$$
\pi_*(\Sigma^sK^s)\cong \pi_{*-s}(K^s).
$$

From class one sees that this complex is identified, under the $d$-invariant viewpoint, with
$$
\cdots
\longleftarrow \operatorname{Hom}_{\mathcal A}(H^*(\Sigma^2K^2),\mathbb F_2)
\xleftarrow{((j\partial)^*)^*}
\operatorname{Hom}_{\mathcal A}(H^*(\Sigma K^1),\mathbb F_2)
\xleftarrow{((j\partial)^*)^*}
\operatorname{Hom}_{\mathcal A}(H^*(K^0),\mathbb F_2)
\longleftarrow 0,
$$
which is just
$$
\cdots
\longleftarrow \operatorname{Hom}_{\mathcal A}(P_2,\mathbb F_2)
\xleftarrow{\partial_2^*}\operatorname{Hom}_{\mathcal A}(P_1,\mathbb F_2)
\xleftarrow{\partial_1^*}\operatorname{Hom}_{\mathcal A}(P_0,\mathbb F_2)
\longleftarrow 0.
$$

Thus the complex coming from the $E_1$-term is strongly related to the free resolution constructed from the Adams resolution. Taking cohomology yields exactly the $E_2$-term on one hand and the $\operatorname{Ext}$-term on the other, so the Adams spectral sequence takes the form
$$
E_2^s\cong \operatorname{Ext}_{\mathcal A}^s(H^*(Y),\mathbb F_2).
$$

Now let us incorporate the internal grading. Note that
$$
E_1^{s,t}
=
\pi_{t-s}(K^s)
=
[S^{t-s},K^s]
\cong
\operatorname{Hom}_{\mathcal A}\bigl(H^*(\Sigma^sK^s),\Sigma^tH^*(S)\bigr)
=
\operatorname{Hom}_{\mathcal A}\bigl(H^*(\Sigma^sK^s),\Sigma^t\mathbb F_2\bigr).
$$
Equivalently, this is the group of $\mathcal A$-module homomorphisms
$$
H^*(\Sigma^sK^s)\longrightarrow \Sigma^t\mathbb F_2
$$
that lower degree by $t$. We denote it by
$$
\operatorname{Hom}_{\mathcal A}^t(H^*(\Sigma^sK^s),\mathbb F_2).
$$
Hence
$$
E_2^{s,t}
=
\operatorname{Ext}_{\mathcal A}^{s,t}(H^*(Y),\mathbb F_2).
$$

This yields the main theorem.

> **Theorem.**
> The $E_2$-term of the Adams spectral sequence for $Y$ is
> $$
> E_2^{s,t}
> =
> \operatorname{Ext}_{\mathcal A}^{s,t}(H^*(Y),\mathbb F_2).
> $$
> In particular, it is independent of the choice of Adams resolution.

A natural extension gives:

> **Theorem.**
> The $E_2$-term of the Adams spectral sequence $\{E_r(X,Y)=E_r^{*,*}(X,Y)\}_r$ of maps $X\to Y$ is
> $$
> E_2^{s,t}
> =
> \operatorname{Ext}_{\mathcal A}^{s,t}(H^*(Y),H^*(X)).
> $$

### 3.3. Convergence

> **Definition.**
> Let $\{E_r^{s,t}\}_{r\ge 1}$ be a spectral sequence of Adams type, and let $G_*$ be a graded abelian group. We say that
> $$
> E_r^{s,t}\Longrightarrow G_{t-s}
> $$
> if for each total degree $n=t-s$ there is a finite, exhaustive, and separated filtration
> $$
> 0=F^{N+1}G_n\subseteq F^NG_n\subseteq \cdots \subseteq F^0G_n=G_n
> $$
> such that the associated graded pieces satisfy
> $$
> \operatorname{gr}_F^s G_n
> =
> F^sG_n/F^{s+1}G_n
> \cong
> E_\infty^{s,s+n},
> $$
> where
> $$
> E_\infty^{s,t}
> =
> \lim_{r\to\infty}E_r^{s,t}.
> $$

The main convergence statement in this setting is the following.

> **Theorem.**
> For the Adams spectral sequence of a spectrum $Y$, one has
> $$
> E_2^{s,t}
> =
> \operatorname{Ext}_{\mathcal A}^{s,t}(H^*(Y),\mathbb F_2)
> \quad\Longrightarrow\quad
> \pi_{t-s}(Y)^{\wedge}_2.
> $$

So one also needs the definition of $p$-adic completion.

> **Definition.**
> Let $A$ be an abelian group and let $p$ be a prime. The **$p$-adic completion** of $A$ is the inverse limit
> $$
> \widehat A_p:=\varprojlim_n A/p^nA,
> $$
> equipped with the inverse limit topology.

I will not attempt a detailed proof of the convergence theorem here. The convergence and completion discussion is algebraically central, but also technically subtle, so I only record the basic definitions used in the statement.

> **Definition.**
> Let
> $$
> \pi_n(Y)_p^{\wedge}=\varprojlim_e\,\pi_n(Y)/p^e
> $$
> be the algebraic $p$-completion of $\pi_n(Y)$.
>
> If $\pi_*(Y)$ is of finite type, i.e. if $\pi_n(Y)$ is finitely generated for each $n$, then
> $$
> \pi_n(Y)\otimes \mathbb Z_p
> \cong
> \pi_n(Y)_p^{\wedge}
> \cong
> \pi_n(Y_p^{\wedge})
> \qquad\text{for all }n.
> $$

Here $Y_p^{\wedge}$ denotes the $p$-completion of a spectrum, defined as follows.

> **Definition.**
> Fix a prime $p$. For a spectrum $Y$, consider the tower of cofiber sequences
> $$
> Y\longrightarrow Y\wedge S/p^e
> \longrightarrow
> Y\wedge S/p^{e-1}
> \longrightarrow \cdots \longrightarrow Y\wedge S/p,
> $$
> where $S/p^e$ is the cofiber of $p^e:S\to S$. The **$p$-completion** of $Y$ is defined to be the homotopy limit
> $$
> Y_p^{\wedge}:=\operatorname{holim}_e (Y\wedge S/p^e).
> $$
> The canonical maps $Y\to Y\wedge S/p^e$ assemble to the $p$-completion map
> $$
> Y\to Y_p^{\wedge}.
> $$

### 3.4. Naturality and multiplicative structure

> **Theorem.**
> Let $f:Y\to Y'$ be a map of connective spectra, and fix any spectrum $X$. Then $f$ induces a morphism of Adams spectral sequences
> $$
> f_*:\{E_r^{s,t}(X,Y),d_r\}\longrightarrow \{E_r^{s,t}(X,Y'),d_r\},
> $$
> which on the $E_2$-page is given by
> $$
> (f^*)^*:
> \operatorname{Ext}_{\mathcal A}^{s,t}(H^*(Y'),H^*(X))
> \longrightarrow
> \operatorname{Ext}_{\mathcal A}^{s,t}(H^*(Y),H^*(X)),
> $$
> where
> $$
> f^*:H^*(Y')\to H^*(Y)
> $$
> is the induced $\mathcal A$-module homomorphism.

**Proof idea.** The essential step is the construction of a chain map
$$
F_\bullet:P_\bullet(Y)\longrightarrow P_\bullet(Y')
$$
lifting the map $f:Y\to Y'$, unique up to chain homotopy. This induces a morphism of cochain complexes
$$
\operatorname{Hom}_{\mathcal A}(P_\bullet(Y'),\mathbb F_2)
\longrightarrow
\operatorname{Hom}_{\mathcal A}(P_\bullet(Y),\mathbb F_2),
$$
hence a morphism of Adams spectral sequences.

Now I introduce pairings, which underlie the multiplicative structure.

> **Definition.**
> Let $\{E'_r\}$, $\{E''_r\}$, and $\{E_r\}$ be three spectral sequences of Adams type. A **pairing** of these spectral sequences is a collection of bilinear maps
> $$
> \phi_r:E_r'{}^{s,t}\otimes E_r''{}^{s',t'}\longrightarrow E_r^{s+s',t+t'}
> $$
> for all $r\ge 1$, satisfying:
>
> 1. For homogeneous $x\in E_r'$ and $y\in E_r''$,
>    $$
>    d_r(\phi_r(x\otimes y))
>    =
>    \phi_r(d_r(x)\otimes y)
>    +
>    (-1)^{|x|}\phi_r(x\otimes d_r(y)).
>    $$
> 2. If $x\in \ker d_r\subset E_r'$ and $y\in \ker d_r\subset E_r''$, then
>    $$
>    \phi_{r+1}([x]\otimes [y])
>    =
>    [\phi_r(x\otimes y)].
>    $$

Two pairings are especially important:

- the classical **tensor product pairing**,
- the **composition pairing**, which corresponds on the $E_2$-page to the Yoneda pairing.

> **Definition.**
> Let $\mathcal A$ be a graded algebra and let $M,N,P$ be graded $\mathcal A$-modules. For integers $s,t\ge 0$, the **Yoneda pairing** is the bilinear map
> $$
> \cup:
> \operatorname{Ext}_{\mathcal A}^s(M,N)\otimes \operatorname{Ext}_{\mathcal A}^t(N,P)
> \longrightarrow
> \operatorname{Ext}_{\mathcal A}^{s+t}(M,P)
> $$
> defined by splicing extensions. Concretely, if
> $$
> 0\to N\to E_s\to \cdots \to E_1\to M\to 0
> $$
> represents $[x]\in \operatorname{Ext}_{\mathcal A}^s(M,N)$, and
> $$
> 0\to P\to F_t\to \cdots \to F_1\to N\to 0
> $$
> represents $[y]\in \operatorname{Ext}_{\mathcal A}^t(N,P)$, then
> $$
> [x]\cup [y]
> =
> \Bigl[
> 0\to P\to F_t\to \cdots \to F_1\to E_s\to \cdots \to E_1\to M\to 0
> \Bigr]
> $$
> defines an element of $\operatorname{Ext}_{\mathcal A}^{s+t}(M,P)$.

The following two theorems record the tensor product pairing and the composition pairing.

> **Theorem (Adams).**
> Let $X$ and $Y$ be spectra. For each $r\ge 1$ there is a natural pairing of Adams spectral sequences
> $$
> E_r^{s,t}(X)\otimes E_r^{u,v}(Y)
> \xrightarrow{\otimes}
> E_r^{s+u,t+v}(X\wedge Y),
> $$
> which on the $E_2$-page is induced by the tensor-product pairing
> $$
> \operatorname{Ext}_{\mathcal A}^{s,t}(H^*(X),\mathbb F_2)
> \otimes
> \operatorname{Ext}_{\mathcal A}^{u,v}(H^*(Y),\mathbb F_2)
> \longrightarrow
> \operatorname{Ext}_{\mathcal A}^{s+u,t+v}(H^*(X\wedge Y),\mathbb F_2),
> $$
> and which converges to the smash-product pairing
> $$
> \pi_{t-s}(X_2^{\wedge})
> \otimes
> \pi_{v-u}(Y_2^{\wedge})
> \longrightarrow
> \pi_{t+v-s-u}((X\wedge Y)_2^{\wedge}).
> $$

> **Theorem (Moss).**
> Let $X$, $Y$, and $Z$ be spectra. For each $r\ge 1$ there is a natural pairing of Adams spectral sequences
> $$
> \circ:
> E_r^{s,t}(Y,Z)\otimes E_r^{u,v}(X,Y)
> \longrightarrow
> E_r^{s+u,t+v}(X,Z),
> $$
> which on the $E_2$-page agrees with the Yoneda composition
> $$
> \operatorname{Ext}_{\mathcal A}^{s,t}(H^*(Z),H^*(Y))
> \otimes
> \operatorname{Ext}_{\mathcal A}^{u,v}(H^*(Y),H^*(X))
> \longrightarrow
> \operatorname{Ext}_{\mathcal A}^{s+u,t+v}(H^*(Z),H^*(X)),
> $$
> and which converges to the usual composition pairing on completed homotopy groups
> $$
> [Y,Z_p^{\wedge}]_*
> \otimes
> [X,Y_p^{\wedge}]_*
> \longrightarrow
> [X,Z_p^{\wedge}]_*.
> $$
> Moreover, this pairing is associative and unital.

> **Remark.**
> In the special case $X=S^0$, the Adams spectral sequence for any spectrum $Y$ becomes a module over the sphere’s $E_2$-term:
> $$
> E_2^{*,*}(S)\otimes E_2^{*,*}(Y)\longrightarrow E_2^{*,*}(Y),
> $$
> where
> $$
> E_2^{*,*}(S)=\operatorname{Ext}_{\mathcal A}^{*,*}(\mathbb F_2,\mathbb F_2).
> $$
> Graphically, one often draws short line segments between classes in $E_2^{s,t}(Y)$ related by multiplication by generators of $E_2^{*,*}(S)$. For example:
> $$
> \text{a vertical line }(s,t)\to (s+1,t+1)\text{ indicates multiplication by }h_0,
> $$
> and
> $$
> \text{a diagonal line of slope }1\text{ from }(s,t)\to (s+1,t+2)\text{ indicates multiplication by }h_1.
> $$
> These connecting segments are not differentials; they are graphical expressions of the multiplicative structure.

## 4. The $E_2$-page of the Adams spectral sequence for $ko$

In this section I turn to an explicit computation of the $E_2$-page of the Adams spectral sequence converging to $\pi_*(ko)_2^{\wedge}$. By definition,
$$
E_2^{s,t}
=
\operatorname{Ext}_{\mathcal A}^{s,t}(H^*(ko),\mathbb F_2).
$$
So the first task is to identify $H^*(ko)$.

In fact, the following result of Stong shows that:

> **Proposition.**
> There is an $\mathcal A$-module isomorphism
> $$
> H^*(ko)\cong \mathcal A/\mathcal A(1).
> $$

I take this as known, and record a second useful result:

> **Proposition.**
> $$
> \operatorname{Ext}_{\mathcal A}^{*,*}(\mathcal A/\mathcal A(1),\mathbb F_2)
> \cong
> \operatorname{Ext}_{\mathcal A(1)}^{*,*}(\mathbb F_2,\mathbb F_2).
> $$

> **Proof sketch.**
> Write each admissible monomial of the Steenrod algebra $\mathcal A$ in Milnor form
> $$
> \operatorname{Sq}^{i_1}\cdots \operatorname{Sq}^{i_\ell}
> $$
> with $i_1\ge \cdots \ge i_\ell$. For every exponent $i_s$, write
> $$
> i_s=4q_s+r_s,\qquad 0\le r_s<4.
> $$
> Then every Milnor monomial factors uniquely as
> $$
> \alpha\beta,
> \qquad
> \alpha\in \mathcal A(1),\ \beta\in P,
> $$
> where
> $$
> P:=\mathbb F_2\{\text{admissible }\operatorname{Sq}^{4q_1}\operatorname{Sq}^{4q_2}\cdots\}
> $$
> by collecting factors with $r_s<4$ into $\alpha$ and the factors divisible by $4$ into $\beta$.
>
> The assignment
> $$
> \alpha\otimes \beta\longmapsto \alpha\beta
> $$
> yields a vector space bijection
> $$
> \mathcal A(1)\otimes_{\mathbb F_2}P\xrightarrow{\cong}\mathcal A,
> $$
> compatible with the right $\mathcal A(1)$-action. Hence $\mathcal A$ is right free, therefore flat, over $\mathcal A(1)$.
>
> Since $\mathcal A$ is right flat over $\mathcal A(1)$, one obtains
> $$
> \operatorname{Ext}_{\mathcal A}^{*,*}(\mathcal A/\mathcal A(1),\mathbb F_2)
> \cong
> \operatorname{Ext}_{\mathcal A(1)}^{*,*}(\mathbb F_2,\mathbb F_2).
> $$

Now I explain how to begin constructing a possible resolution. Start with the chain complex
$$
\cdots \longrightarrow P_s
\xrightarrow{\partial_s}P_{s-1}
\longrightarrow \cdots
\xrightarrow{\partial_1}P_0
\xrightarrow{\epsilon}\mathbb F_2
\longrightarrow 0.
$$
Set
$$
P_0=\mathcal A(1)\langle A_0\rangle,
$$
where $A_0$ is a formal generator and
$$
\epsilon:P_0\to \mathbb F_2
$$
is defined by $\epsilon(A_0)=1$. Hence
$$
\ker(\epsilon)
=
\operatorname{Span}_{\mathbb F_2}\{\operatorname{Sq}^I A_0\mid I\neq ()\},
$$
and the seven generators of $\ker(\epsilon)$ are
$$
\operatorname{Sq}^1A_0,\;
\operatorname{Sq}^2A_0,\;
\operatorname{Sq}^2\operatorname{Sq}^1A_0,\;
\operatorname{Sq}^3A_0,\;
\operatorname{Sq}^3\operatorname{Sq}^1A_0,\;
\operatorname{Sq}^2\operatorname{Sq}^1\operatorname{Sq}^2A_0,\;
\operatorname{Sq}^5\operatorname{Sq}^1A_0.
$$

To surject onto $\ker(\epsilon)$, define
$$
P_1=\mathcal A(1)\langle B_1,B_2\rangle,
$$
with
$$
\partial_1(B_1)=\operatorname{Sq}^1A_0,
\qquad
\partial_1(B_2)=\operatorname{Sq}^2A_0.
$$
Since
$$
\partial_1(\operatorname{Sq}^1B_1)=\operatorname{Sq}^1\operatorname{Sq}^1A_0=0,
$$
the class $\operatorname{Sq}^1B_1$ lies in $\ker \partial_1$, and similarly $\operatorname{Sq}^2B_1$ covers $\operatorname{Sq}^2\operatorname{Sq}^1A_0$. By choosing $B_2$ to hit $\operatorname{Sq}^2A_0$, one checks that the $\mathcal A(1)$-orbits of $B_1$ and $B_2$ generate the entire kernel.

| Target in $P_0$ | Preimages in $P_1$ |
| --- | --- |
| $\operatorname{Sq}^1A_0$ | $B_1$ |
| $\operatorname{Sq}^2A_0$ | $B_2$ |
| $\operatorname{Sq}^{2,1}A_0$ | $\operatorname{Sq}^2B_1$ |
| $\operatorname{Sq}^3A_0$ | $\operatorname{Sq}^1B_2$ |
| $\operatorname{Sq}^{3,1}A_0$ | $\operatorname{Sq}^3B_1$, $\operatorname{Sq}^2B_2$ |
| $\operatorname{Sq}^{2,1,2}A_0$ | $\operatorname{Sq}^{2,1}B_2$ |
| $\operatorname{Sq}^{5,1}A_0$ | $\operatorname{Sq}^{2,1,2}B_1$, $\operatorname{Sq}^{3,1}B_2$ |
| $0$ | $\operatorname{Sq}^1B_1$, $\operatorname{Sq}^{2,1}B_1$, $\operatorname{Sq}^{3,1}B_1$,<br>$\operatorname{Sq}^3B_2$, $\operatorname{Sq}^{5,1}B_1$, $\operatorname{Sq}^{2,1,2}B_2$, $\operatorname{Sq}^{5,1}B_2$ |

Thus $P_1=\mathcal A(1)\langle B_1,B_2\rangle$ surjects onto $\ker(\epsilon)$, completing the first step of the resolution. Repeating this process gives the entire resolution.

The construction of the full resolution is, in principle, completely computable, but it requires a fair amount of patience to carry out all the successive steps. Rather than writing out the entire resolution, I explain how the $E_2$-page is extracted from it.

Consider the dual cochain complex
$$
\cdots \longrightarrow \operatorname{Hom}_{\mathcal A}(P_1,\mathbb F_2)
\xrightarrow{\partial_1^*}
\operatorname{Hom}_{\mathcal A}(P_0,\mathbb F_2)
\longrightarrow 0.
$$
Pick the dual basis $\{A_0^*\}$ for $\operatorname{Hom}_{\mathcal A}(P_0,\mathbb F_2)$ and $\{B_1^*,B_2^*,\dots\}$ for $\operatorname{Hom}_{\mathcal A}(P_1,\mathbb F_2)$.

By definition, $\partial_1^*(A_0^*)$ is the linear combination of the $B_i^*$ given by the coefficients appearing in $\partial_1(B_i)$. From this one computes
$$
\ker(\partial_1^*),\qquad \operatorname{im}(\partial_1^*)
$$
in each internal degree $t$, and hence the cohomology groups
$$
\operatorname{Ext}_{\mathcal A}^{s,t}(H^*(Y),\mathbb F_2).
$$

Finally, after finitely many steps of calculation, one obtains the familiar picture of the Adams $E_2$-page for $ko$.

<figure>
<img src="/images/adams-e2-ko-chart.png" alt="Adams E2-page for ko: grid with axes s and t, vertical stems at s equals 0, 4, 8, 12, diagonals for h1 multiplication, labels h0, h1, v, w1" />
</figure>

*Figure.* Adams $E_2$-page for $ko$ (horizontal axis $s$, vertical axis $t$), with the classes $h_0$, $h_1$, $v$, and $w_1$ marked. The diagonal segments indicate $h_1$-multiplication, not differentials.

The figure uses horizontal coordinate $s$ (filtration) and vertical coordinate $t$ (internal degree). The marked generators include

$$
h_0\in\operatorname{Ext}^{1,1},\qquad h_1\in\operatorname{Ext}^{1,2},\qquad v\in\operatorname{Ext}^{3,7},\qquad w_1\in\operatorname{Ext}^{4,12},
$$

with $h_0$, $h_1$, $v$, and $w_1$ placed on the grid as drawn. Structurally:

- A vertical $\mathbb Z$-tower along $s=0$ (multiples of $h_0$), with further parallel towers beginning at $s=4$, $8$, and $12$.
- A diagonal $h_1$-multiplication line from near $(0,0)$ to $(2,2)$, and a second diagonal from $(8,4)$ to $(10,6)$.
- The pattern repeats with period $8$ in the $s$-direction, governed by multiplication by $w_1$.

From the chart, one sees that the only potentially nontrivial differential is the one from column $8k+1$ to column $8k$, where $k\in \mathbb N$.

One can verify that this differential vanishes using the derivation rule and computations among the generators. Hence
$$
E_2^{s,t}(ko)=E_\infty^{s,t}(ko).
$$

Finally, reading off the page yields
$$
\pi_*(ko_2^{\wedge})
=
\mathbb Z_2[\eta,\alpha,\beta]/(2\eta,\eta^3,\eta\alpha,\alpha^2=4\beta).
$$

The classes $2$, $\eta$, $\alpha$, and $\beta$ are represented by $h_0$, $h_1$, $v$, and $w_1$, respectively.

## 5. Conclusion

This concludes the main discussion. The key point is that the Adams spectral sequence translates stable homotopy-theoretic questions into algebra over the Steenrod algebra, and in the case of $ko$ this makes the computation of the $2$-completed homotopy groups accessible through an $\operatorname{Ext}$ calculation over $\mathcal A(1)$.

There are still several directions one would naturally want to understand more fully, especially the categorical foundations of spectra, the details of convergence and $p$-completion, and the full explicit construction of the resolution used in the $ko$ calculation. But even at this stage, the overall mechanism of the Adams spectral sequence already becomes visible: one passes from spectra to cohomology, from cohomology to free resolutions, from resolutions to $\operatorname{Ext}$ groups, and finally back to stable homotopy groups.

## References

To be added.
