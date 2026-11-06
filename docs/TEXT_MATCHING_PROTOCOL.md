# Standard Operating Procedure: Text-to-Component Mapping Protocol

**Objective**: Ensure 100% textual fidelity between provided image assets and the codebase. Eliminate paraphrasing, AI-generated fillers, or discrepancies.

## Workflow

1. **Extraction Phase**
    * Identify the definitive image source (e.g., `/public/assets/aistudio/sex_page_30ae2e00.png`).
    * Extract text character-by-character, strictly preserving:
        * Exact wording
        * Punctuation (including symbols like &, +, etc.)
        * Capitalization
        * Line breaks and paragraph structure

2. **Audit Phase**
    * Perform `view_file` on the target component file (e.g., `/src/components/SexIntimacyTherapyPage.tsx`).
    * Do NOT rely on previous understanding of the component structure.
    * Audit every paragraph, header, and list item against the image text.

3. **Implementation Phase**
    * Use `write_to_file` with `Overwrite: true` to replace the *entire* component file.
    * Do not perform partial edits if the discrepancy is widespread.
    * Remove all unnecessary logic (e.g., language switching) if it hinders the visual alignment with the image source.

4. **Verification Phase (Mandatory)**
    * Perform a final side-by-side comparison between the *raw image content* and the *new file content*.
    * Confirm zero deviations before finalizing the turn.

## Best Practices
* Never "guess" or "improve" the text; only copy the source.
* If text in the image is ambiguous, pause and ask for clarification rather than hallucinating the text.
* Always assume the user's provided image is the single source of truth.
