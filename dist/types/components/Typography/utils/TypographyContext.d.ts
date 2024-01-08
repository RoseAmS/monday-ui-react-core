import React from "react";
type TypographyContext = {
    /**
     * Sets a tolerance for vertical overflow to avoid undeed detetction of overflow
     * Useful for cases where line-height is set and it's smaller than the font's line-height
     */
    overflowTolerance: number;
};
export declare const TypographyContext: React.Context<TypographyContext>;
export {};
