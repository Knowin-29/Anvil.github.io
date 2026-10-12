# Anvil project homepage

English static research project page for **Anvil: Scaling
Embodied Spatial Intelligence through Knowledge Recirculation**. The framework
connects Anvil-Gen, Anvil-Ben and Anvil-MOPD. The owner authorized public release
on September 26, 2026. The project page is separate from the engineering source
and the anonymous peer-review mirror.

The public page omits author names, affiliations, project leadership roles and
personal contact details. This is content-level de-identification, not a claim
that the hosting account or repository history is anonymous. Required copyright
and third-party license notices remain in the source repository.

## Local preview and deployment

For local preview: `python -m http.server 10324 --bind 127.0.0.1`.
No build step or credentials are needed. The approved public destination is
GitHub Pages; deployment uses the reviewed main branch.
An account-based hosting URL or repository namespace can reveal ownership even
when the page text omits author identities. Anonymous review requires an
appropriate anonymous destination; editing this page alone does not establish it.

Edit `index.html` for content, `style.css` for appearance, and `site.js` for
interactions. The site includes responsive layouts, light/dark
themes, keyboard-accessible showcase tabs and enlargable figures. It loads no
analytics, remote fonts, remote scripts or runtime APIs.

## Release boundary

- Paper, data and model downloads remain unpublished placeholders. Source-code
  release status is updated separately after its clean-history publication.
- No private source, credentials, data index,
  checkpoint files, review records or logs are copied into this repository.
- Private manuscript drafts, the unpublished submission PDF and LaTeX source
  are not included or published with this website.
- Only selected existing Anvil figures and aggregate reported results are shown.
- Text and the final-model table follow the submitted manuscript package
  supplied by the owner and verified on October 12, 2026. The page explicitly labels the 5.8M / 160K scale and final
  model values as manuscript-reported, not newly verified downloadable artifacts.
- The interface has eleven native spatial formats. Framework and allocation
  artwork are rendered directly from the owner-selected review manuscript's
  Figure 1 and Figure 2. Original PDFs and their metadata are not published.
- Table values follow `tables/eval_results.tex`, the table actually included by
  the supplied final manuscript: BLINK 91.13, ERQA 50.52, mean 74.27 and gain
  +9.29 pp over the base model. The previous page had used a different, inactive
  table file. This update corrects source selection; it does not imply a new
  evaluation of a released checkpoint. The manuscript itself is unchanged.
- Provider names in the framework are illustrative; they do not establish that
  those endpoints were used in a released production run. The historical routing
  and repair studies remain explicitly separate from the final model.
- Controlled coverage, routing and repair studies remain separate from the final
  checkpoint. CPU timing covers construction from cached RGB-D frames, not full
  semantic production. Semantic-uniform routing is the highlighted control.
- Data downloads stay on hold. Model download links require matching weight
  hashes, evaluation records and release approval. No unverified checkpoint is
  offered under the final model's name.
- No robotics-execution success or universal SOTA claim is implied.

The narrative structure takes inspiration from the
[RynnBrain project page](https://alibaba-damo-academy.github.io/RynnBrain.github.io/).
No RynnBrain code, images, logos or model results are copied.

Website code is MIT licensed. Anvil figures are provided for project presentation;
underlying source datasets/images retain their original rights and licenses.
