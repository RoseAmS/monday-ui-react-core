/**
 * System themes: dark, light, black, hacker
 */
export declare enum SystemTheme {
    LIGHT = "light",
    DARK = "dark",
    BLACK = "black"
}
/**
 * Colors which are eligible for theming
 */
export declare enum ThemeColor {
    primaryColor = "primary-color",
    primaryHoverColor = "primary-hover-color",
    primarySelectedColor = "primary-selected-color",
    primarySelectedHoverColor = "primary-selected-hover-color",
    primarySelectedOnSecondaryColor = "primary-selected-on-secondary-color",
    textColorOnPrimary = "text-color-on-primary",
    brandColor = "brand-color",
    brandHoverColor = "brand-hover-color",
    brandSelectedColor = "brand-selected-color",
    brandSelectedHoverColor = "brand-selected-hover-color",
    textColorOnBrand = "text-color-on-brand"
}
export type Theme = {
    /**
     * The name of the theme - name of css class that will be added to the children - should be unique
     */
    name: string;
    colors: SystemThemeColorMap;
};
type SystemThemeColorMap = {
    [key in SystemTheme]?: ThemeColorTokenValueMap;
};
export type ThemeColorTokenValueMap = ThemeColorTokenValue | ThemeCustomClassValue;
export type ThemeColorTokenValue = {
    [key in ThemeColor]?: string;
};
type ThemeCustomClassValue = {
    [key: string]: ThemeColorTokenValue | ThemeCustomClassValue;
};
export declare const SystemThemeClassMap: SystemThemeClassMapType;
type SystemThemeClassMapType = {
    [key in SystemTheme]: string;
};
export {};