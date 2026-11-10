# Dark Mode Principles

## Rule 1: Nodes with colors

* Only **background color**, **font color**, **border color** and **text-shadow color** are converted by the algorithm (the algorithm is continuously optimized; see *Algorithm* below)
* Gradients are first mixed into a single color and then converted (they become solid colors in Dark Mode)
* `SVG` nodes are skipped (to be improved later)
* Nodes with background images are skipped (see *Rule 2* below)

> **Note:**
> - The before/after values of background color and font color must be **passed down** to child nodes for their calculations
> - Nodes with a background color but no font color need an **additional** computed font color

## Rule 2: Nodes with background images

* If there is text above the image, a complementary color is added beneath the image to keep that text readable (if the original Light Mode background color is grayscale, the original Light Mode **background color** is used; otherwise the converted Dark Mode **background color** is used)
* `SVG` nodes are skipped (SVG may have animation states, which are not controllable)

> **Note:**
> - The background-image rules affect descendants until a child node has a visible background color (alpha ≥ 0.05), at which point *Rule 1* applies again

## Algorithm: color conversion

* **Background color**:
  * The background color is processed first; the font color is then processed based on the converted background color
  * High-lightness gray/white backgrounds (l > 40) have their lightness reduced (perceived brightness above the threshold is treated as white; threshold: 250)
  * Background colors with high perceived brightness (> threshold) are adjusted down to the threshold (threshold: 190)
  * Background colors with low perceived brightness (< threshold) are adjusted up to the threshold (threshold: 22)
* **Font color**, **border color**:
  * Bright font colors (close to white perceived brightness) are left unchanged
  * The perceived-brightness difference from the background color is computed; above the threshold no change is made, below the threshold it is adjusted to the threshold (threshold: 65)
* **Text-shadow color**:
  * Treated the same way as the background color, but the converted text-shadow color is not used to compute the font color

> **Note:**
> - Background color alpha is included in the perceived-brightness calculation
