# NSBM Space Museum - Group 58

Web-based Augmented Reality (WebAR) space exhibition built with **A-Frame 1.3.0** and **AR.js 3.4.5**, tracking the standard **Hiro marker**.

---
## 3D Model Attribution & License

This project uses a custom glTF/GLB 3D model:

* **Model File**: `models/astronaut.glb`
* **Object**: 3D Spacewalk Astronaut
* **Source**: [Google model-viewer Shared Assets](https://github.com/google/model-viewer/tree/master/packages/shared-assets/models) / [Poly by Google](https://poly.google.com/)
* **Creator**: Google
* **License**: [Creative Commons Attribution 4.0 International (CC BY 4.0)](https://creativecommons.org/licenses/by/4.0/)
* **Usage**: Free to share, adapt, and use for educational and commercial purposes with attribution.

---

## Project Features

1. **Hiro Marker Scene**:
   * Multi-object layout with Earth (`<a-sphere>`), Rocket (`<a-cylinder>`, `<a-cone>`), Satellite (`<a-box>`), and Exhibition Floor (`<a-plane>`).
   * 3D text titles: `GROUP 58` and `NSBM SPACE MUSEUM`.

2. **Animations**:
      **Earth**: Continuous Y-axis 360° rotation (`property: rotation`).
      **Satellite**: Floating back-and-forth position movement (`property: position; dir: alternate`).
      **Rocket**: Continuous 360° rotation assembly.

3. **3D glTF/GLB Model**:
    Genuine Astronaut 3D model loaded from `models/astronaut.glb` on an elevated pedestal.

4. **User Interactions**:
      **Tap Earth**: Cycles through photographic color tints (`color-changer` component).
      **Tap Rocket**: Toggles scale between 1.0x and 1.35x (`grow-on-tap` component).

5. **Detection Status Banner**:
      Real-time banner outside the scene updating dynamically:
         * Red: `SEARCHING FOR HIRO MARKER...`
          * Green: `MARKER FOUND – WELCOME TO NSBM SPACE       MUSEUM!`
         * Red: `MARKER LOST – PLEASE SHOW THE HIRO MARKER.`