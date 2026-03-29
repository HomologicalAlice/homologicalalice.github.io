---
title: From Almost Complex Structures to Complex Manifolds
pubDate: 2026-03-29
---

In the first lecture of any complex analysis course we will learn a natural way to introduce the complex numbers: equip the set $\mathbb{R}^2$ with the multiplication
$$
(x,y)\cdot(u,v)=(xu-yv,\; xv+yu),
$$
and identify $(x,y)$ with $x+iy$, where $i^2=-1$. In this viewpoint $i=(0,1)\in\mathbb{R}^2$, and
$$
i^2=(0,1)\cdot(0,1)=(-1,0),
$$
which is naturally identified with $-1$.

However, one sort of notation you might see in many places, namely $iv$ for a tangent vector $v\in T_p\mathbb{R}^2$, is *not* a priori well-defined: the symbol $i$ lives on the base while $v$ lives in a tangent fibre. Though it is true that we could regard $T_p\mathbb{R}^2$ as $\mathbb{R}^2$, this is definitely not natural in geometry. To understand this more essentially, we first explain how to regard $\mathbb{C}$ as a Lie group.

$\mathbb{C}$ is *not* a Lie group under multiplication, since $(0,0)$ has no multiplicative inverse. Hence we should not use multiplicative left translations to build fibrewise maps on $T\mathbb{C}$. When we regard $\mathbb{C}$ as a Lie group, we always mean the additive group $(\mathbb{C},+)$.

However, the "multiply by $i$" map is still useful, since now
$$
\phi:\ (\mathbb{C},+)\longrightarrow(\mathbb{C},+),\qquad \phi(z)=iz,
$$
*is* a group homomorphism:
$$
\phi(x+y)=i(x+y)=ix+iy,\qquad \phi(0)=0.
$$
Therefore at the identity $e=0$ the differential
$$
A:=d\phi_e:\ T_e\mathbb{C}\longrightarrow T_e\mathbb{C}
$$
is a linear automorphism. In the standard basis it is the $90^\circ$ rotation, so $A^2=-\mathrm{Id}$.

Let $L_p$ denote additive left translation $L_p(q)=p+q$ so that $dL_p$ identifies $T_0\mathbb{C}$ with $T_p\mathbb{C}$. We obtain a natural fibrewise endomorphism by
$$
J_p := dL_p \circ A \circ dL_{-p}: T_p\mathbb{C}\to T_p\mathbb{C},
$$
which assembles to a smooth bundle endomorphism $J:T\mathbb{C}\to T\mathbb{C}$. Since $dL_p=\mathrm{Id}$ for translations, this gives $J_p\equiv A$, constant in $p$, and in particular $J^2=-\mathrm{Id}$.

With this $J$ in hand, the scalar action of a complex number on a tangent vector is well-defined: for $v\in T_p\mathbb{C}$ and $a,b\in\mathbb{R}$,
$$
(a+ib)\cdot v := a\,v + b\,J_pv.
$$

> **Remark.**
> For a smooth map $f:M\to M$, the induced map on the tangent bundle
> $$
> Tf:TM\to TM,\qquad (p,v)\mapsto\big(f(p),df_p(v)\big)
> $$
> does *not* map each fibre to itself. To obtain a global fibrewise endomorphism one needs the Lie group structure: left translations identify fibres, and an endomorphism $A:\mathfrak g\to\mathfrak g$ at the identity extends to
> $$
> J_p=dL_p\,A\,dL_{p^{-1}}:T_pG\to T_pG.
> $$

This construction leads naturally to the standard notion of an almost complex structure.

## Complexification and $(p,q)$-types

> **Definition (Almost complex structure).**
> Let $M$ be a smooth manifold. An *almost complex structure* on $M$ is a smooth bundle endomorphism
> $$
> J:TM\to TM
> $$
> such that for every $p\in M$, the linear map $J_p:T_pM\to T_pM$ satisfies
> $$
> J_p^2=-\mathrm{Id}_{T_pM}.
> $$

> **Definition (Almost complex manifold).**
> A smooth manifold $M$ together with an almost complex structure $J$ is called an *almost complex manifold* and is denoted $(M,J)$.

Given an almost complex manifold $(M,J)$, we complexify the tangent bundle:
$$
T^{\mathbb{C}}M := TM\otimes_{\mathbb{R}}\mathbb{C}.
$$
The map $J:TM\to TM$ extends $\mathbb{C}$-linearly to
$$
J^{\mathbb{C}}:T^{\mathbb{C}}M\to T^{\mathbb{C}}M,\qquad
J^{\mathbb{C}}(v\otimes z):=(Jv)\otimes z.
$$
Since $J^2=-\mathrm{Id}$, we have
$$
(J^{\mathbb{C}})^2=-\mathrm{Id}
$$
on $T^{\mathbb{C}}M$.

After complexification, any element of $T_x^{\mathbb{C}}M$ can be written as
$$
u+iv \qquad \text{with } u,v\in T_xM,
$$
where this really means
$$
u:=u\otimes 1,\qquad iv:=v\otimes i.
$$
So $i$ acts on the scalar factor in $T_xM\otimes_{\mathbb{R}}\mathbb{C}$, not directly on $v\in T_xM$.

With this convention, for $u,v\in T_xM$ we may write
$$
J^{\mathbb{C}}(u+iv)=Ju+iJv.
$$
Thus $J^{\mathbb{C}}$ acts $\mathbb{C}$-linearly on $T^{\mathbb{C}}M$.

Since $J_x^{\mathbb{C}}:T_x^{\mathbb{C}}M\to T_x^{\mathbb{C}}M$ is $\mathbb{C}$-linear and satisfies $(J_x^{\mathbb{C}})^2=-\mathrm{Id}$, its eigenvalues are $\pm i$. We therefore define
$$
T_x^{1,0}M:=\ker\big(J_x^{\mathbb{C}}-i\,\mathrm{Id}\big),\qquad
T_x^{0,1}M:=\ker\big(J_x^{\mathbb{C}}+i\,\mathrm{Id}\big),
$$
and obtain the direct sum decomposition
$$
T_x^{\mathbb{C}}M=T_x^{1,0}M\oplus T_x^{0,1}M.
$$

> **Proposition.**
> For any real tangent vector $X\in T_xM$, we have
> $$
> X-iJX\in T_x^{1,0}M,\qquad
> X+iJX\in T_x^{0,1}M.
> $$
> Equivalently,
> $$
> T_x^{1,0}M=\{X-iJX\mid X\in T_xM\},\qquad
> T_x^{0,1}M=\{X+iJX\mid X\in T_xM\}.
> $$

**Proof.** Write $X$ as $X\otimes 1\in T_xM\otimes_{\mathbb{R}}\mathbb{C}$. Then
$$
J_x^{\mathbb{C}}(X-iJX)
=JX-iJ(JX)
=JX+iX.
$$
On the other hand,
$$
i(X-iJX)=iX+JX.
$$
So
$$
J_x^{\mathbb{C}}(X-iJX)=i(X-iJX),
$$
which shows $X-iJX\in T_x^{1,0}M$. The argument for $X+iJX$ is identical and gives eigenvalue $-i$.

We now use the splitting
$$
T_x^{\mathbb{C}}M=T_x^{1,0}M\oplus T_x^{0,1}M
$$
to introduce $(p,q)$-type objects.

> **Definition.**
> For $p,q\ge 0$, the $(p,q)$-tangent space at $x\in M$ is
> $$
> T_x^{p,q}M :=
> \Lambda^p(T_x^{1,0}M)\otimes_{\mathbb{C}}\Lambda^q(T_x^{0,1}M).
> $$
> The $(p,q)$-tangent bundle is
> $$
> T^{p,q}M:=\bigsqcup_{x\in M}T_x^{p,q}M.
> $$

Dually, let
$$
T_x^{*\,1,0}M:=(T_x^{1,0}M)^*,\qquad
T_x^{*\,0,1}M:=(T_x^{0,1}M)^*.
$$

> **Definition.**
> For $p,q\ge 0$, the $(p,q)$-cotangent space at $x$ is
> $$
> \Lambda_x^{p,q}T^*M :=
> \Lambda^p(T_x^{*\,1,0}M)\otimes_{\mathbb{C}}\Lambda^q(T_x^{*\,0,1}M).
> $$
> The $(p,q)$-cotangent bundle is
> $$
> \Lambda^{p,q}T^*M:=\bigsqcup_{x\in M}\Lambda_x^{p,q}T^*M.
> $$
> A smooth section of $\Lambda^{p,q}T^*M$ is called a $(p,q)$-form.

> **Example.**
> Take $M=\mathbb{C}\cong\mathbb{R}^2$ with its standard almost complex structure $J$ given by
> $$
> J\left(\frac{\partial}{\partial x}\right)=\frac{\partial}{\partial y},
> \qquad
> J\left(\frac{\partial}{\partial y}\right)=-\frac{\partial}{\partial x}.
> $$
> Then the complexified cotangent space at a point is spanned by $dx$ and $dy$ over $\mathbb{C}$.
>
> Define the $1$-forms
> $$
> dz:=dx+i\,dy,\qquad
> d\bar z:=dx-i\,dy.
> $$
> One checks that $dz$ vanishes on $T^{0,1}$ and $d\bar z$ vanishes on $T^{1,0}$. Equivalently,
> $$
> dz\in T^{*\,1,0}\mathbb{C},\qquad
> d\bar z\in T^{*\,0,1}\mathbb{C}.
> $$
> Thus
> $$
> \Lambda^{1,0}T^*\mathbb{C}=\mathrm{span}_{\mathbb{C}}\{dz\},
> \qquad
> \Lambda^{0,1}T^*\mathbb{C}=\mathrm{span}_{\mathbb{C}}\{d\bar z\}.
> $$

In analogy with de Rham theory, we define the exterior derivative
$$
d:\Omega^{p,q}(M)\longrightarrow \Omega^{p+q+1}(M),
$$
where $\Omega^{p,q}(M)$ denotes the space of smooth $(p,q)$-forms on $M$.

The operator $d$ is $\mathbb{R}$-linear, satisfies $d^2=0$, and is determined locally by
$$
d(f)=\sum_i \frac{\partial f}{\partial x^i}\,dx^i
\qquad\text{for } f\in C^\infty(M),
$$
and
$$
d(\alpha\wedge\beta)
=d\alpha\wedge\beta+(-1)^{\deg\alpha}\alpha\wedge d\beta.
$$

> **Proposition (Type decomposition of $d$).**
> Relative to $J$, the exterior derivative admits a decomposition
> $$
> d=\partial+\bar\partial+\mu+\bar\mu,
> $$
> where
> $$
> \partial:\Omega^{p,q}\to \Omega^{p+1,q},\qquad
> \bar\partial:\Omega^{p,q}\to \Omega^{p,q+1},
> $$
> $$
> \mu:\Omega^{p,q}\to \Omega^{p+2,q-1},\qquad
> \bar\mu:\Omega^{p,q}\to \Omega^{p-1,q+2}.
> $$

This decomposition of $d$ looks complicated and introduces the extra terms $\mu$ and $\bar\mu$, which at first sight are not very friendly. In the next section we will see that, although this is the general behavior on an almost complex manifold, there is an important special class, namely complex manifolds, for which the picture simplifies drastically. In that case one has
$$
\mu=\bar\mu=0
\qquad\text{and}\qquad
d=\partial+\bar\partial.
$$

## Complex manifolds and the Nijenhuis tensor

We now describe the special class of almost complex manifolds for which the extra terms $\mu,\bar\mu$ disappear.

> **Definition (Complex manifold).**
> An $n$-dimensional *complex manifold* is a topological manifold $M$ equipped with an atlas
> $$
> \{(U_\alpha,z_\alpha)\}
> $$
> such that:
> - each $U_\alpha\subset M$ is open,
> - each $z_\alpha=(z_\alpha^1,\dots,z_\alpha^n):U_\alpha\to\mathbb{C}^n$ is a homeomorphism onto an open set in $\mathbb{C}^n$,
> - whenever $U_\alpha\cap U_\beta\neq\varnothing$, the transition map
>   $$
>   z_\beta\circ z_\alpha^{-1}:z_\alpha(U_\alpha\cap U_\beta)\to z_\beta(U_\alpha\cap U_\beta)
>   $$
>   is holomorphic.

In such a chart $(U_\alpha,z_\alpha)$, write $z_\alpha^k=x_\alpha^k+iy_\alpha^k$. Then on $U_\alpha$ we obtain a bundle map $J:TM\to TM$ by declaring
$$
J\left(\frac{\partial}{\partial x_\alpha^k}\right)=\frac{\partial}{\partial y_\alpha^k},
\qquad
J\left(\frac{\partial}{\partial y_\alpha^k}\right)=-\frac{\partial}{\partial x_\alpha^k}.
$$
One checks that this definition is independent of the chosen holomorphic chart. Thus a complex manifold carries a canonical almost complex structure $J$ with $J^2=-\mathrm{Id}$. We call this $J$ *integrable*.

Later we will show that, conversely, an almost complex structure $J$ is integrable in the sense that it comes from such holomorphic coordinates if and only if a certain tensor built from $J$ vanishes. This tensor is the Nijenhuis tensor.

> **Definition (Nijenhuis tensor).**
> Let $(M,J)$ be an almost complex manifold. The *Nijenhuis tensor* of $J$ is the $(1,2)$-tensor
> $$
> N_J:TM\times TM\longrightarrow TM
> $$
> defined on vector fields $X,Y$ by
> $$
> N_J(X,Y)
> :=
> [JX,JY]
> -J[JX,Y]
> -J[X,JY]
> -[X,Y],
> $$
> where $[\cdot,\cdot]$ is the Lie bracket of vector fields.

Somehow we could think of the tensor $N_J$ as measuring the failure of $J$ to come from honest holomorphic coordinates.

We now state a fundamental theorem that explains when an almost complex structure actually comes from honest holomorphic coordinates.

> **Theorem (Newlander–Nirenberg, equivalent characterizations of integrability).**
> Let $(M,J)$ be an almost complex manifold. The following are equivalent:
>
> 1. The Nijenhuis tensor vanishes:
>    $$
>    N_J(X,Y)=0 \quad \text{for all vector fields } X,Y.
>    $$
>
> 2. The exterior derivative has no "torsion terms", i.e.
>    $$
>    d=\partial+\bar\partial,
>    \qquad
>    \text{equivalently } \mu=\bar\mu=0.
>    $$
>
> 3. The $(1,0)$-bundle is involutive:
>    $$
>    [\Gamma(T^{1,0}M),\Gamma(T^{1,0}M)]\subset \Gamma(T^{1,0}M),
>    $$
>    equivalently, $T^{0,1}M$ is involutive.
>
> 4. For every local $(1,0)$-form $\alpha\in\Omega^{1,0}(M)$, its exterior derivative has no $(0,2)$-part:
>    $$
>    (d\alpha)^{0,2}=0.
>    $$
>
> 5. Around every point of $M$ there exist local complex coordinates $(z^1,\dots,z^n)$ such that $J$ acts as multiplication by $i$ in these coordinates. In particular, $(M,J)$ is locally a complex manifold in the sense of holomorphic charts.

We refer to a $J$ satisfying any of the above conditions as *integrable*.

**Proof sketch.** We indicate how the implications fit together.

**(1) $\Leftrightarrow$ (3).**
Write $X^{1,0}:=X-iJX$ and $Y^{1,0}:=Y-iJY$. A standard computation shows
$$
[JX,JY]-J[JX,Y]-J[X,JY]-[X,Y]
=
4\,\big([X^{1,0},Y^{1,0}]\big)^{0,1}.
$$
Thus $N_J\equiv 0$ if and only if $[X^{1,0},Y^{1,0}]$ has no $(0,1)$-part, i.e. lies in $T^{1,0}M$. This is exactly the involutivity condition.

**(3) $\Rightarrow$ (5).**
By Frobenius, an involutive complex subbundle such as $T^{0,1}M$ is tangent to a foliation by complex submanifolds. One shows that these leaves give local coordinates in which $T^{0,1}M$ is spanned by $\{\partial/\partial \bar z^k\}$ for some complex coordinate functions $z^1,\dots,z^n$. In those coordinates, $J$ acts as multiplication by $i$.

**(5) $\Rightarrow$ (2).**
In holomorphic coordinates $z^k=x^k+iy^k$, the decomposition of forms matches the usual complex notation, and $d$ splits as
$$
d=\partial+\bar\partial
\qquad\text{with}\qquad
\mu=\bar\mu=0.
$$

**(2) $\Rightarrow$ (4).**
If $d=\partial+\bar\partial$ with no $\mu,\bar\mu$ terms, then for any $\alpha\in\Omega^{1,0}(M)$,
$$
d\alpha=\partial\alpha+\bar\partial\alpha\in \Omega^{2,0}(M)\oplus\Omega^{1,1}(M),
$$
so there is no $(0,2)$ component.

**(4) $\Rightarrow$ (1).**
Take $\alpha$ to be a local $(1,0)$-form that annihilates $T^{0,1}M$. Expanding $d\alpha(X^{0,1},Y^{0,1})$ and using Cartan's formula
$$
d\alpha(U,V)=U(\alpha(V))-V(\alpha(U))-\alpha([U,V]),
$$
one sees that the $(0,2)$-part of $d\alpha$ measures exactly the $(0,1)$-component of $[X^{0,1},Y^{0,1}]$. Thus $(d\alpha)^{0,2}=0$ forces involutivity, and hence $N_J=0$.

Combining these implications, we obtain the chain
$$
(1)\Longleftrightarrow(3)\Longrightarrow(5)\Longrightarrow(2)\Longrightarrow(4)\Longrightarrow(1).
$$

> **Remark.**
> In the proof above, the most subtle step is $(3)\Rightarrow(5)$. There one applies the Frobenius theorem to the involutive subbundle $T^{0,1}M$ in order to produce local complex coordinates. We do not give a full detailed proof of this step here. The other implications are, morally, formal rewritings.

Geometrically this is reasonable: the hardest part is to show that the almost complex structure actually comes from honest holomorphic coordinate charts. Once such coordinates exist, all the algebraic conditions fall into place.

## Applications of the Nijenhuis tensor

The Nijenhuis tensor $N_J$ may look algebraic and not obviously geometric. However, the theorem above shows that it is in fact extremely powerful:
$$
N_J\equiv 0
\quad\Longleftrightarrow\quad
\text{$J$ is integrable.}
$$
We now give two basic applications.

### All almost complex structures in real dimension $2$ are integrable

In real dimension $2$ the situation simplifies dramatically. In fact, every almost complex structure in dimension $2$ is automatically integrable.

> **Proposition.**
> Let $(M,J)$ be an almost complex manifold of real dimension $2$. Then $N_J\equiv 0$. In particular, $J$ is integrable.

**Proof.** Fix $p\in M$. Choose a local vector field $V$ defined near $p$ such that $V(p)\neq 0$. We first claim that $\{V,JV\}$ is a local frame for $TM$ near $p$. Indeed, if $JV$ were in the span of $V$, say $JV=kV$, then applying $J$ again gives
$$
-V=J^2V=J(JV)=J(kV)=k\,JV=k^2V,
$$
which is impossible. So $V$ and $JV$ are linearly independent.

Now evaluate the Nijenhuis tensor on this basis. By definition,
$$
N_J(V,JV)
=
[V,JV]+J[JV,JV]+J[V,J^2V]-[JV,J^2V].
$$
Since $[X,X]=0$ and $J^2=-\mathrm{Id}$, we obtain
$$
N_J(V,JV)
=
[V,JV]+J[V,-V]-[JV,-V]
=
[V,JV]-J[V,V]+[JV,V]
=
[V,JV]-[V,JV]
=
0.
$$
Thus $N_J(V,JV)=0$ at $p$. As $p$ was arbitrary, $N_J\equiv 0$ on all of $M$.

By Newlander–Nirenberg, vanishing of $N_J$ is equivalent to integrability of $J$.

> **Remark.**
> Another way to phrase this is that in real dimension $2$, the complex line bundle $T^{1,0}M$ has complex rank $1$, so any two local $(1,0)$ vector fields are of the form $fZ$ and $gZ$. Their bracket $[fZ,gZ]$ is again a multiple of $Z$, hence still of type $(1,0)$. Thus $T^{1,0}M$ is involutive, which again forces $N_J=0$.

### Holomorphic $S^1$-actions and complexification

We now give a second application of $N_J$. The message is that on a Kähler manifold, a holomorphic $S^1$-action can be complexified to a holomorphic $\mathbb{C}^*$-action.

Let $(M,\omega,J,g)$ be a Kähler manifold, so in particular $J$ is integrable and $N_J=0$. Suppose we have an $S^1$-action
$$
\rho:S^1\times M\longrightarrow M
$$
which preserves $J$:
$$
\rho_{e^{i\theta}}^*J=J
\qquad\text{for all } e^{i\theta}\in S^1.
$$
Let $X$ be the fundamental vector field of this action,
$$
X_p=\left.\frac{d}{dt}\right|_{t=0}\rho_{e^{it}}(p).
$$
Then $L_XJ=0$, i.e. $X$ is real holomorphic.

Because $N_J=0$, we have the identity
$$
(L_{JX}J)(Y)=-(L_XJ)(JY)
\qquad\text{for all vector fields }Y.
$$
Since $L_XJ=0$, this shows
$$
L_{JX}J=0.
$$
So $JX$ is also real holomorphic.

Still using $N_J=0$ and $L_XJ=0$, we compute
$$
(L_XJ)(X)=[X,JX]-J[X,X]=[X,JX],
$$
so $L_XJ=0$ implies
$$
[X,JX]=0.
$$
Thus $X$ and $JX$ commute, and both are real holomorphic vector fields.

Let $\Phi^\theta$ be the periodic flow of $X$; this is exactly the given $S^1$-action. Let $\Psi^t$ be the flow of $JX$. Assume $JX$ is complete, so $\Psi^t$ exists for all $t\in\mathbb{R}$. Since $[X,JX]=0$, the two flows commute:
$$
\Phi^\theta\circ \Psi^t=\Psi^t\circ \Phi^\theta,
$$
and since $L_XJ=L_{JX}J=0$, each flow is biholomorphic.

We therefore obtain a holomorphic action of $\mathbb{R}\times S^1$ on $M$ by
$$
(t,e^{i\theta})\cdot p:=\Psi^t(\Phi^\theta(p)).
$$
Using the group isomorphism
$$
\mathbb{R}\times S^1\cong \mathbb{C}^*,\qquad
(t,e^{i\theta})\longmapsto e^{t+i\theta},
$$
this defines a holomorphic $\mathbb{C}^*$-action on $M$ extending the original $S^1$-action.

> **Proposition.**
> Let $(M,J)$ be Kähler, let $\rho:S^1\times M\to M$ be an $S^1$-action preserving $J$, and let $X$ be its fundamental vector field. Then $N_J=0$ and $L_XJ=0$ imply
> $$
> L_{JX}J=0,
> \qquad
> [X,JX]=0.
> $$
> If moreover $JX$ is complete, the $S^1$-action extends to a holomorphic $\mathbb{C}^*$-action on $M$.

> **Remark.**
> In many geometric settings, for example compact Hamiltonian Kähler manifolds, $JX$ is automatically complete. In that case, every holomorphic $S^1$-symmetry automatically complexifies to a holomorphic $\mathbb{C}^*$-symmetry.

## Conclusion

TBD, nothing nontrivial in fact.
## References

To be added.
