# General Guidelines & Grid
* **Layout Strategy:** Use Auto Layout for everything. No absolute positioning for layout structure.
* **The 8pt Grid:** Spacing must be multiples of 8.
* **Density:** Breathable. Use large margins (80px+ on desktop).
* **Base Unit:** Root font size is 16px.

# Design System Guidelines & Token Mapping

## Technical Constraints (CSS Variables)
The AI must strictly adhere to the provided CSS variables. Do not invent new hex codes.

* **Global Radius:** `var(--radius)` which is **0px**. No rounded corners.
* **Shadows:** `var(--elevation-sm)` (Hard shadow: 4px 4px 0px Black).
* **Fonts:**
  * Headers: `var(--font-family-headers)` ('Michroma').
  * Body: `var(--font-family-body)` ('Satoshi').

## Color Application Strategy
* **Primary Action (Orange):** Use `var(--primary)` (#F24405).
    * *Rule:* Text on Primary must be `var(--primary-foreground)` (#1A1A1A).
* **Surfaces (The "Concrete" Look):**
    * **Main Background:** Use `var(--card)` (#F2F0E4) for large structural blocks to maintain the industrial/concrete aesthetic.
    * **Panels/Modals:** Use `var(--popover)` or `var(--background)` (#FBFBFB) for floating elements.
* **Typography Colors:**
    * **Headings:** `var(--foreground)` (#1A1A1A).
    * **Body Text:** `var(--foreground)` or `var(--muted-foreground)` for secondary text.
    * **Borders:** Use `var(--border)` (#E3E0D1) for subtle structural lines.

## Typography Scale (Strict)
Follow the CSS variable definitions for hierarchy:
* **H1 (Hero):** `var(--text-h1)` (80px).
* **H2 (Section):** `var(--text-h2)` (40px).
* **P (Body):** `var(--text-p)` (20px). *Note: This is large/premium.*
* **Button Text:** `var(--text-button)` (20px, Bold, Tracking 1.2px).
* **Labels/Captions:** `var(--text-label)` (14px).

# Component Construction Rules

## Button Component
* **Style:** Physical, mechanical actuator.
* **Variables:**
  * Background: `var(--primary)`
  * Text: `var(--primary-foreground)`
  * Font: `var(--font-family-body)`
  * Weight: `var(--font-weight-bold)`
  * Letter Spacing: `var(--letter-spacing-button)`
  * Radius: `var(--radius)` (0px)
  * Shadow: `var(--elevation-sm)`

## Navigation Bar (Sticky)
* **Background:** `var(--popover)` or `var(--background)` (The lighter paper tone).
* **Border:** 1px solid `var(--foreground)`.
* **Link Text:** `var(--text-label)` in Uppercase.
* **Active State:** Highlight with `var(--accent)`.

## Cards & Containers
* **Background:** `var(--card)` (The Concrete Cream).
* **Border:** `1px solid var(--border)`.
* **Radius:** `var(--radius)` (0px).
* **Content:** Combine `var(--text-h3)` for titles and `var(--text-p)` for descriptions.

# Motion & Animation
* **Transition:** `linear` or `cubic-bezier(0, 1, 0, 1)` (Instant/Mechanical).
* **Duration:** Fast (150ms).
* **Hover:** Use `var(--accent)` for hover states on interactive elements.
<!--

System Guidelines

Use this file to provide the AI with rules and guidelines you want it to follow.
This template outlines a few examples of things you can add. You can add your own sections and format it to suit your needs

TIP: More context isn't always better. It can confuse the LLM. Try and add the most important rules you need

# General guidelines

Any general rules you want the AI to follow.
For example:

* Only use absolute positioning when necessary. Opt for responsive and well structured layouts that use flexbox and grid by default
* Refactor code as you go to keep code clean
* Keep file sizes small and put helper functions and components in their own files.

--------------

# Design system guidelines
Rules for how the AI should make generations look like your company's design system

Additionally, if you select a design system to use in the prompt box, you can reference
your design system's components, tokens, variables and components.
For example:

* Use a base font-size of 14px
* Date formats should always be in the format “Jun 10”
* The bottom toolbar should only ever have a maximum of 4 items
* Never use the floating action button with the bottom toolbar
* Chips should always come in sets of 3 or more
* Don't use a dropdown if there are 2 or fewer options

You can also create sub sections and add more specific details
For example:


## Button
The Button component is a fundamental interactive element in our design system, designed to trigger actions or navigate
users through the application. It provides visual feedback and clear affordances to enhance user experience.

### Usage
Buttons should be used for important actions that users need to take, such as form submissions, confirming choices,
or initiating processes. They communicate interactivity and should have clear, action-oriented labels.

### Variants
* Primary Button
  * Purpose : Used for the main action in a section or page
  * Visual Style : Bold, filled with the primary brand color
  * Usage : One primary button per section to guide users toward the most important action
* Secondary Button
  * Purpose : Used for alternative or supporting actions
  * Visual Style : Outlined with the primary color, transparent background
  * Usage : Can appear alongside a primary button for less important actions
* Tertiary Button
  * Purpose : Used for the least important actions
  * Visual Style : Text-only with no border, using primary color
  * Usage : For actions that should be available but not emphasized
-->
