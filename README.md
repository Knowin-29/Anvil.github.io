# Anvil project homepage

Static research page for **Anvil: Scaling Embodied Spatial Intelligence through
Knowledge Recirculation**, hosted on
[GitHub Pages](https://knowin-29.github.io/Anvil.github.io/).

On 15 October 2026 the owner explicitly approved restoring author names and
affiliations on the public page and arXiv draft. Anonymous review materials
remain separate. Author order and institution numbers follow the supplied
manuscript. Institutional text identifiers are not official logos; approved
logo assets have not yet been supplied. No email or inferred author role is added.

## Preview and deployment

`python -m http.server 10324 --bind 127.0.0.1`

Edit `index.html`, `style.css`, and `site.js`. There is no build step, analytics,
remote font, runtime API or external script. All three showcase panels are
visible; their figures enlarge in a keyboard-accessible dialog. Responsive
layouts and light/dark themes are retained. GitHub Pages deploys the main branch.

## Evidence and resource boundaries

- First-screen highlights show separate controlled studies: +30.25 points for
  mixed vs. replay placement, +2.13 for semantic-uniform vs. flat routing, and
  111/11 = 10.09 times as many correct repairs at an equal call budget.
- Coverage plots include all three arms, including the stronger vacancy-only
  placement result. Routing plots start at zero and state the scene-bootstrap
  interval. These are not scores of a released final MOPD checkpoint.
- The seven-benchmark table remains explicitly manuscript-reported and pending
  final weight/evaluation binding. It is not used as an unqualified headline.
- Figure 1 uses the corrected source-grounded / held-out / training labels.
  The older allocation figure is no longer displayed because its proportions
  differ from the currently constructed package. Native scene illustrations,
  supervision contracts, placement successes/regression and feedback repair
  are all visible. Provider examples do not imply verified use on every record.
- Local package: 5.8M records, 160K canonical images, 5.22M train / 580K held-out.
  Structural checks are not semantic precision or human-review estimates.
- [HF dataset](https://huggingface.co/datasets/Knowin-29/Anvil-Ben): public first
  stage contains 464K CLEVR QA replay annotations, full file-level inventory,
  image index and replay reconstruction. The other spatial records and original
  image package are not publicly released.
- [HF model](https://huggingface.co/Knowin-29/Anvil-MOPD-9B): public model-card
  placeholder only. Four preparation SFT adapters remain in a separate private
  staging repository; no final model weights are claimed.
- [Engineering code](https://github.com/Knowin-29/Anvil/tree/arxiv-release-20261012)
  is uploaded on its private release branch. The author PDF/LaTeX and private
  review logs, data payloads and checkpoints are not copied into this website.

Presentation references: [RoboMME](https://robomme.github.io/index.html),
[ICL for Robots](https://arxiv.org/abs/2609.36012), and the earlier
[RynnBrain page](https://alibaba-damo-academy.github.io/RynnBrain.github.io/).
No reference-site code, media, logos or model results are copied.

Website code is MIT licensed. Anvil figures are shown for project presentation;
source images and datasets retain their respective rights and licenses.
